import { forwardRef } from "react"
import { MenuProps } from "../interface"

export const VerticalMenu = forwardRef<HTMLDivElement, MenuProps>(
  (props, ref) => {
    return <div ref={ref}></div>
  },
)

VerticalMenu.displayName = "VerticalMenu"
