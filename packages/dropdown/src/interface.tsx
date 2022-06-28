import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  RefAttributes,
} from "react"
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

export interface DropListProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  isDropList?: boolean
  onClickItem?: (key: string, event: MouseEvent) => void
}

export interface DropListItemProps extends HTMLAttributes<HTMLDivElement> {
  key: string
  _key?: string
  title?: string
  fontColor?: string
  disabled?: boolean
}

export interface DropListComponent
  extends ForwardRefExoticComponent<
    PropsWithChildren<DropListProps> & RefAttributes<HTMLDivElement>
  > {
  Item: ForwardRefExoticComponent<DropListItemProps>
}
