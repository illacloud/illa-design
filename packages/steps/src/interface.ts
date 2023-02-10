import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type StepsDirection = "vertical" | "horizontal"
export type StepsStatus = "wait" | "process" | "finish" | "error"
export type StepsType = "line" | "dot" | "navigation"

export interface StepsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    BoxProps {
  lineless?: boolean
  current?: number
  items?: StepItem[]
  direction?: StepsDirection
  type?: StepsType
  onChange?: (current: number) => void
}

export interface StepProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    BoxProps {
  lineStatus?: StepsStatus
  lineless?: boolean
  canClick?: boolean
  icon?: ReactNode
  disabled?: boolean
  status?: StepsStatus
  description?: string | ReactNode
  title?: string | ReactNode
  index?: number
  type?: StepsType
  direction?: StepsDirection
  last?: boolean
}

export interface StepItem {
  icon?: ReactNode
  disabled?: boolean
  status?: StepsStatus
  description?: string | ReactNode
  title?: string | ReactNode
}
