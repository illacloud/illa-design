import React, { forwardRef } from "react"
import { TrProps } from "./interface"

export const Tr = forwardRef<HTMLTableRowElement, TrProps>((props, ref) => {
  return <tr ref={ref} {...props} />
})

Tr.displayName = "Tr"
