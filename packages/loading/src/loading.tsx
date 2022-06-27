import { forwardRef } from "react"
import { css } from "@emotion/react"
import { LoadingProps } from "./interface"
import { applyLoadingStyle } from "./style"

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (props, ref) => {
    const { _css, colorScheme = "techPurple", ...restProps } = props
    return (
      <div
        ref={ref}
        css={css(applyLoadingStyle(colorScheme), _css)}
        {...restProps}
      ></div>
    )
  },
)

Loading.displayName = "Loading"
