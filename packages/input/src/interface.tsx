import { HTMLAttributes, ReactNode } from "react"

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
