import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"

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
  | "techBlue"

export type ButtonSize = "small" | "medium" | "large"
export type ButtonVariant = "fill" | "dashed" | "outline" | "text"
export type ButtonShape = "square" | "round"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: ButtonColorScheme
  size?: ButtonSize
  variant?: ButtonVariant
  shape?: ButtonShape
  fullWidth?: boolean
  loading?: boolean
  loadingText?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement>, Omit<ButtonGroupContextProps, "first" | "last"> {
}

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
