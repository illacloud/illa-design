import React, { useContext, ReactNode, Fragment } from "react"
import PictureItem from "./pictureItem"
import TextItem from "./textItem"
import {
  ConfigProviderContext,
  ConfigProviderProps,
} from "@illa-design/config-provider"
import { UploadListProps } from "../interface"
import { isFunction } from "@illa-design/system"
import {
  getUploadListContainerStyle,
  listItemStyle,
  uploadListItemStyle,
} from "../style"

const UploadList = (props: UploadListProps) => {
  const { locale } = useContext<ConfigProviderProps>(ConfigProviderContext)
  const {
    listType,
    fileList = [],
    renderUploadList,
    renderUploadItem,
    ...rest
  } = props
  if (isFunction(renderUploadList)) {
    return (
      <div css={getUploadListContainerStyle(listType)}>
        {renderUploadList(fileList, rest)}
      </div>
    )
  }

  const fileListNodes = fileList?.map((file, index) => {
    let originNode: ReactNode =
      listType === "picture-card" ? (
        <div css={listItemStyle}>
          <PictureItem
            {...props}
            onPreview={(file) => {
              props.onPreview && props.onPreview?.(file)
            }}
            file={file}
            locale={locale}
          />
        </div>
      ) : (
        <TextItem {...props} file={file} locale={locale} />
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
