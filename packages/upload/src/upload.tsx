/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useEffect, useMemo, useRef, useState } from "react"
import { UploadItem, UploadProps, UploadRefType } from "./interface"
import { UploadElement } from "./upload-element"
import { fileListContainerCss, uploadContainerCss } from "./styles"
import { FileListTextItem } from "./file-list-text-item"
import { FileListPicItem } from "./file-list-pic-item"
import { List } from "@illa-design/list"

const isFunction = (obj?: object) => typeof obj === "function"

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

  useEffect(() => {
    console.log(`useEffect`, _fileList.length)
  }, [innerUploadState])

  const getFileList = (
    obj?: { [key: string]: UploadItem },
    source?: string,
  ): UploadItem[] => {
    console.log(`getFileList source`, source)
    console.log(`getFileList`, obj)
    if (!obj || !uploadState) return []
    return Object.keys(obj).map((x) => obj[x as keyof UploadItem])
  }

  const _fileList = useMemo(() => {
    console.log(`_fileList`, getFileList(uploadState.current, "useMemo").length)
    return getFileList(uploadState.current, "useMemo")
  }, [innerUploadState])

  const deleteUpload = (file: UploadItem) => {
    if (file) {
      Promise.resolve(
        onRemove && isFunction(onRemove) ? onRemove(file, _fileList) : onRemove,
      )
        .then((value) => {
          if (value !== false) {
            const obj = { ...uploadState.current }
            delete obj[file.uid]
            if (!fileList) {
              setInnerUploadState(obj)
            }
            uploaderRef.current && uploaderRef.current.deleteUpload(file)
          }
        })
        .catch((e) => {
          console.error(e)
        })
    }
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
    const list = getFileList(uploadState.current, "updateFileList")
    if (targetFile?.status != "uploading") {
      onChange && onChange(list, targetFile)
    } else if (hasUploadedSet.has(targetFile?.uid)) {
      onChange && onChange(list, targetFile)
      hasUploadedSet.add(targetFile?.uid)
    }
    if (file?.status === "uploading") {
      onProgress && onProgress(targetFile, e)
    }
  }

  const getTargetFile = (file: UploadItem) => {
    const key = "uid" in file ? "uid" : "name"
    const list = getFileList(uploadState.current, "getTargetFile")
    return list?.find((item) => item["uid"] === file["uid"])
  }

  return (
    <div css={uploadContainerCss}>
      <UploadElement
        pictureUpload={pictureUpload}
        updateTargetItem={updateFileList}
        ref={uploaderRef}
        fileList={getFileList(uploadState.current, "element")}
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
          data={getFileList(uploadState.current, "element-list")}
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
