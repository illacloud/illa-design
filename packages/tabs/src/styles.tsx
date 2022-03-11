import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { TabsSize } from "./interface"

export function applyPaddingSizeCss(size: TabsSize) {
  let paddingSize
  switch (size) {
    case "large":
      paddingSize = css`
        padding: 9px 16px;
      `
      break
    case "small":
      paddingSize = css`
        padding: 5px 16px;
      `
      break
    default:
      paddingSize = css`
        padding: 7px 16px;
      `
  }

  return paddingSize
}

export const containerCss = css`
  display: inline-flex;
  flex-direction: column;
  width: 600px;
  height: 800px;
`

// header
export const tabHeaderContainerCss = css`
  display: inline-flex;
  width: 100%;
`

export const tabLineHeaderContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10px;
`

export const tabCapsuleHeaderContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
  border-radius: 4px;
  margin-bottom: 10px;
`

export function applyCapsuleHeaderChildCss(isSelected?: boolean) {
  const selectedBoxCss =
    isSelected &&
    css`
      background-color: ${globalColor(`--${illaPrefix}-white-01`)};
      border-radius: 4px;
      transition: background-color 200ms;
    `
  return css`
    ${commonHeaderChildCss};
    ${selectedBoxCss};
    margin: 4px;
  `
}

export function applyCardHeaderChildCss(isSelected?: boolean) {
  const selectedBoxCss = isSelected
    ? css`
        border: solid ${globalColor(`--${illaPrefix}-gray-08`)};
        border-bottom: solid white;
      `
    : css`
        border: solid ${globalColor(`--${illaPrefix}-white-01`)};
        border-bottom: solid transparent};
      `
  return css`
    position: relative;
    top: 1px;
    ${commonHeaderChildCss};
    ${selectedBoxCss};
    border-radius: 4px 4px 0 0;
    border-width: 1px;
    z-index: 2;
  `
}

export const commonHeaderChildCss = css`
  display: inline-flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

export const verticalLineCss = css`
  width: 1px;
  height: 8px;
  background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
`

export function applyTextCss(
  size: TabsSize,
  isSelected?: boolean,
  disabled?: boolean,
  noHoverStyle?: boolean,
) {
  let textColorCss
  if (disabled) {
    textColorCss = css`
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  } else if (isSelected) {
    textColorCss = css`
      color: ${globalColor(`--${illaPrefix}-blue-03`)};
    `
  } else {
    textColorCss = css`
      color: ${globalColor(`--${illaPrefix}-gray-03`)};
    `
  }
  const hoverCss =
    !!noHoverStyle &&
    css`
      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
      }
    `
  return css`
    ${textColorCss};
    ${applyPaddingSizeCss(size)};
    font-size: 14px;
    line-height: 22px;
    transition: color 200ms;
    ${hoverCss}
  `
}

export const dividerLineCss = css`
  width: 100%;
  display: inline-flex;
  position: relative;
  border-bottom: solid ${globalColor(`--${illaPrefix}-gray-08`)} 1px;
`

export function applyBlueLineCss(width: number, positon: number) {
  return css`
    width: ${width - 32}px;
    height: 2px;
    position: relative;
    box-sizing: border-box;
    left: ${positon}px;
    transition: left 200ms, width 200ms;
    top: 1px;
    bottom: 0;
    background-color: ${globalColor(`--${illaPrefix}-blue-03`)};
  `
}

export const cardDividerLineCss = css`
  width: 100%;
  display: inline-flex;
  position: relative;
  border-top: solid ${globalColor(`--${illaPrefix}-gray-08`)} 1px;
`

export const cardDividerContainerCss = css`
  width: 100%;
  display: inline-flex;
  position: relative;
  border-top: solid ${globalColor(`--${illaPrefix}-gray-08`)} 1px;
`

export function applyCardDividerCenterLineCss(width: number) {
  return css`
    width: ${width + 0.5}px;
    display: inline-flex;
    position: relative;
    border-top: solid white 1px;
  `
}

export function applyCardDividerLeftLineCss(width?: number) {
  return css`
    width: 100%;
    display: inline-flex;
    position: relative;
    border-top: solid ${globalColor(`--${illaPrefix}-gray-08`)} 1px;
  `
}

export function applyCardDividerRightLineCss() {
  return css`
    flex-grow: 1;
    display: inline-flex;
    position: relative;
    border-top: solid ${globalColor(`--${illaPrefix}-gray-08`)} 1px;
  `
}

export function applyWhiteLineCss(width: number, positon: number) {
  return css`
    width: ${width + 1}px;
    height: 2px;
    position: relative;
    box-sizing: border-box;
    left: ${positon + 1}px;
    bottom: 2px;
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
  `
}

// content

export const tabContentContainerCss = css`
  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  background-color: whitesmoke;
  width: 100%;
  height: 100%;
`

export function applyTabContentWrapperCss(
  showPaneIndex: number,
  animated?: boolean,
) {
  const transitionCss =
    animated === true &&
    css`
      transition: right 200ms;
    `
  const diff = showPaneIndex * 100
  return css`
    width: 100%;
    height: 100%;
    right: ${diff}%;
    ${transitionCss};
    position: relative;
    display: inline-flex;
    flex-direction: row;
  `
}

export const tabPaneContainerCss = css`
  display: inline-flex;
  flex-grow: 2;
  flex: none;
  width: 100%;
`
