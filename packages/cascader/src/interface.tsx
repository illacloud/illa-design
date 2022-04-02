import { CSSProperties, HTMLAttributes, ReactNode } from "react"
import { NodeProps } from "./node"
import Store from "./store"
import { TriggerProps } from "@illa-design/trigger"

export type CascaderSize = "small" | "medium" | "large"

export interface CascaderProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  value?: (string | string[])[]
  defaultValue?: (string | string[])[]
  options?: OptionProps[]
  placeholder?: string
  showSearch?:
    | boolean
    | { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }
  size?: CascaderSize
  multiple?: boolean
  allowCreate?: boolean
  trigger?: TriggerProps["trigger"]
  expandTrigger?: "click" | "hover"
  notFoundContent?: ReactNode
  filterOption?: (inputValue: string, option?: NodeProps<T>) => boolean
  disabled?: boolean
  error?: boolean
  loading?: boolean
  allowClear?: boolean
  maxTagCount?: number
  arrowIcon?: ReactNode | null
  removeIcon?: ReactNode | null

  // events
  onSearch?: (inputValue: string) => void
  onChange?: (
    value: (string | string[])[],
    selectedOptions: OptionProps[] | OptionProps[][],
    extra: { dropdownVisible?: boolean },
  ) => void
  onClear?: (visible?: boolean) => void
  onVisibleChange?: (visible: boolean) => void
}

export interface OptionProps {
  value?: string
  label?: string
  disabled?: boolean
  children?: OptionProps[]
  isLeaf?: boolean

  [key: string]: any
}

export type FieldNamesType = {
  /** 指定 label 在选项中对应的字段  */
  label?: string
  /** 指定 value 在选项中对应的字段  */
  value?: string
  /** 指定 children 在选项中对应的字段  */
  children?: string
  /** 指定 disabled 在选项中对应的字段  */
  disabled?: string
  /** 指定 isLeaf 在选项中对应的字段  */
  isLeaf?: string
}

export interface CascaderPanelProps<T> {
  className?: string | string[]
  style?: CSSProperties
  store: Store<T>
  multiple?: boolean
  defaultValue?: string[][]
  value?: string[][]
  changeOnSelect?: boolean
  popupVisible?: boolean
  expandTrigger?: "click" | "hover"
  trigger?: "click"
  prefixCls?: string
  showEmptyChildren?: boolean
  renderOption?: (option?: NodeProps<T>, level?: number) => ReactNode
  onChange?: (value: string[][]) => void
  loadMore?: (activeValue: any, level: number) => NodeProps<T>[] | undefined
  renderEmpty?: (width?: number) => ReactNode
  renderFooter?: (level: number, activeOption: NodeProps<T> | null) => ReactNode
  onDoubleClickOption?: () => void
  onEsc?: () => void
}
