import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  RefAttributes,
} from "react"
import { TriggerProps } from "@illa-design/trigger"
import { SerializedStyles } from "@emotion/serialize"
import { BoxProps } from "@illa-design/theme"

export type MenuVariant = "inline" | "pop"
export type Theme = "light" | "dark"
type Mode = "vertical" | "horizontal" | "popButton"

export interface MenuProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  theme?: Theme
  mode?: Mode
  variant?: MenuVariant
  levelIndent?: number
  accordion?: boolean
  collapseDefaultIcon?: ReactNode
  collapseActiveIcon?: ReactNode
  autoOpen?: boolean
  hasCollapseButton?: boolean
  collapse?: boolean
  selectable?: boolean
  ellipsis?: boolean
  inDropdown?: boolean
  defaultSelectedKeys?: string[]
  defaultOpenKeys?: string[]
  selectedKeys?: string[]
  openKeys?: string[]
  isMenu?: boolean
  triggerProps?: Partial<TriggerProps>
  onClickMenuItem?: (key: string, event: MouseEvent, keyPath: string[]) => any
  onClickSubMenu?: (key: string, openKeys: string[], keyPath: string[]) => void
  onCollapseChange?: (collapse: boolean) => void
}

export interface IndentProps {
  level?: number
  levelIndent?: number
}

export interface ItemProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  key: string
  _key?: string
  _css?: SerializedStyles
  title?: string | ReactNode
  disabled?: boolean
  level?: number
  needTooltip?: boolean
}

export interface ItemGroupProps {
  title?: string | ReactNode
  level?: number
  _css?: SerializedStyles
  children?: ReactNode
}

export interface SubMenuProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  key: string
  _key?: string
  _css?: SerializedStyles
  title?: string | ReactNode
  level?: number
  selectable?: boolean
  children?: ReactNode
}

export interface OverflowWrapperProps {
  children?: ReactNode
}

export interface MenuComponent
  extends ForwardRefExoticComponent<
    PropsWithChildren<MenuProps> & RefAttributes<HTMLDivElement>
  > {
  Item: ForwardRefExoticComponent<ItemProps>
  ItemGroup: ForwardRefExoticComponent<PropsWithChildren<ItemGroupProps>>
  SubMenu: ForwardRefExoticComponent<PropsWithChildren<SubMenuProps>>
}
