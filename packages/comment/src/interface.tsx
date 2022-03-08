import { HTMLAttributes, ReactNode } from "react"

export interface ActionProps extends Object {}

export interface CommentProps extends HTMLAttributes<HTMLDivElement> {
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
