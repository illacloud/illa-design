import { forwardRef } from "react"
import { TBodyProps } from "./interface"
import { css } from "@emotion/react"

export const TBody = forwardRef<HTMLTableSectionElement, TBodyProps>(
  (props, ref) => {
    const { _css, ...otherProps } = props
    return <tbody css={css(_css)} ref={ref} {...otherProps} />
  },
)

TBody.displayName = "TBody"
