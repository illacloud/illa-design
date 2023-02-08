import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  RefAttributes,
} from "react"
import { TriggerColorScheme, TriggerProps } from "@illa-design/trigger"
import { BoxProps } from "@illa-design/theme"

export interface DropdownProps {
  children?: ReactNode
  colorScheme?: TriggerColorScheme
  dropList?: ReactNode
  position?: TriggerProps["position"]
  trigger?: TriggerProps["trigger"]
  disabled?: boolean
  defaultPopupVisible?: boolean
  popupVisible?: boolean
  triggerProps?: Partial<TriggerProps>
  autoAlignPopupWidth?: boolean
  // events
  onVisibleChange?: (visible: boolean) => void
}

export interface DropListProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  disabled?: boolean
  onClickItem?: (key: string, clickedNode: ReactNode, event: MouseEvent) => void
}

export interface DropListItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  value: string
  colorScheme?: TriggerColorScheme
  selected?: boolean

  deleted?: boolean
  isSelectOption?: boolean
  title?: string | ReactNode
  disabled?: boolean
}
