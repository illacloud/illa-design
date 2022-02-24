import { forwardRef, useRef, useState } from "react"
import {
  RequestOptions,
  UploadInputElementProps,
  UploadItem,
  UploadRefType,
  UploadRequestReturn,
} from "./interface"
import { inputCss, uploadButtonCss, uploadChildrenCss } from "./styles"
import { Button } from "@illa-design/button"
import { UploadIcon } from "@illa-design/icon"
import { TriggerNode } from "./drag-uploader"
import * as React from "react"
import { sendUploadRequest } from "../request"

const getTargetFile = (file: UploadItem, fileList?: UploadItem[]) => {
  const key = "uid" in file ? "uid" : "name"
  console.log(`key ${key}  ${file.uid}  ${fileList?.length}`)
  return fileList?.find((item) => item[key] === file[key])
}

const deleteReq = (
  fileId: string,
  uploadRequests?: { [key: string]: UploadRequestReturn | void },
): { [key: string]: UploadRequestReturn | void } => {
  const newValue = { ...uploadRequests }
  delete newValue[fileId]
  return newValue
}

const handleFiles = (
  files: File[],
  fileList?: UploadItem[],
  autoUpload?: boolean,
  limit?: number,
  headers?: object,
  withCredentials?: boolean,
  action?: string,
  data?: object | ((any: any) => object),
  name?: string | ((any: any) => string),
  uploadRequests?: { [key: string]: UploadRequestReturn | void },
  customRequest?: (options: RequestOptions) => UploadRequestReturn | void,
  onExceedLimit?: (files: File[], fileList: UploadItem[]) => void,
  beforeUpload?: (file: File, filesList: File[]) => boolean | Promise<any>,
  onProgress?: (file: UploadItem, e?: ProgressEvent) => void,
  onUploadItemStatusChange?: (item: UploadItem) => void,
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
    console.log(`onUploadItemStatusChange ${fileList?.length}`)
    onUploadItemStatusChange && onUploadItemStatusChange(upload)
    console.log(`onUploadItemStatusChange ${fileList?.length}`)
    if (autoUpload) {
      setTimeout(() => {
        console.log(`setTimeout ${fileList?.length}`)
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
        )
      }, 0)
    }
  }

  files.forEach((file, index) => {
    if (typeof beforeUpload === "function") {
      console.log(`beforeUpload ${fileList?.length}`)
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
      console.log(`beforeUpload ${fileList?.length}`)
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

export const UploadElementV2 = forwardRef<
  UploadRefType,
  UploadInputElementProps
>((props, ref) => {
  const {
    accept,
    multiple,
    directory,
    fileList,
    autoUpload,
    limit,
    headers,
    withCredentials,
    action,
    data,
    name,
    disabled,
    customRequest,
    onExceedLimit,
    beforeUpload,
    onProgress,
    drag,
    tip,
    onUploadItemStatusChange,
  } = props
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [uploadRequests, setUploadRequests] = useState<{
    [key: string]: UploadRequestReturn | void
  }>({})

  const updateRequests = (requests: {
    [key: string]: UploadRequestReturn | void
  }) => {
    setUploadRequests(requests)
  }

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
              autoUpload,
              limit,
              headers,
              withCredentials,
              action,
              data,
              name,
              uploadRequests,
              customRequest,
              onExceedLimit,
              beforeUpload,
              onProgress,
              onUploadItemStatusChange,
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
            onFileDragged={(files) => {
              if (files) {
                handleFiles(
                  [].slice.call(files),
                  fileList,
                  autoUpload,
                  limit,
                  headers,
                  withCredentials,
                  action,
                  data,
                  name,
                  uploadRequests,
                  customRequest,
                  onExceedLimit,
                  beforeUpload,
                  onProgress,
                  onUploadItemStatusChange,
                )
              }
            }}
          />
        )}
      </div>
    </>
  )
})
