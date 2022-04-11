import React, { forwardRef, ReactElement, useContext } from "react"
import { processChildren } from "./util"
import { ItemGroupProps } from "./interface"
import { MenuContext } from "./menu-context"
import { Indent } from "./indent"
import { applyItemGroupCss, itemGroupTitleCss } from "./style"

const ForwardRefItemGroup = forwardRef<HTMLDivElement, ItemGroupProps>(
  (props, ref) => {
    const { children, title, level, ...restProps } = props
    const { levelIndent } = useContext(MenuContext)

    const childrenList = processChildren(children as ReactElement, {
      level: level === 1 ? level + 1 : level,
    })

    return (
      <div ref={ref} css={applyItemGroupCss()} {...restProps}>
        <div css={itemGroupTitleCss}>
          <Indent level={level} levelIndent={levelIndent} />
          <span>{title}</span>
        </div>
        {childrenList}
      </div>
    )
  },
)

const ItemGroup = ForwardRefItemGroup as typeof ForwardRefItemGroup & {
  menuType: string
}

ItemGroup.displayName = "MenuItemGroup"
ItemGroup.menuType = "MenuGroup"

export { ItemGroup }
