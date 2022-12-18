import { InputHTMLAttributes, ReactNode, SyntheticEvent } from "react"
import { BoxProps } from "@illa-design/theme"

export type InputTagSize = "small" | "medium" | "large"
export type InputTagColorScheme =
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

export interface InputTagProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "prefix" | "size" | "onChange" | "value" | "defaultValue"
    >,
    BoxProps {
  colorScheme?: InputTagColorScheme
  autoFocus?: boolean
  addBefore?: ReactNode
  addAfter?: ReactNode
  allowClear?: boolean
  disabled?: boolean
  error?: boolean
  readOnly?: boolean
  saveOnBlur?: boolean
  placeholder?: string
  inputValue?: string
  size?: InputTagSize
  prefix?: ReactNode | string
  suffix?: ReactNode | string
  defaultValue?: TagObject[]
  value?: TagObject[]
  onBlur?: (e: SyntheticEvent) => void
  onChange?: (value: TagObject[]) => void
  onClear?: () => void
  onFocus?: (e: SyntheticEvent) => void
  onInputChange?: (inputValue: string, event?: SyntheticEvent) => void
  onKeyDown?: (e: SyntheticEvent) => void
  onPressEnter?: (e: SyntheticEvent) => void
  onRemove?: (value: TagObject, index: number, e: SyntheticEvent) => void
  renderItem?: (value: TagObject) => ReactNode
}

export interface TagObject {
  label: string
  value: string
  closeable?: boolean
}
