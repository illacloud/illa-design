import { css } from "@emotion/react"
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
  hasContent: boolean,
  showBanner: boolean,
) {
  const padding = hasContent ? `16px` : `9px 16px`
  const radius = showBanner ? `` : `border-radius: 2px`
  return css`
    display: inline-flex;
    box-sizing: border-box;
    ${radius};
    padding: ${padding};
    font-size: 14px;
    line-height: 1.57;
    overflow: hidden;
    width: 100%;
    background-color: ${colorMap[type]};
  `
}
export function applyAlert(hasContent: boolean) {
  const align = hasContent ? `flex-start` : `center`
  return css`
    box-sizing: border-box;
    display: inline-flex;
    align-items: ${align};
    overflow: hidden;
    width: 100%;
    word-break: break-all;
  `
}

export function applyAlertIcon(type: AlertType, hasContent: boolean) {
  const display = hasContent
    ? ""
    : `display: flex;
    align-items: center;`
  return css`
    margin-right: 8px;
    ${display};
    svg {
      color: ${iconColorMap[type]};
      font-size: 16px;
    }
  `
}

export function applyAlertContentWrapper() {
  return css`
    position: relative;
    flex: 1;
  `
}

export function applyAlertTitle(hasContent: boolean) {
  const style = hasContent
    ? `
        margin-bottom: 4px;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.57;
      `
    : ``
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    ${style}
  `
}

export function applyAlertContent() {
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-04`)};
  `
}

export function applyAlertCloseBtn(type: AlertType) {
  return css`
    box-sizing: border-box;
    padding: 0;
    font-size: 8px;
    cursor: pointer;
    outline: none;
    border: none;
    margin-left: 8px;
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
    background-color: ${colorMap[type]};
    width: 8px;
  `
}

export function applyAlertAction() {
  return css`
    margin-left: 8px;
  `
}
