/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { css, SerializedStyles } from "@emotion/react"
import { DividerProps, DividerVariant } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"

function applyDividerContainerHorizontal(variant: DividerVariant): SerializedStyles {
  return css`
    width: 100%;
    border-bottom: 1px ${variant} ${globalColor(`--${illaPrefix}-gray-08`)};
  `
}

function applyDividerContainerVertical(variant: DividerVariant): SerializedStyles {
  return css`
    height: 1em;
    min-width: 0;
    max-width: 0;
    border-right: 1px ${variant} ${globalColor(`--${illaPrefix}-gray-08`)};
  `
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {

  const {
    direction = "vertical",
    variant = "solid",
    ...otherProps
  } = props

  let dividerCss: SerializedStyles
  switch (direction) {
    case "vertical":
      dividerCss = applyDividerContainerVertical(variant)
      break
    case "horizontal":
      dividerCss = applyDividerContainerHorizontal(variant)
      break
  }

  return <div ref={ref} {...otherProps}>
    <div css={dividerCss} />
  </div>
})
