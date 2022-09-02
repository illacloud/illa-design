import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type DrawerPlacement = "top" | "bottom" | "left" | "right"

export interface DrawerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    BoxProps {
  title?: ReactNode
  footer?: boolean
  okText?: string
  cancelText?: string
  placement?: DrawerPlacement
  mask?: boolean
  maskClosable?: boolean
  visible?: boolean
  closable?: boolean
  focusLock?: boolean
  autoFocus?: boolean
  confirmLoading?: boolean
  onOk?: (e?: MouseEvent) => void
  onCancel?: (e?: MouseEvent) => void
  afterOpen?: () => void
  afterClose?: () => void
  getPopupContainer?: () => Element
}
