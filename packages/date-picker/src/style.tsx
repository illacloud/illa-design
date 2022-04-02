import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applySinglePickerContentCss(
  shortcutsPlacementLeft?: boolean,
): SerializedStyles {
  let style
  if (shortcutsPlacementLeft) {
    style = css`
      flex-direction: row-reverse;
    `
  } else {
    style = css`
      flex-direction: column;
    `
  }
  return css`
    display: flex;
    ${style};
  `
}

export const triContentCommonCss = css`
  margin: 0;
`
export const rangeLeftContentCss = css`
  border-right: none;
`
export const rangeRightContentCss = css`
  border-left: none;
`

export function applyShortContainerCss(
  shortcutsPlacementLeft?: boolean,
): SerializedStyles {
  let style
  if (shortcutsPlacementLeft) {
    style = css`
      border-right: none;
      display: flex;
      flex-direction: column;
    `
  } else {
    style = css`
      border-top: none;
      width: 255px;
    `
  }
  return css`
    border: 1px solid ${globalColor(`--${illaPrefix}-gray-08`)};
    padding: 5px 0 5px 10px;
    ${style};
  `
}

export const shortCutsCss = css`
  display: inline-block;
  margin: 5px 10px 5px 0;
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

export function applyDatePicker() {}
