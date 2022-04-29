import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const emptyContainerCss = css`
  vertical-align: middle;
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  text-align: center;
`

export const iconCss = css`
  width: 64px;
  height: 64px;
`

export const descriptionCss = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  font-size: 14px;
`
