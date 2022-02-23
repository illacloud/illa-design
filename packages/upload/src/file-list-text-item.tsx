/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { FileListItemProps } from "./interface"
import {
  applyFileItemTitleCss,
  deleteIconCss,
  fileItemContainerCss,
  fileTextItemCss,
  progressCss,
} from "./styles"
import { Image } from "@illa-design/image"
import { Progress } from "@illa-design/progress"
import * as React from "react"
import { DeleteIcon } from "@illa-design/icon"

export const FileListTextItem = forwardRef<HTMLSpanElement, FileListItemProps>(
  (props, ref) => {
    const { name, percent, status } = props.item
    return (
      <div css={fileItemContainerCss}>
        <div css={fileTextItemCss}>
          <Image
            width={16}
            height={20}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          />
          <span css={applyFileItemTitleCss(status == "error")}>{name}</span>
          <Progress css={progressCss} type="miniCircle" percent={percent} />
        </div>
        <DeleteIcon css={deleteIconCss} />
      </div>
    )
  },
)
