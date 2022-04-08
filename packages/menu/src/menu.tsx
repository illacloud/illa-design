import { forwardRef } from "react"
import { useMergeValue, isFunction } from "@illa-design/system"
import { MenuProps } from "./interface"
import { MenuContext } from "./menu-context"
import { processChildren } from "./util"

export const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const {
    theme = "light",
    mode = "vertical",
    variant = "inline",
    levelIndent = 28,
    collapseIcons,
    autoOpen,
    accordion,
    hasCollapseButton,
    collapse,
    selectable = true,
    ellipsis = true,
    defaultSelectedKeys,
    defaultOpenKeys,
    selectedKeys: selectedKeysProp,
    openKeys: openKeysProp,
    triggerProps,
    onClickMenuItem,
    onClickSubMenu,
    onCollapseChagne,
    children,
    ...restProps
  } = props

  const [openKeys, setOpenKeys] = useMergeValue([], {
    value: openKeysProp,
    defaultValue: defaultOpenKeys,
  })

  const [selectedKeys, setSelectedKeys] = useMergeValue([], {
    value: selectedKeysProp,
    defaultValue: defaultSelectedKeys,
  })

  function renderChildren() {
    return processChildren(children, { level: 1 })
  }

  return (
    <div ref={ref} {...restProps}>
      <MenuContext.Provider
        value={{
          mode,
          levelIndent,
          collapse,
          openKeys,
          selectedKeys,
          onClickMenuItem: (key, event) => {
            selectable && setSelectedKeys([key]);
            // TODO: pass keyPass
            onClickMenuItem && onClickMenuItem(key, event, [])
          },
          onClickSubMenu: (key, level, variant) => {
            let newOpenKeys: string[] = [...openKeys]

            if (variant === "inline") {
              const isClickTopLevelSubMenuInAccordionMode =
                level === 1 && accordion
              const isClickOnExpandedMenu = openKeys.includes(key)

              if (isClickOnExpandedMenu) {
                newOpenKeys = isClickTopLevelSubMenuInAccordionMode
                  ? []
                  : newOpenKeys.filter((k) => k !== key)
              } else {
                newOpenKeys = isClickTopLevelSubMenuInAccordionMode
                  ? [key]
                  : newOpenKeys.concat(key)
              }
            }

            setOpenKeys(newOpenKeys)
            // TODO: pass keyPath
            isFunction(onClickSubMenu) && onClickSubMenu(key, newOpenKeys, [])
          },
        }}
      >
        {renderChildren()}
      </MenuContext.Provider>
    </div>
  )
})

Menu.displayName = "Menu"
