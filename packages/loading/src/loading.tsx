import { forwardRef } from "react"
import { css } from "@emotion/react"
import { LoadingProps } from "./interface"
import { applyLoadingStyle } from "./style"

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (props, ref) => {
    const { _css, colorScheme = "gray", ...restProps } = props
    return (
      <div
        ref={ref}
        css={css(applyLoadingStyle(colorScheme), _css)}
        {...restProps}
      />
    )
  },
)

Loading.displayName = "Loading"
