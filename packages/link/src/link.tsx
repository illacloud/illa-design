/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { LinkProps } from "./interface"

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return <a ref={ref}>
    {props.children}
  </a>
})
