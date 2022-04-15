import * as React from "react"
import { forwardRef, useContext } from "react"
import { ThProps } from "./interface"
import {
  applyBorderStyle,
  applyContentContainer,
  applySizeStyle,
  applyThStyle,
} from "./style"
import { css } from "@emotion/react"
import { TableContext } from "./table-context"
import { ThContext } from "./th-context"

export const Th = forwardRef<HTMLTableHeaderCellElement, ThProps>(
  (props, ref) => {
    const {
      size,
      borderedCell,
      striped,
      align,
      fixedHeader,
      children,
      _css,
      ...otherProps
    } = props
    const tableContext = useContext(TableContext)
    const thContext = useContext(ThContext)

    return (
      <th
        css={css(
          applyThStyle(fixedHeader ?? thContext?.fixedHeader ?? true),
          applySizeStyle(size ?? tableContext?.size ?? "medium"),
          applyBorderStyle(
            borderedCell ?? tableContext?.borderedCell,
            striped ?? tableContext?.striped,
          ),
          _css,
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          css={applyContentContainer(align ?? tableContext?.align ?? "left")}
        >
          {children}
        </div>
      </th>
    )
  },
)

Th.displayName = "Th"
