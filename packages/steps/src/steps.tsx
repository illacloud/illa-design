/** @jsxImportSource @emotion/react */
import React, { forwardRef } from "react"
import { StepsProps } from "./interface"

export const Steps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {

  return (
    <div ref={ref}></div>
  )
})

Steps.displayName = "Steps"
