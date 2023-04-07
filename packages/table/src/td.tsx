import { forwardRef, useContext, useRef, useState } from "react"
import { TdProps } from "./interface"
import {
  applyBorderStyle,
  applyContentContainer,
  applyContentStyle,
  applyNormalStyle,
  applySizeStyle,
  showRealContentSizeLimitStyle,
  textOverflowStyle,
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
    const [overflow, setOverflow] = useState(false)

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
          applyContentContainer(align ?? tableContext?.align ?? "left"),
        )}
        ref={ref}
        {...otherProps}
      >
        {overflow && (
          <div css={applyContentStyle(lastRow)}>
            <div
              css={[
                applySizeStyle(size ?? tableContext?.size ?? "medium"),
                showRealContentSizeLimitStyle,
              ]}
            >
              {children}
            </div>
          </div>
        )}
        <div
          css={textOverflowStyle}
          ref={(element) => {
            if (!element) return
            if (
              element.scrollHeight > element.clientHeight ||
              element.scrollWidth > element.clientWidth
            ) {
              setOverflow(true)
            }
          }}
        >
          {children}
        </div>
      </td>
    )
  },
)

Td.displayName = "Td"
