import { HTMLAttributes, ReactNode, SyntheticEvent } from "react"
import { BoxProps } from "@illa-design/theme"
import { DropdownProps } from "@illa-design/dropdown"
import { TriggerTrigger } from "@illa-design/trigger"

export type SelectSize = "small" | "medium" | "large"

export type SelectColorScheme =
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

export interface SelectProps
  extends Omit<
      HTMLAttributes<HTMLDivElement>,
      "defaultValue" | "onChange" | "prefix" | "onFocus" | "onBlur"
    >,
    BoxProps {
  colorScheme?: SelectColorScheme
  allowClear?: boolean
  labelInValue?: boolean
  trigger?: TriggerTrigger
  defaultPopupVisible?: boolean
  disabled?: boolean
  error?: boolean
  loading?: boolean
  popupVisible?: boolean
  defaultInputValue?: string
  placeholder?: string
  size?: SelectSize
  addBefore?: ReactNode
  prefix?: ReactNode | string
  suffixIcon?: ReactNode
  defaultValue?: OptionObject | string | OptionObject[] | string[]
  showSearch?: boolean
  value?: OptionObject | string | OptionObject[] | string[]
  filterOption?: boolean | ((inputValue: string) => boolean)
  onChange?: (
    value: null | OptionObject | string | OptionObject[] | string[],
  ) => void
  onClear?: () => void
  onInputValueChange?: (value: string) => void
  onKeyDown?: (e: SyntheticEvent) => void
  onVisibleChange?: (visible: boolean) => void
  dropdownProps?: DropdownProps
  options?: OptionObject[]
  onDeselect?: (value: string | OptionObject) => void
  multiple?: boolean
  onBlur?: (e: SyntheticEvent) => void
  onFocus?: (e: SyntheticEvent) => void
}

export interface SelectOptionProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps,
    OptionObject {}

export interface OptionObject {
  label: string
  value: string
  disabled?: boolean
}
