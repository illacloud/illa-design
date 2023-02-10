import { css, SerializedStyles } from "@emotion/react"
import { getColor } from "@illa-design/theme"

export function applyCalendarContainerStyle(): SerializedStyles {
  return css`
    width: 100%;
    border: 1px solid ${getColor("grayBlue", "08")};
    border-radius: 2px;
  `
}

export function applyCalendarHeaderStyle(): SerializedStyles {
  return css`
    display: flex;
    align-items: center;
    padding: 24px;
  `
}

export const headerTextStyle = css`
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  color: ${getColor("grayBlue", "02")};
`

export const headerPageStyle = css`
  display: inline-flex;
  flex-direction: row;
  margin-left: 8px;
`

export const headerPageIconStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  &:hover {
    background-color: ${getColor("grayBlue", "09")};
    border-radius: 4px;
  }
`

export const headerSpaceStyle = css`
  flex-grow: 1;
`

export const headerSelectContainerStyle = css`
  display: inline-flex;
`
