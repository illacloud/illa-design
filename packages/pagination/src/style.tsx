import { css } from "@emotion/react"
import { getColor } from "@illa-design/theme"

export const paginationContainer = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

export const totalTextStyle = css`
  font-size: 14px;
  color: ${getColor("grayBlue", "02")};
`

export const jumperContainerStyle = css`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`
