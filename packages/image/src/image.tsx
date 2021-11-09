import { forwardRef } from "react"
import { ImageProps } from "./interface"

export const Image = forwardRef<HTMLDivElement, ImageProps>((props, ref) => {
  return <div className={props.className} ref={ref} style={props.style}>{props.children}</div>
})
