import { forwardRef } from "react"
import { TdProps } from "./interface"

export const Td = forwardRef<HTMLTableDataCellElement, TdProps>(
  (props, ref) => {
    return <td ref={ref} {...props} />
  },
)

Td.displayName = "Td"
