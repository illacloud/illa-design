/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { FileListItemProps } from "./interface"

export const DragUploader = forwardRef<HTMLSpanElement, FileListItemProps>(
  (props, ref) => {
    const { name, uid } = props.item
    return <div>{DragUploader}</div>
  },
)
