import * as React from "react"
import { forwardRef, useContext, useEffect, useRef, useState } from "react"
import { ThProps } from "./interface"
import {
  applyBorderStyle,
  applyContentContainer,
  applySizeStyle,
  applyThStyle,
} from "./style"
import { css } from "@emotion/react"
import { TableContext } from "./table-context"
import { mergeRefs } from "@illa-design/system"

export const Th = forwardRef<HTMLTableHeaderCellElement, ThProps>(
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

    const thRef = useRef<HTMLTableHeaderCellElement | null>()
    const [thTop, setThTop] = useState(0)

    useEffect(() => {
      setThTop(thRef.current?.parentElement?.offsetTop ?? 0)
    })

    return (
      <th
        css={css(
          applyThStyle(),
          applySizeStyle(size ?? tableContext?.size ?? "medium"),
          applyBorderStyle(
            borderedCell ?? tableContext?.borderedCell,
            striped ?? tableContext?.striped,
          ),
          _css,
        )}
        ref={mergeRefs(ref, thRef)}
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
