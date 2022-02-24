import { HTMLAttributes } from "react"

export type RowAlign = "top" | "middle" | "bottom"
export type RowJustify =
  | "left"
  | "center"
  | "right"
  | "space-around"
  | "space-between"

export interface GridGap {
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
  horizontalGap?: GridGap[] | string
  verticalGap?: GridGap[] | string
}

export interface ColProps extends HTMLAttributes<HTMLDivElement>, GridGap {
  span?: number
  offset?: number
  order?: number
  push?: number
  pull?: number
}
