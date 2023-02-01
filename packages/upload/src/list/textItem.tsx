import React, { KeyboardEvent } from "react"
import {
  STATUS,
  CustomIconType,
  UploadListProps,
  UploadItem,
} from "../interface"
import { isObject, isFunction } from "@illa-design/system"
import UploadProgress from "./uploadProgress"
import {
  FileDefaultIcon,
  FilePdfIcon,
  FileMusicIcon,
  FileVideoIcon,
  FilePictureIcon,
  DeleteIcon,
  ErrorIcon,
} from "@illa-design/icon"
import { Popover } from "@illa-design/popover"
import { ConfigProviderProps } from "@illa-design/config-provider"
import {
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

const getIconType = (file: UploadItem) => {
  let type = ""
  if (file.originFile && file.originFile.type) {
    // 上传文件
    type = file.originFile.type
  } else {
    const name = file.name || ""
    const fileExtension = name.split(".").pop() || ""
    type = fileExtension
    if (["png", "jpg", "jpeg", "bmp", "gif"].indexOf(fileExtension) > -1) {
      type = "image"
    } else if (["mp4", "m2v", "mkv"].indexOf(fileExtension) > -1) {
      type = "video"
    } else if (["mp3", "wav", "wmv"].indexOf(fileExtension) > -1) {
      type = "audio"
    }
  }

  if (type.indexOf("image") > -1) {
    return FilePictureIcon
  }
  if (type.indexOf("pdf") > -1) {
    return FilePdfIcon
  }
  if (type.indexOf("audio") > -1) {
    return FileMusicIcon
  }
  if (type.indexOf("video") > -1) {
    return FileVideoIcon
  }
  return FileDefaultIcon
}

const TextItem = (
  props: UploadListProps & {
    file: UploadItem
    locale: ConfigProviderProps["locale"]
  },
) => {
  const { disabled, file, locale } = props

  const Icon = getIconType(file)

  const showUploadList = isObject(props.showUploadList)
    ? (props.showUploadList as CustomIconType)
    : {}

  // custom icons
  const actionIcons = isObject(showUploadList)
    ? (showUploadList as CustomIconType)
    : {}

  const fileName = file.name || (file.originFile && file.originFile.name)
  const url =
    file.url !== undefined
      ? file.url
      : file.originFile && isFunction(URL.createObjectURL)
      ? URL.createObjectURL(file.originFile)
      : undefined

  let triggerProps = {}
  // 重新上传后，如果成功，但是鼠标仍然hover在内容区，错误提示不会消失。所以需要设置 popupVisible 为false，来隐藏tooltip
  if (file.status !== STATUS.FAIL) {
    triggerProps = {
      popupVisible: false,
    }
  }

  const handleItemRemove = () => {
    props.onRemove && props.onRemove(file)
  }

  const handleKeyDown = (
    event: KeyboardEvent<HTMLSpanElement>,
    callback?: () => void,
  ) => {
    const keyCode = event.code
    if (keyCode === "Enter") {
      callback?.()
    }
  }

  return (
    <div css={getTextItemContainerStyle(props.listType)}>
      <div css={getTextItemContentContainerStyle(props.listType)}>
        {props.listType === "picture-list" && (
          <div css={textItemImageStyle}>
            {isFunction(showUploadList.imageRender) ? (
              showUploadList.imageRender(file)
            ) : (
              <img src={url} />
            )}
          </div>
        )}
        {props.listType === "text" && actionIcons.fileIcon !== null && (
          <span css={textItemIconStyle}>
            {actionIcons.fileIcon || <Icon />}
          </span>
        )}
        <div css={textItemStyle}>
          <div css={textItemMainContentStyle}>
            {isFunction(showUploadList.fileName) ? (
              <span css={getTextItemNameStyle(file.status)}>
                {showUploadList.fileName(file)}
              </span>
            ) : file.url ? (
              <a
                href={file.url}
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
                    content={locale?.upload.error || "failed"}
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
