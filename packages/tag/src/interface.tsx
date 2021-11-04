import { HTMLAttributes } from "react"

export type ColorScheme =
  string
  | "white"
  | "blackAlpha"
  | "black"
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
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
  icon?: string
  onClose?: () => void
}