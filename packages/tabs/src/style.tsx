import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { TabPosition, TabsColorScheme, TabsSize, TabVariant } from "./interface"

export function applyPaddingSizeCss(size: TabsSize): SerializedStyles {
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

export function applyHeaderContainerCss(
  isHorizontal: boolean,
): SerializedStyles {
  return css`
    display: inline-flex;
    flex-direction: ${isHorizontal ? "column" : "row"};
    align-items: end;
  `
}

export function applyLineHeaderContainerCss(
  isHorizontal: boolean,
  position?: TabPosition,
): SerializedStyles {
  let borderCss: SerializedStyles
  switch (position) {
    case "bottom": {
      borderCss = css`
        border-top: solid ${globalColor(`--${illaPrefix}-grayBlue-08`)} 1px;
        align-items: start;
      `
      break
    }

    case "left": {
      borderCss = css`
        border-right: solid ${globalColor(`--${illaPrefix}-grayBlue-08`)} 1px;
        align-items: end;
      `
      break
    }
    case "right": {
      borderCss = css`
        border-left: solid ${globalColor(`--${illaPrefix}-grayBlue-08`)} 1px;
        align-items: start;
      `
      break
    }
    default: {
      borderCss = css`
        border-bottom: solid ${globalColor(`--${illaPrefix}-grayBlue-08`)} 1px;
        align-items: end;
      `
      break
    }
  }
  return css`
    ${applyHeaderContainerCss(isHorizontal)}
    ${borderCss}
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
  justify-content: flex-end;
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
  background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  border-radius: 4px;
  padding: 0 2px;
  margin-bottom: 10px;
`

export const containerHideScrollBarCss = css`
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  display: inline-flex;

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
  isSelected?: boolean,
  disabled?: boolean,
): SerializedStyles {
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
    border-radius: 4px;
    ${applyCapsuleHoverBackgroundCss(isSelected, disabled)}
    transition: background-color 200ms;
  `
}

export function applyCapsuleHoverBackgroundCss(
  isSelected?: boolean,
  disabled?: boolean,
): SerializedStyles | undefined {
  if (!isSelected && !disabled) {
    return css`
      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-white-01`)};
      }
    `
  }
}

export function applyCardHeaderChildCss(
  isSelected?: boolean,
  disabled?: boolean,
): SerializedStyles {
  const selectedBoxCss = isSelected
    ? css`
        border: solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
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
    margin: 0 2px;
    ${applyHoverBackgroundCss(isSelected, disabled)}
    color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
    transition: background-color 200ms;
  `
}

export function applyHoverBackgroundCss(
  isSelected?: boolean,
  disabled?: boolean,
): SerializedStyles | undefined {
  if (!isSelected && !disabled) {
    return css`
      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
      }
    `
  }
}

export const addButtonCss = css`
  height: 100%;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};

  &:hover {
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  }
`

export const deleteButtonCss = css`
  height: 100%;
  padding: 4px;
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};

  &:hover {
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  }
`

export function applyCommonHeaderChildCss(): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  `
}

export function applyTextColorCss(
  colorScheme: TabsColorScheme,
  disabled?: boolean,
  isSelected?: boolean,
  variant?: TabVariant,
) {
  const textColorScheme = isInnerColor(colorScheme) ? colorScheme : "blue"
  let textColorCss
  if (disabled) {
    textColorCss = css`
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
      cursor: not-allowed;
    `
  } else if (isSelected) {
    textColorCss = css`
      color: ${globalColor(`--${illaPrefix}-${textColorScheme}-02`)};
    `
  } else {
    textColorCss = css`
          color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};

          &:hover {
            background-color: ${
              variant !== "capsule"
                ? globalColor(`--${illaPrefix}-grayBlue-09`)
                : undefined
            }
        `
  }
  if (!disabled && variant === "text") {
    if (isSelected) {
      textColorCss = css`
        color: ${globalColor(`--${illaPrefix}-${textColorScheme}-02`)};
        font-weight: 500;
      `
    } else {
      textColorCss = css`
              color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};

              &:hover {
                background-color: ${globalColor(`--${illaPrefix}-gray-09`)}
            `
    }
  }
  return textColorCss
}

export function applyTextCss(
  colorScheme: TabsColorScheme,
  size: TabsSize,
  isSelected?: boolean,
  disabled?: boolean,
  tabBarSpacing: number = 0,
  variant?: TabVariant,
): SerializedStyles {
  const _tabBarSpacing = tabBarSpacing >= 0 ? tabBarSpacing : 0

  return css`
    ${applyTextColorCss(colorScheme, disabled, isSelected, variant)};
    ${applyPaddingSizeCss(size)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    padding: 1px 8px;
    line-height: 22px;
    border-radius: 4px;
    margin-left: ${8 + _tabBarSpacing / 2}px;
    margin-right: ${8 + _tabBarSpacing / 2}px;
    transition: color 200ms, background-color 200ms;
  `
}

export const colors: TabsColorScheme[] = [
  "blackAlpha",
  "gray",
  "grayBlue",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "cyan",
  "purple",
  "techPink",
  "techPurple",
]

const isInnerColor = (colorScheme: string) => colors.includes(colorScheme)

export function applyCommonBlueLineCss(
  width: number,
  position: number,
  colorScheme: TabsColorScheme,
): SerializedStyles {
  const lineColorScheme = isInnerColor(colorScheme) ? colorScheme : "blue"
  return css`
    width: ${width - 32}px;
    height: 2px;
    position: relative;
    box-sizing: border-box;
    left: ${position}px;
    bottom: 0;
    transition: left 200ms, width 200ms;
    background-color: ${globalColor(`--${illaPrefix}-${lineColorScheme}-02`)};
  `
}

export function applyHorizontalBlueLineCss(
  height: number,
  position: number,
  colorScheme: TabsColorScheme,
  size?: TabsSize,
): SerializedStyles {
  const lineColorScheme = isInnerColor(colorScheme) ? colorScheme : "blue"
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
    transition: top 200ms, height 200ms;
    bottom: 0;
    background-color: ${globalColor(`--${illaPrefix}-${lineColorScheme}-03`)};
  `
}

export const cardDividerContainerCss = css`
  width: 100%;
  display: inline-flex;
  position: relative;
  border-top: solid ${globalColor(`--${illaPrefix}-grayBlue-08`)} 1px;
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
  border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  border-top: 0;
`

export function applyTabContentWrapperCss(
  showPaneIndex: number,
  animated?: boolean,
): SerializedStyles {
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
  variant?: TabVariant,
  disabled?: boolean,
): SerializedStyles {
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
  variant?: TabVariant,
  disabled?: boolean,
): SerializedStyles {
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
    font-size: 12px;
    text-align: center;
    padding: 0 12px ${variant === "capsule" ? 11 : 0}px 4px;
    ${colorCss};
  `
}

export function applyHorizontalIconLineCss(isLeft: boolean): SerializedStyles {
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
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  `
}

export function applyCommonIconLineCss(isTop: boolean): SerializedStyles {
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
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)}; ;
  `
}

export const tabsContentCss = css`
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  flex-direction: inherit;
`
