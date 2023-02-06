import React, { KeyboardEvent, useCallback } from "react"
import {
  STATUS,
  CustomIconType,
  UploadListProps,
  UploadItem,
} from "../interface"
import { isObject, isFunction } from "@illa-design/system"
import UploadProgress from "./uploadProgress"
import { DeleteIcon, ErrorIcon } from "@illa-design/icon"
import { Popover } from "@illa-design/popover"
import { ConfigProviderProps } from "@illa-design/config-provider"
import {
  errorListItemStyle,
  getTextItemContainerStyle,
  getTextItemContentContainerStyle,
  getTextItemNameStyle,
  textItemDeleteIconStyle,
  textItemErrorIconStyle,
  textItemIconStyle,
  textItemImageStyle,
  textItemMainContentStyle,
  textItemProgressStyle,
  textItemStyle,
} from "../style"
import { getFileURL, getIconType } from "../utils"

const handleKeyDown = (
  event: KeyboardEvent<HTMLSpanElement>,
  callback?: () => void,
) => {
  const keyCode = event.code
  if (keyCode === "Enter") {
    callback?.()
  }
}

const TextItem = (
  props: UploadListProps & {
    file: UploadItem
    locale: ConfigProviderProps["locale"]
  },
) => {
  const { disabled, file, locale, onRemove } = props
  const Icon = getIconType(file)
  const showUploadList = isObject(props.showUploadList)
    ? (props.showUploadList as CustomIconType)
    : {}
  const imageUrl = getFileURL(file)
  const actionIcons = isObject(showUploadList)
    ? (showUploadList as CustomIconType)
    : {}
  const fileName = isFunction(showUploadList.fileName)
    ? showUploadList.fileName(file)
    : file.name || (file.originFile && file.originFile.name)

  let triggerProps = {}
  if (file.status !== STATUS.FAIL) {
    triggerProps = {
      popupVisible: false,
    }
  }

  const handleItemRemove = useCallback(() => {
    onRemove?.(file)
  }, [onRemove])

  const imageNode = imageUrl ? <img src={imageUrl} /> : <Icon />

  const pictureListIcon = isFunction(showUploadList.imageRender) ? (
    showUploadList.imageRender(file)
  ) : file.status === STATUS.FAIL ? (
    <div css={errorListItemStyle}>{imageNode}</div>
  ) : (
    <>{imageNode}</>
  )

  return (
    <div css={getTextItemContainerStyle(props.listType)}>
      <div css={getTextItemContentContainerStyle(props.listType)}>
        {props.listType === "picture-list" && (
          <div css={textItemImageStyle}>{pictureListIcon}</div>
        )}
        {props.listType === "text" && actionIcons.fileIcon !== null && (
          <span css={textItemIconStyle}>
            {actionIcons.fileIcon || <Icon />}
          </span>
        )}
        <div css={textItemStyle}>
          <div css={textItemMainContentStyle}>
            {imageUrl ? (
              <a
                href={imageUrl}
                target="_blank"
                rel="noreferrer"
                css={getTextItemNameStyle(file.status)}
              >
                {fileName}
              </a>
            ) : (
              <span css={getTextItemNameStyle(file.status)}>{fileName}</span>
            )}
            <div css={textItemErrorIconStyle}>
              {file.status === STATUS.FAIL &&
                actionIcons.errorIcon !== null && (
                  <Popover
                    content={locale?.upload.error}
                    {...triggerProps}
                    hasCloseIcon={false}
                    trigger="hover"
                    disabled={file.status !== STATUS.FAIL}
                  >
                    {actionIcons.errorIcon || <ErrorIcon />}
                  </Popover>
                )}
            </div>
          </div>
          <div css={textItemProgressStyle}>
            <UploadProgress
              file={file}
              progressProps={props.progressProps}
              onReupload={props.onReupload}
              onUpload={props.onUpload}
              onAbort={props.onAbort}
              {...actionIcons}
            />
          </div>
        </div>
      </div>
      {!disabled && actionIcons.removeIcon !== null && (
        <span
          onClick={handleItemRemove}
          tabIndex={0}
          aria-label={locale?.upload.delete}
          css={textItemDeleteIconStyle}
          onKeyDown={(e) => handleKeyDown(e, handleItemRemove)}
        >
          {actionIcons.removeIcon || <DeleteIcon />}
        </span>
      )}
    </div>
  )
}

export default TextItem
