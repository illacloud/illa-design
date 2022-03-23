import { HTMLAttributes, ReactNode } from "react"

export type labelPlacement = "vertical" | "horizontal"
export type stepType = "line" | "dot" | "navigation"
export type stepSize = "small" | "large"
export type stepStatus = "wait" | "process" | "finish" | "error"

type StepConfig = {
  index: number
  status: stepStatus
  title: string | ReactNode
  description: string | ReactNode
}

export interface StepsProps extends HTMLAttributes<HTMLDivElement> { }

export interface StepProps extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "onClick"> {
  id: any
  title: string | ReactNode
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
}
