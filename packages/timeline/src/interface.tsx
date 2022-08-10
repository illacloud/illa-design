import { HTMLAttributes, ReactNode } from "react"
import { SerializedStyles } from "@emotion/react"
import { BoxProps } from "@illa-design/theme"

export type TimelineDirection = "horizontal" | "vertical"
export type TimelineMode = "left" | "right" | "alternate" | "top" | "bottom"
export type TimelineLabelPosition = "relative" | "same"
export type TimelineItemDotType = "hollow" | "solid"
export type TimelineItemLineType = "solid" | "dashed" | "dotted"

export interface TimelineProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  reverse?: boolean
  direction?: TimelineDirection
  mode?: TimelineMode
  pending?: boolean | ReactNode
  pendingDot?: ReactNode
}

export interface TimelineItemProps extends TimelineProps, BoxProps {
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
  direction?: TimelineDirection
  mode?: TimelineMode
  index?: number
  isChildrenLast?: boolean
}
