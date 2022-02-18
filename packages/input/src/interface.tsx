import {
  ReactNode,
  ChangeEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react"
import * as React from "react"

export type InputBoarderColor =
  | string
  | "gray"
  | "blue"
  | "purple"
  | "red"
  | "green"
  | "yellow"
  | "orange"
  | "cyan"
  | "white"

export type InputVariant = "fill" | "outline"

export type InputSize = "small" | "medium" | "large"

export type InputRefType = {
  blur?: () => void
  focus?: () => void
  dom: HTMLInputElement | null
}

export type TextAreaType = {
  blur?: () => void
  focus?: () => void
  dom: HTMLTextAreaElement | null
}

export interface InputElementProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant
  placeholder?: string
  boarderColor?: InputBoarderColor
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  size?: InputSize
  value?: string
  maxLength?: number
  showCount?: boolean
  allowClear?: boolean
  textCenterHorizontal?: boolean
  onClear?: () => void
  onValueChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix" | "size"> {
  variant?: InputVariant
  placeholder?: string
  boarderColor?: InputBoarderColor
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  size?: InputSize
  value?: string
  maxLength?: number
  showCount?: boolean
  allowClear?: boolean
  prefix?: ReactNode
  suffix?: ReactNode
  addonAfter?: ReactNode
  addonBefore?: ReactNode
  requirePadding?: boolean
  textCenterHorizontal?: boolean
  onClear?: () => void
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: InputVariant
  placeholder?: string
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  autoSize?:
    | boolean
    | {
        minRows?: number
        maxRows?: number
      }
  value?: string
  maxLength?: number
  showCount?: boolean
  allowClear?: boolean
  onClear?: () => void
}

export interface SearchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  searchButton?: boolean
  loading?: boolean

  variant?: InputVariant
  placeholder?: string
  boarderColor?: InputBoarderColor
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  size?: InputSize
  value?: string
  maxLength?: number
  allowClear?: boolean
  requirePadding?: boolean
  textCenterHorizontal?: boolean
  onClear?: () => void
  onSearch?: (value?: string) => void
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface PasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  invisibleButton?: boolean
  loading?: boolean

  variant?: InputVariant
  placeholder?: string
  boarderColor?: InputBoarderColor
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  size?: InputSize
  value?: string
  allowClear?: boolean
  requirePadding?: boolean
  onClear?: () => void
}
