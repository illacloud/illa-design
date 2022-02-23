/** @jsxImportSource @emotion/react */
import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import {
  UploadInputElementProps,
  UploadItem,
  UploadRefType,
  UploadRequestReturn,
} from "./interface"
import { uploadRequest } from "../request"
import { inputCss, uploadChildrenCss } from "./styles"
import * as React from "react"
import { InputElementProps, InputRefType } from "@illa-design/input/src"

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
    children,
    tip,
    disabled,
    drag,
    listType,
    directory,
  } = props

  const inputRef = useRef<HTMLInputElement | null>(null)

  console.log(`fileList ${fileList?.length}`)

  const [uploadRequests, setUploadRequests] = useState<{
    [key: string]: UploadRequestReturn | void
  }>({})

  const upload = (file: UploadItem) => {
    doUpload(file)
  }

  const abort = (file: UploadItem) => {
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

  const deleteReq = (fileId: string) => {
    const newValue = { ...uploadRequests }
    delete newValue[fileId]
    setUploadRequests(newValue)
  }

  const getTargetFile = (file: UploadItem) => {
    const key = "uid" in file ? "uid" : "name"
    console.log(`key ${key}  ${file.uid}  ${fileList?.length}`)
    return fileList?.find((item) => item[key] === file[key])
  }

  const doUpload = async (file: UploadItem) => {
    const _onProgress = (percent: number, event?: ProgressEvent) => {
      const targetFile = getTargetFile(file)
      console.log(`_onProgress ${fileList?.length}`)
      if (targetFile) {
        targetFile.status = "uploading"
        targetFile.percent = percent
        onProgress && onProgress(targetFile, event)
      }
    }

    const _onSuccess = (response?: object) => {
      const targetFile = getTargetFile(file)
      if (targetFile) {
        targetFile.status = "done"
        targetFile.response = response
        onUploadItemStatusChange && onUploadItemStatusChange(targetFile)
      }
    }

    const _onError = (response?: object) => {
      const targetFile = getTargetFile(file)
      console.log(`_onError ${targetFile}`)
      if (targetFile) {
        targetFile.status = "error"
        targetFile.response = response
        onUploadItemStatusChange && onUploadItemStatusChange(targetFile)
      }

      deleteReq(file.uid)
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
    console.log(`request action ${action}`)

    let request
    if (action) {
      request = uploadRequest({ ...options, action })
    } else {
      request = customRequest && (await customRequest({ ...options }))
    }

    setUploadRequests({ ...uploadRequests, [file.uid]: request })
  }

  const handleFiles = (files: File[]) => {
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

      // 更新上传状态为 init
      onUploadItemStatusChange && onUploadItemStatusChange(upload)
      console.log(`${fileList?.length}`)
      if (autoUpload) {
        setTimeout(() => {
          doUpload({
            ...upload,
            status: "uploading",
          })
        }, 0)
      }
    }

    files.forEach((file, index) => {
      console.log(`file name ${file.name}`)
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
            handleFiles([].slice.call(files))
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
        {children}
      </div>
    </>
  )
})
