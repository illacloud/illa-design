import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { ButtonProps } from "@illa-design/button"
import { BoxProps } from "@illa-design/theme"
import { MessageProps } from "@illa-design/message"

export type ModalAlignType = "left" | "center" | "right" | ""
export type ModalType = "info" | "error" | "success" | "warning"

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "id">,
    BoxProps {
  id?: string
  type?: ModalType
  visible?: boolean
  withoutLine?: boolean
  withoutPadding?: boolean
  mask?: boolean
  okLoading?: boolean
  title?: ReactNode | string
  maskClosable?: boolean
  hideCancel?: boolean
  closable?: boolean
  closeElement?: ReactNode
  okText?: string
  cancelText?: string
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  footer?: boolean
  footerAlign?: ModalAlignType
  focusLock?: boolean
  autoFocus?: boolean
  onCancel?: () => void
  onOk?: (e?: MouseEvent) => Promise<any> | void
  afterOpen?: () => void
  afterClose?: () => void
}

export interface ModalShowProps extends ModalProps {
  blockOkHide?: boolean
  blockCancelHide?: boolean
}
