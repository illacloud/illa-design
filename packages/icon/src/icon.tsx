import { forwardRef } from "react"
import { IconProps } from "./interface"

export const Icon = forwardRef<SVGAElement, IconProps>((props, ref) => {

  const w = props.width ?? props.size ?? "1em"
  const h = props.height ?? props.size ?? "1em"
  const c = props.color ?? "currentColor"

  return <svg width={w} height={h} color={c} {...props}>{props.children}</svg>
})
