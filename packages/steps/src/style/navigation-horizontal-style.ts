import { css, SerializedStyles } from "@emotion/react"
import { getColor } from "@illa-design/theme"
import { StepsDirection, StepsStatus } from "../interface"

export function applyHorizontalNavigationContainerStyle(
  direction?: StepsDirection,
  last?: boolean,
  disabled?: boolean,
): SerializedStyles {
  let m = css``
  if (direction === "vertical" && !last) {
    m = css`
      margin-bottom: 16px;
    `
  }

  return css`
    width: ${direction === "vertical" ? "100%" : "auto"};
    display: inline-flex;
    overflow: hidden;
    align-self: start;
    height: 64px;
    flex-direction: column;
    flex: 1;
    ${m};
    cursor: ${disabled ? "not-allowed" : "auto"};
  `
}

export const horizontalNavigationContentStyle = css`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
`

export const horizontalNavigationTitleStyle = css`
  margin-left: 16px;
  margin-right: 16px;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const horizontalNavigationDescriptionStyle = css`
  margin-left: 40px;
  margin-top: 4px;
  flex-grow: 1;
  margin-right: 40px;
  font-size: 12px;
  word-wrap: break-word;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
  color: ${getColor("grayBlue", "04")};
`

export function applyHorizontalNavigationLineStyle(
  status: StepsStatus,
  lineless?: boolean,
): SerializedStyles {
  let c = css``
  switch (status) {
    case "finish":
    case "wait":
      c = css`
        border-color: transparent;
      `
      break
    case "process":
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
    margin-right: 16px;
    margin-top: 14px;
    border-top: 2px solid ${getColor("grayBlue", "08")};
    ${c};
  `
}
