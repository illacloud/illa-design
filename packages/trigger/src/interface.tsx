import { ReactNode } from "react"
import { SerializedStyles } from "@emotion/react"
import { AdjustResult } from "./adjust-tips-location"

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

export interface TriggerProps {
  _css?: SerializedStyles
  children?: ReactNode
  colorScheme?: TriggerColorScheme
  clickOutsideToClose?: boolean
  withoutPadding?: boolean
  withoutShadow?: boolean
  maxWidth?: string
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
