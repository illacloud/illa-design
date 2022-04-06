import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  MouseEvent,
  RefAttributes,
} from "react"

export type CollapsePosition = "left" | "right"

export interface CollapseProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  activeKey?: string | string[]
  defaultActiveKey?: string | string[]
  accordion?: boolean
  expandIcon?: ReactNode
  expandIconPosition?: CollapsePosition
  bordered?: boolean
  destroyOnHide?: boolean
  onChange?: (
    key?: string,
    keys?: string[],
    e?: MouseEvent<HTMLDivElement>,
  ) => void
}

export interface CollapseItemProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode
  name: string
  disabled?: boolean
  expandIcon?: ReactNode
  showExpandIcon?: boolean
  extra?: ReactNode
  destroyOnHide?: boolean
}

export interface CollapseContextProps {
  expandIcon?: ReactNode
  activeKeys: string[]
  expandIconPosition?: CollapsePosition
  destroyOnHide?: boolean
  onToggle: (key: string, e: MouseEvent<HTMLDivElement>) => void
}

export interface CollapseComponent
  extends ForwardRefExoticComponent<PropsWithChildren<CollapseProps>> {
  Item: ForwardRefExoticComponent<
    CollapseItemProps & RefAttributes<HTMLDivElement>
  >
}
