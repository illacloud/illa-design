import { HTMLAttributes } from "react"

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

export interface ColSizeProps {
  span?: number
  offset?: number
  order?: number
  push?: number
  pull?: number
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  align?: RowAlign
  justify?: RowJustify
  horizontalGap?: GridSize | string
  verticalGap?: GridSize | string
}

export interface ColProps extends HTMLAttributes<HTMLDivElement>, ColSizeProps {
  xs?: ColSizeProps | number
  sm?: ColSizeProps | number
  md?: ColSizeProps | number
  lg?: ColSizeProps | number
  xl?: ColSizeProps | number
  xxl?: ColSizeProps | number
}

export interface RowContextProps {
  horizontalGap?: GridSize | string
  verticalGap?: GridSize | string
}
