import { forwardRef, useMemo } from "react"
import { useMergeValue, isFunction } from "@illa-design/system"
import { NextIcon, PreIcon } from "@illa-design/icon"
import { MenuProps } from "./interface"
import { MenuContext } from "./menu-context"
import { Item } from "./item"
import { ItemGroup } from "./item-group"
import { SubMenu } from "./sub-menu"
import { processChildren, generateInfoMap } from "./util"
import { OverflowWrapper } from "./overflow-wrapper"
import { applyMenuCss, applyMenuInnerCss, collapseIconCss } from "./style"

const ForwardRefMenu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const {
    theme = "light",
    mode = "vertical",
    variant = "inline",
    levelIndent = 28,
    collapseDefaultIcon = <PreIcon />,
    collapseActiveIcon = <NextIcon />,
    autoOpen,
    accordion,
    hasCollapseButton,
    collapse: collapseProp,
    selectable = true,
    ellipsis = true,
    defaultSelectedKeys,
    defaultOpenKeys,
    selectedKeys: selectedKeysProp,
    openKeys: openKeysProp,
    triggerProps,
    onClickMenuItem,
    onClickSubMenu,
    onCollapseChange,
    children,
    style,
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

  const [collapse, setCollapse] = useMergeValue(false, {
    value: collapseProp,
  })

  const isPopButton = mode === "popButton"
  const mergedCollapse = collapse || isPopButton
  const isRenderCollapseButton =
    hasCollapseButton && !["horizontal", "popButton"].includes(mode)
  const menuInfoMap = useMemo(() => {
    return generateInfoMap(children)
  }, [children])

  function renderCollapseButton() {
    const collapseIcon = collapse ? collapseActiveIcon : collapseDefaultIcon
    return (
      <div
        tabIndex={0}
        role="button"
        onClick={() => {
          const newCollapse = !collapse
          setCollapse(newCollapse)
          onCollapseChange && onCollapseChange(newCollapse)
        }}
        css={collapseIconCss}
      >
        {collapseIcon}
      </div>
    )
  }

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
        {isRenderCollapseButton && renderCollapseButton()}
      </>
    )
  }

  const usedStyle = { ...style }

  if (mergedCollapse) {
    delete usedStyle.width
  }

  return (
    <div
      ref={ref}
      style={usedStyle}
      css={applyMenuCss(collapse, isPopButton)}
      {...restProps}
    >
      <MenuContext.Provider
        value={{
          mode,
          variant,
          levelIndent,
          collapse: mergedCollapse,
          openKeys,
          selectedKeys,
          onClickMenuItem: (key, event) => {
            selectable && setSelectedKeys([key])
            onClickMenuItem &&
              onClickMenuItem(key, event, menuInfoMap[key]?.keyPath)
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
            isFunction(onClickSubMenu) &&
              onClickSubMenu(key, newOpenKeys, menuInfoMap[key]?.keyPath)
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
