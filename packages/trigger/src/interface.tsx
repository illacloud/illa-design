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

export type TriggerTrigger = "hover" | "click" | "focus"

export interface TriggerProps {
  colorScheme?: TriggerColorScheme
  withoutPadding?: boolean
  trigger?: TriggerTrigger
  content?: string | ReactNode
  position?: TriggerPosition
  showArrow?: boolean
  closeDelay?: number
  openDelay?: number
  autoFitPosition?: boolean
  closeOnClick?: boolean
  defaultPopupVisible?: boolean
  popupVisible?: boolean
  disabled?: boolean
  hasCloseIcon?: boolean
  onVisibleChange?: (visible: boolean) => void
}
