import { HTMLAttributes } from "react"
import { BoxProps } from "@illa-design/theme"

export type RowAlign = "start" | "center" | "end" | "stretch"
export type RowJustify =
  | "start"
  | "center"
  | "end"
  | "space-around"
  | "space-between"

export interface GridSize {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
}

export interface ColSize {
  span?: number
  offset?: number
  order?: number
  push?: number
  pull?: number
}

export interface ColGridProps {
  xs?: ColSize | number
  sm?: ColSize | number
  md?: ColSize | number
  lg?: ColSize | number
  xl?: ColSize | number
  xxl?: ColSize | number
}

export interface RowGridProps {
  align?: RowAlign
  justify?: RowJustify
  horizontalGap?: GridSize | string
  verticalGap?: GridSize | string
}

export interface RowProps
  extends HTMLAttributes<HTMLDivElement>,
    RowGridProps,
    BoxProps {}

export interface ColProps
  extends HTMLAttributes<HTMLDivElement>,
    ColSize,
    ColGridProps,
    BoxProps {}

export interface RowContextProps {
  horizontalGap?: GridSize | string
  verticalGap?: GridSize | string
  childCount?: number
}
