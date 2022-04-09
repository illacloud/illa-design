import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"

export const titleEllipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export function applyItemCss(isHorizontal: boolean): SerializedStyles {
  if (isHorizontal) {
    return css`
      display: inline-block;
      vertical-align: middle;
    `
  }

  return css`
    display: flex;
  `
}
