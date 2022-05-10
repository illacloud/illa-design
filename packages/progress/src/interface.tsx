import { HTMLAttributes, ReactNode } from "react"

export type ProgressColorScheme =
  | string
  | "white"
  | "blackAlpha"
  | "gray"
  | "grayBlue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "tech-pink"
  | "tech-purple"

export type ProgressType = "line" | "circle" | "miniCircle" | "miniRing"

export type ProgressStatus = "normal" | "success" | "error"

export type ProgressSize = "small" | "medium" | "large"

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  type?: ProgressType
  steps?: number
  status?: ProgressStatus
  color?: ProgressColorScheme
  trailColor?: ProgressColorScheme
  showText?: boolean
  formatText?: (percent: number) => ReactNode
  percent?: number
  width?: string
  strokeWidth?: string
}
