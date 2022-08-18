import { ReactNode } from "react"
import { AdjustResult } from "./adjust-tips-location"
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
  maxWidth?: string
  zIndex?: number | "auto"
  trigger?: TriggerTrigger
  hideOnInnerInVisible?: boolean
  closeOnInnerClick?: boolean
  closeOnNoElementsInside?: boolean
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
  disabledOutsideScrollable?: boolean
}

export interface TriggerState {
  colorScheme: TriggerColorScheme
  maxWidth?: string
  withoutPadding?: boolean
  withoutShadow?: boolean
  adjustResult?: AdjustResult
  autoAlignPopupWidth?: boolean
}
