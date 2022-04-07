import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { TabPosition, TabsSize, Variant } from "./interface"

export function applyPaddingSizeCss(size: TabsSize) {
  let paddingSize
  switch (size) {
    case "large":
      paddingSize = css`
        margin: 8px 0;
      `
      break
    case "small":
      paddingSize = css`
        margin: 4px 0;
      `
      break
    default:
      paddingSize = css`
        margin: 6px 0;
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
  scroll-behavior: smooth;
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

export function applyCapsuleHeaderChildCss(isSelected?: boolean) {
  const selectedBoxCss =
    isSelected &&
    css`
      background-color: ${globalColor(`--${illaPrefix}-white-01`)};
      border-radius: 4px;
      transition: background-color 200ms;
    `
  return css`
    ${applyCommonHeaderChildCss()};
    ${selectedBoxCss};
    margin: 4px 2px;
  `
}

export function applyCardHeaderChildCss(isSelected?: boolean) {
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
    ${applyCommonHeaderChildCss()};
    ${selectedBoxCss};
    border-radius: 4px 4px 0 0;
    border-width: 1px;
    border-bottom-width: 1.5px;
    z-index: 2;
  `
}

export const addButtonCss = css`
  height: 100%;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
  &:hover {
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  }
`

export const deleteButtonCss = css`
  height: 100%;
  padding: 4px;
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
  &:hover {
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  }
`

export function applyCommonHeaderChildCss() {
  return css`
    display: inline-flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  `
}

export const verticalLineCss = css`
  width: 1px;
  height: 8px;
  position: relative;
  right: 0;
  background-color: ${globalColor(`--${illaPrefix}-gray-03`)};
`

export function applyTextCss(
  size: TabsSize,
  isSelected?: boolean,
  disabled?: boolean,
  tabBarSpacing: number = 0,
) {
  const _tabBarSpacing = tabBarSpacing >= 0 ? tabBarSpacing : 0
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
      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
      }
    `
  }
  return css`
    ${textColorCss};
    ${applyPaddingSizeCss(size)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    padding: 1px 8px;
    line-height: 22px;
    margin-left: ${8 + _tabBarSpacing / 2}px;
    margin-right: ${8 + _tabBarSpacing / 2}px;
    transition: color 200ms, background-color 200ms;
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

export function applyCommonBlueLineCss(width: number, positon: number) {
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

export const tabContentContainerCss = css`
  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;
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
  let verticalPaddingCss
  if (isPre) {
    verticalPaddingCss = css`
      padding-bottom: 4px;
    `
  } else {
    verticalPaddingCss = css`
      padding-top: 4px;
    `
  }
  let colorCss =
    disabled &&
    css`
      cursor: not-allowed;
    `

  return css`
    display: inline-flex;
    font-size: 12px;
    cursor: pointer;
    ${verticalPaddingCss}
    ${colorCss}
    position: relative;
    width: 100%;
    justify-content: center;
  `
}

export function applyCommonPreNextIconCss(
  isPre: boolean,
  variant?: Variant,
  disabled?: boolean,
  tabPosition?: TabPosition,
) {
  let colorCss =
    disabled &&
    css`
      cursor: not-allowed;
    `
  return css`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 40px;
    font-size: 12px;
    text-align: center;
    padding: 0 12px ${variant === "capsule" ? 11 : 0}px 4px;
    ${colorCss};
    margin-top: ${variant === "line" && tabPosition === "bottom" ? 13 : 0}px;
    position: relative;
  `
}

export function applyHorizontalIconLineCss(isLeft: boolean) {
  const positionCss = isLeft
    ? css`
        right: 0;
      `
    : css`
        left: 2px;
      `
  return css`
    height: 100%;
    width: 1px;
    position: absolute;
    ${positionCss};
    top: 0;
    background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  `
}

export function applyCommonIconLineCss(isTop: boolean) {
  const positionCss = isTop
    ? css`
        bottom: 4px;
      `
    : css`
        top: 6.5px;
      `
  return css`
    height: 0.5px;
    width: 100%;
    position: absolute;
    ${positionCss};
    left: 0;
    background-color: ${globalColor(`--${illaPrefix}-gray-08`)}; ;
  `
}

export const lineCss = css`
  height: 0.5px;
  width: 100%;
  position: absolute;
  bottom: 0.5px;
  left: 0;
  background-color: ${globalColor(`--${illaPrefix}-gray-08`)}; ;
`
