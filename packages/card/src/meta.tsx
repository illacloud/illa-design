/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { CardMetaProps } from "./interface"
import {
  applyCardMetaTitle,
  applyCardMetaDescription,
  applyCardMetaFooter,
} from "./style"

export const Meta = forwardRef<HTMLDivElement, CardMetaProps>((props, ref) => {
  const { title, description, actionList, avatar, ...restProps } = props
  return (
    <div ref={ref} {...restProps}>
      {title || description ? (
        <div>
          {title && <div css={applyCardMetaTitle}>{title}</div>}
          {description && (
            <div css={applyCardMetaDescription}>{description}</div>
          )}
        </div>
      ) : null}
      {avatar || actionList ? (
        <div css={applyCardMetaFooter}>
          {avatar ? <div>{avatar}</div> : null}
          {actionList}
        </div>
      ) : null}
    </div>
  )
})

Meta.displayName = "Meta"
