/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { RowProps } from "./interface"
import { applyRowContainer } from "./style"

export const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { align, justify, horizontalGap, verticalGap, ...otherProps } = props
  return <div ref={ref} css={applyRowContainer()} {...otherProps}></div>
})

Row.displayName = "Row"
