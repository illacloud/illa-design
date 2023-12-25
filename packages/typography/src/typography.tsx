import { forwardRef } from "react"
import { applyTypoContainer } from "./typograph-style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { TypographyProps } from "./interface"

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (props, ref) => {
    return (
      <article
        css={[applyTypoContainer(), applyBoxStyle(props)]}
        ref={ref}
        {...deleteCssProps(props)}
      >
        {props.children}
      </article>
    )
  },
)

Typography.displayName = "Typography"
