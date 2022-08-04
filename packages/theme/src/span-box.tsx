import { forwardRef } from "react"
import { SpanBoxProps } from "./interface"
import styled from "@emotion/styled"
import { applyBoxStyle } from "./style"

export const SpanBox = forwardRef<HTMLSpanElement, SpanBoxProps>(
  (props, ref) => {
    const { children, ...rest } = props
    const Container = styled.span`
      ${applyBoxStyle(props)};
    `
    return (
      <Container {...rest} ref={ref}>
        {children}
      </Container>
    )
  },
)

SpanBox.displayName = "SpanBox"
