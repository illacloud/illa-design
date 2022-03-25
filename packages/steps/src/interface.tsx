import { HTMLAttributes, ReactNode } from "react"

export type labelPlacement = "vertical" | "horizontal"
export type stepType = "line" | "dot" | "navigation"
export type stepSize = "small" | "large"
export type stepStatus = "wait" | "process" | "finish" | "error"

export type StepStyleConfig = {
  type: stepType
  size: stepSize
  direction: labelPlacement
  labelPlacement: labelPlacement
}

type StepConfig = {
  index: number
  status: stepStatus
  title: string | ReactNode
  description: string | ReactNode
}

export interface StepsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  type?: stepType
  current?: number
  status?: stepStatus
  direction?: labelPlacement
  labelPlacement?: labelPlacement
  size?: stepSize
  lineless?: boolean
  customDot?: (icon: React.ReactNode, stepConfig: StepConfig) => React.ReactNode
  onChange?: (current: number, id: any) => void
}

export interface StepProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "onClick"> {
  title: string | ReactNode
  id?: any
  description?: string | ReactNode
  type?: stepType
  status?: stepStatus
  icon?: ReactNode
  disabled?: boolean
  index?: number
  current?: number
  size?: stepSize
  labelPlacement?: labelPlacement
  direction?: labelPlacement
  customDot?: (icon: React.ReactNode, stepConfig: StepConfig) => React.ReactNode
  onClick?: (index: number, id: any) => void
  nextStepError?: boolean
  lastStep?: boolean
  lineless?: boolean
}
