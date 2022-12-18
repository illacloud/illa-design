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
      "defaultValue" | "onFocus" | "onBlur" | "onChange" | "prefix"
    >,
    BoxProps {
  colorScheme?: SelectColorScheme
  allowClear?: boolean
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
  defaultValue?: OptionObject
  showSearch?: boolean
  value?: OptionObject | string
  filterOption?: boolean | ((inputValue: string) => boolean)
  onChange?: (value: OptionObject | null | string) => void
  onClear?: () => void
  onInputValueChange?: (value: string) => void
  onKeyDown?: (e: SyntheticEvent<HTMLDivElement>) => void
  onVisibleChange?: (visible: boolean) => void
  dropdownProps?: DropdownProps
  options?: OptionObject[]
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
