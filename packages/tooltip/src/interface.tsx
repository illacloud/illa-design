import { HTMLAttributes } from "react"

export type ToolTipColorScheme =
  string
  | "white"
  | "blackAlpha"
  | "gray"
  | "grayBlue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"

export type ToolTipPosition =
  "top"
  | "tl"
  | "tr"
  | "bottom"
  | "bl"
  | "br"
  | "left"
  | "lt"
  | "lb"
  | "right"
  | "rt"
  | "rb"

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  colorScheme?: ToolTipColorScheme
  content?: string
  position?: ToolTipPosition
  showArrow?: boolean
  closeDelay?: number
  openDelay?: number
  autoFitPosition?: boolean
  closeOnClick?: boolean
  defaultPopupVisible?: boolean
  popupVisible?: boolean
  disabled?: boolean
  onVisibleChange?: (visible: boolean) => void
}
