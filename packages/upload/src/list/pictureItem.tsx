import React, { KeyboardEvent } from "react"
import {
  UploadListProps,
  STATUS,
  CustomIconType,
  UploadItem,
} from "../interface"
import { isFunction, isObject } from "@illa-design/system"
import UploadProgress from "./uploadProgress"
import { ConfigProviderProps } from "@illa-design/config-provider"
import { CloseIcon, EyeOnIcon, UploadIcon, DeleteIcon } from "@illa-design/icon"
import {
  pictureItemMask,
  pictureItemOperationsStyle,
  pictureItemStyle,
  pictureItemUploading,
} from "../style"

const PictureItem = (
  props: UploadListProps & {
    file: UploadItem
    locale: ConfigProviderProps["locale"]
  },
) => {
  const { disabled, file, showUploadList, locale } = props
  const { status, originFile } = file

  const url =
    file.url !== undefined
      ? file.url
      : originFile && isFunction(URL.createObjectURL)
      ? URL.createObjectURL(originFile)
      : undefined
  const actionIcons = isObject(showUploadList)
    ? (showUploadList as CustomIconType)
    : {}

  const handleKeyDown = (
    event: KeyboardEvent<HTMLSpanElement>,
    callback?: () => void,
  ) => {
    const keyCode = event.code
    if (keyCode === "Enter") {
      callback?.()
    }
  }

  const handleImagePreview = () => {
    props.onPreview && props.onPreview(file)
  }

  const handleImageReupload = () => {
    props.onReupload && props.onReupload(file)
  }

  const handleImageRemove = () => {
    props.onRemove && props.onRemove(file)
  }

  return (
    <div css={pictureItemStyle}>
      {status === STATUS.UPLOADING ? (
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
      ) : (
        <>
          {isFunction(actionIcons.imageRender) ? (
            actionIcons.imageRender(file)
          ) : (
            <img src={url} alt={file.name} />
          )}
          <div role="radiogroup" css={pictureItemMask}>
            {file.status === STATUS.FAIL && (
              <div css={pictureItemOperationsStyle}>
                {actionIcons.errorIcon !== null && (
                  <span>{actionIcons.errorIcon || <CloseIcon />}</span>
                )}
              </div>
            )}
            <div css={pictureItemOperationsStyle}>
              {file.status !== STATUS.FAIL &&
                actionIcons.previewIcon !== null && (
                  <span
                    tabIndex={0}
                    role="button"
                    aria-label={locale?.upload.preview}
                    onKeyDown={(e) => handleKeyDown(e, handleImagePreview)}
                    onClick={handleImagePreview}
                  >
                    {actionIcons.previewIcon || <EyeOnIcon />}
                  </span>
                )}
              {file.status === STATUS.FAIL &&
                actionIcons.reuploadIcon !== null && (
                  <span
                    onClick={() => {
                      props.onReupload && props.onReupload(file)
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={locale?.upload.reupload}
                    onKeyDown={(e) => handleKeyDown(e, handleImageReupload)}
                  >
                    {actionIcons.reuploadIcon || <UploadIcon />}
                  </span>
                )}
              {!disabled && actionIcons.removeIcon !== null && (
                <span
                  onClick={() => {
                    props.onRemove && props.onRemove(file)
                  }}
                  role="button"
                  aria-label={locale?.upload.delete}
                  tabIndex={0}
                  onKeyDown={(e) => handleKeyDown(e, handleImageRemove)}
                >
                  {actionIcons.removeIcon || <DeleteIcon />}
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PictureItem
