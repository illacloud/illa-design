/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { FileListItemProps } from "./interface"
import { List } from "@illa-design/list"

export const FileListItem = forwardRef<HTMLSpanElement, FileListItemProps>(
  (props, ref) => {
    const { name, uid } = props.item
    return <List></List>
  },
)
