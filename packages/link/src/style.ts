import { css } from "@emotion/react"
import { LinkColorScheme } from "./interface"
import {
  getSpecialThemeColor,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"

export const colorSchemes: LinkColorScheme[] = [
  "white",
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

export function applyLinkContainer(
  colorScheme: LinkColorScheme,
  hoverable: boolean,
) {
  const hoverBgColor =
    colorScheme == "white"
      ? globalColor(`--${illaPrefix}-white-06`)
      : globalColor(`--${illaPrefix}-grayBlue-09`)
  let hoverCss
  if (hoverable) {
    hoverCss = css`
      &:hover {
        background-color: ${hoverBgColor};
      }
    `
  }
  return css`
    transition: background-color 200ms ease-in-out;
    vertical-align: middle;
    border-radius: 4px;
    padding: 1px 4px;
    font-size: 14px;
    line-height: 22px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    ${hoverCss};
  `
}

export const applyLeftIcon = css`
  margin-right: 4px;
`

export function applyDisable(colorScheme: LinkColorScheme, disabled?: boolean) {
  const textColor = colorSchemes.includes(colorScheme)
    ? getSpecialThemeColor(colorScheme)
    : colorScheme
  const finalColor = disabled
    ? globalColor(`--${illaPrefix}-${colorScheme}-07`)
    : textColor
  const cursor = disabled ? "not-allowed" : "pointer"
  return css`
    color: ${finalColor};
    cursor: ${cursor};
  `
}
