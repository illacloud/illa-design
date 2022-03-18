/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { CardGridProps } from "./interface"
import { applyCardGrid } from "./style"

export const CardGrid = forwardRef<HTMLDivElement, CardGridProps>(
  (props, ref) => {
    const { hoverable = false, children, ...restProps } = props
    return (
      <div ref={ref} css={applyCardGrid(hoverable)} {...restProps}>
        {children}
      </div>
    )
  },
)

CardGrid.displayName = "CardGrid"
