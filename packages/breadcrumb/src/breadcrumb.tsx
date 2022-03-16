import { Children, forwardRef, ReactElement } from "react"
import { BreadcrumbProps } from "./interface"

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (props, ref) => {
    const { ...restProps } = props

    return <div {...restProps} ref={ref}></div>
  },
)

Breadcrumb.displayName = "Breadcrumb"
