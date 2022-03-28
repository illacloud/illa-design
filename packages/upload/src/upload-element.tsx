import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import {
  RequestOptions,
  UploadInputElementProps,
  UploadItem,
  UploadRefType,
  UploadRequestReturn,
} from "./interface"
import { inputCss, uploadChildrenCss } from "./style"
import { sendUploadRequest } from "./request"
import { isAcceptFile } from "./file-accept"
import { UploadInput } from "./upload-input"

export type UploadElementState = {
  [key: string]: UploadRequestReturn | void
}

const checkLimit = (
  files: File[],
  limit?: number,
  fileList?: UploadItem[],
): boolean => {
  const fileSum = (fileList?.length ?? 0) + files.length
  return !(typeof limit == "number" && limit < fileSum)
}

const deleteReq = (
  fileId: string,
  uploadRequests?: { [key: string]: UploadRequestReturn | void },
): UploadElementState => {
  const newValue = { ...uploadRequests }
  delete newValue[fileId]
  return newValue
}

const getInitUploadItem = (file: File, index: number) => {
  return {
    uid: `${String(+new Date())}${index}`,
    originFile: file,
    percent: 0,
    status: "init",
    name: file.name,
  } as UploadItem
}

const doUpload = (
  file: UploadItem,
  uploadRequests?: { [key: string]: UploadRequestReturn | void },
  headers?: object,
  data?: object | ((any: any) => object),
  withCredentials?: boolean,
  action?: string,
  name?: string | ((any: any) => string),
  customRequest?: (options: RequestOptions) => UploadRequestReturn | void,
  updateUploadItem?: (file: UploadItem, e?: ProgressEvent) => void,
): UploadElementState | undefined => {
  const _onProgress = (percent: number, event?: ProgressEvent) => {
    updateUploadItem &&
      updateUploadItem(
        { ...file, status: "uploading", percent: percent },
        event,
      )
  }
  const _onSuccess = (response?: object) => {
    updateUploadItem &&
      updateUploadItem({
        ...file,
        status: "done",
        response: response,
        percent: 100,
      })
  }

  const _onError = (response?: object) => {
    updateUploadItem &&
      updateUploadItem({ ...file, status: "error", response: response })
    if (file.uid) {
      deleteReq(file.uid, uploadRequests)
    }
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

  if (action) {
    return sendUploadRequest({ ...options, action })
  } else if (customRequest && file.uid) {
    return customRequest && { [file.uid]: customRequest({ ...options }) }
  }
}

export const UploadElement = forwardRef<UploadRefType, UploadInputElementProps>(
  (props, ref) => {
    const {
      accept,
      multiple,
      directory,
      fileList,
      autoUpload = true,
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
      drag,
      tip,
      updateTargetItem,
      pictureUpload,
      placeholder,
      getFileList,
    } = props
    const inputRef = useRef<HTMLInputElement | null>(null)

    const [_uploadRequests, setUploadRequests] = useState<UploadElementState>(
      {},
    )

    useEffect(() => {
      const fileList = getFileList()
      setImageFile(fileList[fileList.length - 1])
    }, [_uploadRequests])

    const reUpload = (file: UploadItem) => {
      doUploadWithProps({
        ...file,
        percent: 0,
        status: "uploading",
      })
    }

    const deleteUpload = (file: UploadItem) => {
      if (_uploadRequests) {
        if (!file.uid) return
        const req = _uploadRequests[file.uid]
        req &&
          Promise.resolve(req).then((result) => {
            result?.abort && result.abort()
          })
        setUploadRequests(deleteReq(file.uid, _uploadRequests))
      }
    }

    const abortUpload = (file: UploadItem) => {
      if (_uploadRequests) {
        if (!file.uid) return
        const req = _uploadRequests[file.uid]
        req &&
          Promise.resolve(req).then((result) => {
            result?.abort && result.abort()
          })
      }
    }

    useImperativeHandle(
      ref,
      () => {
        return {
          dom: inputRef.current,
          reUpload: reUpload,
          deleteUpload: deleteUpload,
          abort: abortUpload,
        }
      },
      [_uploadRequests],
    )

    const doUploadWithProps = (item: UploadItem) => {
      if (!item.uid) return
      const request = doUpload(
        item,
        _uploadRequests,
        headers,
        data,
        withCredentials,
        action,
        name,
        customRequest,
        updateTargetItem,
      )
      setUploadRequests({ ..._uploadRequests, [item.uid]: request })
    }

    const [imageFile, setImageFile] = useState<UploadItem>()

    const handleUploadButton = () => {
      !disabled && inputRef && inputRef.current?.click()
    }

    const handleDragFile = (files?: File[]) => {
      if (files) {
        const fileArr = [].slice.call(files)
        if (checkLimit(fileArr, limit, fileList)) {
          fileArr.forEach((file, index) => {
            const upload = getInitUploadItem(file, index)
            updateTargetItem(upload)
            doUploadWithProps(upload)
          })
        }
      }
    }

    const handleUploadWithoutAutoUpload = () => {
      fileList?.forEach((file) => {
        doUploadWithProps(file)
      })
    }

    return (
      <>
        <input
          placeholder={placeholder}
          ref={inputRef}
          accept={accept}
          multiple={multiple}
          style={{ display: "none" }}
          css={inputCss}
          {...(directory ? { webkitdirectory: "true" } : {})}
          onChange={(event) => {
            const files = event.target.files
            if (files) {
              const fileArr = [].slice.call(files)
              const curList = getFileList()
              if (checkLimit(fileArr, limit, curList)) {
                fileArr.forEach((file, index) => {
                  if (typeof beforeUpload === "function") {
                    Promise.resolve(beforeUpload(file, fileArr)).then((val) => {
                      if (val !== false) {
                        const isFile =
                          Object.prototype.toString.call(val) ===
                          "[object File]"
                        const newFile = isFile ? val : file
                        if (!isAcceptFile(newFile, accept)) return
                        const upload = getInitUploadItem(newFile as File, index)
                        updateTargetItem(upload)
                        doUploadWithProps(upload)
                      }
                    })
                  } else {
                    if (!isAcceptFile(file, accept)) return
                    const upload = getInitUploadItem(file, index)
                    updateTargetItem(upload)
                    doUploadWithProps(upload)
                  }
                })
              } else {
                onExceedLimit && onExceedLimit(fileArr, fileList ?? [])
              }
            }
            if (inputRef.current != undefined) {
              inputRef.current.value = ""
            }
          }}
          type={"file"}
        />
        <div css={uploadChildrenCss}>
          <UploadInput
            onClick={() => {
              handleUploadButton()
            }}
            handleClickSelectedButton={() => handleUploadButton()}
            handleClickUploadButton={() => handleUploadWithoutAutoUpload()}
            autoUpload={autoUpload}
            drag={drag}
            disabled={disabled}
            tip={tip}
            accept={accept}
            onFileDragged={(files) => handleDragFile(files)}
            pictureUpload={pictureUpload}
            currentUploadItem={imageFile}
          />
        </div>
      </>
    )
  },
)
