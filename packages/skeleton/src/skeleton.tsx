import { forwardRef } from "react"
import { SkeletonProps } from "./interface"

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {

  return (
    <div ref={ref}></div>
  )
})

Skeleton.displayName = "Skeleton"
