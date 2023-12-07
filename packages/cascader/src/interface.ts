import { HTMLAttributes, ReactNode, SyntheticEvent } from "react"
import { BoxProps } from "@illa-design/theme"
import { TriggerProps, TriggerTrigger } from "@illa-design/trigger"

export type CascaderSize = "small" | "medium" | "large"

export type CascaderColorScheme =
  | string
  | "white"
  | "blackAlpha"
  | "gray"
  | "grayBlue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "techPink"
  | "techPurple"

export interface CascaderProps
  extends Omit<
      HTMLAttributes<HTMLDivElement>,
      "defaultValue" | "onChange" | "prefix" | "onFocus" | "onBlur"
    >,
    BoxProps {
  colorScheme?: CascaderColorScheme
  allowClear?: boolean
  trigger?: TriggerTrigger
  defaultPopupVisible?: boolean
  disabled?: boolean
  error?: boolean
  loading?: boolean
  popupVisible?: boolean
  defaultInputValue?: string
  placeholder?: string
  size?: CascaderSize
  addBefore?: ReactNode
  prefix?: ReactNode | string
  suffixIcon?: ReactNode
  defaultValue?: string[] | string[][]
  showSearch?: boolean
  value?: string[] | string[][]
  filterOption?: boolean | ((inputValue: string) => boolean)
  onChange?: (value: null | string[] | string[][]) => void
  onClear?: () => void
  onInputValueChange?: (value: string) => void
  onKeyDown?: (e: SyntheticEvent) => void
  onVisibleChange?: (visible: boolean) => void
  triggerProps?: TriggerProps
  options?: CascaderOptionObject[]
  multiple?: boolean
  onBlur?: (e: SyntheticEvent) => void
  onFocus?: (e: SyntheticEvent) => void
}

export interface CascaderOptionObject {
  label: string
  value: string
  children?: CascaderOptionObject[]
}

export interface SelectorProps {
  multiple?: boolean
  value?: string[][]
  inputValue?: string
  filterOption?: boolean | ((inputValue: string) => boolean)
  options?: CascaderOptionObject[]
  colorScheme?: CascaderColorScheme
  onChange?: (value: string[][]) => void

  onClick?: () => void
}

export interface SelectorOption {
  value: string
  label: string
}

export interface CascaderItem {
  selectorOptions: SelectorOption[]
  labelCollection: string
  checked: boolean
  selected: boolean
}

export interface SinglePartOption {
  value: string
  label: string
  children: CascaderOptionObject[]
  selected: boolean
  checked: boolean
  indeterminate: boolean
}
