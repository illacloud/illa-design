import { forwardRef, useContext, MouseEvent } from "react"
import { Tooltip } from "@illa-design/tooltip"
import { isFunction } from "@illa-design/system"
import { MenuContext } from "./menu-context"
import { ItemProps } from "./interface"
import { Indent } from "./indent"
import { applyItemCss } from "./style"
import { applyItemTitleCss } from "./styles"

const ForwardRefItem = forwardRef<HTMLDivElement, ItemProps>((props, ref) => {
  const {
    _key = "",
    title,
    disabled,
    level = 1,
    _css,
    needTooltip,
    ...restProps
  } = props

  const {
    mode,
    theme,
    collapse,
    inDropdown,
    levelIndent,
    onClickMenuItem,
    selectedKeys = [],
  } = useContext(MenuContext)

  const needIndent = mode === "vertical" && level > 1
  const isHorizontal = mode === "horizontal"
  const isPopButton = mode === "popButton"
  const mergedNeedTooltip = (collapse && level === 1 && !inDropdown) || needTooltip
  const isSelected = selectedKeys.includes(_key)

  const clickItemHandler = (event: MouseEvent) => {
    if (disabled) {
      return
    }
    isFunction(onClickMenuItem) && onClickMenuItem(_key, event)
  }

  const itemNode = (
    <div
      ref={ref}
      css={[
        applyItemCss(isHorizontal, disabled, isSelected, isPopButton, collapse, theme),
        _css,
      ]}
      {...restProps}
      onClick={clickItemHandler}
    >
      {needIndent ? <Indent level={level} levelIndent={levelIndent} /> : null}
      <div css={applyItemTitleCss()}>{title}</div>
    </div>
  )

  return mergedNeedTooltip ? (
    <Tooltip content={title} trigger={"hover"} position={"right"}>
      {itemNode}
    </Tooltip>
  ) : (
    itemNode
  )
})

const Item = ForwardRefItem as typeof ForwardRefItem & {
  menuType: string
}

Item.displayName = "MenuItem"
Item.menuType = "MenuItem"

export { Item }
