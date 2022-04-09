import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"

export function applyMenuInnerCss(isHorizontal: boolean): SerializedStyles {
  if (isHorizontal) {
    return css`
      display: flex;
      align-items: center;
    `
  }

  return css``
}
