import { ColorScheme, DividerVariant } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

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

export function applyDividerContainerHorizontal(
  variant: DividerVariant,
): SerializedStyles {
  return css`
    vertical-align: middle;
    border-style: ${variant};
    border-width: 0 0 ${variant == "double" ? "3px" : "1px"} 0;
    width: 100%;
  `
}

export function applyDividerContainerVertical(
  variant: DividerVariant,
): SerializedStyles {
  return css`
    display: inline-flex;
    vertical-align: middle;
    border-width: 0 0 0 ${variant == "double" ? "3px" : "1px"};
    border-image: initial;
    border-style: ${variant};
    height: 1em;
  `
}

export function applyDividerWithTextContainerStyle(
  color?: ColorScheme,
  textSize?: string,
): SerializedStyles {
  const _color = color && innerColor.indexOf(color) > -1 ? color : "grayBlue"
  return css`
    display: flex;
    width: 100%;
    align-items: center;
    color: ${globalColor(`--${illaPrefix}-${_color}-08`)};
    font-size: ${textSize};
    span {
      padding: 0 16px;
    }
  `
}

export function applyDividerStyle(
  variant: DividerVariant,
  full?: boolean,
): SerializedStyles {
  return css`
    flex-grow: ${full ? 1 : 0};
    flex-basis: 24px;
    ${applyDividerContainerHorizontal(variant)}
  `
}
