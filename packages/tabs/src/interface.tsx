import { ChangeEvent, HTMLAttributes, ReactElement, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"
import { TabListContext } from "./tab-list-context"

export declare type TabPosition = "left" | "right" | "top" | "bottom"
export declare type TabsSize = "small" | "medium" | "large"
export declare type TabVariant = "line" | "text" | "card" | "capsule"
export type TabsColorScheme =
  | string
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
  | "techPink"
  | "techPurple"

export interface TabsProps
  extends Omit<
      HTMLAttributes<HTMLDivElement>,
      "onChange" | "prefix" | "suffix"
    >,
    BoxProps {
  tabPosition?: TabPosition
  animated?: boolean | { tabPane?: boolean; inkBar?: boolean }
  size?: TabsSize
  variant?: TabVariant
  activeKey?: string
  defaultActiveKey?: string
  editable?: boolean
  addIcon?: ReactNode
  deleteIcon?: ReactNode
  tabBarSpacing?: number
  // actions
  onChange?: (key: string) => void
  onClickTab?: (key: string) => void
  onAddTab?: () => void
  onDeleteTab?: (key: string) => void
  colorScheme?: TabsColorScheme
  placeholder?: string
  prefix?: ReactNode
  suffix?: ReactNode
  withoutContent?: boolean
}

export interface TabProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "title">,
    BoxProps {
  title: string | ReactNode
  tabKey: string
  isSelected?: boolean
  deleteIcon?: ReactNode
  tabBarSpacing?: number
  disabled?: boolean
  closable?: boolean
  activeKey?: string
  editable?: boolean
  size?: TabsSize
  variant?: TabVariant
  colorScheme?: TabsColorScheme
  tabPosition?: TabPosition
}

export interface TabsContextProps
  extends Pick<
    TabsProps,
    | "size"
    | "variant"
    | "colorScheme"
    | "tabPosition"
    | "tabBarSpacing"
    | "prefix"
    | "suffix"
  > {
  disabled?: boolean
  closable?: boolean

  selectedKey?: string
  handleSelectTab?: (key: string) => void
  handleDeleteTab?: (key: string) => void
}

export interface TabListContextProps {}

export interface TabListProps {
  tabHeaderChild?: TabHeaderChildProps[]
  handleSelectTab?: (key: string) => void
  selectedIndex?: number
  handleDeleteTab?: (key: string) => void
}

export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  tabPanes?: ReactElement[]
  selectedIndex: number
  animated?: boolean
  variant: TabVariant
}

export type TabHeaderProps = TabsProps & {
  tabHeaderChild?: TabHeaderChildProps[]
  handleSelectTab: (key: string) => void
  selectedIndex?: number
  handleDeleteTab?: (key: string) => void
}

export type TabHeaderChildProps = Pick<
  TabPaneProps,
  "title" | "disabled" | "closable"
> & {
  isSelected?: boolean
  tabKey: string
  handleSelectTab: (key: string) => void
  variant?: TabVariant
  deleteIcon?: ReactNode
  size?: TabsSize
  handleDeleteTab?: (key: string) => void
  tabBarSpacing?: number
  colorScheme: TabsColorScheme
}

export interface TabPaneProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: string | ReactNode
  destroyOnHide?: boolean
  disabled?: boolean
  closable?: boolean
}
