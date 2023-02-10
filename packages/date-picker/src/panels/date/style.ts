import { css } from "@emotion/react"
import { getColor } from "@illa-design/theme"

export const datePanelStyle = css`
  width: 280px;
`

export const timePickerBodyPanelStyle = css`
  border-left: 1px solid ${getColor("grayBlue", "08")};
  height: 325px;
  .time-list {
    height: 100%;
    overflow: hidden;
  }
  .time-picker-popup {
    height: calc(100% - 40px);
  }
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
