import { css, SerializedStyles } from "@emotion/react"
import { TriggerColorScheme, TriggerPosition } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { getAnimation } from "./transform"
import { Variants } from "framer-motion"

const colorSchemes = ["white", "gray", "grayBlue", "red", "orange", "yellow", "green", "blue", "cyan", "purple"]

export const applyChildrenContainer = css`
  display: inline-flex;
`

export function applyMotionDiv() {
  return css`
    display: inline-flex;
    pointer-events: auto;
  `
}

export function applyTipsContainer(position: TriggerPosition): SerializedStyles {

  const isColumn =
    position == "top" ||
    position == "tl" ||
    position == "tr" ||
    position == "bottom" ||
    position == "bl" ||
    position == "br"


  let paddingStyle: SerializedStyles
  switch (position) {
    case "top":
    case "tl":
    case "tr":
      paddingStyle = css`
        padding-bottom: 4px;
      `
      break
    case "bottom":
    case "bl":
    case "br":
      paddingStyle = css`
        padding-top: 4px;
      `
      break
    case "left":
    case "lt":
    case "lb":
      paddingStyle = css`
        padding-right: 4px;
      `
      break
    case "right":
    case "rt":
    case "rb":
      paddingStyle = css`
        padding-left: 4px;
      `
      break
  }

  return css`
    ${paddingStyle};
    display: inline-flex;
    flex-direction: ${isColumn ? "column" : "row"};
    z-index: 10;
    color: ${globalColor(`--${illaPrefix}-white-01`)};
  `
}

export function applyTipsText(colorScheme: TriggerColorScheme): SerializedStyles {
  const bgColor = colorSchemes.includes(colorScheme) ? globalColor(`--${illaPrefix}-${colorScheme}-02`) : colorScheme
  const textColor = colorScheme == "white" ? globalColor(`--${illaPrefix}-gray-03`) : globalColor(`--${illaPrefix}-white-02`)
  return css`
    box-shadow: 0 2px 16px 0 ${globalColor(`--${illaPrefix}-blackAlpha-05`)};
    background-color: ${bgColor};
    color: ${textColor};
    text-align: left;
    max-width: 588px;
    border-radius: 2px;
    font-size: 14px;
    padding: 8px 12px;
  `
}

export function applyTriangleStyle(colorScheme: TriggerColorScheme, position: TriggerPosition): SerializedStyles {
  const bgColor = colorSchemes.includes(colorScheme) ? globalColor(`--${illaPrefix}-${colorScheme}-02`) : colorScheme
  const mainStyle = css`
    color: ${bgColor};
    z-index: 1;
  `
  let positionStyle: SerializedStyles
  switch (position) {
    case "top":
    case "bottom":
    case "left":
    case "right":
      positionStyle = css`
        align-self: center;
      `
      break
    case "tl":
    case "bl":
      positionStyle = css`
        align-self: start;
        margin-left: 12px;
      `
      break
    case "tr":
    case "br":
      positionStyle = css`
        align-self: end;
        margin-right: 12px;
      `
      break
    case "lt":
    case "rt":
      positionStyle = css`
        align-self: start;
        margin-top: 12px;
      `
      break
    case "lb":
    case "rb":
      positionStyle = css`
        align-self: end;
        margin-bottom: 12px;
      `
      break
  }
  return css`
    ${mainStyle};
    ${positionStyle};
  `
}

export function applyAnimation(position: TriggerPosition): Variants {
  switch (position) {
    case "top":
      return getAnimation(`calc(50%)`, `calc(100%)`)
    case "tl":
      return getAnimation(`calc(12px)`, `calc(100%)`)
    case "tr":
      return getAnimation(`calc(100% - 12px)`, `calc(100%)`)
    case "bottom":
      return getAnimation(`calc(50%)`, `0px`)
    case "bl":
      return getAnimation(`calc(12px)`, `0px`)
    case "br":
      return getAnimation(`calc(100% - 12px)`, `0px`)
    case "left":
      return getAnimation(`calc(100%)`, `calc(50%)`)
    case "lt":
      return getAnimation(`calc(100%)`, `calc(12px)`)
    case "lb":
      return getAnimation(`calc(100%)`, `calc(100% - 12px)`)
    case "right":
      return getAnimation(`0px`, `calc(50%)`)
    case "rt":
      return getAnimation(`0px`, `calc(12px)`)
    case "rb":
      return getAnimation(`0px`, `calc(100%)`)
  }
}

export const applyCloseContentCss = css`
  display: flex;
  flex-direction: column;
`

export const applyDefaultContentSize = css`
  font-size: 14px;
`

export const applyCloseButton = css`
  margin-top: 4px;
  align-self: end;
`