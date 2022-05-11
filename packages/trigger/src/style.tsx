import { css, SerializedStyles } from "@emotion/react"
import { TriggerColorScheme, TriggerPosition } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { getAnimation } from "./transform"
import { Variants } from "framer-motion"
import { AdjustResult } from "./adjust-tips-location"

const colorSchemes = [
  "white",
  "gray",
  "grayBlue",
  "red",
  "orange",
  "yellow",
  "blackAlpha",
  "green",
  "blue",
  "cyan",
  "purple",
  "techPink",
  "techPurple",
]

export const applyChildrenContainer = css`
  display: inline-flex;
`

export function applyMotionDiv() {
  return css`
    display: inline-flex;
    pointer-events: auto;
  `
}

export function applyTipsContainer(
  position: TriggerPosition,
): SerializedStyles {
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
  `
}

export function applyTipsText(
  colorScheme: TriggerColorScheme,
  maxWidth?: string,
  withoutPadding?: boolean,
  adjustResult?: AdjustResult,
  autoAlignPopupWidth?: boolean,
): SerializedStyles {
  const bgColor = colorSchemes.includes(colorScheme)
    ? colorScheme == "white"
      ? globalColor(`--${illaPrefix}-${colorScheme}-01`)
      : globalColor(`--${illaPrefix}-${colorScheme}-02`)
    : colorScheme
  const textColor =
    colorScheme == "white"
      ? globalColor(`--${illaPrefix}-grayBlue-02`)
      : globalColor(`--${illaPrefix}-white-01`)

  let paddingHor = "12px"

  let padding = css`
    padding: 8px ${paddingHor};
  `
  if (withoutPadding) {
    padding = css``
  }

  let width = css``
  if (autoAlignPopupWidth) {
    if (withoutPadding) {
      width = css`
        width: ${adjustResult?.childrenWidth}px;
        max-width: unset;
      `
    } else {
      width = css`
        width: calc(
          ${adjustResult?.childrenWidth}px - ${paddingHor} - ${paddingHor}
        );
        max-width: unset;
      `
    }
  }

  return css`
    box-shadow: 0 2px 16px 0 ${globalColor(`--${illaPrefix}-blackAlpha-05`)};
    background-color: ${bgColor};
    color: ${textColor};
    text-align: left;
    max-width: ${maxWidth};
    border-radius: 2px;
    font-size: 14px;
    ${padding};
    ${width}
  `
}

export function applyTriangleStyle(
  colorScheme: TriggerColorScheme,
  position: TriggerPosition,
): SerializedStyles {
  const bgColor = colorSchemes.includes(colorScheme)
    ? globalColor(`--${illaPrefix}-${colorScheme}-02`)
    : colorScheme
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

export function applyAnimation(
  position: TriggerPosition,
  showArrow: boolean,
): Variants {
  const isHorizontal =
    position == "left" ||
    position == "lt" ||
    position == "lb" ||
    position == "right" ||
    position == "rt" ||
    position == "rb"
  switch (position) {
    case "top":
      return getAnimation(`calc(50%)`, `calc(100%)`, showArrow, isHorizontal)
    case "tl":
      return getAnimation(`calc(12px)`, `calc(100%)`, showArrow, isHorizontal)
    case "tr":
      return getAnimation(
        `calc(100% - 12px)`,
        `calc(100%)`,
        showArrow,
        isHorizontal,
      )
    case "bottom":
      return getAnimation(`calc(50%)`, `0px`, showArrow, isHorizontal)
    case "bl":
      return getAnimation(`calc(12px)`, `0px`, showArrow, isHorizontal)
    case "br":
      return getAnimation(`calc(100% - 12px)`, `0px`, showArrow, isHorizontal)
    case "left":
      return getAnimation(`calc(100%)`, `calc(50%)`, showArrow, isHorizontal)
    case "lt":
      return getAnimation(`calc(100%)`, `calc(12px)`, showArrow, isHorizontal)
    case "lb":
      return getAnimation(
        `calc(100%)`,
        `calc(100% - 12px)`,
        showArrow,
        isHorizontal,
      )
    case "right":
      return getAnimation(`0px`, `calc(50%)`, showArrow, isHorizontal)
    case "rt":
      return getAnimation(`0px`, `calc(12px)`, showArrow, isHorizontal)
    case "rb":
      return getAnimation(`0px`, `calc(100%)`, showArrow, isHorizontal)
  }
}

export const applyDefaultContentSize = css`
  font-size: 14px;
`
