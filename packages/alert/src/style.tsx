import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { AlertType } from "./interface"

export const colorMap = {
  info: `${globalColor(`--${illaPrefix}-blue-07`)}`,
  success: `${globalColor(`--${illaPrefix}-green-07`)}`,
  warning: `${globalColor(`--${illaPrefix}-orange-07`)}`,
  error: `${globalColor(`--${illaPrefix}-red-07`)}`,
}

export const iconColorMap = {
  info: `${globalColor(`--${illaPrefix}-blue-03`)}`,
  loading: `${globalColor(`--${illaPrefix}-blue-03`)}`,
  success: `${globalColor(`--${illaPrefix}-green-03`)}`,
  warning: `${globalColor(`--${illaPrefix}-orange-03`)}`,
  error: `${globalColor(`--${illaPrefix}-red-03`)}`,
  normal: "",
}

export function applyAlertContainer(
  type: AlertType,
  showBanner?: boolean,
): SerializedStyles {
  const radius = showBanner ? `` : `border-radius: 8px`
  return css`
    display: inline-flex;
    box-sizing: border-box;
    ${radius};
    font-size: 14px;
    line-height: 1.57;
    overflow: hidden;
    width: 100%;
    background-color: ${colorMap[type]};
  `
}
export function applyAlert(
  hasContent: boolean,
  showIcon?: boolean,
  closable?: boolean,
): SerializedStyles {
  const align = hasContent ? `flex-start` : `center`
  const padding = hasContent ? `16px` : `9px 16px`
  return css`
    box-sizing: border-box;
    display: inline-flex;
    align-items: ${align};
    overflow: hidden;
    width: 100%;
    word-break: break-all;
    padding: ${padding};
    ${showIcon
      ? css`
          padding-left: 40px;
        `
      : ""};
    ${closable
      ? css`
          padding-right: 48px;
        `
      : ""}
  `
}

export function applyAlertIcon(
  type: AlertType,
  hasContent?: boolean,
): SerializedStyles {
  return css`
    position: absolute;
    top: ${hasContent ? "20px" : "12px"};
    left: 16px;
    color: ${iconColorMap[type]};
    font-size: 16px;
    line-height: 0;
  `
}

export const applyAlertContentWrapper = css`
  position: relative;
  flex: 1;
`

export function applyAlertTitle(hasContent: boolean): SerializedStyles {
  const style = hasContent
    ? `
        margin-bottom: 4px;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.57;
      `
    : ``
  return css`
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    ${style}
  `
}

export const applyAlertContent = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export function applyAlertCloseBtn(
  type: AlertType,
  hasContent?: boolean,
): SerializedStyles {
  return css`
    position: absolute;
    top: ${hasContent ? `24px` : `16px`};
    right: 24px;
    font-size: 8px;
    line-height: 0;
    cursor: pointer;
    color: ${iconColorMap[type]};
    background-color: ${colorMap[type]};
  `
}

export const applyAlertAction = css`
  margin-left: 8px;
`
