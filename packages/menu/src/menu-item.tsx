import { forwardRef } from "react"
import { MenuItemProps } from "./interface"

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (props, ref) => {
    return <div ref={ref} />
  },
)

MenuItem.displayName = "MenuItem"
