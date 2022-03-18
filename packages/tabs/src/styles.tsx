import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { TabPosition, TabsSize, Variant } from "./interface"

export function applyPaddingSizeCss(size: TabsSize) {
  let paddingSize
  switch (size) {
    case "large":
      paddingSize = css`
        padding: 9px 0;
      `
      break
    case "small":
      paddingSize = css`
        padding: 5px 0;
      `
      break
    default:
      paddingSize = css`
        padding: 7px 0;
      `
  }

  return paddingSize
}

export const commonContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const horizontalContainerCss = css`
  display: inline-flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

// header
export const tabHeaderContainerCss = css`
  display: inline-flex;
  width: 100%;
  align-items: center;
`

export function applyHeaderContainerCss(isHorizontal: boolean) {
  return css`
    display: inline-flex;
    flex-direction: ${isHorizontal ? "column" : "row"};
    align-items: center;
  `
}

// header
export const tabHeaderHorizontalContainerCss = css`
  display: inline-flex;
  flex-direction: column;
`

export const tabLineHeaderContainerCss = css`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`

export const tabLineHeaderHorizontalContainerCss = css`
  display: inline-flex;
  flex-direction: row;
  flex-grow: 1;
`

export const tabCapsuleHeaderContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
  border-radius: 4px;
  margin-bottom: 10px;
`

export const containerHideScrollBarCss = css`
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }

  /* Chrome Safari */
  -ms-overflow-style: none;
  box-sizing: border-box;
`

export const containerHorizontalHideScrollBarCss = css`
  overflow-y: scroll;
  height: 100%;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }

  /* Chrome Safari */
  -ms-overflow-style: none;

  box-sizing: border-box;
`

export const tabCardHeaderContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
`

export function applyCapsuleHeaderChildCss(
  spaceWidth: number,
  isSelected?: boolean,
) {
  const selectedBoxCss =
    isSelected &&
    css`
      background-color: ${globalColor(`--${illaPrefix}-white-01`)};
      border-radius: 4px;
      transition: background-color 200ms;
    `
  return css`
    ${applyCommonHeaderChildCss(spaceWidth)};
    ${selectedBoxCss};
    margin: 4px;
  `
}

export function applyCardHeaderChildCss(
  spaceWidth: number,
  isSelected?: boolean,
) {
  const selectedBoxCss = isSelected
    ? css`
        border: solid ${globalColor(`--${illaPrefix}-gray-08`)};
        border-bottom: solid white;
      `
    : css`
        border: solid transparent;
      `
  return css`
    position: relative;
    top: 1px;
    ${applyCommonHeaderChildCss(spaceWidth)};
    ${selectedBoxCss};
    border-radius: 4px 4px 0 0;
    border-width: 1px;
    z-index: 2;
  `
}

export const addButtonCss = css`
  height: 100%;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

export const deleteButtonCss = css`
  height: 100%;
  padding: 4px;
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`

export function applyCommonHeaderChildCss(spaceWidth: number) {
  return css`
    display: inline-flex;
    align-items: center;
    padding: 0 ${spaceWidth}px;
    &:hover {
      cursor: pointer;
    }
  `
}

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
      cursor: not-allowed;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    transition: color 200ms;
    ${hoverCss}
  `
}

export function applyDividerCommonLineCss(w: number) {
  return css`
    width: ${w}px;
    display: inline-flex;
    position: relative;
    bottom: 4px;
    border-bottom: solid ${globalColor(`--${illaPrefix}-gray-08`)} 1px;
  `
}

export function applyDividerHorizontalLineCss(h: number) {
  return css`
    height: ${h}px;
    display: inline-flex;
    border-right: solid ${globalColor(`--${illaPrefix}-gray-08`)} 1px;
  `
}

export function applyCommonBlueLineCss(
  width: number,
  positon: number,
  size?: TabsSize,
) {
  return css`
    width: ${width - 32}px;
    height: 2px;
    position: relative;
    box-sizing: border-box;
    left: ${positon}px;
    transition: left 200ms, width 200ms;
    top: 1px;
    background-color: ${globalColor(`--${illaPrefix}-blue-03`)};
  `
}

export function applyHorizontalBlueLineCss(
  height: number,
  position: number,
  size?: TabsSize,
) {
  let padding = 7
  switch (size) {
    case "large":
      padding = 9
      break
    case "small":
      padding = 5
      break
  }
  return css`
    width: 2px;
    height: ${height - padding * 2}px;
    position: relative;
    box-sizing: border-box;
    top: ${padding + position}px;
    left: 1px;
    transition: top 200ms, height 200ms;
    bottom: 0;
    background-color: ${globalColor(`--${illaPrefix}-blue-03`)};
  `
}

export const cardDividerContainerCss = css`
  width: 100%;
  display: inline-flex;
  position: relative;
  border-top: solid ${globalColor(`--${illaPrefix}-gray-08`)} 1px;
`

// content

export const tabContentContainerCss = css`
  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
  //padding-top: 10px;
  width: 100%;
  height: 100%;
`

export const tabCardContentContainerCss = css`
  ${tabContentContainerCss};
  border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
  border-top: 0;
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

export function applyHorizontalPreNextIconCss(
  isPre: boolean,
  variant?: Variant,
  disabled?: boolean,
) {
  let verticallPaddingCss
  if (isPre) {
    verticallPaddingCss = css`
      padding-bottom: 4px;
    `
  } else {
    verticallPaddingCss = css`
      padding-top: 4px;
    `
  }
  let colorCss =
    disabled &&
    css`
      cursor: not-allowed;
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `

  return css`
    font-size: 12px;
    cursor: pointer;
    ${verticallPaddingCss}
    ${colorCss}
  `
}

export function applyCommonPreNextIconCss(
  isPre: boolean,
  variant?: Variant,
  disabled?: boolean,
  tabPosition?: TabPosition,
  size?: TabsSize,
) {
  let horizontalPaddingCss
  if (isPre) {
    horizontalPaddingCss = css`
      padding-right: 4px;
    `
  } else {
    horizontalPaddingCss = css`
      padding-left: 4px;
    `
  }

  let paddingValue = 7
  if (size === "large") {
    paddingValue = 9
  } else if (size === "small") {
    paddingValue = 5
  }
  let paddingCss
  if (variant === "line" && tabPosition === "top") {
    paddingCss = css`
      align-items: start;
      padding-top: ${paddingValue + 3}px;
    `
  } else if (variant === "line" && tabPosition === "bottom") {
    paddingCss = css`
      align-items: end;
      padding-bottom: ${paddingValue + 3}px;
    `
  }

  let bottomCss
  if (variant === "card") {
    bottomCss = css`
      border-bottom: solid ${globalColor(`--${illaPrefix}-gray-08`)} 1px;
    `
  }
  let colorCss =
    disabled &&
    css`
      cursor: not-allowed;
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  return css`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    font-size: 12px;
    text-align: center;
    padding-bottom: ${variant === "capsule" ? 11 : 0}px;
    ${bottomCss};
    ${colorCss}
    ${paddingCss}
    ${horizontalPaddingCss}
  `
}
