import { HTMLAttributes, MouseEvent, ReactNode } from "react"

export type AlertType = "info" | "success" | "warning" | "error"

export interface AlertProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
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
