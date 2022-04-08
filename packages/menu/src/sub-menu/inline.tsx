import {
  Children,
  cloneElement,
  forwardRef,
  useContext,
  useEffect,
  MouseEvent,
  ReactElement,
  ReactNode,
} from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DownIcon } from "@illa-design/icon"
import { applySubMenuListCss } from "../style"
import { MenuContext } from "../menu-context"
import { Indent } from "../indent"
import { SubMenuProps } from "../interface"
import { applySubMenuIconCss } from "../styles"
import { processChildren } from "../util"

export const Inline = forwardRef<HTMLDivElement, SubMenuProps>((props, ref) => {
  const { level = 1, title, children, _key, selectable } = props

  const {
    levelIndent,
    onClickMenuItem,
    onClickSubMenu,
    openKeys = [],
  } = useContext(MenuContext)

  const subMenuClickHanlder = (event: MouseEvent) => {
    onClickSubMenu(_key, level as number, "inline")
    selectable && onClickMenuItem(_key, event)
  }

  const isOpen = openKeys.includes(_key)

  console.log({ openKeys, isOpen })
  const childrenList = processChildren(children, { level: level + 1 })

  const header = (
    <div onClick={subMenuClickHanlder}>
      <Indent level={level} levelIndent={levelIndent} />
      <span>{title}</span>
      <span css={applySubMenuIconCss(isOpen)}>
        <DownIcon />
      </span>
    </div>
  )

  const variants = {
    open: {
      height: "auto",
      opacity: 1,
    },
    closed: {
      height: 0,
      opacity: 0,
    },
  }

  const content = (
    <motion.div
      css={applySubMenuListCss(isOpen)}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.2 }}
      variants={variants}
    >
      {childrenList}
    </motion.div>
  )

  return (
    <div ref={ref}>
      {header}
      {content}
    </div>
  )
})
