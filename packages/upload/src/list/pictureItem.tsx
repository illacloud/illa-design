import React, { KeyboardEvent, MouseEvent } from "react"
import {
  UploadListProps,
  STATUS,
  CustomIconType,
  UploadItem,
} from "../interface"
import { isFunction, isObject } from "@illa-design/system"
import UploadProgress from "./uploadProgress"
import { ConfigProviderProps } from "@illa-design/config-provider"
import {
  EyeOnIcon,
  UploadIcon,
  DeleteIcon,
  ImageDefaultIcon,
  ErrorIcon,
} from "@illa-design/icon"
import {
  errorImageContainerStyle,
  errorImageNameStyle,
  errorImageStyle,
  pictureItemErrorIconStyle,
  pictureItemIconStyle,
  pictureItemMask,
  pictureItemOperationsStyle,
  pictureItemPreviewStyle,
  pictureItemStyle,
  pictureItemUploading,
  pictureItemUploadingMask,
} from "../style"
import { getFileURL, getIconType } from "../utils"

const handleKeyDown = (
  event: KeyboardEvent<HTMLSpanElement>,
  callback?: (e?: any) => void,
) => {
  const keyCode = event.code
  if (keyCode === "Enter") {
    callback?.()
  }
}

const PictureItem = (
  props: UploadListProps & {
    file: UploadItem
    locale: ConfigProviderProps["locale"]
  },
) => {
  const {
    disabled,
    file,
    showUploadList,
    locale,
    onRemove,
    onPreview,
    onReupload,
  } = props
  const { status } = file

  const url = getFileURL(file)
  const actionIcons = isObject(showUploadList)
    ? (showUploadList as CustomIconType)
    : {}
  const Icon = getIconType(file)
  const imageDom = url ? <img src={url} alt={file.name} /> : <Icon />

  const handleImagePreview = (e?: MouseEvent<HTMLAnchorElement>) => {
    onPreview?.(file)
  }

  const handleImageReupload = () => {
    onReupload?.(file)
  }

  const handleImageRemove = () => {
    onRemove?.(file)
  }

  const image = isFunction(actionIcons.imageRender) ? (
    actionIcons.imageRender(file)
  ) : status === STATUS.FAIL ? (
    <div css={errorImageContainerStyle}>
      {<div css={pictureItemIconStyle}>{imageDom}</div> ?? (
        <>
          <ImageDefaultIcon css={errorImageStyle} />
          <div css={errorImageNameStyle}>{file.name}</div>
        </>
      )}
    </div>
  ) : (
    <div css={pictureItemIconStyle}>{imageDom}</div>
  )

  const removeIcon =
    !disabled && actionIcons.removeIcon !== null ? (
      <span
        onClick={handleImageRemove}
        role="button"
        aria-label={locale?.upload.delete}
        tabIndex={0}
        onKeyDown={(e) => handleKeyDown(e, handleImageRemove)}
      >
        {actionIcons.removeIcon || <DeleteIcon />}
      </span>
    ) : null

  const previewIcon =
    file.status !== STATUS.FAIL && actionIcons.previewIcon !== null ? (
      <a
        href={url}
        tabIndex={1}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        css={pictureItemPreviewStyle}
        aria-label={locale?.upload.preview}
        onKeyDown={(e) => handleKeyDown(e, handleImagePreview)}
        onClick={handleImagePreview}
      >
        {actionIcons.previewIcon || <EyeOnIcon />}
      </a>
    ) : null

  const errorIcon =
    file.status === STATUS.FAIL && actionIcons.errorIcon !== null ? (
      <div css={pictureItemErrorIconStyle}>
        <span>{actionIcons.errorIcon || <ErrorIcon />}</span>
      </div>
    ) : null

  const reuploadIcon =
    file.status === STATUS.FAIL &&
    (actionIcons.reuploadIcon !== null || onReupload) ? (
      <span
        onClick={handleImageReupload}
        tabIndex={2}
        role="button"
        aria-label={locale?.upload.reupload}
        onKeyDown={(e) => handleKeyDown(e, handleImageReupload)}
      >
        {actionIcons.reuploadIcon || <UploadIcon />}
      </span>
    ) : null

  return (
    <div css={pictureItemStyle}>
      {image}
      {status === STATUS.UPLOADING ? (
        <div role="radiogroup" css={pictureItemUploadingMask}>
          <div css={pictureItemUploading}>
            <UploadProgress
              onReupload={props.onReupload}
              onUpload={props.onUpload}
              onAbort={props.onAbort}
              listType="picture-card"
              file={file}
              progressProps={props.progressProps}
              {...actionIcons}
            />
          </div>
        </div>
      ) : (
        <>
          <div role="radiogroup" css={pictureItemMask}>
            <div css={pictureItemOperationsStyle}>
              {previewIcon}
              {reuploadIcon}
              {removeIcon}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PictureItem
