import { forwardRef, useContext, MouseEvent, ReactElement } from "react"
import { motion } from "framer-motion"
import { DownIcon } from "@illa-design/icon"
import {
  applySubMenuListCss,
  applySubMenuHeaderCss,
} from "../style"
import { MenuContext } from "../menu-context"
import { Indent } from "../indent"
import { SubMenuProps } from "../interface"
import { applySubMenuIconCss } from "../styles"
import { processChildren, isChildrenSelected } from "../util"

export const Inline = forwardRef<HTMLDivElement, SubMenuProps>((props, ref) => {
  const {
    level = 1,
    title,
    children,
    _key = "",
    selectable,
    ...restProps
  } = props

  const {
    levelIndent,
    onClickMenuItem,
    onClickSubMenu,
    openKeys = [],
    selectedKeys = [],
    collapse,
  } = useContext(MenuContext)

  const subMenuClickHandler = (event: MouseEvent) => {
    onClickSubMenu && onClickSubMenu(_key, level as number, "inline")
    selectable && onClickMenuItem && onClickMenuItem(_key, event)
  }

  const isOpen = openKeys.includes(_key)
  const isSelected =
    (selectable && selectedKeys.includes(_key)) ||
    isChildrenSelected(children as ReactElement, selectedKeys)
  const childrenList = processChildren(children as ReactElement, { level: level + 1 })

  const header = (
    <div onClick={subMenuClickHandler} css={applySubMenuHeaderCss(isSelected)}>
      <Indent level={level} levelIndent={levelIndent} />
      <span>{title}</span>
      <span css={applySubMenuIconCss(isOpen, collapse)}>
        <DownIcon />
      </span>
    </div>
  )

  const content = (
    <motion.div
      css={applySubMenuListCss(isOpen)}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.2 }}
      variants={{
        open: {
          height: "auto",
          opacity: 1,
        },
        closed: {
          height: 0,
          opacity: 0,
        },
      }}
    >
      {childrenList}
    </motion.div>
  )

  return (
    <div ref={ref} {...restProps}>
      {header}
      {content}
    </div>
  )
})
