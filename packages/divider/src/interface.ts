import { HTMLAttributes } from "react"
import { BoxProps } from "@illa-design/theme"

export type DividerDirection = "vertical" | "horizontal"
export type DividerVariant = "solid" | "dashed" | "dotted" | "double"
export type DividerTextAlign = "start" | "center" | "end"
export type DividerColorScheme =
  | string
  | "gray"
  | "blue"
  | "purple"
  | "red"
  | "green"
  | "yellow"
  | "orange"
  | "cyan"
  | "white"
  | "techPink"
  | "techPurple"

export interface DividerProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  direction?: DividerDirection
  variant?: DividerVariant
  text?: string
  textAlign?: DividerTextAlign
  colorScheme?: DividerColorScheme
}
