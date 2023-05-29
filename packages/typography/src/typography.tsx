import { forwardRef, HTMLAttributes } from "react"
import { applyTypoContainer } from "./typograph-style"
import { deleteCssProps } from "@illa-design/theme"

export const Typography = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <article
        css={[applyTypoContainer()]}
        ref={ref}
        {...deleteCssProps(props)}
      >
        {props.children}
      </article>
    )
  },
)

Typography.displayName = "Typography"
