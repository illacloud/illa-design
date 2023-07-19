import { HTMLAttributes, ReactNode, SyntheticEvent } from "react"
import { BoxProps } from "@illa-design/theme"

export type MenuMode = "vertical" | "horizontal"

export type MenuItemType = SubMenuProps | MenuItemProps

export type MenuColorScheme =
  | string
  | "white"
  | "blackAlpha"
  | "gray"
  | "grayBlue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "techPurple"
  | "techPink"

export type MenuHorizontalAlign = "flex-start" | "center" | "flex-end"

export interface MenuProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  horizontalAlign?: MenuHorizontalAlign
  colorScheme?: MenuColorScheme
  hoverColorScheme?: MenuColorScheme
  onlyShowIcon?: boolean
  items?: MenuItemType[]
  mode?: MenuMode
  defaultOpenedSubMenuValues?: string[]
  defaultSelectedValues?: string[]
  openedSubMenuValues?: string[]
  selectedValues?: any[]
  onClickMenuItem?: (
    value: string,
    valuePath: string[],
    event: SyntheticEvent,
  ) => void
  onClickSubMenu?: (
    value: string,
    openSubMenuValues: string[],
    valuePath: string[],
  ) => void
  onMenuSelect?: (
    value: string,
    valuePath: string[],
    selectedValues: string[],
  ) => void
}

export interface SubMenuProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  opened?: boolean
  hidden?: boolean
  selected?: boolean
  value: string
  disabled?: boolean
  icon?: ReactNode
  label?: string | ReactNode
  subItems?: MenuItemProps[]
  children?: ReactNode
  onVisibleChange?: (visible: boolean) => void
}

export interface MenuItemProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxProps {
  selected?: boolean
  disabled?: boolean
  value: string
  icon?: ReactNode
  hidden?: boolean
  label?: ReactNode
}

export interface VerticalMenuItemProps extends MenuItemProps {
  sub?: boolean
}

export interface MenuContextProps {
  colorScheme?: MenuColorScheme
  hoverColorScheme?: MenuColorScheme
  onlyShowIcon?: boolean
}
