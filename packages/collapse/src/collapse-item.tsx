import { forwardRef, useContext } from "react"
import { CollapseItemProps } from "./interface"
import { CollapseContext } from "./collapse-context"
import { motion, AnimatePresence } from "framer-motion"
import {
  applyCollapseItem,
  applyCollapseItemContent,
  applyCollapseItemContentBox,
  applyCollapseItemExtra,
  applyCollapseItemHeader,
  applyCollapseItemHeaderIcon,
  applyCollapseItemHeaderTittle,
  CollapseItemAnimation,
} from "./style"

export const CollapseItem = forwardRef<HTMLDivElement, CollapseItemProps>(
  (props, ref) => {
    const {
      children,
      name,
      header,
      extra,
      disabled,
      destroyOnHide,
      expandIcon,
      showExpandIcon = true,
      ...otherProps
    } = props
    const ctx = useContext(CollapseContext)
    const isExpanded = ctx.activeKeys.indexOf(name) > -1
    const icon = showExpandIcon
      ? "expandIcon" in props
        ? expandIcon
        : ctx.expandIcon
      : null
    const unmountOnExit = destroyOnHide ?? ctx.destroyOnHide
    const mount = unmountOnExit ? isExpanded : true
    return (
      <div ref={ref} css={applyCollapseItem} {...otherProps}>
        <div
          role={"button"}
          onClick={(e) => {
            !disabled && ctx.onToggle(name, e)
          }}
          css={applyCollapseItemHeader(
            isExpanded,
            ctx.expandIconPosition,
            disabled,
          )}
        >
          {icon && (
            <span
              css={applyCollapseItemHeaderIcon(
                isExpanded,
                ctx.expandIconPosition,
                disabled,
              )}
            >
              {icon}
            </span>
          )}
          <div css={applyCollapseItemHeaderTittle(isExpanded, disabled)}>
            {header}
          </div>
          {extra && (
            <div
              css={applyCollapseItemExtra}
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              {extra}
            </div>
          )}
        </div>
        <AnimatePresence initial={false}>
          {mount && (
            <motion.div
              css={applyCollapseItemContent}
              role={"region"}
              variants={CollapseItemAnimation}
              animate={unmountOnExit ? "enter" : isExpanded ? "enter" : "exit"}
              exit={"exit"}
              initial={unmountOnExit ? "exit" : false}
              transition={{ duration: 0.2 }}
            >
              <div css={applyCollapseItemContentBox}>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  },
)

CollapseItem.displayName = "CollapseItem"
