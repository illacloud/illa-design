import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type CollapsePosition = "left" | "right"

export type CollapseTriggerRegion = "header" | "icon"

export interface CollapseProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    CollapseContextProps,
    BoxProps {
  accordion?: boolean
  bordered?: boolean
  lazyload?: boolean
  activeKey?: string | string[]
  defaultActiveKey?: string | string[]
  onChange?: (
    key?: string,
    keys?: string[],
    e?: MouseEvent<HTMLDivElement>,
  ) => void
}

export interface CollapseItemProps
  extends HTMLAttributes<HTMLDivElement>,
    CollapseContextProps,
    BoxProps {
  disabled?: boolean
  name: string
  extra?: ReactNode
  header?: ReactNode
}

export interface CollapseContextProps {
  showExpandIcon?: boolean
  triggerRegion?: CollapseTriggerRegion
  expandIconPosition?: CollapsePosition
  expandIcon?: ReactNode
  destroyOnHide?: boolean
}
