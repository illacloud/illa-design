import { HTMLAttributes } from "react"

export type SpaceSize = "mini" | "small" | "medium" | "large" | string
export type SpaceAlign = "start" | "center" | "end" | "baseline"
export type SpaceDirection = "vertical" | "horizontal"

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpaceSize
  align?: SpaceAlign
  direction?: SpaceDirection
  divider?: boolean
  wrap?: boolean
}