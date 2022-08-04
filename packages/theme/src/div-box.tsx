import { forwardRef } from "react"
import { DivBoxProps } from "./interface"
import { applyBoxStyle } from "./style"

export const DivBox = forwardRef<HTMLDivElement, DivBoxProps>((props, ref) => {
  const { children, ...rest } = props
  return (
    <div {...rest} ref={ref} css={applyBoxStyle(props)}>
      {children}
    </div>
  )
})

DivBox.displayName = "DivBox"
