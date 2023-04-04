import { forwardRef, useContext } from "react"
import { THeadProps } from "./interface"
import { css } from "@emotion/react"
import { TableContext } from "./table-context"
import { applyBoxStyle } from "@illa-design/theme"
import { applyPinedStyle, resizerTableHeaderStyle } from "./style"

export const Thead = forwardRef<HTMLTableSectionElement, THeadProps>(
  (props, ref) => {
    const { pinedHeader, ...otherProps } = props
    const tableContext = useContext(TableContext)
    return tableContext?.showHeader ? (
      <thead
        css={css(
          resizerTableHeaderStyle,
          applyPinedStyle(pinedHeader),
          applyBoxStyle(props),
        )}
        ref={ref}
        {...otherProps}
      />
    ) : null
  },
)

Thead.displayName = "Thead"
