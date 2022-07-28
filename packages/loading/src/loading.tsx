import { forwardRef } from "react"
import { css } from "@emotion/react"
import { LoadingProps } from "./interface"
import { applyLoadingStyle } from "./style"

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (props, ref) => {
    const { _css, colorScheme = "gray", size = "medium", ...restProps } = props
    return (
      <div
        ref={ref}
        css={css(applyLoadingStyle(colorScheme, size), _css)}
        {...restProps}
      />
    )
  },
)

Loading.displayName = "Loading"
