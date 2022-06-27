import { forwardRef } from "react"
import { TrProps } from "./interface"

export const Tr = forwardRef<HTMLTableRowElement, TrProps>((props, ref) => {
  const { _css, ...otherProps } = props
  return <tr css={_css} ref={ref} {...otherProps} />
})

Tr.displayName = "Tr"
