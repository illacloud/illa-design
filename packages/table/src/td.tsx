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
      _css,
      ...otherProps
    } = props

    const tableContext = useContext(TableContext)

    return (
      <td
        css={css(
          applyNormalStyle,
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
      </td>
    )
  },
)

Td.displayName = "Td"
