import { HTMLAttributes, ReactNode, SyntheticEvent } from "react"
import { BoxProps } from "@illa-design/theme"

export type MenuMode = "vertical" | "horizontal"

type ItemType = SubMenuProps | MenuItemProps

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

export interface MenuProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  colorScheme?: MenuColorScheme
  items?: ItemType[]
  mode?: MenuMode
  defaultOpenedSubMenuValues?: string[]
  defaultSelectedValues?: string[]
  openedSubMenuValues?: string[]
  selectedValues?: string[]
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
}

export interface SubMenuProps extends HTMLAttributes<HTMLDivElement>, BoxProps {
  opened?: boolean
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
  label?: ReactNode
}

export interface MenuContextProps {
  colorScheme?: MenuColorScheme
}
