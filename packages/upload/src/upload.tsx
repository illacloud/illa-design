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

  uploadStateRef.current = innerUploadState

  console.log({ innerUploadState }, uploadStateRef.current)

  const deleteUploadFile = (file: UploadItem) => {
    const obj = { ...uploadStateRef.current }
    delete obj[file.uid]

    if (!("fileList" in props)) {
      setInnerUploadState(obj)
    }
    props.onChange && props.onChange(getFileList(obj), file)
  }

  const uploadFile = (file: UploadItem) => {
    if (!file) {
      return
    }
    setTimeout(() => {
      uploaderRef.current && uploaderRef.current.upload(file)
    }, 0)
  }

  // 重新上传
  const reuploadFile = async (file: UploadItem) => {
    uploaderRef.current && (await uploaderRef.current.reupload(file))
    props.onReupload && props.onReupload(file)
  }

  // 移除文件，如果正在上传，终止上传
  const removeFile = (file: UploadItem) => {
    if (file) {
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
  }

  // 中止文件上传
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
      // file: fileList中的file对象
      abort: (file: UploadItem) => {
        abortFile(file)
      },
      // file: fileList中的file对象
      reupload: (file: UploadItem) => {
        reuploadFile(file)
      },
    }
  })

  const {
    listType = "text",
    renderUploadItem,
    showUploadList = true,
    autoUpload = true,
    renderUploadList,
    beforeUpload = () => true,
    progressProps,
    imagePreview,
  } = props

  const fileList = getFileList(uploadStateRef.current)
  const limit = isNumber(props.limit)
    ? { hideOnExceedLimit: true, maxCount: props.limit }
    : { hideOnExceedLimit: true, ...props.limit }

  const exceedLimit = !!(limit.maxCount && limit.maxCount <= fileList.length)
  const disabledUploadDom =
    props.disabled ?? (!limit.hideOnExceedLimit && exceedLimit)

  const isPictureCard = listType === "picture-card"

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
        onProgress={(file: UploadItem, e?: ProgressEvent) => {
          if (file) {
            if (!("fileList" in props)) {
              setInnerUploadState((v) => {
                return {
                  ...v,
                  [file.uid]: file,
                }
              })
            }
            props.onProgress && props.onProgress(file, e)
          }
        }}
        onFileStatusChange={(file: UploadItem) => {
          if (!("fileList" in props)) {
            setInnerUploadState((v) => {
              return {
                ...v,
                [file.uid]: file,
              }
            })
          }
          props.onChange &&
            props.onChange(
              getFileList({ ...uploadStateRef.current, [file.uid]: file }),
              file,
            )
        }}
      />
    </div>
  )

  return (
    <>
      {!isPictureCard && uploadCompontent}
      {showUploadList && (
        <UploadList
          imagePreview={imagePreview}
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
