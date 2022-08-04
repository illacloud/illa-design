import { forwardRef } from "react"
import { DivBoxProps } from "./interface"
import styled from "@emotion/styled"

export const DivBox = forwardRef<HTMLDivElement, DivBoxProps>((props, ref) => {
  const { children, ...rest } = props
  const Div = styled.div``
  return (
    <Div {...rest} ref={ref}>
      {children}
    </Div>
  )
})

DivBox.displayName = "DivBox"
