import React, { forwardRef, useContext } from "react"
import { Inline } from "./inline"
import { Pop } from "./pop"
import { SubMenuProps } from "../interface"
import { MenuContext } from "../menu-context"

const ForwardRefSubMenu = forwardRef((props: SubMenuProps, ref) => {
  const { children } = props
  const { mode, collapse } = useContext(MenuContext)

  const MergedMenu = collapse || mode !== "vertical" ? Pop : Inline

  return (
    <MergedMenu {...props}>
      {children}
    </MergedMenu>
  )
})

const SubMenu = ForwardRefSubMenu as typeof ForwardRefSubMenu & {
  menuType: string
}

SubMenu.displayName = "SubMenu"
SubMenu.menuType = "SubMenu"

export { SubMenu }
