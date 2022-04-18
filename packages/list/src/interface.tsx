import { HTMLAttributes, ReactNode, UIEventHandler } from "react"
import { SerializedStyles } from "@emotion/react"

export type ListSize = "small" | "medium" | "large"

export interface ListProps<T>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onScroll"> {
  data?: T[]
  size?: ListSize
  bordered?: boolean
  split?: boolean
  height?: number
  hoverable?: boolean
  renderRaw?: boolean
  header?: ReactNode | string
  footer?: ReactNode | string
  render?: (data: T, index: number) => ReactNode
  renderKey?: (data: T, index: number) => string
  bottomOffset?: number
  onReachBottom?: () => void
  hasMore?: boolean
  loader?: ReactNode
  endMessage?: ReactNode
  onScroll?: UIEventHandler<HTMLElement>
  _css?: SerializedStyles
}

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  actions?: ReactNode
  extra?: ReactNode
}

export interface ListItemMetaProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  avatar?: string
  description?: string
}
