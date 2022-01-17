import { HTMLAttributes, ReactNode, ChangeEvent } from "react"

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

export interface InputElementProps extends Omit<HTMLAttributes<HTMLInputElement>, "prefix"> {
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
}

export interface TextAreaProps extends HTMLAttributes<HTMLDivElement> {
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
  showCount?: boolean
  allowClear?: boolean
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
  maxLength?: number
  showCount?: boolean
  allowClear?: boolean
}
