import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type MessagePosition = "top" | "bottom"
export type MessageType =
  | "info"
  | "error"
  | "success"
  | "warning"
  | "loading"
  | "normal"

export interface MessageProps extends BoxProps {
  type?: MessageType
  closable?: boolean
  showIcon?: boolean
  duration?: number
  id?: string
  position?: MessagePosition
  icon?: ReactNode
  content?: string | ReactNode
  onClose?: (id?: string) => void
}
