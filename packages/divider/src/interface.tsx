import { HTMLAttributes } from "react"

export type DividerDirection = "vertical" | "horizontal"
export type DividerVariant = "solid" | "dashed" | "dotted" | "double"
export type TextAlign = "start" | "center" | "end"
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

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: DividerDirection
  variant?: DividerVariant
  text?: string
  textAlign?: TextAlign
  textSize?: string
  colorScheme?: DividerColorScheme
}
