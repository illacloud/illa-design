/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode, useContext } from "react"
import { TriggerNodeProps, UploadRefType } from "./interface"
import useDrop from "react-use/lib/useDrop"
import {
  applyDragUploadContainerCss,
  applyDragUploadTitleCss,
  applyIconCss,
  dragUploadTipCss,
} from "./styles"
import { PlusIcon } from "@illa-design/icon"
import * as React from "react"
import { traverseFileTree } from "./traverse-file-tree"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const TriggerNode = forwardRef<UploadRefType, TriggerNodeProps>(
  (props, ref) => {
    const { disabled, tip, onFileDragged, onClick, accept } = props
    const state = useDrop({
      onFiles: (files, event?: DragEvent) => {
        traverseFileTree(
          Array.prototype.slice.call(event?.dataTransfer?.items),
          (files) => {
            onFileDragged && onFileDragged(files)
          },
          accept,
        )
      },
    })

    let tipNode: ReactNode
    if (typeof tip === "string") {
      tipNode = <div css={dragUploadTipCss}>{tip}</div>
    } else if (typeof tip) {
      tipNode = <div>{tip}</div>
    }

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )

    const locale = configProviderProps?.locale?.upload ?? def.upload
    const dragTip = locale["dragTip"]

    return (
      <>
        <span onClick={onClick} css={applyDragUploadContainerCss(disabled)}>
          <PlusIcon css={applyIconCss(disabled)} />
          <span css={applyDragUploadTitleCss(disabled)}>{dragTip}</span>
          {tipNode}
        </span>
      </>
    )
  },
)
