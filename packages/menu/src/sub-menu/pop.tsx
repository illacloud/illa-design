import { forwardRef, useContext, MouseEvent, useState } from "react"
import { NextIcon } from "@illa-design/icon"
import { Dropdown } from "@illa-design/dropdown"
import { applySubMenuListCss, applySubMenuHeaderCss } from "../style"
import { MenuContext } from "../menu-context"
import { Indent } from "../indent"
import { Menu } from "../menu"
import { SubMenuProps } from "../interface"
import { applySubMenuIconCss, expandIconCss } from "../styles"
import { processChildren, isChildrenSelected } from "../util"

export const Pop = forwardRef<HTMLDivElement, SubMenuProps>((props, ref) => {
  const { level = 1, title, children, _key = "", selectable } = props

  const {
    mode,
    levelIndent,
    onClickMenuItem,
    onClickSubMenu,
    selectedKeys = [],
    triggerProps,
    ...restProps
  } = useContext(MenuContext)

  const [popupVisible, setPopupVisible] = useState(false)

  const subMenuClickHandler = (event: MouseEvent) => {
    onClickSubMenu && onClickSubMenu(_key, level as number, "pop")
    selectable && onClickMenuItem && onClickMenuItem(_key, event)
  }

  const menuItemClickHandler = (key: string, event: MouseEvent) => {
    onClickMenuItem && onClickMenuItem(key, event)
    setPopupVisible(false)
  }

  const isSelected =
    (selectable && selectedKeys.includes(_key)) ||
    isChildrenSelected(children, selectedKeys)

  const needPopOnBottom = mode === "horizontal"

  return (
    <Dropdown
      trigger="hover"
      onVisibleChange={(visible: boolean) => setPopupVisible(visible)}
      droplist={
        <Menu
          selectedKeys={selectedKeys}
          onClickMenuItem={menuItemClickHandler}
        >
          {children}
        </Menu>
      }
      triggerProps={{
        position: needPopOnBottom ? "bl" : "rt",
        showArrow: true,
        autoAlignPopupMinWidth: true,
        duration: 100,
        popupVisible,
        ...triggerProps,
      }}
    >
      <div
        ref={ref}
        onClick={subMenuClickHandler}
        {...restProps}
        css={applySubMenuHeaderCss(isSelected)}
      >
        <Indent level={level} levelIndent={levelIndent} />
        <span>{title}</span>
        <span css={(applySubMenuIconCss(false), expandIconCss)}>
          <NextIcon />
        </span>
        <div></div>
      </div>
    </Dropdown>
  )
})
