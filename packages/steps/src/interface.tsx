import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type LabelPlacement = "vertical" | "horizontal"
export type StepVariant = "line" | "dot" | "navigation"
export type StepSize = "small" | "large"
export type StepStatus = "wait" | "process" | "finish" | "error"
export type StepStyleConfig = {
  variant: StepVariant
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
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    BoxProps {
  variant?: StepVariant
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
  extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "onClick">,
    BoxProps {
  title: string | ReactNode
  id?: any
  description?: string | ReactNode
  variant?: StepVariant
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
