import { css, SerializedStyles } from "@emotion/react"
import { getColor } from "@illa-design/theme"
import { StepsStatus, StepsType } from "../interface"

export function applyVerticalStepContainerStyle(
  canClick?: boolean,
  disabled?: boolean,
  last?: boolean,
): SerializedStyles {
  return css`
    display: inline-flex;
    flex-shrink: 0;
    flex-grow: ${last ? 0 : 1};
    flex-direction: column;
    cursor: ${disabled ? "not-allowed" : canClick ? "pointer" : "auto"};
  `
}

export const verticalStatusContainerStyle = css`
  align-items: center;
  display: inline-flex;
  flex-direction: row;
`

export const verticalTitleStyle = css`
  font-size: 16px;
  flex-shrink: 0;
  margin-left: 16px;
  color: ${getColor("grayBlue", "02")};
`

export const verticalBottomContainer = css`
  display: inline-flex;
  margin-top: 4px;
  margin-bottom: 8px;
  flex-grow: 1;
`

export function applyVerticalLineStyle(
  status: StepsStatus,
  type: StepsType,
  lineless?: boolean,
): SerializedStyles {
  let c = css``
  switch (status) {
    case "wait":
      c = css`
        border-color: ${lineless ? "transparent" : getColor("grayBlue", "08")};
      `
      break
    case "process":
      c = css`
        border-color: ${lineless ? "transparent" : getColor("white", "01")};
      `
      break
    case "finish":
      c = css`
        border-color: ${lineless ? "transparent" : getColor("blue", "03")};
      `
      break
    case "error":
      c = css`
        border-color: ${lineless ? "transparent" : getColor("red", "03")};
      `
      break
  }

  return css`
    margin-top: 4px;
    margin-left: ${type === "dot" ? "3px" : "11px"};
    border-left: 1px solid;
    ${c};
  `
}

export function applyVerticalDescriptionStyle(
  type?: StepsType,
): SerializedStyles {
  return css`
    margin-right: 16px;
    word-wrap: break-word;
    white-space: pre;
    margin-left: ${type === "dot" ? "20px" : "28px"};
    font-size: 12px;
    color: ${getColor("grayBlue", "04")};
  `
}
