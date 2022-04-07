import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"

export const titleEllipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export function applyItemCss(): SerializedStyles {
  return css`
    display: flex;
  `
}
