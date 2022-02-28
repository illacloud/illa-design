/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useMemo, useRef, useState } from "react"
import { UploadItem, UploadProps, UploadRefType } from "./interface"
import { UploadElement } from "./upload-element"
import { fileListContainerCss, uploadContainerCss } from "./styles"
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
    pictureUpload,
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
  const hasUploadedSet = new Set<string>()

  uploadState.current = fileList ? processFile(fileList) : innerUploadState

  const getFileList = (obj?: { [key: string]: UploadItem }): UploadItem[] => {
    if (!obj || !uploadState) return []
    const res = Object.keys(obj).map((x) => obj[x as keyof UploadItem])
    return res
  }

  const _fileList = useMemo(() => {
    return getFileList(uploadState.current)
  }, [innerUploadState])

  const deleteUpload = (file: UploadItem) => {
    const obj = { ...uploadState.current }
    console.log(`deleteUpload`, Object.keys(obj).length)
    delete obj[file.uid]
    console.log(`deleteUpload`, Object.keys(obj).length)
    if (!fileList) {
      setInnerUploadState(obj)
    }
    onRemove && onRemove(file, _fileList)
    uploaderRef.current && uploaderRef.current.deleteUpload(file)
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

  const abortFile = (file: UploadItem) => {
    if (file) {
      uploaderRef.current && uploaderRef.current.abort(file)
    }
  }

  const updateFileList = (file?: UploadItem, e?: ProgressEvent) => {
    if (!file) return
    const targetFile = getTargetFile(file) ?? file
    setInnerUploadState((v) => {
      return {
        ...v,
        [targetFile.uid]: file,
      }
    })
    if (targetFile?.status != "uploading") {
      onChange && onChange(_fileList, targetFile)
    } else if (hasUploadedSet.has(targetFile?.uid)) {
      onChange && onChange(_fileList, targetFile)
      hasUploadedSet.add(targetFile?.uid)
    }
    if (file?.status === "uploading") {
      onProgress && onProgress(targetFile, e)
    }
  }

  const getTargetFile = (file: UploadItem) => {
    const key = "uid" in file ? "uid" : "name"
    const list = getFileList(uploadState.current)
    return list?.find((item) => item["uid"] === file["uid"])
  }
  return (
    <div css={uploadContainerCss}>
      <UploadElement
        pictureUpload={pictureUpload}
        updateTargetItem={updateFileList}
        ref={uploaderRef}
        fileList={_fileList}
        disabled={disabled}
        customRequest={customRequest}
        {...rest}
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
      {showUploadList && pictureUpload !== true && (
        <List
          data={getFileList(uploadState.current)}
          bordered={false}
          split={false}
          renderRaw={true}
          css={fileListContainerCss}
          render={(item) => {
            return listType === "text" ? (
              <FileListTextItem
                item={item}
                deleteUpload={deleteUpload}
                reUpload={(item) => reUploadFile(item)}
              />
            ) : (
              <FileListPicItem
                item={item}
                deleteUpload={deleteUpload}
                reUpload={(item) => reUploadFile(item)}
              />
            )
          }}
          renderKey={(item) => {
            return item.uid
          }}
        />
      )}
    </div>
  )
})
