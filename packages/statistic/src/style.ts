import { css, SerializedStyles } from "@emotion/react"
import {
  getColor,
  getSpecialThemeColor,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"

const getStatisticColor = (color: string) => {
  if (color === "white") {
    return getColor("white", "02")
  } else if (
    color === "blackAlpha" ||
    color === "gray" ||
    color === "grayBlue"
  ) {
    return getColor(color, "04")
  } else {
    return getColor(color, "05")
  }
}

export const statisticStyle = css`
  display: inline-block;
  line-height: 1.33;
  font-size: 12px;
  font-weight: 400;
`

export const statisticTitleStyle = (colorScheme: string) => css`
  margin-bottom: 4px;
  color: ${getStatisticColor(colorScheme)};
`

export const statisticExtraStyle = (colorScheme: string) => css`
  font-size: 12px;
  margin-top: 4px;
  color: ${getStatisticColor(colorScheme)};
`

export const statisticContentStyle = (colorScheme: string) => css`
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: baseline;
  color: ${getSpecialThemeColor(colorScheme)};
`

export function applyStatisticDecoratorStyle(
  isPrefix: boolean,
  isText: boolean,
): SerializedStyles {
  const spacing = isText ? 4 : 8
  const margin = isPrefix
    ? `margin-right:${spacing}px;`
    : `margin-left:${spacing}px;`
  const restStyle = isText ? `font-size: 14px;` : `font-size: 18px;`
  return css`
    display: inline-block;
    ${margin + restStyle}
  `
}

export const statisticValueStyle = css`
  display: inline-block;
  direction: ltr;
`
