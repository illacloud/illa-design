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

export type Shape = "circle" | "square"

export type Size = "small" | "medium" | "large"

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: ColorScheme
  size?: Size
  text?: string
  shape?: Shape
  src?: string
  icon?: ReactNode
}