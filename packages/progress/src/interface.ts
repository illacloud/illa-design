import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

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
  | "techPink"
  | "techPurple"

export type ProgressType = "line" | "circle" | "miniCircle" | "miniRing"

export type ProgressStatus = "normal" | "success" | "error"

export type ProgressSize = "small" | "medium" | "large"

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  type?: ProgressType
  steps?: number
  status?: ProgressStatus
  color?: ProgressColorScheme
  trailColor?: ProgressColorScheme
  showText?: boolean
  formatText?: (percent: number) => ReactNode
  percent?: number
  strokeWidth?: string
}
