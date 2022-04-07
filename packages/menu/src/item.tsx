import { forwardRef, useContext, MouseEvent } from "react"
import { Tooltip } from "@illa-design/tooltip"
import { isFunction } from "@illa-design/system"
import { MenuContext } from "./menu-context"
import { ItemProps } from "./interface"
import { Indent } from "./indent"
import { applyItemCss, titleEllipsis } from "./style"

const ForwardRefsItem = forwardRef<HTMLDivElement, ItemProps>((props, ref) => {
  const { key, title, disabled, level = 1, ...restProps } = props

  const { mode, collapse, levelIndent, onClickMenuItem } =
    useContext(MenuContext)

  const needIndent = mode === "vertical" && level > 1
  const needTooltip = collapse && level === 1

  const onClick = (event: MouseEvent) => {
    isFunction(onClickMenuItem) && onClickMenuItem(key, event)
  }

  const itemNode = (
    <div ref={ref} css={applyItemCss()} {...restProps} onClick={onClick}>
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

export const Item = ForwardRefsItem;
