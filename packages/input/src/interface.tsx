import {
  AreaHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SyntheticEvent,
} from "react"
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
  onChange?: (value: string, e: SyntheticEvent) => void
  onClear?: () => void
  onPressEnter?: () => void
  variant?: InputVariant
}

export interface SearchProps extends Omit<InputProps, "suffix" | "type"> {
  loading?: boolean
  searchButton?: ReactNode
  onSearch?: () => void
}

export interface PasswordProps extends Omit<InputProps, "suffix" | "type"> {
  visibilityToggle?: boolean
  visibility?: boolean
  defaultVisibility?: boolean
  onVisibilityChange?: (visibility: boolean) => void
}

export interface TextareaProps
  extends Omit<
      AreaHTMLAttributes<HTMLTextAreaElement>,
      "onChange" | "maxLength" | "placeholder" | "value" | "defaultValue"
    >,
    BoxProps {
  colorScheme?: InputColorScheme
  readOnly?: boolean
  variant?: InputVariant
  allowClear?: boolean
  disabled?: boolean
  error?: boolean
  showWordLimit?: boolean
  defaultValue?: string
  placeholder?: string
  value?: string
  autoSize?: boolean | { minRows?: number; maxRows?: number }
  maxLength?: number | { length: number; errorOnly?: boolean }
  onChange?: (value: string, e: SyntheticEvent) => void
  onClear?: () => void
  onPressEnter?: () => void
}
