import { css, SerializedStyles } from "@emotion/react"
import { TriggerColorScheme, TriggerPosition } from "./interface"
import {
  getColor,
  getColorShadow,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"
import { getAnimation } from "./transform"
import { Variants } from "framer-motion"

export function applyMotionDiv(autoAlignPopupWidth?: boolean) {
  return css`
    display: inline-flex;
    pointer-events: auto;
    width: ${autoAlignPopupWidth ? "100%" : "auto"};
  `
}

export function applyTipsText(
  colorScheme: TriggerColorScheme,
  maxWidth: string,
  withoutPadding?: boolean,
  withoutShadow?: boolean,
  autoAlignPopupWidth?: boolean,
): SerializedStyles {
  const bgColor =
    colorScheme == "white"
      ? getColor(colorScheme, "01")
      : getColor(colorScheme, "03")
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

  let shadow = css`
    box-shadow: ${getColorShadow("white" ? "blackAlpha" : colorScheme, "03")};
  `
  if (withoutShadow) {
    shadow = css``
  }

  let align = css``
  if (autoAlignPopupWidth) {
    align = css`
      max-width: unset;
    `
  }

  return css`
    background-color: ${bgColor};
    color: ${textColor};
    box-sizing: border-box;
    text-align: left;
    max-width: ${maxWidth};
    border-radius: 8px;
    font-size: 14px;
    ${padding};
    ${shadow};
    ${align}
  `
}

export function applyTriangleStyle(
  colorScheme: TriggerColorScheme,
  position: TriggerPosition,
): SerializedStyles {
  const bgColor = getColor(colorScheme, "03")
  const mainStyle = css`
    color: ${bgColor};
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
    case "top-start":
    case "bottom-start":
      positionStyle = css`
        align-self: start;
        margin-left: 12px;
      `
      break
    case "top-end":
    case "bottom-end":
      positionStyle = css`
        align-self: end;
        margin-right: 12px;
      `
      break
    case "left-start":
    case "right-start":
      positionStyle = css`
        align-self: start;
        margin-top: 12px;
      `
      break
    case "left-end":
    case "right-end":
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
    position == "left-start" ||
    position == "left-end" ||
    position == "right" ||
    position == "right-start" ||
    position == "right-end"
  switch (position) {
    case "top":
      return getAnimation(`calc(50%)`, `calc(100%)`, showArrow, isHorizontal)
    case "top-start":
      return getAnimation(`calc(12px)`, `calc(100%)`, showArrow, isHorizontal)
    case "top-end":
      return getAnimation(
        `calc(100% - 12px)`,
        `calc(100%)`,
        showArrow,
        isHorizontal,
      )
    case "bottom":
      return getAnimation(`calc(50%)`, `0px`, showArrow, isHorizontal)
    case "bottom-start":
      return getAnimation(`calc(12px)`, `0px`, showArrow, isHorizontal)
    case "bottom-end":
      return getAnimation(`calc(100% - 12px)`, `0px`, showArrow, isHorizontal)
    case "left":
      return getAnimation(`calc(100%)`, `calc(50%)`, showArrow, isHorizontal)
    case "left-start":
      return getAnimation(`calc(100%)`, `calc(12px)`, showArrow, isHorizontal)
    case "left-end":
      return getAnimation(
        `calc(100%)`,
        `calc(100% - 12px)`,
        showArrow,
        isHorizontal,
      )
    case "right":
      return getAnimation(`0px`, `calc(50%)`, showArrow, isHorizontal)
    case "right-start":
      return getAnimation(`0px`, `calc(12px)`, showArrow, isHorizontal)
    case "right-end":
      return getAnimation(`0px`, `calc(100% - 12px)`, showArrow, isHorizontal)
  }
}

export const applyDefaultContentSize = css`
  font-size: 14px;
`

export function applyVerticalContainer(
  autoAlignPopupWidth?: boolean,
): SerializedStyles {
  return css`
    display: inline-flex;
    flex-direction: column;
    width: ${autoAlignPopupWidth ? "100%" : "auto"};
  `
}

export function applyHorizontalContainer(
  autoAlignPopupWidth?: boolean,
): SerializedStyles {
  return css`
    display: inline-flex;
    flex-direction: row;
    width: ${autoAlignPopupWidth ? "100%" : "auto"};
  `
}
