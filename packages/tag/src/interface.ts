import { HTMLAttributes, ReactNode, SyntheticEvent } from "react"
import { BoxProps } from "@illa-design/theme"

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
  | "techPurple"
  | "techPink"

export type TagVariant = "outline" | "fill" | "light"

export type TagSize = "small" | "medium" | "large"

export interface TagProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  clickable?: boolean
  colorScheme?: TagColorScheme
  size?: TagSize
  variant?: TagVariant
  visible?: boolean
  closable?: boolean
  icon?: ReactNode
  onClose?: (event: SyntheticEvent) => void
}
