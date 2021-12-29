import { css, SerializedStyles } from "@emotion/react"
import { TriggerColorScheme, TriggerPosition } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { AdjustResult } from "./adjust-tips-location"
import { getAnimation } from "./transform"
import { Variants } from "framer-motion"

const colorSchemes = ["white", "blackAlpha", "gray", "grayBlue", "red", "orange", "yellow", "green", "blue", "cyan", "purple"]

export const applyChildrenContainer = css`
  display: inline-flex;
`

export const applyMotionDiv = css`
  display: inline-flex;
`

export function applyTipsContainer(position: TriggerPosition, tipsTransform?: AdjustResult): SerializedStyles {

  const isColumn =
    position == "top" ||
    position == "tl" ||
    position == "tr" ||
    position == "bottom" ||
    position == "bl" ||
    position == "br"

  return css`
    display: inline-flex;
    flex-direction: ${isColumn ? "column" : "row"};
    transform: translate(${tipsTransform?.transX ?? 0}px, ${tipsTransform?.transY ?? 0}px);
    opacity: 90%;
    z-index: 10;
    color: ${globalColor(`--${illaPrefix}-white-01`)};
  `
}

export function applyTipsText(colorScheme: TriggerColorScheme): SerializedStyles {
  const bgColor = colorSchemes.includes(colorScheme) ? globalColor(`--${illaPrefix}-${colorScheme}-02`) : colorScheme
  return css`
    background-color: ${bgColor};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    min-height: 32px;
    max-width: 588px;
    border-radius: 2px;
    font-size: 14px;
    padding: 8px 12px;
  `
}

export function applyTransform(adjustResult: AdjustResult): SerializedStyles {
  return css`
    transform: translate(${adjustResult.transX}px, ${adjustResult.transY}px);
  `
}

export function applyTriangleStyle(colorScheme: TriggerColorScheme, position: TriggerPosition): SerializedStyles {
  const bgColor = colorSchemes.includes(colorScheme) ? globalColor(`--${illaPrefix}-${colorScheme}-02`) : colorScheme
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

export function applyAnimation(position: TriggerPosition, closeDelay: number, openDelay: number, adjustResult?: AdjustResult): Variants {
  switch (position) {
    case "top":
      return getAnimation(`calc(50% + ${adjustResult?.transX ?? 0}px)`, `calc(100% + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "tl":
      return getAnimation(`calc(12px + ${adjustResult?.transX ?? 0}px)`, `calc(100% + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "tr":
      return getAnimation(`calc(100% - 12px + ${adjustResult?.transX ?? 0}px)`, `calc(100% + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "bottom":
      return getAnimation(`calc(50% + ${adjustResult?.transX ?? 0}px)`, `${adjustResult?.transY ?? 0}px`, closeDelay, openDelay)
    case "bl":
      return getAnimation(`calc(12px + ${adjustResult?.transX ?? 0}px)`, `${adjustResult?.transY ?? 0}px`, closeDelay, openDelay)
    case "br":
      return getAnimation(`calc(100% - 12px + ${adjustResult?.transX ?? 0}px)`, `${adjustResult?.transY ?? 0}px`, closeDelay, openDelay)
    case "left":
      return getAnimation(`calc(100% + ${adjustResult?.transX ?? 0}px)`, `calc(50% + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "lt":
      return getAnimation(`calc(100% + ${adjustResult?.transX ?? 0}px)`, `calc(12px + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "lb":
      return getAnimation(`calc(100% + ${adjustResult?.transX ?? 0}px)`, `calc(100% - 12px + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "right":
      return getAnimation(`${adjustResult?.transX ?? 0}px`, `calc(50% + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "rt":
      return getAnimation(`${adjustResult?.transX ?? 0}px`, `calc(12px + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
    case "rb":
      return getAnimation(`${adjustResult?.transX ?? 0}px`, `calc(100% - 12px + ${adjustResult?.transY ?? 0}px)`, closeDelay, openDelay)
  }
}