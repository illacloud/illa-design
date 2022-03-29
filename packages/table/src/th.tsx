import { forwardRef } from "react"
import { ThProps } from "./interface"

export const Th = forwardRef<HTMLTableHeaderCellElement, ThProps>(
  (props, ref) => {
    return <th ref={ref} {...props} />
  },
)

Th.displayName = "Th"
