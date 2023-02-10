import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export interface CommentProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  actions?: ReactNode
  author?: ReactNode | string
  avatar?: ReactNode
  children?: ReactNode
  content?: ReactNode
  datetime?: ReactNode | string
  align?:
    | "left"
    | "right"
    | { datetime?: "left" | "right"; actions?: "left" | "right" }
  placeholder?: string
}
