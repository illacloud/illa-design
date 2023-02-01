import React, { useRef } from "react"
import { UploaderProps, UploadItem, STATUS, RequestOptions } from "./interface"
import uploadRequest from "./request"
// import { CSSTransition } from "react-transition-group"
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

  upload = async (file: UploadItem) => {
    await this.uploadFile(file)
  }

  // 提供 ref 调用。终止
  abort = (file: UploadItem) => {
    const req = this.state.uploadRequests[file.uid]
    if (req) {
      req.abort && req.abort()
      this.updateFileStatus({
        ...file,
        status: STATUS.FAIL,
      })
      this.deleteUploadRequest(file.uid)
    }
  }

  // 重新上传 。提供 ref 调用
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

  // 提供 ref 调用
  // 删除上传（手动上传时，文件会出现在上传列表，但属于init状态）
  delete = this.deleteUploadRequest

  updateFileStatus = (file: UploadItem) => {
    const { onFileStatusChange } = this.props
    onFileStatusChange && onFileStatusChange(file)
  }

  getTargetFile = (file: UploadItem) => {
    const key = "uid" in file ? "uid" : "name"
    return this.props.fileList?.find((item) => item[key] === file[key])
  }

  // 执行上传
  uploadFile = (file: UploadItem) => {
    const { action, headers, name, data, customRequest } = this.props
    const onProgress = (percent: number, event?: ProgressEvent) => {
      const targetFile = this.getTargetFile(file)
      if (targetFile) {
        targetFile.status = STATUS.UPLOADING
        targetFile.percent = percent
        this.props.onProgress && this.props.onProgress(targetFile, event)
      }
    }
    const onSuccess = (response?: object) => {
      const targetFile = this.getTargetFile(file)
      if (targetFile) {
        targetFile.status = STATUS.SUCCESS
        // 传入的响应将会作为 response 字段被附加到上传列表中对应的文件
        targetFile.response = response
        this.updateFileStatus(targetFile)
      }
      this.deleteUploadRequest(file.uid)
    }
    const onError = (response?: object) => {
      const targetFile = this.getTargetFile(file)
      if (targetFile) {
        targetFile.status = STATUS.FAIL
        // 传入的响应将会作为 response 字段被附加到上传列表中对应的文件
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
    // 更新上传状态
    this.updateFileStatus(file)

    let request
    if (customRequest) {
      request = customRequest(options as RequestOptions)
    } else if (action) {
      request = uploadRequest({ ...options, action } as RequestOptions)
    }

    this.setState({
      uploadRequests: {
        ...this.state.uploadRequests,
        [file.uid]: request,
      },
    })
  }

  uploadOneFile = (file: File, index: number) => {
    const uploadItem: UploadItem = {
      uid: getUID(),
      originFile: file,
      percent: 0,
      status: STATUS.INIT,
      name: file.name,
    }
    // 更新上传状态为 init
    this.updateFileStatus(uploadItem)

    if (this.props.autoUpload) {
      /**
       * 需要setTimeout，否则一次上传较多文件时，可能出现第i个文件和第i+1个文件同时更新上传列表中的状态，
       * 状态被相互覆盖的情况。
       */
      setTimeout(async () => {
        await this.uploadFile({
          ...uploadItem,
          status: STATUS.UPLOADING,
        })
      }, 0)
    }
  }

  handleUploadedFiles = (files: File[]) => {
    const { limit, fileList, onExceedLimit } = this.props
    if (
      isNumber(limit) &&
      limit < (fileList ? fileList.length : 0) + files.length
    ) {
      return onExceedLimit && onExceedLimit(files, fileList || [])
    }

    files.forEach((file, index) => {
      if (isAcceptFile(file, this.props.accept)) {
        // windows can upload file type not in accept bug
        if (isFunction(this.props.beforeUpload)) {
          // 只有在beforeUpload返回值 === false 时，取消上传操作
          Promise.resolve(this.props.beforeUpload(file, files))
            .then((val) => {
              if (val !== false) {
                const newFile = isFile(val) ? val : file
                this.uploadOneFile(newFile as File, index)
              }
            })
            .catch((e) => {
              console.error(e)
            })
        } else {
          this.uploadOneFile(file, index)
        }
      }
    })
  }

  handleTriggerClick = () => {
    if (this.props.disabled) {
      return
    }
    this.inputRef && this.inputRef.click()
  }

  handleUploadFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    console.log({ files }, [].slice.call(files))
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
      listType,
      hide,
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
        {/*<CSSTransition*/}
        {/*  key="trigger-transition"*/}
        {/*  in={!hide}*/}
        {/*  timeout={100}*/}
        {/*  unmountOnExit*/}
        {/*  classNames="fadeIn"*/}
        {/*>*/}
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
        {/*</CSSTransition>*/}
        {tip && listType !== "picture-card" && !drag ? (
          <div key="trigger-tip">{tip}</div>
        ) : null}
      </>
    )
  }
}

export default Uploader
