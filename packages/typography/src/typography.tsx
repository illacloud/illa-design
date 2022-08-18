import { forwardRef, HTMLAttributes } from "react"
import { applyTypoContainer } from "./typograph-style"

export const Typography = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <article css={[applyTypoContainer()]} ref={ref} {...props}>
        {props.children}
      </article>
    )
  },
)

Typography.displayName = "Typography"
