import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type AlertType = "info" | "success" | "warning" | "error"

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLElement>, "title">,
    BoxProps {
  action?: ReactNode
  closable?: boolean
  onClose?: (event: MouseEvent) => void
  afterClose?: () => void
  type?: AlertType
  title?: ReactNode
  content?: ReactNode
  icon?: ReactNode
  closeElement?: ReactNode
  showIcon?: boolean
  banner?: boolean
}
