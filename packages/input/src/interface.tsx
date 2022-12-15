import { InputHTMLAttributes, ReactNode, SyntheticEvent } from "react"
import { BoxProps } from "@illa-design/theme"

export type InputVariant = "fill" | "outline"
export type InputSize = "small" | "medium" | "large"
export type InputColorScheme =
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

export interface InputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "prefix" | "size" | "onChange" | "maxLength"
    >,
    BoxProps {
  colorScheme?: InputColorScheme
  allowClear?: boolean
  disabled?: boolean
  error?: boolean
  readOnly?: boolean
  showWordLimit?: boolean
  defaultValue?: string
  placeholder?: string
  value?: string
  size?: InputSize
  addAfter?: ReactNode
  addBefore?: ReactNode
  prefix?: ReactNode | string
  suffix?: ReactNode | string
  maxLength?: number | { length: number; errorOnly?: boolean }
  onChange?: (value: string, e: SyntheticEvent<HTMLInputElement>) => void
  onClear?: () => void
  onPressEnter?: () => void
  variant?: InputVariant
}
