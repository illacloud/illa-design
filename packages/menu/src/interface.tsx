import { HTMLAttributes, MouseEvent, ReactElement, ReactNode } from "react"
import { TriggerProps } from "@illa-design/trigger"

export type MenuVariant = "inline" | "pop"

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  theme?: "light" | "dark"
  mode?: "vertical" | "horizontal" | "popButton"
  variant?: MenuVariant
  levelIndent?: number
  accordion?: boolean
  collapseIcons?: ReactNode
  autoOpen?: boolean
  hasCollapseButton?: boolean
  collapse?: boolean
  selectable?: boolean
  ellipsis?: boolean
  defaultSelectedKeys?: string[]
  defaultOpenKeys?: string[]
  selectedKeys?: string[]
  openKeys?: string[]
  triggerProps?: Partial<TriggerProps>
  onClickMenuItem?: (key: string, event, keyPath: string[]) => any
  onClickSubMenu?: (key: string, openKeys: string[], keyPath: string[]) => void
  onCollapseChagne?: (collapse: boolean) => void
}

export interface IndentProps {
  level?: number
  levelIndent?: number
}

export interface ItemProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  key: string
  title?: string | ReactNode
  disabled?: boolean
  level?: number
}

export interface SubMenuProps {
  key: string
  _key?: string,
  title?: string | ReactNode
  level?: number
  selectable?: boolean
  children?: ReactNode
  forwardedRef?: ReactElement
}

export interface OverflowWrapperProps {
  children?: ReactNode
}
