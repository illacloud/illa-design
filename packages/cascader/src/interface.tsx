import {
  HTMLAttributes,
  ReactNode,
} from "react"

export type CascaderSize = "small" | "medium" | "large"

export interface CascaderProps<T = any>
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
  expandTrigger?: "click" | "hover"
  notFoundContent?: ReactNode
  //filterOption?: (inputValue: string, option: NodeProps<T>) => boolean
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
  // [key: string]: any;
}
