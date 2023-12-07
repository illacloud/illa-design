import {
  getSpecialThemeColor,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"
import { css, SerializedStyles } from "@emotion/react"
import { SwitchColorScheme, SwitchSize } from "./interface"

const innerColor = [
  "white",
  "blackAlpha",
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "cyan",
  "purple",
  "grayBlue",
  "techPurple",
  "techPink",
]

export function applySwitch(
  colorScheme: SwitchColorScheme,
  checked: boolean,
  size: SwitchSize,
): SerializedStyles {
  const minWidth = size === "medium" ? "26px" : "40px"
  const height = size === "medium" ? "16px" : "24px"
  const isInnerColor: boolean = innerColor.indexOf(colorScheme) > -1
  let bgc = checked
    ? isInnerColor
      ? getSpecialThemeColor(colorScheme)
      : colorScheme
    : globalColor(`--${illaPrefix}-grayBlue-06`)
  return css`
    position: relative;
    border-radius: 16px;
    min-width: ${minWidth};
    height: ${height};
    line-height: ${height};
    background-color: ${bgc};
    color: ${bgc};
    vertical-align: middle;
    cursor: pointer;
    box-sizing: border-box;
    border: none;
    overflow: hidden;
    padding: 0;
    outline: none;
    transition: background-color 0.2s ease-in-out;
    &:disabled {
      cursor: not-allowed;
      background-color: ${isInnerColor && checked
        ? globalColor(`--${illaPrefix}-${colorScheme}-07`)
        : globalColor(`--${illaPrefix}-grayBlue-08`)};
      color: ${isInnerColor && checked
        ? globalColor(`--${illaPrefix}-${colorScheme}-07`)
        : globalColor(`--${illaPrefix}-grayBlue-08`)};
    }
  `
}

export function applySwitchDot(
  size: SwitchSize,
  checked: boolean,
  disabled: boolean,
): SerializedStyles {
  const dotSize = size === "medium" ? "12px" : "16px"
  const dotSpacing = size === "medium" ? "2px" : "4px"
  const dotPosition = checked
    ? `
        left: 100%;
        margin-left: -${dotSpacing};
        transform:translateX(-100%)
      `
    : `left:${dotSpacing}`
  const dotShadow = disabled
    ? ""
    : `box-shadow:0 1px 2px ${globalColor(`--${illaPrefix}-blackAlpha-05`)}`
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    position: absolute;
    top: ${dotSpacing};
    ${dotPosition};
    width: ${dotSize};
    height: ${dotSize};
    border-radius: 50%;
    ${dotShadow};
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    transition: all 0.2s ease-in-out;
  `
}

export function applySwitchText(
  checked: boolean,
  size: SwitchSize,
): SerializedStyles {
  const textSize =
    size === "medium"
      ? `
          font-size: 12px;
          line-height: 1
        `
      : `
          font-size:14px;
          line-height: 1.14
        `
  const spacingShort = size === "medium" ? 6 : 8
  const spacingLong = size === "medium" ? 19 : 26
  const textMargin = checked
    ? `margin:0 ${spacingLong}px 0 ${spacingShort}px`
    : `margin:0 ${spacingShort}px 0 ${spacingLong}px`
  return css`
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    ${textSize};
    ${textMargin};
    white-space: pre;
    transition: margin 0.2s;
  `
}

export const applySwitchIcon = css`
  width: 8px;
  height: 8px;
  font-size: 8px;
  line-height: 6px;
  overflow: hidden;
`
