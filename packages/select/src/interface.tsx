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
  addAfter?: ReactNode
  prefix?: ReactNode | string
  suffixIcon?: ReactNode
  defaultValue?:
    | SelectOptionObject
    | string
    | SelectOptionObject[]
    | string[]
    | number
    | number[]
  showSearch?: boolean
  value?:
    | SelectOptionObject
    | string
    | SelectOptionObject[]
    | string[]
    | number
    | number[]
  filterOption?: boolean | ((inputValue: string | number) => boolean)
  onChange?: (
    value:
      | null
      | SelectOptionObject
      | string
      | SelectOptionObject[]
      | string[]
      | number
      | number[],
  ) => void
  onClear?: () => void
  readOnly?: boolean
  onInputValueChange?: (value: string | number) => void
  onKeyDown?: (e: SyntheticEvent) => void
  onVisibleChange?: (visible: boolean) => void
  dropdownProps?: DropdownProps
  options?: SelectOptionObject[] | string[] | number[]
  onDeselect?: (value: string | number | SelectOptionObject) => void
  multiple?: boolean
  onBlur?: (e: SyntheticEvent) => void
  onFocus?: (e: SyntheticEvent) => void
}

export interface SelectOptionObject {
  label: string | ReactNode
  value: string | number
  disabled?: boolean
}

export interface OptionProps extends HTMLAttributes<HTMLDivElement> {
  isSelectOption?: boolean
  value: string | number
}
