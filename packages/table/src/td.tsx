import { forwardRef, useContext, useRef, useState, useEffect } from "react"
import { TdProps } from "./interface"
import {
  applyBorderStyle,
  applyContentContainer,
  applyOverflowContentStyle,
  applyNormalStyle,
  applySizeStyle,
  showRealContentSizeLimitStyle,
  textOverflowStyle,
  applyTdStyle,
} from "./style"
import { css } from "@emotion/react"
import { TableContext } from "./table-context"
import { applyBoxStyle } from "@illa-design/theme"
import debounce from "lodash.debounce"

export const Td = forwardRef<HTMLTableDataCellElement, TdProps>(
  (props, ref) => {
    const {
      w,
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
      className,
      ...otherProps
    } = props

    const tableContext = useContext(TableContext)
    const [overflow, setOverflow] = useState(false)
    const contentRef = useRef<HTMLDivElement>()

    const checkOverflow = (element: HTMLDivElement) => {
      if (element) {
        const hasOverflow = element.scrollHeight > element.clientHeight
        setOverflow(hasOverflow)
      }
    }

    useEffect(() => {
      const debouncedCheckOverflow = debounce(checkOverflow, 300)

      const element = contentRef?.current
      if (element) {
        debouncedCheckOverflow(element)
      }
      return () => {
        debouncedCheckOverflow.cancel()
      }
    }, [w])

    return (
      <td
        css={css(
          applyTdStyle(overflow),
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
        className={className}
        ref={ref}
        {...otherProps}
      >
        {overflow ? (
          <div
            css={applyOverflowContentStyle(lastRow && rowIndex !== 0, lastCol)}
          >
            <div
              css={[
                applySizeStyle(size ?? tableContext?.size ?? "medium"),
                showRealContentSizeLimitStyle,
              ]}
            >
              {children}
            </div>
          </div>
        ) : null}
        <div
          css={textOverflowStyle}
          ref={(element) => {
            if (!element) return
            contentRef.current = element
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
