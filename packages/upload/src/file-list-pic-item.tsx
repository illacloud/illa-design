/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { FileListItemProps } from "./interface"
import {
  applyFileItemTitleCss,
  deleteIconCss,
  fileItemContainerCss,
  filePicItemCss,
  imageSizeCss,
  rightIconCss,
} from "./styles"
import { Image } from "@illa-design/image"
import { Progress } from "@illa-design/progress"
import * as React from "react"
import { DeleteIcon } from "@illa-design/icon"

export const FileListPicItem = forwardRef<HTMLSpanElement, FileListItemProps>(
  (props, ref) => {
    const { deleteUpload, item, reUpload } = props
    const { name, percent, status, url, originFile } = item
    const picUrl = url
      ? url
      : originFile && (window.URL ? URL : webkitURL).createObjectURL(originFile)
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
          <Progress css={rightIconCss} type="miniCircle" percent={percent} />
        </div>
        <DeleteIcon
          onClick={() => {
            deleteUpload(item)
          }}
          css={deleteIconCss}
        />
      </div>
    )
  },
)
