/** @jsxImportSource @emotion/react */
import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import {
  RequestOptions,
  UploadInputElementProps,
  UploadItem,
  UploadRefType,
  UploadRequestReturn,
} from "./interface"
import { sendUploadRequest } from "../request"
import { inputCss, uploadButtonCss, uploadChildrenCss } from "./styles"
import * as React from "react"
import { TriggerNode } from "./drag-uploader"
import { Button } from "@illa-design/button"
import { UploadIcon } from "@illa-design/icon"

const getTargetFile = (file: UploadItem, fileList?: UploadItem[]) => {
  const key = "uid" in file ? "uid" : "name"
  console.log(`key ${key}  ${file.uid}  ${fileList?.length}`)
  return fileList?.find((item) => item[key] === file[key])
}

const deleteReq = (
  fileId: string,
  uploadRequests?: { [key: string]: UploadRequestReturn | void },
  setRequests?: (requests: {
    [key: string]: UploadRequestReturn | void
  }) => void,
) => {
  const newValue = { ...uploadRequests }
  delete newValue[fileId]
  setRequests && setRequests(newValue)
}

const handleFiles = (
  files: File[],
  fileList?: UploadItem[],
  limit?: number,
  onExceedLimit?: (files: File[], fileList: UploadItem[]) => void,
  onUploadItemStatusChange?: (item: UploadItem) => void,
  autoUpload?: boolean,
  beforeUpload?: (file: File, filesList: File[]) => boolean | Promise<any>,
  uploadRequests?: { [key: string]: UploadRequestReturn | void },
  onProgress?: (file: UploadItem, e?: ProgressEvent) => void,
  headers?: object,
  data?: object | ((any: any) => object),
  withCredentials?: boolean,
  action?: string,
  customRequest?: (options: RequestOptions) => UploadRequestReturn | void,
  name?: string | ((any: any) => string),
  setRequests?: (requests: {
    [key: string]: UploadRequestReturn | void
  }) => void,
) => {
  const fileSum = (fileList?.length ?? 0) + files.length
  if (typeof limit == "number" && limit < fileSum) {
    return onExceedLimit && onExceedLimit(files, fileList ?? [])
  }

  const asyncUpload = (file: File, index: number) => {
    const upload: UploadItem = {
      uid: `${String(+new Date())}${index}`,
      originFile: file,
      percent: 0,
      status: "init",
      name: file.name,
    }

    onUploadItemStatusChange && onUploadItemStatusChange(upload)
    if (autoUpload) {
      setTimeout(() => {
        doUpload(
          {
            ...upload,
            status: "uploading",
          },
          fileList,
          onProgress,
          onUploadItemStatusChange,
          uploadRequests,
          headers,
          data,
          withCredentials,
          action,
          customRequest,
          name,
          setRequests,
        )
      }, 0)
    }
  }

  files.forEach((file, index) => {
    if (typeof beforeUpload === "function") {
      Promise.resolve(beforeUpload(file, files))
        .then((val) => {
          if (val !== false) {
            const isFile = Object.prototype.toString.call(val)
            const newFile = isFile ? val : file
            asyncUpload(newFile as File, index)
          }
        })
        .catch((e) => {
          console.error(e)
        })
    } else {
      asyncUpload(file, index)
    }
  })
}

const doUpload = async (
  file: UploadItem,
  fileList?: UploadItem[],
  onProgress?: (file: UploadItem, e?: ProgressEvent) => void,
  onUploadItemStatusChange?: (item: UploadItem) => void,
  uploadRequests?: { [key: string]: UploadRequestReturn | void },
  headers?: object,
  data?: object | ((any: any) => object),
  withCredentials?: boolean,
  action?: string,
  customRequest?: (options: RequestOptions) => UploadRequestReturn | void,
  name?: string | ((any: any) => string),
  setRequests?: (requests: {
    [key: string]: UploadRequestReturn | void
  }) => void,
) => {
  console.log(`doUpload`)
  const _onProgress = (percent: number, event?: ProgressEvent) => {
    const targetFile = getTargetFile(file, fileList)
    console.log(`_onProgress ${fileList?.length}`)
    if (targetFile) {
      targetFile.status = "uploading"
      targetFile.percent = percent
      onProgress && onProgress(targetFile, event)
    }
  }

  const _onSuccess = (response?: object) => {
    const targetFile = getTargetFile(file, fileList)
    if (targetFile) {
      targetFile.status = "done"
      targetFile.response = response
      onUploadItemStatusChange && onUploadItemStatusChange(targetFile)
    }
  }

  const _onError = (response?: object) => {
    const targetFile = getTargetFile(file, fileList)
    console.log(`_onError ${targetFile}`)
    if (targetFile) {
      targetFile.status = "error"
      targetFile.response = response
      onUploadItemStatusChange && onUploadItemStatusChange(targetFile)
    }
    deleteReq(file.uid, uploadRequests)
  }

  const options = {
    onProgress: _onProgress,
    onSuccess: _onSuccess,
    onError: _onError,
    headers,
    name,
    file: file.originFile,
    data,
    withCredentials,
  }

  onUploadItemStatusChange && onUploadItemStatusChange(file)

  let request
  if (action) {
    request = sendUploadRequest({ ...options, action })
  } else {
    request = customRequest && (await customRequest({ ...options }))
  }

  setRequests && setRequests({ ...uploadRequests, [file.uid]: request })
}

const upload = (file: UploadItem) => {
  doUpload(file)
}

const abort = (
  file: UploadItem,
  uploadRequests?: { [key: string]: UploadRequestReturn | void },
  onUploadItemStatusChange?: (item: UploadItem) => void,
) => {
  const req = uploadRequests && uploadRequests[file.uid]
  if (req) {
    req.abort && req.abort()
    onUploadItemStatusChange &&
      onUploadItemStatusChange({
        ...file,
        status: "error",
      })
    deleteReq(file.uid)
  }
}

const reUpload = (file: UploadItem) => {
  doUpload({
    ...file,
    percent: 0,
    status: "uploading",
  })
}

const deleteUpload = (file: UploadItem) => deleteReq(file.uid)

export const UploadElementV2 = forwardRef<
  UploadRefType,
  UploadInputElementProps
>((props, ref) => {
  const {
    onUploadItemStatusChange,
    action,
    headers,
    name,
    data,
    withCredentials,
    customRequest,
    onProgress,
    fileList,
    limit,
    onExceedLimit,
    autoUpload = true,
    beforeUpload,
    accept,
    multiple,
    tip,
    disabled,
    drag,
    directory,
  } = props

  console.log(`UploadElementV2 ${fileList?.length}`)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [uploadRequests, setUploadRequests] = useState<{
    [key: string]: UploadRequestReturn | void
  }>({})

  return (
    <>
      <input
        ref={inputRef}
        accept={accept}
        multiple={multiple}
        style={{ display: "none" }}
        css={inputCss}
        {...(directory ? { webkitdirectory: "true" } : {})}
        onChange={(event) => {
          const files = event.target.files
          console.log(`onChange ${files?.length}`)
          if (files) {
            handleFiles(
              [].slice.call(files),
              fileList,
              limit,
              onExceedLimit,
              onUploadItemStatusChange,
              autoUpload,
              beforeUpload,
              uploadRequests,
              onProgress,
              headers,
              data,
              withCredentials,
              action,
              customRequest,
              name,
              (requests) => {
                setUploadRequests(requests)
              },
            )
          }
          if (inputRef.current != undefined) {
            inputRef.current.value = ""
          }
        }}
        type={"file"}
      />
      <div
        css={uploadChildrenCss}
        draggable={true}
        onClick={() => {
          !disabled && inputRef && inputRef.current?.click()
        }}
      >
        {drag ? (
          <Button
            css={uploadButtonCss}
            size={"medium"}
            leftIcon={<UploadIcon />}
          >
            Upload
          </Button>
        ) : (
          <TriggerNode
            disabled={disabled}
            tip={tip}
            onFileDragged={(file) => {
              handleFiles(
                file,
                fileList,
                limit,
                onExceedLimit,
                onUploadItemStatusChange,
                autoUpload,
                beforeUpload,
                uploadRequests,
                onProgress,
                headers,
                data,
                withCredentials,
                action,
                customRequest,
                name,
                (requests) => {
                  setUploadRequests(requests)
                },
              )
            }}
          />
        )}
      </div>
    </>
  )
})
