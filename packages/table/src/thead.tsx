import { forwardRef } from "react"
import { THeadProps } from "./interface"

export const Thead = forwardRef<HTMLTableSectionElement, THeadProps>(
  (props, ref) => {
    return <thead ref={ref} {...props} />
  },
)

Thead.displayName = "Thead"
