import { forwardRef, useContext } from "react"
import { TdProps } from "./interface"
import {
  applyBorderStyle,
  applyContentContainer,
  applyNormalStyle,
  applySizeStyle,
} from "./style"
import { css } from "@emotion/react"
import { TableContext } from "./table-context"
import { applyBoxStyle } from "@illa-design/theme"

export const Td = forwardRef<HTMLTableDataCellElement, TdProps>(
  (props, ref) => {
    const {
      size,
      borderedCell,
      striped,
      align,
      children,
      showFooter,
      showHeader,
      colIndex,
      rowIndex,
      lastCol,
      lastRow,
      ...otherProps
    } = props

    const tableContext = useContext(TableContext)

    return (
      <td
        css={css(
          applyNormalStyle(),
          applySizeStyle(size ?? tableContext?.size ?? "medium"),
          applyBorderStyle(
            borderedCell ?? tableContext?.borderedCell,
            striped ?? tableContext?.striped,
            colIndex,
            rowIndex,
            lastCol,
            lastRow,
          ),
          applyBoxStyle(props),
        )}
        ref={ref}
        {...otherProps}
      >
        <div
          css={applyContentContainer(align ?? tableContext?.align ?? "left")}
        >
          {children}
        </div>
      </td>
    )
  },
)

Td.displayName = "Td"
