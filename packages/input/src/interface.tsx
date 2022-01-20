import { HTMLAttributes, ReactNode, ChangeEvent, InputHTMLAttributes, TextareaHTMLAttributes } from "react"

export type InputBoarderColor =
  string
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

export interface InputElementProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
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
  onValueChange?: (value: string, event:ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
}

export interface InputProps extends Omit<HTMLAttributes<HTMLDivElement>, "prefix"> {
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
  onClear?: () => void
}

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: InputVariant
  placeholder?: string
  defaultValue?: string
  disabled?: boolean
  error?: boolean
  autoSize?: boolean | {
      minRows?: number
      maxRows?: number
    }
  value?: string
  maxLength?: number
  showCount?: boolean
  allowClear?: boolean
  onClear?: () => void
}

export interface SearchProps extends HTMLAttributes<HTMLDivElement> {
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
  onClear?: () => void
}

export interface PasswordProps extends HTMLAttributes<HTMLDivElement> {
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
  onClear?: () => void
}
