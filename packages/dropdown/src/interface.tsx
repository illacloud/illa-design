import { ReactNode } from "react"
import { TriggerProps } from "@illa-design/trigger"

export interface DropdownProps {
  children?: ReactNode
  dropList?: ReactNode
  position?: TriggerProps["position"]
  trigger?: TriggerProps["trigger"]
  disabled?: boolean
  defaultPopupVisible?: boolean
  popupVisible?: boolean
  triggerProps?: Partial<TriggerProps>
  getPopupContainer?: (node: HTMLElement) => Element
  // events
  onVisibleChange?: (visible: boolean) => void
}
