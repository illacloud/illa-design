import { forwardRef } from "react"
import { TFootProps } from "./interface"
import { css } from "@emotion/react"

export const TFoot = forwardRef<HTMLTableSectionElement, TFootProps>(
  (props, ref) => {
    const { _css, ...otherProps } = props
    return <tfoot css={css(_css)} ref={ref} {...otherProps} />
  },
)

TFoot.displayName = "TFoot"
