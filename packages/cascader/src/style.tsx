import { globalColor, illaPrefix } from "@illa-design/theme"
import { css, SerializedStyles } from "@emotion/react"

// popup
export function applyPopupStyle(): SerializedStyles {
  return css`
    display: flex;
    list-style: none;
    white-space: nowrap;
    height: 216px;
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    border-radius: 2px;
  `
}
