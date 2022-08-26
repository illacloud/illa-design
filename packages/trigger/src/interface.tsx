import { ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type TriggerColorScheme =
  | string
  | "white"
  | "gray"
  | "grayBlue"
  | "blackAlpha"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "techPink"
  | "techPurple"

export type TriggerPosition =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"

export type TriggerTrigger = "hover" | "click" | "focus" | "contextmenu"

export type CustomPositionType = {
  x?: number
  y?: number
}

export interface TriggerProps extends BoxProps {
  children?: ReactNode
  colorScheme?: TriggerColorScheme
  clickOutsideToClose?: boolean
  withoutPadding?: boolean
  withoutShadow?: boolean
  trigger?: TriggerTrigger
  closeOnInnerClick?: boolean
  content?: string | ReactNode
  position?: TriggerPosition
  showArrow?: boolean
  closeDelay?: number
  openDelay?: number
  autoFitPosition?: boolean
  closeOnClick?: boolean
  defaultPopupVisible?: boolean
  autoAlignPopupWidth?: boolean
  popupVisible?: boolean
  disabled?: boolean
  onVisibleChange?: (visible: boolean) => void
  alignPoint?: boolean
}
