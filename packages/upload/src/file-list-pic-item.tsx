import { FC } from "react"
import { FileListItemProps } from "./interface"
import {
  applyFileItemTitleCss,
  fileItemContainerCss,
  filePicItemCss,
  imageSizeCss,
} from "./styles"
import { Image } from "@illa-design/image"
import { getDeleteButton, getRightIcon } from "./file-list-utils"

const getObjectUrl = (file?: File) => {
  if (file) {
    const url = window.URL ? URL : webkitURL
    return url.createObjectURL(file)
  }
}

export const FileListPicItem: FC<FileListItemProps> = (props) => {
  const { deleteUpload, item, reUpload, icons } = props
  const { name, percent, status, url, originFile } = item
  const picUrl = url ? url : getObjectUrl(originFile)
  let rightView = getRightIcon(
    status,
    item,
    percent,
    reUpload,
    icons?.reuploadIcon,
  )
  const deleteButton = icons?.removeIcon ? (
    <span onClick={() => deleteUpload(item)}>{icons.removeIcon}</span>
  ) : (
    getDeleteButton(item, deleteUpload)
  )
  return (
    <div css={fileItemContainerCss}>
      <div css={filePicItemCss}>
        <Image
          css={imageSizeCss}
          width={40}
          height={40}
          radius={"2px"}
          src={picUrl}
        />
        <span css={applyFileItemTitleCss(status == "error")}>{name}</span>
        {rightView}
      </div>
      {deleteButton}
    </div>
  )
}
