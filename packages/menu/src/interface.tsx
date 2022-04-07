import { HTMLAttributes, MouseEvent, ReactNode } from "react"
import { TriggerProps } from "@illa-design/trigger"

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  theme?: "light" | "dark"
  mode?: "vertical" | "horizontal" | "popButton"
  variant?: "inline" | "pop"
  levelIndent?: number
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
