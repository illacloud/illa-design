import { forwardRef } from "react"
import { useMergeValue, isFunction } from "@illa-design/system"
import { MenuProps } from "./interface"
import { MenuContext } from "./menu-context"
import { Item } from "./item"
import { ItemGroup } from "./item-group"
import { SubMenu } from "./sub-menu"
import { processChildren } from "./util"
import { OverflowWrapper } from "./overflow-wrapper"
import { applyMenuInnerCss } from "./style"

const ForwardRefMenu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
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
    const childrenList = processChildren(children, { level: 1 })
    const isHorizontal = mode === "horizontal"
    const isRenderWithOverflowWrapper = isHorizontal && ellipsis !== false

    return (
      <>
        <div css={applyMenuInnerCss(isHorizontal)}>
          {isRenderWithOverflowWrapper ? (
            <OverflowWrapper>{childrenList}</OverflowWrapper>
          ) : (
            childrenList
          )}
        </div>
      </>
    )
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
            selectable && setSelectedKeys([key])
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
const Menu = ForwardRefMenu as typeof ForwardRefMenu & {
  Item: typeof Item
  ItemGroup: typeof ItemGroup
  SubMenu: typeof SubMenu
}

Menu.Item = Item
Menu.ItemGroup = ItemGroup
Menu.SubMenu = SubMenu
Menu.displayName = "Menu"

export { Menu }
