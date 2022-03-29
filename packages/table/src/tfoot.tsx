import { forwardRef } from "react"
import { TFootProps } from "./interface"

export const TFoot = forwardRef<HTMLTableSectionElement, TFootProps>(
  (props, ref) => {
    return <tfoot ref={ref} {...props} />
  },
)

TFoot.displayName = "TFoot"
