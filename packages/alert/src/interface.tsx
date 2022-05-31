import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { SerializedStyles } from "@emotion/react"

export type AlertType = "info" | "success" | "warning" | "error"

export interface AlertProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  _css?: SerializedStyles
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
