import { css, SerializedStyles } from "@emotion/react"
import { StepsStatus, StepsType } from "../interface"
import { getColor } from "@illa-design/theme"

export function applyHorizontalStepContainerStyle(
  canClick?: boolean,
  disabled?: boolean,
  last?: boolean,
): SerializedStyles {
  return css`
    flex-shrink: 0;
    display: inline-flex;
    flex-grow: ${last ? 0 : 1};
    flex-direction: column;
    cursor: ${disabled ? "not-allowed" : canClick ? "pointer" : "auto"};
  `
}

export function applyHorizontalDescriptionStyle(
  type?: StepsType,
): SerializedStyles {
  return css`
    margin-right: 16px;
    white-space: pre;
    word-break: break-word;
    margin-top: 4px;
    margin-left: ${type === "dot" ? "24px" : "40px"};
    font-size: 12px;
    color: ${getColor("grayBlue", "04")};
  `
}

export const horizontalStatusContainerStyle = css`
  align-items: center;
  overflow: hidden;
  display: inline-flex;
  flex-direction: row;
`

export const horizontalTitleStyle = css`
  font-size: 16px;
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 16px;
  margin-right: 16px;
  color: ${getColor("grayBlue", "02")};
`

export function applyHorizontalLineStyle(
  status: StepsStatus,
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
    flex-grow: 1;
    margin-right: 16px;
    border-bottom: 1px solid;
    ${c};
  `
}
