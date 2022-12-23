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
  autoAlignPopupWidth?: boolean
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
  defaultValue?: SelectOptionObject | string | SelectOptionObject[] | string[]
  showSearch?: boolean
  value?: SelectOptionObject | string | SelectOptionObject[] | string[]
  filterOption?: boolean | ((inputValue: string) => boolean)
  onChange?: (
    value: null | SelectOptionObject | string | SelectOptionObject[] | string[],
  ) => void
  onClear?: () => void
  onInputValueChange?: (value: string) => void
  onKeyDown?: (e: SyntheticEvent) => void
  onVisibleChange?: (visible: boolean) => void
  dropdownProps?: DropdownProps
  options?: SelectOptionObject[]
  onDeselect?: (value: string | SelectOptionObject) => void
  multiple?: boolean
  onBlur?: (e: SyntheticEvent) => void
  onFocus?: (e: SyntheticEvent) => void
}

export interface SelectOptionObject {
  label: string
  value: string
}
