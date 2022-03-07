import { HTMLAttributes, ReactNode } from "react"

export interface CommentProps extends HTMLAttributes<HTMLDivElement> {
  actions?: Array<ReactNode>
  author?: ReactNode
  avatar?: ReactNode
  children?: ReactNode
  content?: ReactNode
  datetime?: ReactNode
  placeholder?: string
}
