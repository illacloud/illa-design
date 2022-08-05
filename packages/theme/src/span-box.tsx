import { forwardRef } from "react"
import { SpanBoxProps } from "./interface"
import { applyBoxStyle } from "./style"

export const SpanBox = forwardRef<HTMLSpanElement, SpanBoxProps>(
  (props, ref) => {
    const { children, ...rest } = props
    return (
      <span {...rest} ref={ref} css={applyBoxStyle(props)}>
        {children}
      </span>
    )
  },
)

SpanBox.displayName = "SpanBox"
