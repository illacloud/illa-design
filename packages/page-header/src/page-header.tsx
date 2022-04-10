import { forwardRef } from "react"
import { PageHeaderProps } from "./interface"

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>((props, ref) => {

  return (
    <div ref={ref}></div>
  )
})

PageHeader.displayName = "PageHeader"
