import { HTMLAttributes, ReactNode } from "react"

export type SpinSize = "small" | "medium" | "large"

export interface SpinProps extends HTMLAttributes<HTMLDivElement> {
  loading?: boolean
  size?: SpinSize
  icon?: ReactNode
  element?: ReactNode
  tip?: string | ReactNode
  placeholder?: string
}
