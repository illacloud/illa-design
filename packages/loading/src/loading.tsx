import { forwardRef } from "react"
import { LoadingProps } from "./interface"

export const Loading = forwardRef<HTMLDivElement, LoadingProps>((props, ref) => {

  return (
    <div ref={ref}></div>
  )
})

Loading.displayName = "Loading"
