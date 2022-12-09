import { css, SerializedStyles } from "@emotion/react"
import { getColor } from "@illa-design/theme"
import { PaginationSize } from "./interface"

export const paginationContainer = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

export const totalStyle = css`
  font-size: 14px;
  margin-right: 8px;
  color: ${getColor("grayBlue", "02")};
`

export function applyJumperStyle(disabled?: boolean): SerializedStyles {
  return css`
    font-size: 14px;
    margin-left: 8px;
    color: ${disabled
      ? getColor("grayBlue", "07")
      : getColor("grayBlue", "02")};
  `
}

export const jumperContainerStyle = css`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`

export const selectorContainerStyle = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

export function applyDirectorIconStyle(
  marginStyle?: SerializedStyles,
  size?: PaginationSize,
  disabled?: boolean,
  active?: boolean,
): SerializedStyles {
  let textColor = css`
    color: ${active ? getColor("blue", "01") : getColor("grayBlue", "02")};
  `
  let bgColor = css`
    background-color: ${active ? getColor("blue", "07") : "unset"};
  `

  if (disabled) {
    textColor = css`
      color: ${active ? getColor("blue", "05") : getColor("grayBlue", "07")};
    `
    bgColor = css`
      background-color: ${active ? getColor("grayBlue", "09") : "unset"};
    `
  }

  let hoverStyle = css``

  if (!disabled && !active) {
    hoverStyle = css`
      &:hover {
        background-color: ${getColor("grayBlue", "09")};
      }
    `
  }

  let s = "32px"

  switch (size) {
    case "small":
      s = "24px"
      break
    case "medium":
      s = "32px"
      break
    case "large":
      s = "40px"
      break
  }

  return css`
    font-size: 10px;
    width: ${s};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${s};
    border-radius: 4px;
    cursor: ${disabled ? "not-allowed" : "pointer"};
    ${marginStyle};
    ${textColor};
    ${bgColor};
    ${hoverStyle};
  `
}
