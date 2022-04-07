import { createContext } from "react"
import { MenuProps } from "./interface"

export const MenuContext = createContext<
  Pick<MenuProps, "mode" | "collapse" | "levelIndent"> & {
    onClickMenuItem?: (key: string, event) => void
  }
>({
  mode: "horizontal",
  collapse: false,
  levelIndent: 28,
})
