import { HTMLAttributes, MouseEvent, ReactNode } from "react"

export type CollapsePosition = "left" | "right"
export interface CollapseProps {
  activeKey?: string | string[]
  DefaultActiveKey?: string | string[]
  accordion?: boolean
  expandIcon?: ReactNode
  expandIconPosition?: CollapsePosition
  bordered?: boolean
  destroyOnHide?: boolean
  onChange?: (key?: string, keys?: string[], e?: Event) => void
}
