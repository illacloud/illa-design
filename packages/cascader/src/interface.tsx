import { CSSProperties, HTMLAttributes, ReactNode } from "react"
import { NodeProps, Store } from "./node"
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
  fieldNames?: FieldNamesType
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
  label?: string
  value?: string
  children?: string
  disabled?: string
  isLeaf?: string
}

export interface CascaderPanelProps<T> {
  className?: string | string[]
  style?: CSSProperties
  store: Store<T>
  multiple?: boolean
  defaultValue?: string[][]
  value?: string[][]
  popupVisible?: boolean
  expandTrigger?: "click" | "hover"
  trigger?: "click"
  prefixCls?: string
  onChange?: (value: string[][]) => void
  loadMore?: (activeValue: any, level: number) => NodeProps<T>[] | undefined
  renderEmpty?: (width?: number) => ReactNode
  onDoubleClickOption?: () => void
}
