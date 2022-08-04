import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/react"

export type ButtonColorScheme =
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

export type ButtonSize = "small" | "medium" | "large"
export type ButtonVariant = "fill" | "dashed" | "outline" | "text" | "light"
export type ButtonShape = "square" | "round"

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BoxProps {
  _css?: SerializedStyles
  colorScheme?: ButtonColorScheme
  size?: ButtonSize
  variant?: ButtonVariant
  shape?: ButtonShape
  fullWidth?: boolean
  fullHeight?: boolean
  loading?: boolean
  loadingText?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  buttonRadius?: string
  borderColor?: string
  backgroundColor?: string
  textColor?: string
}

export interface ButtonGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    Omit<ButtonGroupContextProps, "first" | "last"> {}

export interface ButtonGroupContextProps {
  colorScheme?: ButtonColorScheme
  size?: ButtonSize
  variant?: ButtonVariant
  shape?: ButtonShape
  spacing?: string
  attached?: boolean
  first?: boolean
  last?: boolean
}
