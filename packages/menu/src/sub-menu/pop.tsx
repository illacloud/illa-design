import {
  forwardRef,
  useContext,
  MouseEvent,
  useState,
  ReactElement,
} from "react"
import { NextIcon, DownIcon } from "@illa-design/icon"
import { Dropdown } from "@illa-design/dropdown"
import { TriggerProps } from "@illa-design/trigger"
import { applySubMenuHeaderCss } from "../style"
import { MenuContext } from "../menu-context"
import { Indent } from "../indent"
import { Menu } from "../menu"
import { SubMenuProps } from "../interface"
import {
  applyPopSubMenuCollapseIconCss,
  applyPopSubMenuCss,
  applySubMenuIconCss,
} from "../styles"
import { isChildrenSelected } from "../util"

export const Pop = forwardRef<HTMLDivElement, SubMenuProps>((props, ref) => {
  const {
    level = 1,
    title,
    children,
    _key = "",
    selectable,
    _css,
    ...restProps
  } = props

  const {
    mode,
    theme,
    variant,
    levelIndent,
    onClickMenuItem,
    onClickSubMenu,
    selectedKeys = [],
    triggerProps,
    collapse,
    inDropdown,
  } = useContext(MenuContext)

  const [popupVisible, setPopupVisible] = useState(false)

  const isHorizontal = mode === "horizontal"
  const isPopButton = mode === "popButton"

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
    isChildrenSelected(children as ReactElement, selectedKeys)

  const needPopOnBottom = mode === "horizontal" && !inDropdown

  function renderIcon() {
    const icon = needPopOnBottom ? <DownIcon /> : <NextIcon />

    return (
      <span
        css={[
          applySubMenuIconCss(false, isHorizontal, inDropdown),
          applyPopSubMenuCollapseIconCss(collapse, inDropdown),
        ]}
      >
        {icon}
      </span>
    )
  }

  const mergedTriggerProps = {
    colorScheme: theme === "light" ? "white" : "gray",
    position: (needPopOnBottom ? "bl" : "rt") as TriggerProps["position"],
    showArrow: mode === "popButton" || variant !== "pop",
    withoutPadding: true,
    clickOutsideToClose: true,
    ...triggerProps,
  }

  return (
    <Dropdown
      trigger="hover"
      onVisibleChange={(visible: boolean) => setPopupVisible(visible)}
      popupVisible={popupVisible}
      dropList={
        <Menu
          selectedKeys={selectedKeys}
          onClickMenuItem={menuItemClickHandler}
          theme={theme}
          isMenu={true}
          triggerProps={mergedTriggerProps}
        >
          {children}
        </Menu>
      }
      triggerProps={{
        ...mergedTriggerProps,
      }}
    >
      <div
        ref={ref}
        onClick={subMenuClickHandler}
        css={[
          applySubMenuHeaderCss(isSelected, isPopButton, collapse, theme),
          applyPopSubMenuCss(isHorizontal),
          _css,
        ]}
        {...restProps}
      >
        <Indent level={level} levelIndent={levelIndent} />
        <span>{title}</span>
        {renderIcon()}
      </div>
    </Dropdown>
  )
})

Pop.displayName = "Pop"
