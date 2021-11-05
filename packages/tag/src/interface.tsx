import { HTMLAttributes, ReactNode } from "react"

export type ColorScheme =
  string
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

export type Variant = "outline" | "fill" | "light"

export type Size = "small" | "middle" | "large"

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: ColorScheme
  size?: Size
  variant?: Variant
  visible?: boolean
  closable?: boolean
  icon?: ReactNode
  onClose?: () => void
}