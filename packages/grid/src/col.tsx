/** @jsxImportSource @emotion/react */
import { Children, forwardRef, useContext } from "react"
import { ColProps } from "./interface"
import { RowContext } from "./row-context"
import {
  applyColContainer,
  applyColOffsetStyle,
  applyColPullStyle,
  applyColPushStyle,
  applyColWidthStyle,
  getOneUnitWidth,
} from "./style"
import { css } from "@emotion/react"

export const Col = forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const {
    span = 24,
    offset = 0,
    order,
    push = 0,
    pull = 0,
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
  const oneUnitWidth = getOneUnitWidth(
    Children.count(props.children),
    horizontalGap,
  )

  // container css
  const containerCss = applyColContainer(order)
  // outer css
  const containerPushCss = applyColPushStyle(push, oneUnitWidth.normal ?? "0px")
  const containerPullCss = applyColPullStyle(pull, oneUnitWidth.normal ?? "0px")
  const containerOffsetCss = applyColOffsetStyle(
    offset,
    oneUnitWidth.normal ?? "0px",
  )
  const containerWidthCss = applyColWidthStyle(
    span,
    oneUnitWidth.normal ?? "0px",
  )
  // reactive css

  const finalCss = css`
    ${containerCss};
    ${containerPushCss};
    ${containerPullCss};
    ${containerOffsetCss};
    ${containerWidthCss};
  `

  return (
    <div ref={ref} css={finalCss} {...otherProps}>
      {props.children}
    </div>
  )
})

Col.displayName = "Col"
