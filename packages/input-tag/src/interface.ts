import {
  InputHTMLAttributes,
  KeyboardEvent,
  MutableRefObject,
  ReactNode,
  SyntheticEvent,
} from "react"
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
  labelInValue?: boolean
  colorScheme?: InputTagColorScheme
  autoFocus?: boolean
  addBefore?: ReactNode
  addAfter?: ReactNode
  transformValue?: (value: string | TagObject) => string | TagObject
  allowClear?: boolean
  disabled?: boolean
  error?: boolean
  readOnly?: boolean
  saveOnBlur?: boolean
  placeholder?: string
  inputValue?: string
  spaceInput?: boolean
  size?: InputTagSize
  inputRef?: MutableRefObject<HTMLInputElement>
  prefix?: ReactNode | string
  suffix?: ReactNode | string
  defaultValue?: string[] | TagObject[]
  value?: string[] | TagObject[]
  onBlur?: (e: SyntheticEvent) => void
  onChange?: (value: TagObject[] | string[]) => void
  onClear?: () => void
  onFocus?: (e: SyntheticEvent) => void
  onInputChange?: (inputValue: string, event?: SyntheticEvent) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onAdd?: (value: TagObject | string, index: number, e: SyntheticEvent) => void
  onRemove?: (
    value: TagObject | string,
    index: number,
    e: SyntheticEvent,
  ) => void
  validate?: (
    inputValue: string,
    values: string[] | TagObject[],
  ) => boolean | Promise<boolean>
  renderItem?: (value: TagObject | string) => ReactNode
  inputTagRef?: MutableRefObject<InputTagRefHandler | undefined>
}

export interface TagObject {
  label: string
  value: string
  closeable?: boolean
}

export interface InputTagRefHandler {
  focus: () => void
}
