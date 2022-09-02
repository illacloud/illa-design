import { HTMLAttributes } from "react"
import { BoxProps } from "@illa-design/theme"

export type SpaceSize = "mini" | "small" | "medium" | "large" | string
export type SpaceAlign = "start" | "center" | "end" | "baseline"
export type SpaceDirection = "vertical" | "horizontal"

export interface SpaceProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  size?: SpaceSize | SpaceSize[]
  align?: SpaceAlign
  direction?: SpaceDirection
  divider?: boolean
  wrap?: boolean
}
