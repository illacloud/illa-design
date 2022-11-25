import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type CardSize = "small" | "medium"

export interface CardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title">,
    BoxProps {
  size?: CardSize
  hoverable?: boolean
  bordered?: boolean
  title?: ReactNode
  extra?: ReactNode
}

export interface CardMetaProps
  extends Omit<HTMLAttributes<HTMLElement>, "title">,
    BoxProps {
  avatar?: ReactNode
  size?: CardSize
  hoverable?: boolean
  bordered?: boolean
  nickname?: string
  title?: ReactNode
  cover?: ReactNode
  description?: ReactNode
  actionList?: ReactNode[]
}
