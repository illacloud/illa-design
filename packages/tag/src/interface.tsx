import { HTMLAttributes } from "react"

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: string | "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
  size?: "sm" | "md" | "lg"
  variant?: "outline" | "solid" | "subtle"
  visible?: boolean
  closable?: boolean
}