/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { ColProps } from "./interface"

export const Col = forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const {
    span,
    offset,
    order = -1,
    push,
    pull,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    ...otherProps
  } = props
  return (
    <div ref={ref} {...otherProps}>
      {props.children}
    </div>
  )
})

Col.displayName = "Col"
