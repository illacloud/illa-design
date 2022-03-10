import { HTMLAttributes, ReactNode } from "react"

export type TimelineDirection = "horizontal" | "vertical"
export type TimelineMode = "left" | "right" | "alternate" | "top" | "bottom"
export type TimelineLabelPosition = "relative" | "same"

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  reverse?: boolean
  direction?: TimelineDirection
  mode?: TimelineMode
  pending?: boolean | ReactNode
  pendingDot?: ReactNode
  labelPosition?: TimelineLabelPosition
}

export interface TimelineItemProps extends TimelineProps {
  dot?: ReactNode,
  index?: number
}

export interface TimelineContextProps {
  direction?: string
  mode?: string
  index?: number
}
