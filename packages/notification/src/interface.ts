import { ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type NotificationPosition =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"

export type NotificationType =
  | "info"
  | "error"
  | "success"
  | "warning"
  | "normal"

export interface NotificationProps extends BoxProps {
  type?: NotificationType
  action?: ReactNode
  closable?: boolean
  showIcon?: boolean
  duration?: number
  id?: string
  position?: NotificationPosition
  icon?: ReactNode
  title?: string | ReactNode
  content?: string | ReactNode
  onClose?: (id?: string) => void
}
