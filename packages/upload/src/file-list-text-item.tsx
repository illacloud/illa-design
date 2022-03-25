import { forwardRef, useMemo } from "react"
import { FileListItemProps } from "./interface"
import {
  applyFileItemTitleCss,
  fileIconCss,
  fileItemContainerCss,
  fileTextItemCss,
} from "./style"
import {
  FileDefaultIcon,
  FileExcelIcon,
  FileMusicIcon,
  FilePdfIcon,
  FilePictureIcon,
  FilePPTIcon,
  FileVideoIcon,
  FileWordIcon,
  FileWPSIcon,
} from "@illa-design/icon"
import { getDeleteButton, getRightIcon } from "./file-list-utils"

const checkFileType = (type: string, ...targetType: string[]) => {
  let flag = false
  targetType.forEach((target) => {
    if (type.indexOf(target) > -1) {
      flag = true
    }
  })
  return flag
}

const getFileIcon = (file: File) => {
  let type = ""
  if (file && file.type) {
    type = file.type
  } else {
    const name = file.name || ""
    const fileExtension = name.split(".").pop() || ""
    if (["png", "jpg", "jpeg", "bmp", "gif"].indexOf(fileExtension) > -1) {
      type = "image"
    } else if (["mp4", "m2v", "mkv"].indexOf(fileExtension) > -1) {
      type = "video"
    } else if (["mp3", "wav", "wmv"].indexOf(fileExtension) > -1) {
      type = "audio"
    }
  }
  const fileName = file.name

  if (checkFileType(type, "image")) {
    return <FilePictureIcon />
  }
  if (checkFileType(type, "video")) {
    return <FileVideoIcon />
  }
  if (checkFileType(type, "audio")) {
    return <FileMusicIcon />
  }
  if (checkFileType(fileName, "pdf")) {
    return <FilePdfIcon />
  }
  if (checkFileType(fileName, "ppt", "pptx")) {
    return <FilePPTIcon />
  }
  if (checkFileType(fileName, "xlsx", "xls")) {
    return <FileExcelIcon />
  }
  if (checkFileType(fileName, "wps")) {
    return <FileWPSIcon />
  }
  if (checkFileType(fileName, "doc", "docx")) {
    return <FileWordIcon />
  }
  return <FileDefaultIcon />
}

export const FileListTextItem = forwardRef<HTMLDivElement, FileListItemProps>(
  (props, ref) => {
    const { item, deleteUpload, reUpload, icons } = props
    const { name, percent, status, originFile } = props.item
    const fileIcon = useMemo(() => {
      if (icons?.fileIcon) return icons?.fileIcon
      return <span css={fileIconCss}>{getFileIcon(originFile)}</span>
    }, [originFile, icons])

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
      <div css={fileItemContainerCss} ref={ref}>
        <div css={fileTextItemCss}>
          {fileIcon}
          <span css={applyFileItemTitleCss(status == "error")}>{name}</span>
          {rightView}
        </div>
        {deleteButton}
      </div>
    )
  },
)
