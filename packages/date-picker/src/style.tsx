import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const triggerCss = css`
  & > div {
    padding: 0;
  }
`

export const wrapCss = css`
  display: flex;
`

export const singlePickerContentCss = css`
  border: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  border-radius: 8px;
  display: flex;
`

export const horShortcuts = css`
  min-height: 48px;
  border-top: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  width: min-content;
  min-width: 100%;
`

export const vertShortcuts = css`
  border-right: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  border-bottom: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  max-height: 384px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const popupCss = css`
  & > div:first-of-type > div {
    height: 320px;
  }
  & > li:first-of-type {
    font-size: 12px;
  }
`

export const triContentCommonCss = css`
  width: 278px;
  margin: 0;
  border: none;
  display: flex;
  flex-direction: column;
`
export const rangeLeftContentCss = css`
  border-right: none;
  margin-right: 30px;
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
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  font-size: 12px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`

export const nowButtonCss = css`
  margin: 12px;
`

export const showTimeContainerCss = css`
  width: 144px;
  border-left: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
`

export const showTimeHeaderCss = css`
  height: 50px;
  border-bottom: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 42px;
`
export function applyShortContainerCss(
  shortcutsPlacementLeft?: boolean,
): SerializedStyles {
  let style
  if (shortcutsPlacementLeft) {
    style = css`
      display: flex;
      flex-direction: column;
    `
  }
  return css`
    padding: 7px 0;
    ${style};
  `
}

export const rangeBodyCss = css`
  display: flex;
`

export function applyRangeFooterCss(
  showTime: boolean,
  showShortcuts: boolean,
): SerializedStyles {
  let posStyle
  if (showTime && !showShortcuts) {
    posStyle = css`
      justify-content: end;
    `
  }
  if (showTime && showShortcuts) {
    posStyle = css`
      justify-content: space-between;
    `
  }
  return css`
    display: flex;
    padding: 12px;
    ${posStyle};
    width: min-content;
    min-width: calc(100% - 24px);
    align-items: center;
    border-top: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    & > button:first-of-type {
      margin-right: 5px;
    }
  `
}

export const rangePickerCss = css`
  display: flex;
  padding: 10px 30px;
  & > div:first-of-type {
    margin-right: 40px;
  }
`

export const buttonBoxCss = css`
  width: 248px;
  text-align: right;
`

export const calendarBorderCss = css`
  border-bottom: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
`
