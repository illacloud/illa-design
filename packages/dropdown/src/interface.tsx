import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  RefAttributes,
} from "react"
import { TriggerColorScheme, TriggerProps } from "@illa-design/trigger"

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

export interface DropListProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  width?: string
  // you should explicitly set `isDropList: true` if you apply `css` prop on DropList component
  // because emotion deprecate defaultProps on function components.
  // See: https://github.com/reactjs/rfcs/pull/107#issue-255265902
  isDropList?: boolean
  onClickItem?: (key: string, clickedNode: ReactNode, event: MouseEvent) => void
}

export interface DropListItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  value: string
  isSelectOption?: boolean
  title?: string | ReactNode
  fontColor?: string
  disabled?: boolean
}
