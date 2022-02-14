import { HTMLAttributes } from "react"

export type DividerDirection = "vertical" | "horizontal"
export type DividerVariant = "solid" | "dashed" | "dotted" | "double"

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: DividerDirection
  variant?: DividerVariant
}
