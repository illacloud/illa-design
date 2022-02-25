import { HTMLAttributes } from "react"

export type RowAlign = "start" | "center" | "end" | "stretch"
export type RowJustify =
  | "start"
  | "center"
  | "end"
  | "space-around"
  | "space-between"

export interface GridSize {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  align?: RowAlign
  justify?: RowJustify
  horizontalGap?: GridSize | string
  verticalGap?: GridSize | string
}

export interface ColProps extends HTMLAttributes<HTMLDivElement>, GridSize {
  span?: number
  offset?: number
  order?: number
  push?: number
  pull?: number
}

export interface RowContextProps {
  horizontalGap?: GridSize | string
  verticalGap?: GridSize | string
}
