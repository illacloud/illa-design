import { HTMLAttributes, ReactNode, CSSProperties } from "react"

export type CardSize = "small" | "medium"

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  size?: CardSize
  hoverable?: boolean
  loading?: boolean
  bordered?: boolean
  headerStyle?: CSSProperties
  bodyStyle?: CSSProperties
  cover?: ReactNode
  title?: ReactNode
  actions?: ReactNode[]
  extra?: ReactNode
}

export interface CardMetaProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  avatar?: ReactNode
  title?: ReactNode
  description?: ReactNode
  actionList?: ReactNode[]
}

export interface CardGridProps extends HTMLAttributes<HTMLElement> {
  hoverable?: boolean
}
