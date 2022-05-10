import { HTMLAttributes, ReactNode, SyntheticEvent } from "react"

export type TagColorScheme =
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
  | "tech-purple"
  | "tech-pink"

export type TagVariant = "outline" | "fill" | "light"

export type TagSize = "small" | "medium" | "large"

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: TagColorScheme
  size?: TagSize
  variant?: TagVariant
  visible?: boolean
  closable?: boolean
  icon?: ReactNode
  onClose?: (event: SyntheticEvent) => void
}
