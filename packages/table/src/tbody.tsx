import { forwardRef } from "react"
import { TBodyProps } from "./interface"

export const TBody = forwardRef<HTMLTableSectionElement, TBodyProps>(
  (props, ref) => {
    return <tbody ref={ref} {...props} />
  },
)

TBody.displayName = "TBody"
