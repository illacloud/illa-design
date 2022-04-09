import { forwardRef, useContext, MouseEvent } from "react"
import { Tooltip } from "@illa-design/tooltip"
import { isFunction } from "@illa-design/system"
import { MenuContext } from "./menu-context"
import { ItemProps } from "./interface"
import { Indent } from "./indent"
import { applyItemCss, titleEllipsis } from "./style"

const ForwardRefItem = forwardRef<HTMLDivElement, ItemProps>((props, ref) => {
  const { _key, title, disabled, level = 1, _css, ...restProps } = props


  const { mode, collapse, levelIndent, onClickMenuItem } =
    useContext(MenuContext)

  const needIndent = mode === "vertical" && level > 1
  const isHorizontal = mode === "horizontal";
  const needTooltip = collapse && level === 1

  const clickItemHandler = (event: MouseEvent) => {
    isFunction(onClickMenuItem) && onClickMenuItem(_key, event)
  }

  const itemNode = (
    <div ref={ref} css={[applyItemCss(isHorizontal), _css]} {...restProps} onClick={clickItemHandler}>
      {needIndent ? <Indent level={level} levelIndent={levelIndent} /> : null}
      <div css={titleEllipsis}>{title}</div>
    </div>
  )

  return needTooltip ? (
    <Tooltip content={title} trigger={"hover"} position={"right"}>
      {itemNode}
    </Tooltip>
  ) : (
    itemNode
  )
})

const Item = ForwardRefItem as typeof ForwardRefItem & {
  menuType: string
};

Item.displayName = "MenuItem"
Item.menuType = "MenuItem"

export { Item }
