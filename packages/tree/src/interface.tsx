import React, { HTMLAttributes, ReactNode } from "react"
import {
  AllowDrop,
  NodeInstance,
  NodeProps,
  TreeDataType,
  TreeSize,
} from "@illa-design/tree-common"

export interface TreeProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    | "onDragLeave"
    | "onDragOver"
    | "onDragStart"
    | "onDrop"
    | "onSelect"
    | "onDragEnd"
  > {
  size?: TreeSize
  blockNode?: boolean
  renderTitle?: (props: NodeProps) => ReactNode
  // checkBox
  checkable?: boolean
  checkStrictly?: boolean
  defaultCheckedKeys?: string[]
  checkedKeys?: string[]
  onCheck?: (
    checkedKeys: string[],
    extra: {
      node: NodeInstance
      checkedNodes: NodeInstance[]
      checked: boolean
      halfCheckedKeys: string[]
      halfCheckedNodes: NodeInstance[]
      e: Event
    },
  ) => void
  // expand
  autoExpandParent?: boolean
  defaultExpandedKeys?: string[]
  expandedKeys?: string[]
  onExpand?: (
    expandedKeys: string[],
    extra?: {
      expanded: boolean
      node: NodeInstance
      expandedNodes: NodeInstance[]
    },
  ) => void
  // select
  selectable?: boolean
  defaultSelectedKeys?: string[]
  selectedKeys?: string[]
  multiple?: boolean
  onSelect?: (
    selectedKeys: string[],
    extra: {
      selected: boolean
      selectedNodes: NodeInstance[]
      node: NodeInstance
      e: Event
    },
  ) => void
  // data
  treeData?: TreeDataType[]
  // loadMore
  loadMore?: (node: NodeInstance) => Promise<void>
  // icons
  dragIcon?: ReactNode
  switcherIcon?: ReactNode
  loadingIcon?: ReactNode
  showLine?: boolean
  // drag
  allowDrop?: AllowDrop
  draggable?: boolean
  onDrop?: (info: {
    e: DragEvent
    dragNode: NodeInstance
    dropNode: NodeInstance
    dropPosition: number
  }) => void
  onDragStart?: (e: DragEvent, node: NodeInstance) => void
  onDragOver?: (e: DragEvent, node: NodeInstance) => void
  onDragLeave?: (e: DragEvent, node: NodeInstance) => void
  onDragEnd?: (e: DragEvent, node: NodeInstance) => void
  // other
  placeholder?: string
}
