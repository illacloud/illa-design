import React, { forwardRef, useContext } from "react"
import { processChildren } from "./util"
import { ItemGroupProps } from "./interface"
import { MenuContext } from "./menu-context"
import { Indent } from "./indent"

const ForwardRefItemGroup = forwardRef<HTMLDivElement, ItemGroupProps>(
  (props, ref) => {
    const { children, title, level, ...restProps } = props
    const { levelIndent } = useContext(MenuContext)

    const childrenList = processChildren(children, {
      level: level === 1 ? level + 1 : level,
    })

    return (
      <div ref={ref} {...restProps}>
        <div>
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
