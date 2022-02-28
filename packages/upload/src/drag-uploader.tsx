/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react"
import { TriggerNodeProps, UploadRefType } from "./interface"
import useDrop from "react-use/lib/useDrop"
import {
  applyDragUploadContainerCss,
  applyDragUploadTitleCss,
  applyIconCss,
  dragUploadTipCss,
} from "./styles"
import { MinusIcon } from "@illa-design/icon"
import * as React from "react"
import { traverseFileTree } from "./traverse-file-tree"
import { isAcceptFile } from "./file-accept"

export const TriggerNode = forwardRef<UploadRefType, TriggerNodeProps>(
  (props, ref) => {
    const { disabled, tip, onFileDragged, onClick } = props
    const state = useDrop({
      onFiles: (files, event?: DragEvent) => {
        traverseFileTree(
          Array.prototype.slice.call(event?.dataTransfer?.items),
          (files) => {
            onFileDragged && onFileDragged(files)
          },
          isAcceptFile,
        )
      },
    })

    let tipNode: ReactNode
    if (typeof tip === "string") {
      tipNode = <div css={dragUploadTipCss}>{tip}</div>
    } else if (typeof tip) {
      tipNode = <div>{tip}</div>
    }

    return (
      <>
        <span onClick={onClick} css={applyDragUploadContainerCss(disabled)}>
          <MinusIcon css={applyIconCss(disabled)} />
          <span css={applyDragUploadTitleCss(disabled)}>
            Drag and drop an file
          </span>
          {tipNode}
        </span>
      </>
    )
  },
)
