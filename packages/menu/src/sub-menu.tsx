import { forwardRef } from "react"
import { SubMenuProps } from "./interface"

export const SubMenu = forwardRef<HTMLDivElement, SubMenuProps>(
  (props, ref) => {
    return <div ref={ref} />
  },
)

SubMenu.displayName = "SubMenu"
