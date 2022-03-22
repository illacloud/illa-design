import React, { HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { TreeNode } from "./tree-node"

export type TreeSize = "small" | "medium" | "large"

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

export interface TreeDataType extends Omit<NodeProps, "children"> {
  children?: TreeDataType[]
}

export interface NodeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "key" | "title"> {
  key: string
  checkable?: boolean
  disableCheckbox?: boolean
  disabled?: boolean
  icon?: ReactNode
  size?: TreeSize
  title?: string | ReactNode
  selectable?: boolean
  expanding?: boolean
  isLeaf?: boolean
  _key?: string
  _isSelected?: boolean
  _father?: NodeProps
  _level?: number
  _fatherPath?: NodeProps[]
  _isLast?: boolean
  _indentArr?: boolean[]
  _checked?: boolean
  _halfChecked?: boolean
  _children?: string[]
  showLine?: boolean
  blockNode?: boolean
  draggable?: boolean
  handleExpand?: (key: string) => void
  handleSelect?: (key: string, e: Event) => void
  handleCheck?: (key: string, e: Event) => void
  saveNodeCache?: (key: string, node: NodeInstance) => void
  renderTitle?: (props: NodeProps) => ReactNode
  handleLoadMore?: (key: string) => void
  dataRef?: TreeDataType
  loadingMore?: boolean
  dragIcon?: ReactNode
  switcherIcon?: ReactNode
  loadingIcon?: ReactNode
  handleDragStart?: (e: React.DragEvent<HTMLDivElement>, key: string) => void
  handleDragEnd?: (e: React.DragEvent<HTMLDivElement>, key: string) => void
  handleDragLeave?: (e: React.DragEvent<HTMLDivElement>, key: string) => void
  handleDragOver?: (e: React.DragEvent<HTMLDivElement>, key: string) => void
  handleDrop?: (e: React.DragEvent<HTMLDivElement>) => void
  updateDragState?: (props: {
    dragNodeKey?: string | null
    dropNodeKey?: string | null
    dropPosition?: number
  }) => void
}

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  listData: NodeProps[]
  handleExpand?: (key: string) => void
  handleSelect?: (key: string, e: Event) => void
  handleCheck?: (key: string, e: Event) => void
  handleLoadMore?: (key: string) => void
  size?: TreeSize
  blockNode?: boolean
  draggable?: boolean
  saveNodeCache?: (key: string, node: NodeInstance) => void
  showLine?: boolean
  checkable?: boolean
  renderTitle?: (props: NodeProps) => ReactNode
  loadingMoreKeys?: Set<string>
  dragIcon?: ReactNode
  switcherIcon?: ReactNode
  loadingIcon?: ReactNode
  handleDragStart?: (e: DragEvent, key: string) => void
  handleDragEnd?: (e: DragEvent, key: string) => void
  handleDragLeave?: (e: DragEvent, key: string) => void
  handleDragOver?: (e: DragEvent, key: string) => void
  handleDrop?: (e: DragEvent) => void
  updateDragState?: (props: {
    dragNodeKey?: string
    dropNodeKey?: string
    dropPosition?: number
  }) => void
  allowDrop?: AllowDrop
}

export type AllowDrop = (options: {
  node: NodeInstance
  position: number
}) => boolean

export type NodeInstance = React.ReactElement<
  PropsWithChildren<NodeProps>,
  typeof TreeNode
>
