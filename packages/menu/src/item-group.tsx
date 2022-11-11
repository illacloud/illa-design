import { forwardRef, ReactElement, useContext } from "react"
import { Trigger } from "@illa-design/trigger"
import { processChildren } from "./util"
import { ItemGroupProps } from "./interface"
import { MenuContext } from "./menu-context"
import { Indent } from "./indent"
import {
  applyItemGroupCss,
  applyGroupTitleCss,
  applyCollapseGroupTitleCss,
} from "./style"

// eslint-disable-next-line react/display-name
const ForwardRefItemGroup = forwardRef<HTMLDivElement, ItemGroupProps>(
  (props, ref) => {
    const { children, title, level, _css, ...restProps } = props
    const {
      levelIndent,
      mode,
      collapse,
      theme = "light",
      inDropdown,
    } = useContext(MenuContext)
    const isPopButton = mode === "popButton"
    const isHorizontal = mode === "horizontal"
    const mergedNeedTooltip = level === 1 && collapse && !inDropdown
    const childrenList = processChildren(children as ReactElement, {
      level,
      needTooltip: mergedNeedTooltip,
    })

    const titleNode = collapse ? (
      <div css={applyCollapseGroupTitleCss(theme)}></div>
    ) : (
      <span>{title}</span>
    )

    const groupTitle = (
      <div css={applyGroupTitleCss(isHorizontal, isPopButton, collapse, theme)}>
        <Indent level={level} levelIndent={levelIndent} />
        {titleNode}
      </div>
    )

    return (
      <div ref={ref} css={[applyItemGroupCss(theme), _css]} {...restProps}>
        {mergedNeedTooltip ? (
          <Trigger
            content={title}
            trigger={"hover"}
            position={"right"}
            showArrow={false}
          >
            {groupTitle}
          </Trigger>
        ) : (
          groupTitle
        )}
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
