import { HTMLAttributes, ReactNode } from "react"

export type ButtonColorScheme =
  "white"
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

export type ButtonSize = "small" | "medium" | "large"
export type ButtonVariant = "fill" | "dashed" | "outline" | "text"
export type ButtonShape = "square" | "round"

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: ButtonColorScheme
  size?: ButtonSize
  variant?: ButtonVariant
  shape?: ButtonShape
  isFullWidth?: boolean
  isLoading?: boolean
  loadingText?: string
  isDisabled?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}
