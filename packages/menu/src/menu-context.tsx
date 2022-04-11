import { createContext, MouseEvent } from "react"
import { MenuProps, MenuVariant } from "./interface"

export const MenuContext = createContext<
  Pick<
    MenuProps,
    | "mode"
    | "variant"
    | "collapse"
    | "levelIndent"
    | "openKeys"
    | "selectedKeys"
    | "triggerProps"
    | "theme"
    | "collapseDefaultIcon"
    | "collapseActiveIcon"
  > & {
    onClickMenuItem?: (key: string, event: MouseEvent) => void
    onClickSubMenu?: (key: string, level: number, variant: MenuVariant) => void
  }
>({
  mode: "horizontal",
  collapse: false,
  levelIndent: 28,
  openKeys: [],
})
