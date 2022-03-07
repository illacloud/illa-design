import { HTMLAttributes, ReactNode } from "react"

export type SpinSize = "small" | "medium" | "large"
export type SpinType = "gradient" | "circle"

export interface SpinProps extends HTMLAttributes<HTMLDivElement> {
  loading?: boolean
  size?: SpinSize
  icon?: ReactNode
  element?: ReactNode
  tip?: string | ReactNode
  type?: SpinType
  placeholder?: string
}
