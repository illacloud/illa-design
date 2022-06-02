import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyEmptyContainerStyle(
  paddingVertical: string,
): SerializedStyles {
  return css`
    padding: ${paddingVertical} 0;
    vertical-align: middle;
    text-align: center;
  `
}

export const descriptionStyle = css`
  margin-top: 16px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
  font-size: 14px;
`
