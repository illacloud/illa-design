import { css, SerializedStyles } from "@emotion/react"

export function applyIndentCss(width: number): SerializedStyles {
  return css`
    display: inline-block;
    width: ${width}px;
  `
}
