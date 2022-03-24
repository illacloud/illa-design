import { FC, ReactNode, useContext } from "react"
import { TriggerNodeProps } from "./interface"
import useDrop from "react-use/lib/useDrop"
import {
  applyDragUploadContainerCss,
  dragUploadTipCss,
  dragUploadTitleCss,
} from "./style"
import { AddIcon } from "@illa-design/icon"
import { traverseFileTree } from "./traverse-file-tree"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const TriggerNode: FC<TriggerNodeProps> = (props) => {
  const { disabled, tip, onFileDragged, onClick, accept } = props
  useDrop({
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
  } else {
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
        <AddIcon />
        <span css={dragUploadTitleCss}>{dragTip}</span>
        {tipNode}
      </span>
    </>
  )
}
