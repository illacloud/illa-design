import { css, SerializedStyles } from "@emotion/react"
import { TriggerColorScheme, TriggerPosition } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"

const colorSchemes = ["white", "blackAlpha", "gray", "grayBlue", "red", "orange", "yellow", "green", "blue", "cyan", "purple"]

export const applyOuterCss = css`
  position: relative;
  display: inline;
`

export function applyTipsContainer(position: TriggerPosition): SerializedStyles {

  const isColumn =
    position == "top" ||
    position == "tl" ||
    position == "tr" ||
    position == "bottom" ||
    position == "bl" ||
    position == "br"

  return css`
    display: flex;
    flex-direction: ${isColumn ? "column" : "row"};
    opacity: 90%;
    z-index: 10;
    color: ${globalColor(`--${illaPrefix}-white-01`)};
  `
}

export function applyTipsText(colorScheme: TriggerColorScheme): SerializedStyles {
  const bgColor = colorSchemes.includes(colorScheme) ? globalColor(`--${illaPrefix}-${colorScheme}-03`) : colorScheme
  return css`
    align-self: center;
    background-color: ${bgColor};
    min-width: 32px;
    min-height: 32px;
    border-radius: 2px;
    font-size: 14px;
    padding: 8px 12px;
  `
}

export function applyTriangleStyle(colorScheme: TriggerColorScheme, position: TriggerPosition): SerializedStyles {
  const bgColor = colorSchemes.includes(colorScheme) ? globalColor(`--${illaPrefix}-${colorScheme}-03`) : colorScheme
  const mainStyle = css`
    color: ${bgColor};
  `
  switch (position) {
    case "top":
    case "bottom":
    case "left":
    case "right":
      return css`
        ${mainStyle};
        align-self: center;
      `
    case "tl":
    case "bl":
      return css`
        ${mainStyle};
        align-self: start;
        margin-left: 12px;
      `
    case "tr":
    case "br":
      return css`
        ${mainStyle};
        align-self: end;
        margin-right: 12px;
      `
    case "lt":
    case "rt":
      return css`
        ${mainStyle};
        align-self: start;
        margin-top: 12px;
      `
    case "lb":
    case "rb":
      return css`
        ${mainStyle};
        align-self: end;
        margin-bottom: 12px;
      `
  }
}