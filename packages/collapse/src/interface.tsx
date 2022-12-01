import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export type CollapsePosition = "left" | "right"

export type CollapseTriggerRegion = "header" | "icon"

export interface CollapseContextProps {
  activeKey?: string | string[]
  lazyload?: boolean
  showExpandIcon?: boolean
  triggerRegion?: CollapseTriggerRegion
  expandIconPosition?: CollapsePosition
  expandIcon?: ReactNode
  destroyOnHide?: boolean
  onToggle?: (
    key: string,
    keys: string[],
    e?: MouseEvent<HTMLDivElement>,
  ) => void
}

export interface CollapseProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    Omit<CollapseContextProps, "onToggle">,
    BoxProps {
  accordion?: boolean
  bordered?: boolean
  defaultActiveKey?: string | string[]
  onChange?: (
    key: string,
    keys: string[],
    e?: MouseEvent<HTMLDivElement>,
  ) => void
}

export interface CollapseItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange">,
    Omit<CollapseContextProps, "onToggle" | "activeKey">,
    BoxProps {
  name: string
  disabled?: boolean
  extra?: ReactNode
  header?: ReactNode
}
