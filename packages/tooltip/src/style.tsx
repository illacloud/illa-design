import { css } from "@emotion/react"
import { ToolTipColorScheme, ToolTipPosition } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@storybook/theming"

const colorSchemes = ["white", "blackAlpha", "gray", "grayBlue", "red", "orange", "yellow", "green", "blue", "cyan", "purple"]

export const applyOuterCss = css`
  position: relative;
  display: inline-flex;
`

export function applyTipsContainer(position: ToolTipPosition): SerializedStyles {

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
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    position: absolute;
    visibility: hidden;

    .css-${applyOuterCss.name}:hover & {
      visibility: visible;
    }
  `
}

export function applyTipsText(colorScheme: ToolTipColorScheme): SerializedStyles {
  const bgColor = colorSchemes.includes(colorScheme) ? globalColor(`--${illaPrefix}-${colorScheme}-03`) : colorScheme
  return css`
    align-self: center;
    background-color: ${bgColor};
    min-width: 32px;
    border-radius: 2px;
    font-size: 14px;
    padding: 8px 12px;
  `
}

export function applyTriangleStyle(colorScheme: ToolTipColorScheme, position: ToolTipPosition): SerializedStyles {
  const bgColor = colorSchemes.includes(colorScheme) ? globalColor(`--${illaPrefix}-${colorScheme}-03`) : colorScheme
  const mainStyle = css`
    color: ${bgColor};
  `
  switch (position) {
    case "top":
    case "bottom":
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
    case "left":
    case "right":
      return css`
        ${mainStyle};
        align-items: center;
      `
  }
}