import { InputHTMLAttributes, ReactNode, SyntheticEvent } from "react"
import { BoxProps } from "@illa-design/theme"

export type InputNumberSize = "small" | "medium" | "large"
export type InputNumberMode = "embed" | "button"
export type InputNumberColorScheme =
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

export interface InputNumberProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "prefix" | "size" | "onChange" | "value" | "defaultValue"
    >,
    BoxProps {
  size?: InputNumberSize
  colorScheme?: InputNumberColorScheme
  disabled?: boolean
  error?: boolean
  hideControl?: boolean
  readOnly?: boolean
  max?: number
  min?: number
  precision?: number
  step?: number
  placeholder?: string
  mode?: InputNumberMode
  prefix?: ReactNode | string
  suffix?: ReactNode | string
  defaultValue?: number
  value?: number
  icons?: {
    up?: ReactNode
    down?: ReactNode
    plus?: ReactNode
    minus?: ReactNode
  }
  onChange?: (value: number | undefined) => void
  onKeyDown?: (e: SyntheticEvent) => void
  formatter?: (value: number | string) => string
}
