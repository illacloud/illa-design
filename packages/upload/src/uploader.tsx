import {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  useCallback,
  useEffect,
} from "react"
import {
  UploaderProps,
  UploadItem,
  STATUS,
  RequestOptions,
  UploaderInstance,
} from "./interface"
import uploadRequestSender from "./request"
import { AnimatePresence, motion } from "framer-motion"
import TriggerNode from "./trigger-node"
import { isFunction, isFile, isNumber } from "@illa-design/system"
import { isAcceptFile } from "./utils"
import { v4 } from "uuid"

const Uploader = forwardRef<UploaderInstance, UploaderProps>((props, ref) => {
  const [uploadRequests, setUploadrequests] = useState<{ [key: string]: any }>(
    {},
  )
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    accept,
    multiple,
    children,
    tip,
    disabled,
    drag,
    hide,
    listType,
    directory,
    limit,
    fileList,
    action,
    headers,
    text,
    colorScheme,
    variant,
    loading,
    name,
    autoUpload,
    data,
    beforeUpload,
    customRequest,
    onExceedLimit,
    onDrop,
    onDragOver,
    onDragLeave,
    onFileStatusChange,
  } = props

  useEffect(() => {
    return () => {
      abort()
    }
  }, [])

  const deleteUploadRequest = useCallback(
    (uid: string) => {
      const newValue = { ...uploadRequests }
      delete newValue[uid]
      setUploadrequests(newValue)
    },
    [uploadRequests],
  )

  const updateFileStatus = useCallback(
    (file: UploadItem) => {
      onFileStatusChange && onFileStatusChange(file)
    },
    [onFileStatusChange],
  )

  const upload = async (file: UploadItem) => {
    await uploadFile(file)
  }

  const abort = useCallback(
    (file?: UploadItem) => {
      if (file) {
        const req = uploadRequests[file.uid]
        if (req) {
          req.abort && req.abort()
          updateFileStatus({
            ...file,
            status: STATUS.FAIL,
          })
          deleteUploadRequest(file.uid)
        }
      } else {
        // when component unmount, delete all request
        Object.keys(uploadRequests).forEach((uid) => {
          const req = uploadRequests[uid]
          if (req && req.abort) {
            req.abort()
          }
          deleteUploadRequest(uid)
        })
      }
    },
    [deleteUploadRequest, updateFileStatus, uploadRequests],
  )

  const reupload = async (file: UploadItem) => {
    await uploadFile({
      ...file,
      percent: 0,
      status: STATUS.UPLOADING,
    })
  }

  const getTargetFile = useCallback(
    (file: UploadItem) => {
      const key = "uid" in file ? "uid" : "name"
      return fileList?.find((item) => item[key] === file[key])
    },
    [fileList],
  )

  const uploadFile = useCallback(
    (file: UploadItem) => {
      const targetFile = getTargetFile(file) || file
      const onProgress = (percent: number, event?: ProgressEvent) => {
        if (targetFile) {
          targetFile.status = STATUS.UPLOADING
          targetFile.percent = percent
          props.onProgress?.(targetFile, event)
        }
      }
      const onSuccess = (response?: object) => {
        if (targetFile) {
          targetFile.status = STATUS.SUCCESS
          targetFile.response = response
          updateFileStatus(targetFile)
        }
        deleteUploadRequest(file.uid)
      }
      const onError = (response?: object) => {
        if (targetFile) {
          targetFile.status = STATUS.FAIL
          targetFile.response = response
          updateFileStatus(targetFile)
        }
        deleteUploadRequest(file.uid)
      }
      const options = {
        onProgress,
        onSuccess,
        onError,
        headers,
        name,
        file: file.originFile,
        data,
      }
      updateFileStatus(file)
      let request: any
      if (customRequest) {
        request = customRequest(options as RequestOptions)
      } else if (action) {
        request = uploadRequestSender({ ...options, action } as RequestOptions)
      }
      setUploadrequests((requests) => ({
        ...requests,
        [file.uid]: request,
      }))
    },
    [
      action,
      customRequest,
      data,
      deleteUploadRequest,
      getTargetFile,
      headers,
      name,
      props.onProgress,
      updateFileStatus,
    ],
  )

  const uploadSingleFile = useCallback(
    (file: File, index: number) => {
      const uploadItem: UploadItem = {
        uid: v4(),
        originFile: file,
        percent: 0,
        status: STATUS.INIT,
        name: file.name,
      }
      updateFileStatus(uploadItem)
      if (autoUpload) {
        setTimeout(async () => {
          await uploadFile({
            ...uploadItem,
            status: STATUS.UPLOADING,
          })
        }, 0)
      }
    },
    [autoUpload, updateFileStatus, uploadFile],
  )

  const handleUploadedFiles = useCallback(
    (files: File[]) => {
      if (
        isNumber(limit) &&
        limit < (fileList ? fileList.length : 0) + files.length
      ) {
        return onExceedLimit && onExceedLimit(files, fileList || [])
      }

      files.forEach((file, index) => {
        if (isAcceptFile(file, accept) || !directory) {
          if (isFunction(beforeUpload)) {
            Promise.resolve(beforeUpload(file, files))
              .then((val) => {
                if (val !== false) {
                  const newFile = isFile(val) ? val : file
                  uploadSingleFile(newFile as File, index)
                }
              })
              .catch((e) => {
                console.error(e)
              })
          } else {
            uploadSingleFile(file, index)
          }
        }
      })
    },
    [
      limit,
      fileList,
      onExceedLimit,
      accept,
      directory,
      beforeUpload,
      uploadSingleFile,
    ],
  )

  const handleTriggerClick = useCallback(() => {
    if (disabled) {
      return
    }
    inputRef.current && inputRef.current.click()
  }, [disabled])

  const handleUploadFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files) {
        handleUploadedFiles([].slice.call(files))
        if (inputRef.current) {
          inputRef.current.value = ""
        }
      }
    },
    [handleUploadedFiles],
  )

  useImperativeHandle(ref, () => {
    return {
      upload,
      reupload,
      abort,
    }
  })

  return (
    <>
      <input
        key="upload-input"
        ref={inputRef}
        style={{ display: "none" }}
        type="file"
        accept={accept}
        multiple={multiple}
        {...(directory ? { webkitdirectory: "true" } : {})}
        onChange={handleUploadFileChange}
        onClick={(e) => {
          e.stopPropagation()
        }}
      />
      <AnimatePresence>
        {!hide && (
          <motion.div
            key="trigger-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              default: {
                ease: "easeInOut",
              },
            }}
          >
            <TriggerNode
              directory={directory}
              tip={tip}
              multiple={multiple}
              accept={accept}
              text={text}
              colorScheme={colorScheme}
              variant={variant}
              loading={loading}
              disabled={disabled}
              drag={drag}
              listType={listType}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDragFiles={handleUploadedFiles}
              onClick={handleTriggerClick}
            >
              {children}
            </TriggerNode>
          </motion.div>
        )}
      </AnimatePresence>
      {tip && listType !== "picture-card" && !drag ? (
        <div key="trigger-tip">{tip}</div>
      ) : null}
    </>
  )
})

Uploader.displayName = "Uploader"

export default Uploader
