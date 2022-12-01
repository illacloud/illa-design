import { forwardRef } from "react"
import { CardProps } from "./interface"
import {
  applyCard,
  applyCardBody,
  applyCardHeader,
  applyCardHeaderExtra,
  applyCardHeaderTitle,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    title,
    extra,
    size = "medium",
    hoverable,
    bordered = true,
    children,
    ...restProps
  } = props

  return (
    <div
      ref={ref}
      css={[applyCard(bordered, hoverable ?? false), applyBoxStyle(props)]}
      {...deleteCssProps(restProps)}
    >
      {title || extra ? (
        <div css={applyCardHeader(size)}>
          {title && <div css={applyCardHeaderTitle}>{title}</div>}
          {extra && <div css={applyCardHeaderExtra}>{extra}</div>}
        </div>
      ) : null}
      <div css={applyCardBody(size)}>{children}</div>
    </div>
  )
})

Card.displayName = "Card"
