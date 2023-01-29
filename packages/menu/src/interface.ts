import { HTMLAttributes, ReactNode, SyntheticEvent } from "react"
import { TriggerProps } from "@illa-design/trigger"
import { BoxProps } from "@illa-design/theme"

export type MenuVariant = "inline" | "pop"
export type MenuMode = "vertical" | "horizontal" | "popButton" | "pop"

export interface MenuProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  accordion?: boolean
  autoOpen?: boolean
  autoScrollIntoView?: boolean
  collapse?: boolean
  hasCollapseButton?: boolean
  selectable?: boolean
  levelIndent?: number
  mode?: MenuMode
  defaultOpenKeys?: string[]
  defaultSelectedKeys?: string[]
  ellipsis?: boolean | { text?: ReactNode }
  openKeys?: string[]
  scrollConfig?: { [key: string]: any }
  selectedKeys?: string[]
  triggerProps?: Partial<TriggerProps>
  onClickMenuItem?: (
    key: string,
    event: SyntheticEvent,
    keyPath: string[],
  ) => void
  onClickSubMenu?: (key: string, openKeys: string[], keyPath: string[]) => void
  onCollapseChange?: (collapse: boolean) => void
}

export interface SubMenuProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  value: string
  selectable?: boolean
  label?: string | ReactNode
  triggerProps?: Partial<TriggerProps>
  popup?: boolean | ((level: number) => boolean)
}

export interface ItemGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  label?: string | ReactNode
}

export interface ItemProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  disabled?: boolean
  value: string
}
