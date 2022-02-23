/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { FileListItemProps } from "./interface"
import {
  applyFileItemTitleCss,
  deleteIconCss,
  fileItemContainerCss,
  filePicItemCss,
  progressCss,
} from "./styles"
import { Image } from "@illa-design/image"
import { Progress } from "@illa-design/progress"
import * as React from "react"
import { DeleteIcon } from "@illa-design/icon"

export const FileListPicItem = forwardRef<HTMLSpanElement, FileListItemProps>(
  (props, ref) => {
    const { deleteUpload, item } = props
    const { name, percent, status, url, originFile } = item
    const picUrl = url
      ? url
      : originFile && (window.URL ? URL : webkitURL).createObjectURL(originFile)
    return (
      <div css={fileItemContainerCss}>
        <div css={filePicItemCss}>
          <Image width={40} height={40} src={url} />
          <span css={applyFileItemTitleCss(status == "error")}>{name}</span>
          <Progress css={progressCss} type="miniCircle" percent={percent} />
        </div>
        <DeleteIcon
          onClick={() => {
            deleteUpload(item.uid)
          }}
          css={deleteIconCss}
        />
      </div>
    )
  },
)
