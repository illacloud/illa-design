/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { InputProps } from "./interface"
import { omit } from "@illa-design/system"

export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {

  const {
    ...rest
  } = props

  const otherProps = omit(rest, [""])


  return <div ref={ref} {...otherProps}>
    {props.children}
  </div>

})
