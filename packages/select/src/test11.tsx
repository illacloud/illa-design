/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { OptionProps } from "./interface"

export const Test = forwardRef<HTMLDivElement, OptionProps>((props, ref) => {
  const {
    children,
    disabled,
    ...otherProps
  } = props


  return (
    <div ref={ref} onClick={()=>{
      console.log(ref, 'ref')}} {...otherProps}>
      wwwwwwww
    </div>
  )
})

Test.displayName = "Test"
