import { HTMLAttributes, ReactElement, ReactNode } from "react"

export declare type TabPosition = "left" | "right" | "top" | "bottom"
export declare type TabsSize = "small" | "medium" | "large"
export declare type Variant = "line" | "text" | "card"

export interface TabsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  tabPosition?: TabPosition
  animated?: boolean | { tabPane?: boolean; inkBar?: boolean }
  size?: TabsSize
  variant?: Variant
  activeKey?: string
  defaultActiveKey?: string
  editable?: boolean
  addIcon?: ReactNode
  deleteIcon?: ReactNode
  tabBarExtraContent?: ReactNode | { left?: ReactNode; right?: ReactNode }
  tabBarSpacing?: number
  tabBarStyle?: object // TODO confirm
  destroyInactiveTabPane?: boolean
  // actions
  onChange?: (key: string) => void
  onClickTab?: (key: string) => void
  onAddTab?: () => void
  onDeleteTab?: (key: string) => void

  placeholder?: string
}

export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  tabPanes?: ReactElement[]
  defaultActiveKey?: string
  animated?: boolean
}

export type TabHeaderProps = TabsProps & {
  tabHeaderChild?: TabHeaderChildProps[]
  onSelectTab: (key: string) => void
  selectedIndex: number
}

export type TabHeaderChildProps = Pick<TabPaneProps, "title" | "disabled"> & {
  isSelected?: boolean
  tabKey: string
  onSelectTab: (key: string) => void
  size: TabsSize
  needDivLine?: boolean
}

export interface TabPaneProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "key"> {
  key?: string
  title: string | ReactNode
  destroyOnHide?: boolean
  disabled?: boolean
  closable?: boolean
}
