import { css, SerializedStyles } from "@emotion/react"
import { TriggerColorScheme, TriggerPosition, TriggerState } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { getAnimation } from "./transform"
import { Variants } from "framer-motion"

// should update these constant when arrow size change
const HALF_OF_ARROW = 4
export const ARROW_MARGIN_OFFSET = 6
export const ARROW_TIP_OFFSET = ARROW_MARGIN_OFFSET + HALF_OF_ARROW

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
  showArrow: boolean,
): SerializedStyles {
  const isColumn =
    position == "top" ||
    position == "tl" ||
    position == "tr" ||
    position == "bottom" ||
    position == "bl" ||
    position == "br"

  let paddingStyle: SerializedStyles
  const padding = showArrow ? 4 : 8
  switch (position) {
    case "top":
    case "tl":
    case "tr":
      paddingStyle = css`
        padding-bottom: ${padding}px;
      `
      break
    case "bottom":
    case "bl":
    case "br":
      paddingStyle = css`
        padding-top: ${padding}px;
      `
      break
    case "left":
    case "lt":
    case "lb":
      paddingStyle = css`
        padding-right: ${padding}px;
      `
      break
    case "right":
    case "rt":
    case "rb":
      paddingStyle = css`
        padding-left: ${padding}px;
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

export function applyTipsText(stateValue: TriggerState): SerializedStyles {
  const {
    colorScheme,
    maxWidth,
    withoutPadding,
    withoutShadow,
    adjustResult,
    autoAlignPopupWidth,
  } = stateValue

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

  let shadow = css`
    box-shadow: 0 2px 16px 0 ${globalColor(`--${illaPrefix}-blackAlpha-05`)};
  `
  if (withoutShadow) {
    shadow = css``
  }

  return css`
    background-color: ${bgColor};
    color: ${textColor};
    text-align: left;
    max-width: ${maxWidth};
    border-radius: 8px;
    font-size: 14px;
    ${padding};
    ${width}
    ${shadow}
  `
}

export function applyTriangleStyle(
  colorScheme: TriggerColorScheme,
  position: TriggerPosition,
  alignPoint?: boolean,
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

      if (alignPoint) {
        positionStyle = css`
          align-self: end;
          margin-right: ${ARROW_MARGIN_OFFSET}px;
        `
      }

      break
    case "tr":
    case "br":
      positionStyle = css`
        align-self: end;
        margin-right: 12px;
      `

      if (alignPoint) {
        positionStyle = css`
          align-self: start;
          margin-left: ${ARROW_MARGIN_OFFSET}px;
        `
      }
      break
    case "lt":
    case "rt":
      positionStyle = css`
        align-self: start;
        margin-top: 12px;
      `

      if (alignPoint) {
        positionStyle = css`
          align-self: end;
          margin-bottom: ${ARROW_MARGIN_OFFSET}px;
        `
      }
      break
    case "lb":
    case "rb":
      positionStyle = css`
        align-self: end;
        margin-bottom: 12px;
      `
      if (alignPoint) {
        positionStyle = css`
          align-self: start;
          margin-top: ${ARROW_MARGIN_OFFSET}px;
        `
      }
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
      return getAnimation(`0px`, `calc(100% - 12px)`, showArrow, isHorizontal)
  }
}

export const applyDefaultContentSize = css`
  font-size: 14px;
`
