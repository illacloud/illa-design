import { HTMLAttributes, MouseEvent, ReactNode } from "react"

export type DrawerPlacement = "top" | "bottom" | "left" | "right"

export interface DrawerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode
  footer?: boolean
  okText?: string
  cancelText?: string
  placement?: DrawerPlacement
  width?: string | number
  height?: string | number
  mask?: boolean
  maskClosable?: boolean
  visible?: boolean
  closable?: boolean
  confirmLoading?: boolean
  onOk?: (e?: MouseEvent) => void
  onCancel?: (e?: MouseEvent) => void
  afterOpen?: () => void
  afterClose?: () => void
  getPopupContainer?: () => Element
}
