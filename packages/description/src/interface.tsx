import { HTMLAttributes } from "react"

export type DescriptionAlign = "left" | "right"
export type DescriptionSize = "small" | "medium" | "large"
export type DescriptionLayout =
  | "horizontal"
  | "vertical"
  | "inline-horizontal"
  | "inline-vertical"

export type DescriptionTabLayout = "auto" | "fixed"

export interface DescriptionColumn {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export interface DescriptionProps extends HTMLAttributes<HTMLDivElement> {
  data?: DescriptionItem[]
  bordered?: boolean
  column?: number | DescriptionColumn
  align?: DescriptionAlign
  size?: DescriptionSize
  layout?: DescriptionLayout
  title?: string
  tableLayout?: DescriptionTabLayout
}

export interface DescriptionItem {
  label?: string
  value?: string
  span?: number
}
