import { BoxProps } from "@illa-design/theme"
import { ReactNode } from "react"

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

export interface TriggerContext {
  renderInBody?: boolean
  children?: ReactNode
}

export interface TriggerProps extends BoxProps, TriggerContext {
  children?: ReactNode
  colorScheme?: TriggerColorScheme
  inline?: boolean
  closeWhenScroll?: boolean
  clickOutsideToClose?: boolean
  withoutPadding?: boolean
  withoutShadow?: boolean
  withoutOffset?: boolean
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
