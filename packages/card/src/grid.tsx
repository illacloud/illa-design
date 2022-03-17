/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { CardGridProps } from "./interface"
import { applyCardGrid } from "./style"

export const Grid = forwardRef<HTMLDivElement, CardGridProps>((props, ref) => {
  const { hoverable = false, children, ...restProps } = props
  return (
    <div ref={ref} css={applyCardGrid(hoverable)} {...restProps}>
      {children}
    </div>
  )
})

Grid.displayName = "Grid"
