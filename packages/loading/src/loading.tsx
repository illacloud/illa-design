import { forwardRef } from "react"
import { css } from "@emotion/react"
import { LoadingProps } from "./interface"
import { applyLoadingStyle } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (props, ref) => {
    const { colorScheme = "gray", size = "medium", ...restProps } = props
    return (
      <div
        ref={ref}
        css={css(applyLoadingStyle(colorScheme, size), applyBoxStyle(props))}
        {...deleteCssProps(restProps)}
      />
    )
  },
)

Loading.displayName = "Loading"
