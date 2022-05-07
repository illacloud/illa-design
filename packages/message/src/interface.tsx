import {
  ConfigProps,
  NoticeProps,
  MessagePosition,
} from "@illa-design/notification"
import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes
} from "react"

export interface MessageSet {
  top: NoticeProps[]
  bottom: NoticeProps[]
}

export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  position?: MessagePosition
  removeId?: string
  notice?: NoticeProps
  shouldClear?: boolean
}

export interface MessageComponent
  extends ForwardRefExoticComponent<PropsWithChildren<MessageProps> & RefAttributes<HTMLDivElement>> {
  info: (config: NoticeProps | string) => void
  success: (config: NoticeProps | string) => void
  warning: (config: NoticeProps | string) => void
  error: (config: NoticeProps | string) => void
  normal: (config: NoticeProps | string) => void
  loading: (config: NoticeProps | string) => void
  config: (config: ConfigProps) => void
  remove: (id: string) => void
  clear: () => void
  add: (config: NoticeProps) => void
}

export interface MessageWrapper {
  top?: HTMLDivElement
  bottom?: HTMLDivElement
}
