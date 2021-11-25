/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { css, SerializedStyles } from "@emotion/react"
import { DividerProps, DividerVariant } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"

function applyDividerContainerHorizontal(variant: DividerVariant): SerializedStyles {
  return css`
    display: inline-flex;
    border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
    border-style: ${variant};
    border-width: 0 0 1px 0;
    width: 100%;
  `
}

function applyDividerContainerVertical(variant: DividerVariant): SerializedStyles {
  return css`
    display: inline-flex;
    border-width: 0 0 0 1px;
    border-image: initial;
    border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
    border-style: ${variant};
    height: 1em;
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

  return <div css={dividerCss} ref={ref} {...otherProps} />
})
