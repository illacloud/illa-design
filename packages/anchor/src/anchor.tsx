import { forwardRef } from "react"
import { AnchorProps } from "./interface"

export const Anchor = forwardRef<HTMLDivElement, AnchorProps>((props, ref) => {

  return (
    <div ref={ref}></div>
  )
})

Anchor.displayName = "Anchor"
