import { forwardRef, useContext, useRef } from "react"
import { TdProps } from "./interface"
import {
  applyBorderStyle,
  applyContentContainer,
  applyContentStyle,
  applyNormalStyle,
  applySizeStyle, showRealContentSizeLimitStyle,
  textOverflowStyle
} from "./style";
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
    const overflowRef = useRef(false)

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
        {overflowRef.current && (
          <div
            css={[
              applySizeStyle(size ?? tableContext?.size ?? "medium"),
              applyContentStyle(lastRow),
            ]}
          >
            <div css={showRealContentSizeLimitStyle}>{children}</div>
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
              overflowRef.current = true
              console.log("元素溢出了！!!!!", colIndex, rowIndex)
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
