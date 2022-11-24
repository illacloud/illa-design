import { forwardRef, ReactElement, useContext, useMemo } from "react"
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
      isPopButton,
      isHorizontal,
      levelIndent,
      collapse,
      theme = "light",
      inDropdown,
    } = useContext(MenuContext)

    const mergedNeedTooltip = useMemo(
      () => level === 1 && collapse && !inDropdown,
      [level, collapse, inDropdown],
    )

    const childrenList = useMemo(
      () =>
        processChildren(children as ReactElement, {
          level,
          needTooltip: mergedNeedTooltip,
        }),
      [children, level, mergedNeedTooltip],
    )

    const titleNode = useMemo(
      () =>
        collapse ? (
          <div css={applyCollapseGroupTitleCss(theme)}></div>
        ) : (
          <span>{title}</span>
        ),
      [collapse, theme, title],
    )

    const groupTitle = useMemo(
      () => (
        <div
          css={applyGroupTitleCss(isHorizontal, isPopButton, collapse, theme)}
        >
          <Indent level={level} levelIndent={levelIndent} />
          {titleNode}
        </div>
      ),
      [
        isHorizontal,
        isPopButton,
        collapse,
        theme,
        level,
        levelIndent,
        titleNode,
      ],
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
