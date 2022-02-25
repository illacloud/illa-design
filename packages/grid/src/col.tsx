/** @jsxImportSource @emotion/react */
import { Children, forwardRef, useContext } from "react"
import { ColProps } from "./interface"
import { RowContext } from "./row-context"
import { applyColContainer, getOneUnitWidth } from "./style"

export const Col = forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const {
    span,
    offset,
    order,
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

  const rowContextProps = useContext(RowContext)
  const horizontalGap = rowContextProps?.horizontalGap

  const oneUnitWidth = getOneUnitWidth(Children.count(props.children))

  const containerCss = applyColContainer(order)

  // const containerPushCss = applyColPushStyle(push, oneUnitWidth)
  // const containerPullCss = applyColPullStyle(pull)
  //
  // const containerOffsetCss = applyColOffsetStyle(offset)
  //
  // const containerWidthCss = applyColWidthStyle(offset)

  return (
    <div ref={ref} {...otherProps}>
      {props.children}
    </div>
  )
})

Col.displayName = "Col"
