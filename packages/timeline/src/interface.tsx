import { HTMLAttributes, ReactNode, CSSProperties } from "react"

export type TimelineDirection = "horizontal" | "vertical"
export type TimelineMode = "left" | "right" | "alternate"
export type TimelineLabelPosition = "relative" | "same"

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties
  // className?: string | string[]
  reverse?: boolean
  direction?: TimelineDirection
  mode?: TimelineMode
  pending?: boolean | ReactNode
  pendingDot?: ReactNode
  labelPosition?: TimelineLabelPosition
}

export interface TimelineItemProps extends TimelineProps {}
