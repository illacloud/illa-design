import {
  forwardRef,
  useContext,
  useRef,
  useState,
  useEffect, useCallback
} from "react";
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
      ...otherProps
    } = props

    const tableContext = useContext(TableContext)
    const [overflow, setOverflow] = useState(false)
    const contentRef = useRef<HTMLDivElement>()

    const checkOverflow = useCallback(
      debounce((element) => {
        if (element) {
          const hasOverflow = element.scrollHeight > element.clientHeight;
          setOverflow(hasOverflow);
        }
      }, 300), // 设置延迟时间，比如 300 毫秒
      []
    );

    useEffect(() => {
      const element = contentRef?.current;
      if (element) {
        checkOverflow(element);
      }

      // 当组件卸载时，取消 debounce 调用
      return () => {
        checkOverflow.cancel();
      };
    }, [w, checkOverflow]);

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
        {overflow ? (
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
