/** @jsxImportSource @emotion/react */
import { forwardRef, useRef, useState } from "react"
import { UploadItem, UploadProps, UploadRefType } from "./interface"
import { UploadElementV2 } from "./upload-element-v2"
import { fileListContainerCss, uploadContainerCss } from "./styles"
import * as React from "react"
import { FileListTextItem } from "./file-list-text-item"
import { FileListPicItem } from "./file-list-pic-item"
import { List } from "@illa-design/list"

export const Upload = forwardRef<HTMLDivElement, UploadProps>((props, ref) => {
  const {
    listType = "text",
    showUploadList = true,
    beforeUpload = () => true,
    fileList,
    defaultFileList,
    customRequest,
    onChange,
    onReupload,
    onRemove,
    disabled,
    tip,
    onProgress,
    ...rest
  } = props

  const processFile = (
    fileList?: UploadItem[],
  ): { [key: string]: UploadItem } => {
    const res: { [key: string]: UploadItem } = {}
    const isArray = Object.prototype.toString.call(fileList) == "[object Array]"
    if (!isArray) return {}
    fileList?.forEach((file, index) => {
      if (file.uid) {
        res[file.uid] = {
          ...file,
          status: "done",
          percent: 100,
        }
      } else {
        const uid = `${String(new Date())}+${index}`
        res[uid] = {
          ...file,
          uid,
          status: "done",
          percent: 100,
        }
      }
    })
    return res
  }

  const uploaderRef = useRef<UploadRefType>({} as UploadRefType)
  const uploadState = useRef<{ [key: string]: UploadItem }>({})
  const [innerUploadState, setInnerUploadState] = useState<{
    [key: string]: UploadItem
  }>(fileList ? processFile(fileList) : processFile(defaultFileList))

  uploadState.current = fileList ? processFile(fileList) : innerUploadState

  const getFileList = (obj?: { [key: string]: UploadItem }): UploadItem[] => {
    console.log(`getFileList ${JSON.stringify(obj)}`)
    if (!obj || !uploadState) return []
    return Object.keys(obj).map((x) => obj[x as keyof UploadItem])
  }

  const deleteUpload = (file: UploadItem) => {
    const obj = { ...uploadState.current }
    delete obj[file.uid]
    if (!fileList) {
      setInnerUploadState(obj)
    }
    onChange && onChange(getFileList(obj), file)
  }

  const uploadFile = (file: UploadItem) => {
    file &&
      setTimeout(() => {
        uploaderRef.current && uploaderRef.current.upload(file)
      }, 0)
  }

  const reUploadFile = (file: UploadItem) => {
    uploaderRef.current && uploaderRef.current.reUpload(file)
    onReupload && onReupload(file)
  }

  const removeFile = (file: UploadItem) => {
    if (file) {
      const isFunction = typeof onRemove === "function"
      Promise.resolve(isFunction ? onRemove(file, []) : onRemove).then(
        (value) => {
          uploaderRef.current && uploaderRef.current.abort(file)
          deleteUpload(file)
        },
      )
    }
  }

  const abortFile = (file: UploadItem) => {
    if (file) {
      uploaderRef.current && uploaderRef.current.abort(file)
    }
  }

  const _fileList = getFileList(uploadState.current)

  return (
    <div css={uploadContainerCss}>
      <UploadElementV2
        ref={uploaderRef}
        fileList={_fileList}
        disabled={disabled}
        customRequest={customRequest}
        {...rest}
        onUploadItemStatusChange={(file: UploadItem) => {
          if (!fileList) {
            setInnerUploadState((v) => {
              return {
                ...v,
                [file.uid]: file,
              }
            })
          }
          console.log(`onUploadItemStatusChange ${file.name}`)
        }}
        onProgress={(file: UploadItem, e?: ProgressEvent) => {
          if (file) {
            if (!fileList) {
              setInnerUploadState((v) => {
                return {
                  ...v,
                  [file.uid]: file,
                }
              })
            }
          }
          onProgress && onProgress(file, e)
        }}
      />
      <List
        data={_fileList}
        bordered={false}
        split={false}
        renderRaw={true}
        css={fileListContainerCss}
        render={(item) => {
          return listType === "text" ? (
            <FileListTextItem item={item} deleteUpload={deleteUpload} />
          ) : (
            <FileListPicItem item={item} deleteUpload={deleteUpload} />
          )
        }}
        renderKey={(item) => {
          return item.uid
        }}
      />
    </div>
  )
})
