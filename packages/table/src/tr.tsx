import { forwardRef } from "react"
import { TrProps } from "./interface"
import { applyBoxStyle } from "@illa-design/theme"

export const Tr = forwardRef<HTMLTableRowElement, TrProps>((props, ref) => {
  const { ...otherProps } = props
  return <tr css={applyBoxStyle(props)} ref={ref} {...otherProps} />
})

Tr.displayName = "Tr"
