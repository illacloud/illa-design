/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode, useMemo } from "react"
import { FileListItemProps } from "./interface"
import {
  applyFileItemTitleCss,
  deleteIconCss,
  fileItemContainerCss,
  fileTextItemCss,
  rightIconCss,
  tryTextCss,
} from "./styles"
import { Image } from "@illa-design/image"
import { Progress } from "@illa-design/progress"
import * as React from "react"
import {
  DeleteIcon,
  FileDefaultIcon,
  FileExcelIcon,
  FileMusicIcon,
  FilePdfIcon,
  FilePictureIcon,
  FilePPTIcon,
  FileVideoIcon,
  FileWordIcon,
  FileWPSIcon,
  SuccessIcon,
} from "@illa-design/icon"

const checkFileType = (type: string, ...targetType: string[]) => {
  let flag = false
  targetType.forEach((target) => {
    if (type.indexOf(target) > -1) {
      flag = true
    }
  })

  return flag
}

const fileIcon = (file: File) => {
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

  if (checkFileType(type, "image")) {
    return <FilePictureIcon />
  }
  if (checkFileType(type, "video")) {
    return <FileVideoIcon />
  }
  if (checkFileType(type, "audio")) {
    return <FileMusicIcon />
  }
  if (checkFileType(type, "pdf")) {
    return <FilePdfIcon />
  }
  if (checkFileType(type, "ppt")) {
    return <FilePPTIcon />
  }
  if (checkFileType(type, "xlsx", "xls")) {
    return <FileExcelIcon />
  }
  if (checkFileType(type, "wps")) {
    return <FileWPSIcon />
  }
  if (checkFileType(type, "word")) {
    return <FileWordIcon />
  }
  return <FileDefaultIcon />
}

export const FileListTextItem = forwardRef<HTMLSpanElement, FileListItemProps>(
  (props, ref) => {
    const { item, deleteUpload, reUpload } = props
    const { name, percent, status, originFile } = props.item

    const _fileIcon = useMemo(() => {
      return fileIcon(originFile)
    }, [originFile])

    let rightView
    switch (status) {
      case "done":
        rightView = <SuccessIcon css={rightIconCss} />
        break
      case "error":
        rightView = (
          <span
            css={tryTextCss}
            onClick={() => {
              console.log(`rightView reUpload `)
              reUpload && reUpload(item)
            }}
          >
            Click to retry
          </span>
        )
        break
      default:
        rightView = (
          <Progress css={rightIconCss} type="miniCircle" percent={percent} />
        )
    }

    return (
      <div css={fileItemContainerCss}>
        <div css={fileTextItemCss}>
          {_fileIcon}
          <span css={applyFileItemTitleCss(status == "error")}>{name}</span>
          {rightView}
        </div>
        <DeleteIcon css={deleteIconCss} onClick={() => deleteUpload(item)} />
      </div>
    )
  },
)
