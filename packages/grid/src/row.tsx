import { forwardRef, Children } from "react"
import { RowContextProps, RowProps } from "./interface"
import {
  applyHorizontalGap,
  applyRowContainer,
  applyVerticalGap,
} from "./style"
import { css } from "@emotion/react"
import { RowContext } from "./row-context"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { align, justify, horizontalGap, verticalGap, ...otherProps } = props

  const horizontalGapCss = applyHorizontalGap(horizontalGap)
  const verticalGapCss = applyVerticalGap(verticalGap)
  const containerCss = applyRowContainer(align, justify)

  const finalCss = css`
    ${horizontalGapCss};
    ${verticalGapCss};
    ${containerCss};
  `

  return (
    <div
      ref={ref}
      css={[finalCss, applyBoxStyle(props)]}
      {...deleteCssProps(otherProps)}
    >
      <RowContext.Provider
        value={
          {
            verticalGap,
            horizontalGap,
            childCount: Children.count(props.children),
          } as RowContextProps
        }
      >
        {props.children}
      </RowContext.Provider>
    </div>
  )
})

Row.displayName = "Row"
