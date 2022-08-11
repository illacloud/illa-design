import { forwardRef, useContext } from "react"
import { CollapseItemProps } from "./interface"
import { CollapseContext } from "./collapse-context"
import { motion, AnimatePresence } from "framer-motion"
import {
  collapseItemStyle,
  applyCollapseItemContentStyle,
  collapseItemExtraStyle,
  applyCollapseItemHeaderStyle,
  applyCollapseItemHeaderIconStyle,
  applyCollapseItemHeaderTitleStyle,
  CollapseItemAnimation,
} from "./style"
import { applyBoxStyle } from "@illa-design/theme"

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
      <div
        ref={ref}
        css={[collapseItemStyle, applyBoxStyle(props)]}
        {...otherProps}
      >
        <div
          role={"button"}
          onClick={(e) => {
            !disabled && ctx.onToggle(name, e)
          }}
          css={applyCollapseItemHeaderStyle(
            isExpanded,
            ctx.expandIconPosition,
            disabled,
            ctx.mode,
          )}
        >
          {icon && (
            <span
              css={applyCollapseItemHeaderIconStyle(
                isExpanded,
                ctx.expandIconPosition,
                disabled,
                ctx.mode,
              )}
            >
              {icon}
            </span>
          )}
          <div css={applyCollapseItemHeaderTitleStyle(isExpanded, disabled)}>
            {header}
          </div>
          {extra && (
            <div
              css={collapseItemExtraStyle}
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
              css={applyCollapseItemContentStyle(ctx.mode)}
              role={"region"}
              variants={CollapseItemAnimation}
              animate={unmountOnExit ? "enter" : isExpanded ? "enter" : "exit"}
              exit={"exit"}
              initial={unmountOnExit ? "exit" : false}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  },
)

CollapseItem.displayName = "CollapseItem"
