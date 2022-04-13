import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"

export function applyIndentCss(width: number): SerializedStyles {
  return css`
    display: inline-block;
    width: ${width}px;
  `
}
