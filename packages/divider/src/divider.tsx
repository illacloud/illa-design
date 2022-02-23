/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { SerializedStyles } from "@emotion/react"
import { DividerProps } from "./interface"
import {
  applyDividerContainerHorizontal,
  applyDividerContainerVertical,
} from "./style"

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const { direction = "horizontal", variant = "solid", ...otherProps } = props

    let dividerCss: SerializedStyles
    switch (direction) {
      case "vertical":
        dividerCss = applyDividerContainerVertical(variant)
        break
      case "horizontal":
        dividerCss = applyDividerContainerHorizontal(variant)
        break
    }

    return <div css={dividerCss} ref={ref} {...otherProps} />
  },
)

Divider.displayName = "Divider"
