import { forwardRef } from "react"
import { css } from "@emotion/react"
import { ListItemProps } from "./interface"
import {
  applyListItemActionsStyle,
  applyListItemContainer,
  applyListItemExtraStyle,
  applyListItemInner,
} from "./style"

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  (props, ref) => {
    const { actions, extra, _css, ...otherProps } = props
    return (
      <div css={css(applyListItemContainer, _css)} ref={ref} {...otherProps}>
        <div css={applyListItemInner}>
          {props.children}
          {actions && <div css={applyListItemActionsStyle}>{actions}</div>}
        </div>
        {extra && <div css={applyListItemExtraStyle}>{extra}</div>}
      </div>
    )
  },
)

ListItem.displayName = "ListItem"
