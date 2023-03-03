import { useCallback, useContext } from "react"
import { STATUS, CustomIconType, UploadListItemProps } from "../interface"
import { isObject, isFunction } from "@illa-design/system"
import UploadProgress from "./uploadProgress"
import { DeleteIcon } from "@illa-design/icon"
import {
  errorListItemStyle,
  getTextItemContainerStyle,
  getTextItemContentContainerStyle,
  getTextItemNameStyle,
  textItemDeleteIconStyle,
  textItemIconStyle,
  textItemImageStyle,
  textItemMainContentStyle,
  textItemOperationIconStyle,
  textItemProgressStyle,
} from "../style"
import { getFileURL, getIconType, handleKeyDown, isImageUrl } from "../utils"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

const TextItem = (props: UploadListItemProps) => {
  const { disabled, file, onRemove } = props
  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const locale = configProviderProps?.locale?.upload ?? def.upload
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
  }, [onRemove, file])

  const imageNode =
    imageUrl && isImageUrl(file) ? <img src={imageUrl} /> : <Icon />

  const pictureListIcon = isFunction(showUploadList.imageRender) ? (
    showUploadList.imageRender(file)
  ) : file.status === STATUS.FAIL ? (
    <div css={errorListItemStyle}>{imageNode}</div>
  ) : (
    <>{imageNode}</>
  )

  const deleteIcon = !disabled && actionIcons.removeIcon !== null && (
    <span
      onClick={handleItemRemove}
      tabIndex={0}
      aria-label={locale.delete}
      css={textItemDeleteIconStyle}
      onKeyDown={(e) => handleKeyDown(e, handleItemRemove)}
    >
      {actionIcons.removeIcon || <DeleteIcon />}
    </span>
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
        </div>
      </div>
      <div css={textItemOperationIconStyle}>
        <div css={textItemProgressStyle}>
          <UploadProgress
            file={file}
            progressProps={props.progressProps}
            onReupload={props.onReupload}
            onUpload={props.onUpload}
            {...actionIcons}
          />
        </div>
        {deleteIcon}
      </div>
    </div>
  )
}

export default TextItem
