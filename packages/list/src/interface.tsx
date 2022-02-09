import { HTMLAttributes, ReactNode } from "react"

export type ListSize = "small" | "medium" | "large"

export interface ListProps<T> extends HTMLAttributes<HTMLDivElement> {
  data?: T[]
  size?: ListSize
  bordered?: boolean
  split?: boolean
  height?: number
  hoverable?: boolean
  header?: ReactNode
  footer?: ReactNode
  render?: (data: T, index: number) => ReactNode
  renderKey?: (data: T, index: number) => string
  bottomOffset?: number
  onReachBottom?: () => void
  hasMore?: boolean
  loader?: ReactNode
  endMessage?: ReactNode
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

export interface VirtualListProps {
  height?: number
}
