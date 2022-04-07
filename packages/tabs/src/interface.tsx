import { HTMLAttributes, ReactElement, ReactNode } from "react"

export declare type TabPosition = "left" | "right" | "top" | "bottom"
export declare type TabsSize = "small" | "medium" | "large"
export declare type Variant = "line" | "text" | "card" | "capsule"

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
  tabBarSpacing?: number
  // actions
  onChange?: (key: string) => void
  onClickTab?: (key: string) => void
  onAddTab?: () => void
  onDeleteTab?: (key: string) => void
  placeholder?: string
}

export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  tabPanes?: ReactElement[]
  selectedIndex: number
  animated?: boolean
  variant: Variant
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
  needDivLine?: boolean
  variant?: Variant
  deleteIcon?: ReactNode
  size?: TabsSize
  handleDeleteTab?: (key: string) => void
  tabBarSpacing?: number
}

export interface TabPaneProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: string | ReactNode
  destroyOnHide?: boolean
  disabled?: boolean
  closable?: boolean
}
