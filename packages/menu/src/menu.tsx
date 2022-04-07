import { forwardRef } from "react"
import { MenuProps } from "./interface"
import { MenuContext } from "./menu-context"

export const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const {
    theme = "light",
    mode = "vertical",
    variant = "inline",
    levelIndent = 28,
    collapseIcons,
    autoOpen,
    hasCollapseButton,
    collapse,
    selectable = true,
    ellipsis = true,
    defaultSelectedKeys,
    defaultOpenKeys,
    selectedKeys,
    openKeys,
    triggerProps,
    onClickMenuItem,
    onClickSubMenu,
    onCollapseChagne,
    children,
    ...restProps
  } = props


  return (
    <div ref={ref} {...restProps}>
      <MenuContext.Provider
        value={{
          mode,
          levelIndent,
          collapse,
        }}
      >
        {children}
      </MenuContext.Provider>
    </div>
  )
})

Menu.displayName = "Menu"
