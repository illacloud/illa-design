import { forwardRef } from "react"
import { THeadProps } from "./interface"
import { css } from "@emotion/react"

export const Thead = forwardRef<HTMLTableSectionElement, THeadProps>(
  (props, ref) => {
    const { _css, ...otherProps } = props
    return <thead css={css(_css)} ref={ref} {...otherProps} />
  },
)

Thead.displayName = "Thead"
