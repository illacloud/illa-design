import { css } from "@emotion/react"
import { getColor } from "@illa-design/theme"

export const datePanelStyle = css`
  width: 280px;
`

export const timePickerBodyPanelStyle = css`
  border-left: 1px solid ${getColor("grayBlue", "08")};
`
export const timePickerHeaderPanelStyle = css`
  height: 40px;
  border-bottom: 1px solid ${getColor("grayBlue", "08")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getColor("grayBlue", "02")};
  font-weight: 500;
`
