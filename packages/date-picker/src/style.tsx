import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applySinglePickerContentCss(
  shortcutsPlacementLeft?: boolean,
): SerializedStyles {
  let style
  if (shortcutsPlacementLeft) {
    style = css`
      display: flex;
      flex-direction: column;
    `
  } else {
    style = css``
  }
  return css`
    ${style};
    border: 1px solid ${globalColor(`--${illaPrefix}-gray-08`)};
    border-bottom: none;
  `
}

export const triContentCommonCss = css`
  margin: 0;
  border: none;
  border-bottom: 1px solid ${globalColor(`--${illaPrefix}-gray-08`)};
`
export const rangeLeftContentCss = css`
  border-right: none;
`
export const rangeRightContentCss = css`
  border-left: none;
`

export const shortCutsCss = css`
  display: inline-block;
  margin: 5px 10px;
  padding: 2px 16px;
  background: ${globalColor(`--${illaPrefix}-gray-09`)};
  border-radius: 4px;
  color: ${globalColor(`--${illaPrefix}-gray-02`)};
  font-size: 12px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`

export const selectersContainerCss = css`
  display: flex;
  flex-direction: row;
`

export const showTimeContainerCss = css`
  width: 144px;
  border-left: 1px solid ${globalColor(`--${illaPrefix}-gray-08`)};
  border-bottom: 1px solid ${globalColor(`--${illaPrefix}-gray-08`)};
`

export const showTimeHeaderCss = css`
  height: 42px;
  border-bottom: 1px solid ${globalColor(`--${illaPrefix}-gray-08`)};
  color: ${globalColor(`--${illaPrefix}-gray-02`)};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 42px;
`

export const showTimeContentCss = css`
  display: flex;
  flex-direction: row;
  height: 292px;
`

export const laneItemCss = css`
  flex: 1;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const scrollItemCss = css`
  text-align: center;
  cursor: pointer;
  margin: 4px auto;
  width: 32px;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    color: ${globalColor(`--${illaPrefix}-blue-03`)};
  }
`

export function applyPickerFooterCss(
  showTime?: boolean,
  showNowBtn?: boolean,
): SerializedStyles {
  let posStyle
  if (showTime && showNowBtn) {
    posStyle = css`
      justify-content: space-between;
    `
  }
  if (showTime && !showNowBtn) {
    posStyle = css`
      justify-content: end;
    `
  }
  return css`
    display: flex;
    border-bottom: 1px solid ${globalColor(`--${illaPrefix}-gray-08`)};
    align-items: center;
    padding-left: 0;
    width: min-content;
    min-width: 100%;
    ${posStyle};
  `
}

export function applyShortContainerCss(
  shortcutsPlacementLeft?: boolean,
): SerializedStyles {
  let style
  if (shortcutsPlacementLeft) {
    style = css`
      display: flex;
      flex-direction: column;
      border: 1px solid ${globalColor(`--${illaPrefix}-gray-08`)};
      border-right: none;
    `
  } else {
    style = css`
      flex: 1;
    `
  }
  return css`
    padding: 5px 0;
    ${style};
  `
}

export const okButtonCss = css`
  margin: 7px 12px;
`
