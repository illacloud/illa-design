import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
} from "react"
import {
  UploadProps,
  UploadItem,
  STATUS,
  UploadInstance,
  UploaderInstance,
} from "./interface"
import Uploader from "./uploader"
import { isFunction, isNumber, isArray } from "@illa-design/system"
import UploadList from "./list"
import { v4 } from "uuid"
import { getUploaderContinerStyle } from "./style"

type UploadStateType = {
  [key in string]: UploadItem
}
const getUploadState = (fileList?: UploadItem[]): UploadStateType => {
  const res: UploadStateType = {}
  if (!isArray(fileList)) {
    return res
  }
  fileList.forEach((file, index) => {
    const uid = file.uid || v4()
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
  const uploaderRef = useRef<UploaderInstance>(null)
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

  uploadStateRef.current =
    "fileList" in props ? getUploadState(props.fileList) : innerUploadState

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
    onRemove,
    onReupload,
  } = props

  const deleteUploadFile = useCallback(
    (file: UploadItem) => {
      const obj = { ...uploadStateRef.current }
      delete obj[file.uid]

      if (!("fileList" in props)) {
        setInnerUploadState(obj)
      }
      onChange && onChange(getFileList(obj), file)
    },
    [onChange, props],
  )

  const uploadFile = useCallback((file: UploadItem) => {
    if (!file) {
      return
    }
    setTimeout(() => {
      uploaderRef.current && uploaderRef.current.upload(file)
    }, 0)
  }, [])

  const reuploadFile = useCallback(
    (file: UploadItem) => {
      uploaderRef.current && uploaderRef.current.reupload(file)
      onReupload && onReupload(file)
    },
    [onReupload],
  )

  const removeFile = useCallback(
    (file: UploadItem) => {
      if (!file) {
        return
      }
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
    },
    [deleteUploadFile, onRemove],
  )

  const abortFile = useCallback((file: UploadItem) => {
    if (file) {
      uploaderRef.current && uploaderRef.current.abort(file)
    }
  }, [])

  useImperativeHandle(ref, () => {
    return {
      submit: (file?: UploadItem) => {
        let list: UploadItem[] =
          (file
            ? [file]
            : getFileList(uploadStateRef.current).filter(
                (x) => x.status === STATUS.INIT,
              )) || []
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

  const handleProgress = useCallback(
    (file: UploadItem, e?: ProgressEvent) => {
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
    },
    [onProgress, props],
  )

  const handleFileStatusChange = useCallback(
    (file: UploadItem) => {
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
    },
    [onChange, props],
  )

  const uploadComponent = (
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
      {!isPictureCard && uploadComponent}
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
          onRemove={removeFile}
          onReupload={reuploadFile}
          onPreview={props.onPreview}
        />
      )}
      {isPictureCard && uploadComponent}
    </>
  )
})

Upload.displayName = "Upload"
