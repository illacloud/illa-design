import { HTMLAttributes, ReactNode, SyntheticEvent } from "react"
import { BoxProps } from "@illa-design/theme"

export type StepsDirectionType = "vertical" | "horizontal"
export type StepsSize = "small" | "medium" | "large"
export type StepsStatus = "wait" | "process" | "finish" | "error"
export type StepsType = "line" | "dot" | "navigation"

export interface StepsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    BoxProps {
  lineless?: boolean
  current?: number
  direction?: StepsDirectionType
  labelPlacement?: StepsDirectionType
  size?: StepsSize
  status?: StepsStatus
  type?: StepsType
  onChange?: (current: number, id: any) => void
}

export interface StepProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "onClick">,
    BoxProps {
  index?: number
  lineStatus?: StepsStatus
  showLine?: boolean
  icon?: ReactNode
  disabled?: boolean
  status?: StepsStatus
  description?: string | ReactNode
  title?: string | ReactNode
  stepId?: string
  onClick?: (index: number, id: string, e: SyntheticEvent) => void
}
