import { HTMLAttributes, ReactNode } from "react"

export type TimelineDirection = "horizontal" | "vertical"
export type TimelineMode = "left" | "right" | "alternate" | "top" | "bottom"
export type TimelineLabelPosition = "relative" | "same"
export type TimelineItemDotType = "hollow" | "solid"
export type TimelineItemLineType = "solid" | "dashed" | "dotted"

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  reverse?: boolean
  direction?: TimelineDirection
  mode?: TimelineMode
  pending?: boolean | ReactNode
  pendingDot?: ReactNode
}

export interface TimelineItemProps extends TimelineProps {
  dot?: ReactNode
  index?: number
  label?: string | ReactNode
  labelPosition?: TimelineLabelPosition
  dotColor?: string
  dotType?: TimelineItemDotType
  lineType?: TimelineItemLineType
  lineColor?: string
  autoFixDotSize?: boolean
}

export interface TimelineContextProps {
  direction?: string
  mode?: string
  index?: number
}
