import { forwardRef } from "react"
import { CollapseProps } from "./interface"

export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (props, ref) => {
    return <div ref={ref}></div>
  },
)

Collapse.displayName = "Collapse"
