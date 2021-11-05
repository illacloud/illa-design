import { forwardRef } from "react"
import { IconProps } from "./interface"

export const Icon = forwardRef<HTMLDivElement, IconProps>((props, ref) => {
  return <svg {...props}>{props.children}</svg>
})
