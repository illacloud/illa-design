import { forwardRef, useContext } from "react"
import { TFootProps } from "./interface"
import { css } from "@emotion/react"
import { TableContext } from "./table-context"

export const TFoot = forwardRef<HTMLTableSectionElement, TFootProps>(
  (props, ref) => {
    const { _css, ...otherProps } = props
    const tableContext = useContext(TableContext)
    return tableContext?.showFooter ? (
      <tfoot css={css(_css)} ref={ref} {...otherProps} />
    ) : null
  },
)

TFoot.displayName = "TFoot"
