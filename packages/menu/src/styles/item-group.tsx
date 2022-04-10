import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyItemGroupCss(): SerializedStyles {
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-06`)};
  `
}

export const itemGroupTitleCss = css`
  line-height: 40px;
  padding: 0 24px;
`
