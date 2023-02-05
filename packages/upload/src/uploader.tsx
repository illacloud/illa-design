import React from "react"
import { UploaderProps, UploadItem, STATUS, RequestOptions } from "./interface"
import uploadRequestSender from "./request"
import { AnimatePresence, motion } from "framer-motion"
import TriggerNode from "./trigger-node"
import { isFunction, isFile, isNumber } from "@illa-design/system"
import { isAcceptFile } from "./utils"
import getUID from "./uid"

type UploaderState = {
  uploadRequests: { [key: string]: any }
}

class Uploader extends React.Component<
  React.PropsWithChildren<UploaderProps>,
  UploaderState
> {
  inputRef: HTMLInputElement | null = null

  constructor(props: UploaderProps) {
    super(props)
    this.state = {
      uploadRequests: {},
    }
  }

  componentWillUnmount() {
    this.abort()
  }

  upload = async (file: UploadItem) => {
    await this.uploadFile(file)
  }

  abort = (file?: UploadItem) => {
    const { uploadRequests } = this.state
    if (file) {
      const req = uploadRequests[file.uid]
      if (req) {
        req.abort && req.abort()
        this.updateFileStatus({
          ...file,
          status: STATUS.FAIL,
        })
        this.deleteUploadRequest(file.uid)
      }
    } else {
      // when component unmount, delete all request
      Object.keys(uploadRequests).forEach((uid) => {
        const req = uploadRequests[uid]
        if (req && req.abort) {
          req.abort()
        }
        this.deleteUploadRequest(uid)
      })
    }
  }

  reupload = async (file: UploadItem) => {
    await this.uploadFile({
      ...file,
      percent: 0,
      status: STATUS.UPLOADING,
    })
  }

  deleteUploadRequest = (uid: string) => {
    const newValue = { ...this.state.uploadRequests }
    delete newValue[uid]
    this.setState({
      uploadRequests: newValue,
    })
  }

  updateFileStatus = (file: UploadItem) => {
    const { onFileStatusChange } = this.props
    onFileStatusChange && onFileStatusChange(file)
  }

  getTargetFile = (file: UploadItem) => {
    const key = "uid" in file ? "uid" : "name"
    return this.props.fileList?.find((item) => item[key] === file[key])
  }

  uploadFile = (file: UploadItem) => {
    const { action, headers, name, data, customRequest } = this.props
    const onProgress = (percent: number, event?: ProgressEvent) => {
      const targetFile = this.getTargetFile(file)
      if (targetFile) {
        targetFile.status = STATUS.UPLOADING
        targetFile.percent = percent
        this.props.onProgress?.(targetFile, event)
      }
    }
    const onSuccess = (response?: object) => {
      const targetFile = this.getTargetFile(file)
      if (targetFile) {
        targetFile.status = STATUS.SUCCESS
        targetFile.response = response
        this.updateFileStatus(targetFile)
      }
      this.deleteUploadRequest(file.uid)
    }
    const onError = (response?: object) => {
      const targetFile = this.getTargetFile(file)
      if (targetFile) {
        targetFile.status = STATUS.FAIL
        targetFile.response = response
        this.updateFileStatus(targetFile)
      }
      this.deleteUploadRequest(file.uid)
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
    this.updateFileStatus(file)
    let request
    if (customRequest) {
      request = customRequest(options as RequestOptions)
    } else if (action) {
      request = uploadRequestSender({ ...options, action } as RequestOptions)
    }
    this.setState({
      uploadRequests: {
        ...this.state.uploadRequests,
        [file.uid]: request,
      },
    })
  }

  uploadSingleFile = (file: File, index: number) => {
    const uploadItem: UploadItem = {
      uid: getUID(),
      originFile: file,
      percent: 0,
      status: STATUS.INIT,
      name: file.name,
    }
    this.updateFileStatus(uploadItem)
    if (this.props.autoUpload) {
      setTimeout(async () => {
        await this.uploadFile({
          ...uploadItem,
          status: STATUS.UPLOADING,
        })
      }, 0)
    }
  }

  handleUploadedFiles = (files: File[]) => {
    const { limit, fileList, onExceedLimit, directory } = this.props
    if (
      isNumber(limit) &&
      limit < (fileList ? fileList.length : 0) + files.length
    ) {
      return onExceedLimit && onExceedLimit(files, fileList || [])
    }

    files.forEach((file, index) => {
      if (isAcceptFile(file, this.props.accept) || !directory) {
        if (isFunction(this.props.beforeUpload)) {
          Promise.resolve(this.props.beforeUpload(file, files))
            .then((val) => {
              if (val !== false) {
                const newFile = isFile(val) ? val : file
                this.uploadSingleFile(newFile as File, index)
              }
            })
            .catch((e) => {
              console.error(e)
            })
        } else {
          this.uploadSingleFile(file, index)
        }
      }
    })
  }

  handleTriggerClick = () => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    this.inputRef && this.inputRef.click()
  }

  handleUploadFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      this.handleUploadedFiles([].slice.call(files))
      if (this.inputRef) {
        this.inputRef.value = ""
      }
    }
  }

  render() {
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
      onDrop,
      onDragOver,
      onDragLeave,
    } = this.props

    return (
      <>
        <input
          key="upload-input"
          ref={(node) => (this.inputRef = node)}
          style={{ display: "none" }}
          type="file"
          accept={accept}
          multiple={multiple}
          {...(directory ? { webkitdirectory: "true" } : {})}
          onChange={this.handleUploadFileChange}
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
                disabled={disabled}
                drag={drag}
                listType={listType}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDragFiles={this.handleUploadedFiles}
                onClick={this.handleTriggerClick}
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
  }
}

export default Uploader
