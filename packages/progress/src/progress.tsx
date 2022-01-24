/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { ProgressProps } from "./interface"

export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {

  const {
    ...otherProps
  } = props

  return <div ref={ref} {...otherProps}>
    {props.children}
  </div>
})

Progress.displayName = "Progress"