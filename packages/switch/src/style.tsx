import { globalColor, illaPrefix } from "@illa-design/theme"
import { css, keyframes } from "@emotion/react"
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
]

export function applySwitch(
  colorScheme: SwitchColorScheme,
  disabled: boolean,
  checked: boolean,
  size: SwitchSize,
) {
  const minWidth = size === "medium" ? "29px" : "40px"
  const height = size === "medium" ? "18px" : "24px"
  const isInnerColor: boolean = innerColor.indexOf(colorScheme) > -1
  let bgc = checked
    ? isInnerColor
      ? globalColor(`--${illaPrefix}-${colorScheme}-01`)
      : colorScheme
    : globalColor(`--${illaPrefix}-gray-06`)
  return css`
    position: relative;
    border-radius: 16px;
    min-width: ${minWidth};
    height: ${height};
    line-height: ${height};
    background-color: ${bgc};
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
        ? globalColor(`--${illaPrefix}-${colorScheme}-06`)
        : globalColor(`--${illaPrefix}-gray-08`)};
    }
  `
}

export function applySwitchDot(size: SwitchSize, checked: boolean) {
  const dotSize = size === "medium" ? "12px" : "16px"
  const dotSpacing = size === "medium" ? "3px" : "4px"
  const dotPosition = checked
    ? `
        left: 100%;
        margin-left: -${dotSpacing};
        transform:translateX(-100%)
      `
    : `left:${dotSpacing}`
  return css`
    position: absolute;
    top: ${dotSpacing};
    ${dotPosition};
    width: ${dotSize};
    height: ${dotSize};
    border-radius: 50%;
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    transition: all 0.2s ease-in-out;
  `
}
