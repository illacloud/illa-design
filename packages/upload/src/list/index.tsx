import React, { ReactNode, Fragment } from "react"
import PictureItem from "./pictureItem"
import TextItem from "./textItem"
import { UploadItem, UploadListProps } from "../interface"
import { isFunction } from "@illa-design/system"
import {
  getUploadListContainerStyle,
  listItemStyle,
  uploadListItemStyle,
} from "../style"

const UploadList = (props: UploadListProps) => {
  const {
    listType,
    fileList = [],
    renderUploadList,
    renderUploadItem,
    onPreview,
    ...rest
  } = props

  if (isFunction(renderUploadList)) {
    return (
      <div css={getUploadListContainerStyle(listType)}>
        {renderUploadList(fileList, rest)}
      </div>
    )
  }

  const handlePictureItemPreview = (file: UploadItem) => {
    onPreview?.(file)
  }

  if (!fileList || !fileList.length) {
    return null
  }

  const fileListNodes = fileList?.map((file, index) => {
    let originNode: ReactNode =
      listType === "picture-card" ? (
        <div css={listItemStyle}>
          <PictureItem
            {...props}
            onPreview={handlePictureItemPreview}
            file={file}
          />
        </div>
      ) : (
        <TextItem {...props} file={file} />
      )
    if (isFunction(renderUploadItem)) {
      originNode = renderUploadItem(originNode, file, fileList)
    }
    return listType === "picture-card" ? (
      <Fragment key={index}>{originNode}</Fragment>
    ) : (
      <div key={index} css={uploadListItemStyle}>
        {originNode}
      </div>
    )
  })

  return <div css={getUploadListContainerStyle(listType)}>{fileListNodes}</div>
}

UploadList.displayName = "UploadList"

export default UploadList
