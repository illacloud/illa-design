import { STATUS, CustomIconType, UploadListItemProps } from "../interface"
import { isFunction, isObject } from "@illa-design/system"
import UploadProgress from "./uploadProgress"
import {
  EyeOnIcon,
  UploadIcon,
  DeleteIcon,
  ImageDefaultIcon,
} from "@illa-design/icon"
import {
  errorImageContainerStyle,
  errorImageNameStyle,
  errorImageStyle,
  pictureItemIconStyle,
  pictureItemMask,
  pictureItemOperationsStyle,
  pictureItemPreviewStyle,
  pictureItemStyle,
  pictureItemUploading,
  pictureItemUploadingMask,
} from "../style"
import { getFileURL, getIconType, handleKeyDown } from "../utils"
import { useContext } from "react"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

const PictureItem = (props: UploadListItemProps) => {
  const { disabled, file, showUploadList, onRemove, onPreview, onReupload } =
    props
  const { status } = file

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.upload ?? def.upload

  const url = getFileURL(file)
  const actionIcons = isObject(showUploadList)
    ? (showUploadList as CustomIconType)
    : {}
  const Icon = getIconType(file)
  const imageDom = url ? <img src={url} alt={file.name} /> : <Icon />

  const handleImagePreview = () => {
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
        aria-label={locale.delete}
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
        aria-label={locale.preview}
        onKeyDown={(e) => handleKeyDown(e, handleImagePreview)}
        onClick={handleImagePreview}
      >
        {actionIcons.previewIcon || <EyeOnIcon />}
      </a>
    ) : null

  const reuploadIcon =
    file.status === STATUS.FAIL &&
    (actionIcons.reuploadIcon !== null || onReupload) ? (
      <span
        onClick={handleImageReupload}
        tabIndex={2}
        role="button"
        aria-label={locale.retry}
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
