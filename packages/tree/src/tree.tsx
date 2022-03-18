/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { TreeProps } from "./interface"
import { List } from "@illa-design/list"
import { ListItem, ListItemMeta } from "@illa-design/list/src"
import { TreeNode } from "./tree-node"
import { loopNode } from "./utils"

export function getNodeList() {}

export const Tree = forwardRef<HTMLDivElement, TreeProps>((props, ref) => {
  const {
    treeData = [],
    onDragOver,
    onDragLeave,
    onDragStart,
    onDrop,
    onSelect,
    ...rest
  } = props

  console.log("treeData", treeData)
  const list = loopNode(treeData)

  return (
    <div ref={ref} {...rest}>
      {list?.map((item) => {
        return <TreeNode {...item} />
      })}
      {/*<List*/}
      {/*  data={treeData}*/}
      {/*  render={(data) => {*/}
      {/*    return <TreeNode key={data.key} title={data.title} />*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  )
})

Tree.displayName = "Tree"
