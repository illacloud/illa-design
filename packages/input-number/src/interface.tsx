import { ReactNode, InputHTMLAttributes, Ref } from "react"
import { InputBorderColor } from "@illa-design/input"

export type InputNumberSize = "small" | "medium" | "large"

export interface InputNumberProps<T = any>
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "prefix" | "size" | "onChange"
  > {
  inputRef?: Ref<HTMLInputElement>
  borderColor?: InputBorderColor
  step?: number
  precision?: number
  min?: number
  max?: number
  error?: boolean
  disabled?: boolean
  readOnly?: boolean
  defaultValue?: number
  value?: number | string
  placeholder?: string
  width?: string
  mode?: "embed" | "button"
  size?: InputNumberSize
  prefix?: ReactNode
  suffix?: ReactNode
  hideControl?: boolean
  icons?: {
    up?: ReactNode
    down?: ReactNode
    plus?: ReactNode
    minus?: ReactNode
  }
  formatter?: (value: number | string) => string
  parser?: (value: string) => number | string
  // events
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
  onChange?: (value?: number) => void
}

export interface InputNumberStateValue {
  disabled?: boolean
  error?: boolean
  focus?: boolean
  size?: InputNumberProps["size"]
}
