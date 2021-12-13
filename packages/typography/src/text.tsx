/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { TextProps } from "./interface"

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {

  return <span ref={ref}>

  </span>

})
