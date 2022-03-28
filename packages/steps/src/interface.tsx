import { HTMLAttributes, ReactNode } from "react"

export type LabelPlacement = "vertical" | "horizontal"
export type StepType = "line" | "dot" | "navigation"
export type StepSize = "small" | "large"
export type StepStatus = "wait" | "process" | "finish" | "error"
export type StepStyleConfig = {
  type: StepType
  size: StepSize
  direction: LabelPlacement
  labelPlacement: LabelPlacement
}

type StepConfig = {
  index: number
  status: StepStatus
  title: string | ReactNode
  description: string | ReactNode
}

export interface StepsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  type?: StepType
  current?: number
  status?: StepStatus
  direction?: LabelPlacement
  labelPlacement?: LabelPlacement
  size?: StepSize
  lineless?: boolean
  customDot?: (icon: React.ReactNode, stepConfig: StepConfig) => React.ReactNode
  onChange?: (current: number, id: any) => void
}

export interface StepProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "onClick"> {
  title: string | ReactNode
  id?: any
  description?: string | ReactNode
  type?: StepType
  status?: StepStatus
  icon?: ReactNode
  disabled?: boolean
  index?: number
  current?: number
  size?: StepSize
  labelPlacement?: LabelPlacement
  direction?: LabelPlacement
  customDot?: (icon: React.ReactNode, stepConfig: StepConfig) => React.ReactNode
  onClick?: (index: number, id: any) => void
  nextStepError?: boolean
  lastStep?: boolean
  lineless?: boolean
}
