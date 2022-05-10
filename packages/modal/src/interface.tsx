import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  MouseEvent,
  ReactNode,
  ReactElement,
  RefAttributes
} from "react"
import { ButtonProps } from "@illa-design/button"
import { AlertType as ModalType } from "@illa-design/alert"
import { SerializedStyles } from "@emotion/react"

export type ModalReturnProps = {
  update: (newConfig: ConfirmProps) => void
  close: () => void
}

export type HolderRef = {
  addInstance: (ins: ReactElement) => void
  removeInstance: (ins: ReactElement) => void
}

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  visible?: boolean
  _css?: SerializedStyles
  confirmLoading?: boolean
  mask?: boolean
  title?: ReactNode
  alignCenter?: boolean
  maskClosable?: boolean
  hideCancel?: boolean
  simple?: boolean
  closable?: boolean
  closeElement?: ReactNode
  okText?: string
  cancelText?: string
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  footer?: boolean
  focusLock?: boolean
  autoFocus?: boolean
  getPopupContainer?: () => Element
  onCancel?: () => void
  onOk?: (e?: MouseEvent) => Promise<any> | void
  afterOpen?: () => void
  afterClose?: () => void
}

export interface PortalProps {
  children?: ReactNode
  container?: Element
}

export type ModalConfigType = {
  simple?: boolean
}

export interface ConfirmProps extends ModalProps {
  content?: ReactNode
  icon?: ReactNode | null
  isNotice?: boolean
  noticeType?: ModalType
}

export interface ModalComponent
  extends ForwardRefExoticComponent<PropsWithChildren<ModalProps> & RefAttributes<HTMLDivElement>> {
  confirm: (props: ConfirmProps) => ModalReturnProps
  info: (props: ConfirmProps) => ModalReturnProps
  success: (props: ConfirmProps) => ModalReturnProps
  warning: (props: ConfirmProps) => ModalReturnProps
  error: (props: ConfirmProps) => ModalReturnProps
  config: (config: ModalConfigType) => void
  destroyAll: () => void
  useModal: () => [modalFunctionsType, ReactElement]
}

export type modalFunctionsType = {
  confirm: (props: ConfirmProps) => ModalReturnProps
  info: (props: ConfirmProps) => ModalReturnProps
  success: (props: ConfirmProps) => ModalReturnProps
  warning: (props: ConfirmProps) => ModalReturnProps
  error: (props: ConfirmProps) => ModalReturnProps
}
