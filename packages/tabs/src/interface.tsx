import { HTMLAttributes, ReactNode } from "react"
import { BoxProps } from "@illa-design/theme"

export declare type TabPosition = "left" | "right" | "top" | "bottom"
export declare type TabAlign =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
export declare type TabsSize = "small" | "medium" | "large"
export declare type TabVariant = "line" | "text" | "capsule"
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
  size?: TabsSize
  variant?: TabVariant
  align?: TabAlign
  activeKey?: string
  defaultActiveKey?: string
  deleteIcon?: ReactNode
  tabBarSpacing?: number
  // actions
  onChange?: (key: string) => void
  onClickTab?: (key: string) => void
  onDeleteTab?: (key: string) => void
  colorScheme?: TabsColorScheme
  prefix?: ReactNode
  suffix?: ReactNode
  withoutContent?: boolean
  withoutBorderLine?: boolean
}

export interface TabPaneProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: string | ReactNode
  disabled?: boolean
  closable?: boolean
  tabsItemAfter?: ReactNode
  tabsItemActiveColorScheme?: string
  tabsItemColorScheme?: string
  ["data-key"]?: string
}
