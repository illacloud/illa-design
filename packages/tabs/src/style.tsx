import { css, SerializedStyles } from "@emotion/react"
import { getColor, globalColor, illaPrefix, zIndex } from "@illa-design/theme"
import {
  TabAlign,
  TabPosition,
  TabsColorScheme,
  TabsSize,
  TabVariant,
} from "./interface"
import { isHorizontalLayout } from "./utils"

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

export function applyCommonContainerCss(
  tabPosition?: TabPosition,
): SerializedStyles {
  return css`
    width: 100%;
    display: flex;
    flex-direction: ${tabPosition === "bottom" ? "column-reverse" : "column"};
  `
}

export function applyHorizontalContainerCss(
  tabPosition?: TabPosition,
): SerializedStyles {
  return css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${tabPosition === "right" ? "row-reverse" : "row"};
  `
}

export function applyContainerCss(tabPosition?: TabPosition): SerializedStyles {
  if (isHorizontalLayout(tabPosition)) {
    return applyHorizontalContainerCss(tabPosition)
  }
  return applyCommonContainerCss(tabPosition)
}

export const tabHeaderContainerCss = css`
  display: inline-flex;
  width: 100%;
  align-items: center;
`

export function applyCardTypeHeaderCss(
  tabPosition?: TabPosition,
): SerializedStyles {
  return tabPosition === "bottom"
    ? css`
        //border-top: solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      `
    : css`
        //border-bottom: solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      `
}

export function applyTabHeaderContainerCss(
  variant?: TabVariant,
  tabPosition?: TabPosition,
): SerializedStyles {
  const cardTypeCss = applyCardTypeHeaderCss(tabPosition)
  const textTypeCss =
    tabPosition === "left" || tabPosition === "right"
      ? css`
          flex-direction: column;
        `
      : css``
  return css`
    display: inline-flex;
    width: 100%;
    align-items: center;
    ${variant === "card" ? cardTypeCss : ""}
    ${variant === "text" ? textTypeCss : ""}
  `
}

export function applyLineHeaderContainerCss(
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
  return borderCss
}

export function applyHeaderContainerCss(
  variant?: TabVariant,
  position?: TabPosition,
  align?: TabAlign,
): SerializedStyles {
  const isHorizontal = isHorizontalLayout(position)
  let borderCss: SerializedStyles = css``
  if (variant === "line") {
    borderCss = applyLineHeaderContainerCss(position)
  }
  let cardStyle
  if (variant === "card" && position !== "left" && position !== "right") {
    cardStyle = css`
      ::before {
        content: "";
        clear: both;
        position: absolute;
        ${position === "top"
          ? css`
              bottom: 0;
            `
          : css`
              top: 0;
            `}
        left: 0;
        right: 0;
        height: 1px;
        background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
        display: block;
      }
    `
  }

  return css`
    display: inline-flex;
    position: relative;
    flex-direction: ${isHorizontal ? "column" : "row"};
    align-items: end;
    justify-content: ${align};
    ${borderCss};
    ${cardStyle}
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

export function applyScrollContainerCss(
  isHorizontal: boolean,
): SerializedStyles {
  return isHorizontal
    ? containerHorizontalHideScrollBarCss
    : containerHideScrollBarCss
}

export const tabCardHeaderContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
`

export function applyCapsulePaddingSizeCss(size: TabsSize): SerializedStyles {
  let paddingSize
  switch (size) {
    case "large":
      paddingSize = css`
        padding: 5px 16px;
      `
      break
    case "small":
      paddingSize = css`
        padding: 1px 12px;
      `
      break
    default:
      paddingSize = css`
        padding: 3px 16px;
      `
  }

  return paddingSize
}

export function applyCapsuleHeaderChildCss(
  size: TabsSize,
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
    ${applyCapsulePaddingSizeCss(size)}
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

export function applyCardBorderRadius(tabPosition: TabPosition) {
  switch (tabPosition) {
    case "top":
      return css`
        border-radius: 4px 4px 0px 0px;
        border-bottom: solid white 0px;
      `
    case "right":
      return css`
        border-radius: 0px 4px 4px 0px;
        border-left: solid white 0px;
      `
    case "bottom":
      return css`
        border-radius: 0px 0px 4px 4px;
        border-top: solid white 0px;
      `
    case "left":
      return css`
        border-radius: 4px 0px 0px 4px;
        border-right: solid white 0px;
      `
  }
}

export function applyCardHeaderChildCss(
  size: TabsSize,
  isSelected?: boolean,
  disabled?: boolean,
  tabPosition?: TabPosition,
): SerializedStyles {
  const isHorizontal = tabPosition === "top" || tabPosition === "bottom"
  const selectedBoxCss =
    isSelected && isHorizontal
      ? css`
          border: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
          ${tabPosition === "bottom"
            ? "border-top: solid white;"
            : "border-bottom: solid white;"}
        `
      : css`
          border: solid transparent;
        `

  return css`
    ${tabPosition && applyCardBorderRadius(tabPosition)}
    position: relative;
    ${applyCommonHeaderChildCss()};
    ${applyTextPaddingSizeCss(size)};
    z-index: ${zIndex.tabs};
    ${applyHoverBackgroundCss(isSelected, disabled)}
    color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
    transition: background-color 200ms;
    ${selectedBoxCss};
    ${isHorizontal
      ? css`
          :not(:first-child) {
            margin-left: 4px;
          }
        `
      : css`
          border: none;
        `}
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

export function applyTextHeaderChildCss(
  size: TabsSize,
  isSelected?: boolean,
  disabled?: boolean,
  tabPosition?: TabPosition,
) {
  const isHorizontal = tabPosition === "left" || tabPosition === "right"
  let hoverStyle
  if (!(isSelected || disabled)) {
    hoverStyle = css`
      &:hover {
        cursor: pointer;
        background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
      }
    `
  }
  let horizontalStyle
  if (!isHorizontal) {
    horizontalStyle = css`
      :not(:first-child) {
        margin-left: 8px;
        &::before {
          position: absolute;
          content: "";
          opacity: 1;
          left: -10px;
          width: 0px;
          height: 8px;
          border: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
        }
      }
      :not(:last-child) {
        margin-right: 8px;
      }
    `
  }
  return css`
    display: inline-flex;
    position: relative;
    align-items: center;
    padding: 1px 4px;
    ${horizontalStyle}
    ${hoverStyle}
  `
}
export function applyCommonHeaderChildCss(): SerializedStyles {
  return css`
    display: inline-flex;
    position: relative;
    align-items: center;
    padding: 1px 4px;
    &:hover {
      cursor: pointer;
    }
  `
}

export function applyHoverMarginSizeCss(size: TabsSize): SerializedStyles {
  let marginSize
  switch (size) {
    case "large":
      marginSize = css`
        padding: 0;
        margin: 8px;
      `
      break
    case "small":
      marginSize = css`
        padding: 0;
        margin: 4px 8px;
      `
      break
    default:
      marginSize = css`
        padding: 0;
        margin: 6px 8px;
      `
  }
  return marginSize
}

export function applyTextPaddingSizeCss(size: TabsSize): SerializedStyles {
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

export function applyLineHeaderChildCss(
  size: TabsSize,
  isSelected?: boolean,
  disabled?: boolean,
): SerializedStyles {
  let hoverPadding = css``
  let childHoverPadding = css``
  if (!(isSelected || disabled)) {
    hoverPadding = css`
      ${applyHoverMarginSizeCss(size)};
      background: getColor("gray", "09");
    `
    childHoverPadding = css`
      padding: 1px 8px;
    `
  }

  return css`
    display: inline-flex;
    align-items: center;
    ${applyTextPaddingSizeCss(size)};
    &:hover {
      cursor: pointer;
      ${hoverPadding}
      & > span {
        ${childHoverPadding}
      }
    }
  `
}

export function applyTextColorCss(
  colorScheme: TabsColorScheme,
  disabled?: boolean,
  isSelected?: boolean,
  variant?: TabVariant,
) {
  let textColorCss
  if (disabled) {
    textColorCss = css`
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
      cursor: not-allowed;
    `
  } else if (isSelected) {
    textColorCss = css`
      color: ${getColor(colorScheme, "02")};
    `
  } else {
    textColorCss = css`
      color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};

      &:hover {
        background-color: ${variant !== "capsule"
          ? globalColor(`--${illaPrefix}-grayBlue-09`)
          : undefined};
      }
    `
  }
  if (!disabled && variant === "text") {
    if (isSelected) {
      textColorCss = css`
        color: ${getColor(colorScheme, "02")};
        font-weight: 500;
      `
    } else {
      textColorCss = css`
        color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};

        &:hover {
          background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
        }
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 22px;
    border-radius: 4px;
    margin-left: ${_tabBarSpacing / 2}px;
    margin-right: ${_tabBarSpacing / 2}px;
    transition: color 200ms, background-color 200ms;
  `
}

export function applyDividerCommonLineCss(w: number): SerializedStyles {
  return css`
    width: ${w}px;
    display: inline-flex;
    position: relative;
  `
}

export function applyDividerHorizontalLineCss(h: number): SerializedStyles {
  return css`
    height: ${h}px;
    display: inline-flex;
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

export function applyCommonBlueLineCss(
  width: number,
  position: number,
  colorScheme: TabsColorScheme,
): SerializedStyles {
  return css`
    width: ${width - 32}px;
    height: 2px;
    position: relative;
    box-sizing: border-box;
    left: ${position}px;
    bottom: 0;
    transition: left 200ms, width 200ms;
    background-color: ${getColor(colorScheme, "02")};
  `
}

export function applyHorizontalBlueLineCss(
  height: number,
  position: number,
  colorScheme: TabsColorScheme,
  variant?: TabVariant,
  size?: TabsSize,
): SerializedStyles {
  let padding
  if (variant === "capsule") {
    switch (size) {
      case "large":
        padding = 5
        break
      case "small":
        padding = 1
        break
      default:
        padding = 3
    }
  } else {
    switch (size) {
      case "large":
        padding = 9
        break
      case "small":
        padding = 5
        break
      default:
        padding = 7
    }
  }

  return css`
    width: 2px;
    height: ${height - padding * 2}px;
    position: relative;
    box-sizing: border-box;
    top: ${padding + position}px;
    transition: top 200ms, height 200ms;
    bottom: 0;
    background-color: ${getColor(colorScheme, "03")};
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

export function applyCardContentContainerCss(
  tabPosition?: TabPosition,
): SerializedStyles {
  const positionCss =
    tabPosition === "bottom"
      ? css`
          border-bottom: 0;
        `
      : css`
          border-top: 0;
        `
  return css`
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    ${tabContentContainerCss};
    ${positionCss}
  `
}

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
  tabPosition?: TabPosition,
): SerializedStyles {
  let colorCss =
    disabled &&
    css`
      cursor: not-allowed;
    `
  let variantCss =
    variant === "card"
      ? tabPosition === "bottom"
        ? css`
            top: 0.5px;
            border-top: solid ${globalColor(`--${illaPrefix}-grayBlue-08`)} 1px;
          `
        : css`
            top: -0.5px;
            border-bottom: solid ${globalColor(`--${illaPrefix}-grayBlue-08`)}
              1px;
          `
      : ""

  return css`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 12px;
    text-align: center;
    position: relative;
    padding: 0 12px ${variant === "capsule" ? 11 : 0}px 4px;
    ${variantCss};
    ${colorCss};
  `
}

export function applyPreNextIconCss(isHorizontal: boolean) {
  return isHorizontal
    ? applyHorizontalPreNextIconCss
    : applyCommonPreNextIconCss
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
  height: 100%;
`
