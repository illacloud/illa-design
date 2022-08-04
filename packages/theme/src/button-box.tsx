import { forwardRef } from "react"
import { ButtonBoxProps } from "./interface"
import styled from "@emotion/styled"
import { applyBoxStyle } from "./style"

export const ButtonBox = forwardRef<HTMLButtonElement, ButtonBoxProps>(
  (props, ref) => {
    const { children, ...rest } = props
    const Container = styled.button`
      ${applyBoxStyle(props)};
    `
    return (
      <Container {...rest} ref={ref}>
        {children}
      </Container>
    )
  },
)

ButtonBox.displayName = "ButtonBox"
