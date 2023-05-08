import { forwardRef, useContext } from "react"
import { THeadProps } from "./interface"
import { css } from "@emotion/react"
import { TableContext } from "./table-context"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { applyPinedStyle, applyResizerTableHeaderStyle } from "./style"

export const Thead = forwardRef<HTMLTableSectionElement, THeadProps>(
  (props, ref) => {
    const { pinedHeader, ...otherProps } = props
    const tableContext = useContext(TableContext)

    return tableContext?.showHeader ? (
      <thead
        css={css(
          applyResizerTableHeaderStyle(tableContext?.enableColumnResizing),
          applyPinedStyle(pinedHeader),
          applyBoxStyle(props),
        )}
        ref={ref}
        {...deleteCssProps(otherProps)}
      />
    ) : null
  },
)

Thead.displayName = "Thead"
