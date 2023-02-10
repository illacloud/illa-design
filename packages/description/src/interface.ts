import { HTMLAttributes } from "react"
import { BoxProps } from "@illa-design/theme"

export type DescriptionAlign = "left" | "right"
export type DescriptionSize = "small" | "medium" | "large"
export type DescriptionLayout =
  | "horizontal"
  | "vertical"
  | "inline-horizontal"
  | "inline-vertical"

export type DescriptionTableLayout = "auto" | "fixed"

export interface DescriptionColumn {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export interface DescriptionProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  data?: DescriptionItem[]
  bordered?: boolean
  column?: number | DescriptionColumn
  align?: DescriptionAlign
  size?: DescriptionSize
  layout?: DescriptionLayout
  title?: string
  tableLayout?: DescriptionTableLayout
}

export interface DescriptionItem {
  label?: string
  value?: string
  span?: number
}
