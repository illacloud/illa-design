import { HTMLAttributes } from "react"

export type ColorScheme =
  string
  | "whiteAlpha"
  | "blackAlpha"
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "cyan"
  | "purple"
  | "pink"
  | "linkedin"
  | "facebook"
  | "messenger"
  | "whatsapp"
  | "twitter"
  | "telegram"

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: ColorScheme
  size?: "small" | "middle" | "large"
  variant?: "outline" | "solid" | "subtle"
  visible?: boolean
  closable?: boolean
}