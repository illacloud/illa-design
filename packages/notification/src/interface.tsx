import {
  HTMLAttributes,
  ReactNode,
  ForwardRefExoticComponent,
  PropsWithChildren,
} from "react"
import { AlertType } from "@illa-design/alert"

export type MessagePosition = "top" | "bottom"

export type NoticeType = "Notification" | "Message"

export type NotificationType = AlertType | "normal"

export type MessageType = NotificationType | "loading"

export type ConfigProps = {
  maxCount?: number
  getContainer?: () => HTMLElement
  duration?: number
}

export type NoticePosition =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  position?: NoticePosition
  removeId?: string
  notice?: NoticeProps
  shouldClear?: boolean
}

export interface NotificationComponent
  extends ForwardRefExoticComponent<PropsWithChildren<NotificationProps>> {
  info: (config: NoticeProps) => void
  success: (config: NoticeProps) => void
  warning: (config: NoticeProps) => void
  error: (config: NoticeProps) => void
  normal: (config: NoticeProps) => void
  config: (config: ConfigProps) => void
  remove: (id: string) => void
  clear: () => void
  add: (config: NoticeProps) => void
}

export interface NoticeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  action?: ReactNode
  closable?: boolean
  onClose?: () => void
  afterClose?: () => void
  type?: MessageType
  title?: ReactNode
  content?: ReactNode
  icon?: ReactNode
  closeElement?: ReactNode
  showIcon?: boolean
  position?: NoticePosition | MessagePosition
  duration?: number
  id?: string
  noticeType?: NoticeType
  update?: boolean
  removeHook?: (id: string) => void
}

export interface NotificationSet {
  topRight: NoticeProps[]
  topLeft: NoticeProps[]
  bottomLeft: NoticeProps[]
  bottomRight: NoticeProps[]
}

export interface NotificationWrapper {
  topRight?: HTMLDivElement
  topLeft?: HTMLDivElement
  bottomLeft?: HTMLDivElement
  bottomRight?: HTMLDivElement
}
