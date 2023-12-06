import { css, SerializedStyles } from "@emotion/react"
import { getColor, globalColor, illaPrefix } from "@illa-design/theme"
import { AlertType } from "./interface"

export const colorMap = {
  info: `${globalColor(`--${illaPrefix}-blue-08`)}`,
  success: `${globalColor(`--${illaPrefix}-green-08`)}`,
  warning: `${globalColor(`--${illaPrefix}-orange-08`)}`,
  error: `${globalColor(`--${illaPrefix}-red-08`)}`,
}

export const iconColorMap = {
  info: `${globalColor(`--${illaPrefix}-blue-03`)}`,
  success: `${globalColor(`--${illaPrefix}-green-03`)}`,
  warning: `${globalColor(`--${illaPrefix}-orange-03`)}`,
  error: `${globalColor(`--${illaPrefix}-red-03`)}`,
}

export const leftContentStyle = css`
  display: flex;
  flex-grow: 1;
  margin-right: 8px;
  flex-direction: column;
`

export const leftIconStyle = css`
  margin-right: 8px;
  font-size: 16px;
`

export const leftIconSizeStyle = css`
  flex-shrink: 0;
`

export const titleContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const titleStyle = css`
  font-size: 14px;
  color: ${getColor("gray", "02")};
`

export const contentStyle = css`
  font-size: 14px;
  margin-top: 4px;
  color: ${getColor("gray", "04")};
`

export const closeIconStyle = css`
  margin-left: 8px;
`

export function applyAlertContainer(
  type: AlertType,
  showBanner?: boolean,
  hasContent?: boolean,
): SerializedStyles {
  const radius = showBanner
    ? css``
    : css`
        border-radius: 8px;
      `
  return css`
    display: flex;
    flex-direction: row;
    padding: 9px 16px;
    font-size: 14px;
    align-items: ${hasContent ? "flex-start" : "center"};
    background-color: ${colorMap[type]};
    ${radius};
  `
}
