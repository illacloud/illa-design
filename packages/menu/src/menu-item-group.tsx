import { forwardRef } from "react"
import { MenuItemGroupProps } from "./interface"

export const MenuItemGroup = forwardRef<HTMLDivElement, MenuItemGroupProps>(
  (props, ref) => {
    return <div ref={ref} />
  },
)

MenuItemGroup.displayName = "MenuItemGroup"
