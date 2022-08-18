import React, { forwardRef, useContext } from "react"
import { Inline } from "./inline"
import { Pop } from "./pop"
import { SubMenuProps } from "../interface"
import { MenuContext } from "../menu-context"

// eslint-disable-next-line react/display-name
const ForwardRefSubMenu = forwardRef<HTMLDivElement, SubMenuProps>(
  (props, ref) => {
    const { children, ...restProps } = props
    const { mode, collapse, variant, inDropdown } = useContext(MenuContext)
    const MergedMenu =
      collapse || inDropdown || mode !== "vertical" || variant === "pop"
        ? Pop
        : Inline

    return (
      <MergedMenu ref={ref} {...restProps}>
        {children}
      </MergedMenu>
    )
  },
)

const SubMenu = ForwardRefSubMenu as typeof ForwardRefSubMenu & {
  menuType: string
}

SubMenu.displayName = "SubMenu"
SubMenu.menuType = "SubMenu"

export { SubMenu }
