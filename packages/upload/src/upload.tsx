import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { UploadProps, UploadItem, STATUS, UploadInstance } from "./interface"
import Uploader from "./uploader"
import { isFunction, isNumber, isArray } from "@illa-design/system"
import UploadList from "./list"
import getUID from "./uid"
import { getUploaderContinerStyle } from "./style"

export type UploadState = {
  uploadState: {
    [key: string]: UploadItem
  }
}

type UploadStateType = {
  [key in string]: UploadItem
}
const getUploadState = (fileList?: UploadItem[]): UploadStateType => {
  const res: UploadStateType = {}
  if (!isArray(fileList)) {
    return res
  }
  fileList.forEach((file, index) => {
    const uid = file.uid || getUID()
    res[uid] = {
      status: STATUS.SUCCESS,
      percent: 100,
      ...file,
      uid,
    }
  })
  return res
}

const getFileList = (uploadState: UploadStateType): UploadItem[] => {
  return Object.keys(uploadState).map((x) => uploadState[x])
}

export const Upload = forwardRef<UploadInstance, UploadProps>((props, ref) => {
  const uploaderRef = useRef<Uploader>(null)
  const uploadStateRef = useRef<UploadStateType>({})
  const [innerUploadState, setInnerUploadState] = useState<{
    [key: string]: UploadItem
  }>(
    "fileList" in props
      ? getUploadState(props.fileList)
      : "defaultFileList" in props
      ? getUploadState(props.defaultFileList)
      : {},
  )

  const {
    listType = "text",
    renderUploadItem,
    showUploadList = true,
    autoUpload = true,
    renderUploadList,
    beforeUpload = () => true,
    progressProps,
    onProgress,
    onChange,
    onReupload,
  } = props

  uploadStateRef.current =
    "fileList" in props ? getUploadState(props.fileList) : innerUploadState

  const deleteUploadFile = (file: UploadItem) => {
    const obj = { ...uploadStateRef.current }
    delete obj[file.uid]

    if (!("fileList" in props)) {
      setInnerUploadState(obj)
    }
    onChange && onChange(getFileList(obj), file)
  }

  const uploadFile = (file: UploadItem) => {
    if (!file) {
      return
    }
    setTimeout(() => {
      uploaderRef.current && uploaderRef.current.upload(file)
    }, 0)
  }

  const reuploadFile = (file: UploadItem) => {
    uploaderRef.current && uploaderRef.current.reupload(file)
    onReupload && onReupload(file)
  }

  const removeFile = (file: UploadItem) => {
    if (!file) {
      return
    }
    const { onRemove } = props
    Promise.resolve(
      isFunction(onRemove)
        ? onRemove(file, getFileList(uploadStateRef.current))
        : onRemove,
    )
      .then((val) => {
        if (val !== false) {
          uploaderRef.current && uploaderRef.current.abort(file)
          deleteUploadFile(file)
        }
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const abortFile = (file: UploadItem) => {
    if (file) {
      uploaderRef.current && uploaderRef.current.abort(file)
    }
  }

  useImperativeHandle(ref, () => {
    return {
      submit: (file?: UploadItem) => {
        let list: UploadItem[] = []
        if (file) {
          list = [file]
        } else {
          list = getFileList(uploadStateRef.current).filter(
            (x) => x.status === STATUS.INIT,
          )
        }
        list.forEach((x) => {
          uploadFile(x)
        })
      },
      abort: (file: UploadItem) => {
        abortFile(file)
      },
      reupload: (file: UploadItem) => {
        reuploadFile(file)
      },
    }
  })

  const fileList = getFileList(uploadStateRef.current)
  const limit = isNumber(props.limit)
    ? { hideOnExceedLimit: true, maxCount: props.limit }
    : { hideOnExceedLimit: true, ...props.limit }

  const exceedLimit = !!(limit.maxCount && limit.maxCount <= fileList.length)
  const disabledUploadDom =
    props.disabled ?? (!limit.hideOnExceedLimit && exceedLimit)

  const isPictureCard = listType === "picture-card"

  const handleProgress = (file: UploadItem, e?: ProgressEvent) => {
    if (file) {
      if (!("fileList" in props)) {
        setInnerUploadState((v) => {
          return {
            ...v,
            [file.uid]: file,
          }
        })
      }
      onProgress && onProgress(file, e)
    }
  }

  const handleFileStatusChange = (file: UploadItem) => {
    if (!("fileList" in props)) {
      setInnerUploadState((v) => {
        return {
          ...v,
          [file.uid]: file,
        }
      })
    }
    onChange &&
      onChange(
        getFileList({ ...uploadStateRef.current, [file.uid]: file }),
        file,
      )
  }

  const uploadCompontent = (
    <div css={getUploaderContinerStyle(listType)}>
      <Uploader
        ref={uploaderRef}
        {...props}
        listType={listType}
        beforeUpload={beforeUpload}
        fileList={fileList}
        showUploadList={showUploadList}
        autoUpload={autoUpload}
        limit={limit.maxCount}
        hide={limit.hideOnExceedLimit && exceedLimit}
        disabled={disabledUploadDom}
        onProgress={handleProgress}
        onFileStatusChange={handleFileStatusChange}
      />
    </div>
  )

  return (
    <>
      {!isPictureCard && uploadCompontent}
      {showUploadList && (
        <UploadList
          progressProps={progressProps}
          showUploadList={showUploadList}
          disabled={props.disabled}
          listType={listType}
          fileList={fileList}
          renderUploadItem={renderUploadItem}
          renderUploadList={renderUploadList}
          onUpload={uploadFile}
          onAbort={abortFile}
          onRemove={removeFile}
          onReupload={reuploadFile}
          onPreview={props.onPreview}
        />
      )}
      {isPictureCard && uploadCompontent}
    </>
  )
})

Upload.displayName = "Upload"
