import { HTMLAttributes, MouseEvent, ReactNode, SyntheticEvent } from "react"
import { TriggerColorScheme, TriggerProps } from "@illa-design/trigger"
import { BoxProps } from "@illa-design/theme"

export interface DropdownProps {
  onBlur?: (e: SyntheticEvent) => void
  onFocus?: (e: SyntheticEvent) => void
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
  hoverColorScheme?: TriggerColorScheme
  onClickItem?: (
    key: string | number,
    clickedNode: ReactNode,
    event: MouseEvent,
  ) => void
}

export interface DropListItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title">,
    BoxProps {
  value: string | number
  colorScheme?: TriggerColorScheme
  hoverColorScheme?: TriggerColorScheme
  selected?: boolean
  deleted?: boolean
  isSelectOption?: boolean
  title?: string | ReactNode
  disabled?: boolean
}
