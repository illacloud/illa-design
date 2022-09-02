import { Children, forwardRef, useContext } from "react"
import { ColProps } from "./interface"
import { RowContext } from "./row-context"
import {
  applyColContainer,
  applyColOffsetStyle,
  applyColPullStyle,
  applyColPushStyle,
  applyColWidthStyle,
  applyReactiveStyle,
  getOneUnitWidth,
} from "./style"
import { css } from "@emotion/react"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

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
  const childCount = rowContextProps?.childCount ?? 1
  const oneUnitWidth = getOneUnitWidth(childCount, horizontalGap)

  // container css
  const containerCss = applyColContainer(order)
  // outer css
  const containerPushCss = applyColPushStyle(oneUnitWidth.normal, push - pull)
  const containerPullCss = applyColPullStyle(oneUnitWidth.normal, pull - push)
  const containerOffsetCss = applyColOffsetStyle(oneUnitWidth.normal, offset)
  const containerWidthCss = applyColWidthStyle(oneUnitWidth.normal, span)
  // reactive css
  const xsCss = applyReactiveStyle(
    "0px",
    oneUnitWidth.xs ?? oneUnitWidth.normal,
    xs,
  )
  const smCss = applyReactiveStyle(
    "576px",
    oneUnitWidth.sm ?? oneUnitWidth.normal,
    sm,
  )
  const mdCss = applyReactiveStyle(
    "768px",
    oneUnitWidth.md ?? oneUnitWidth.normal,
    md,
  )
  const lgCss = applyReactiveStyle(
    "992px",
    oneUnitWidth.lg ?? oneUnitWidth.normal,
    lg,
  )
  const xlCss = applyReactiveStyle(
    "1200px",
    oneUnitWidth.xl ?? oneUnitWidth.normal,
    xl,
  )
  const xxlCss = applyReactiveStyle(
    "1600px",
    oneUnitWidth.xxl ?? oneUnitWidth.normal,
    xxl,
  )

  const finalCss = css`
    ${containerCss};
    ${containerPushCss};
    ${containerPullCss};
    ${containerOffsetCss};
    ${containerWidthCss};
    ${xsCss};
    ${smCss};
    ${mdCss};
    ${lgCss};
    ${xlCss};
    ${xxlCss};
  `

  return (
    <div
      ref={ref}
      css={[finalCss, applyBoxStyle(props)]}
      {...deleteCssProps(otherProps)}
    >
      {props.children}
    </div>
  )
})

Col.displayName = "Col"
