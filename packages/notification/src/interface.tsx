import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { AlertType } from "@illa-design/alert"

export type NoticeType = "Notification" | "Message"

export type NotificationType = AlertType | "normal"

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

export interface NotificationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  action?: ReactNode
  closable?: boolean
  onClose?: (id: string) => void
  afterClose?: () => void
  type?: NotificationType
  title?: ReactNode
  content?: ReactNode
  icon?: ReactNode
  closeElement?: ReactNode
  showIcon?: boolean
  duration?: number
  position?: NoticePosition
  id?: string
}

export interface NoticeProps extends NotificationProps {
  noticeType?: NoticeType
  update?: boolean
}

export interface BaseNoticeState {
  notices: { [key: string]: any }[]
  position?: string
}
