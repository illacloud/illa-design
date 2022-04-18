import { forwardRef, useContext } from "react"
import { THeadProps } from "./interface"
import { css } from "@emotion/react"
import { TableContext } from "./table-context"

export const Thead = forwardRef<HTMLTableSectionElement, THeadProps>(
  (props, ref) => {
    const { _css, ...otherProps } = props
    const tableContext = useContext(TableContext)
    return tableContext?.showHeader ? (
      <thead css={css(_css)} ref={ref} {...otherProps} />
    ) : null
  },
)

Thead.displayName = "Thead"
