import { forwardRef } from "react"
import { CardMetaProps } from "./interface"
import {
  applyCardMetaDescription,
  applyCardMetaFooter,
  applyCardMetaTitle,
} from "./style"
import { applyBoxStyle } from "@illa-design/theme"
import { deleteCssProps } from "@illa-design/theme"

export const Meta = forwardRef<HTMLDivElement, CardMetaProps>((props, ref) => {
  const { title, description, actionList, avatar, ...restProps } = props
  return (
    <div ref={ref} css={applyBoxStyle(props)} {...deleteCssProps(restProps)}>
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
