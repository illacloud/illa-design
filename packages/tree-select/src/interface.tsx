import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { TreeDataType, TreeProps } from "@illa-design/tree"
import { TriggerProps } from "@illa-design/trigger"
import { NodeProps } from "@illa-design/tree-common"

export type TreeSelectSize = "small" | "medium" | "large"

export interface TreeSelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "defaultValue"> {
  multiple?: boolean
  defaultValue?:
    | string
    | string[]
    | { label: ReactNode; value: string; disabled?: boolean }
    | { label: ReactNode; value: string; disabled?: boolean }[]
  // control
  value?:
    | string
    | string[]
    | { label: ReactNode; value: string; disabled?: boolean }
    | { label: ReactNode; value: string; disabled?: boolean }[]
  notFoundContent?: ReactNode
  placeholder?: string
  labelInValue?: boolean
  showSearch?:
    | boolean
    | { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }
  size?: TreeSelectSize
  disabled?: boolean
  error?: boolean
  loading?: boolean
  allowClear?: boolean
  maxTagCount?: number
  arrowIcon?: ReactNode
  removeIcon?: ReactNode
  treeData?: TreeSelectDataType[]
  treeCheckable?: boolean
  treeCheckStrictly?: boolean
  treeProps?: Partial<TreeProps>
  triggerProps?: Partial<TriggerProps>
  // options
  filterTreeNode?: (inputText: string, treeNode: any) => boolean | void
  onChange?: (value: any) => void
  // ?
  loadMore?: (treeNode: NodeProps, dataRef: any) => void
  onSearch?: (inputValue: string) => void
  onClear?: (visible?: boolean) => void
  onClick?: (e: MouseEvent) => void
  inputValue?: string
}

export interface TreeSelectDataType extends TreeDataType {
  children?: TreeSelectDataType[]
  value: string | { label: string; value: string }
}
