import { getColor, getSpecialThemeColor } from "@illa-design/theme"
import { css, SerializedStyles } from "@emotion/react"
import { SliderColorScheme } from "./interface"

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

export function applyBgColor(
  colorScheme: SliderColorScheme | undefined,
  disabled: boolean,
): string {
  if (disabled) {
    return `${getColor("gray", "08")}`
  } else if (!colorScheme) {
    return `${getColor("blue", "03")}`
  } else if (innerColor.includes(colorScheme)) {
    return `${getSpecialThemeColor(colorScheme)}`
  } else {
    return colorScheme
  }
}

export const applySliderWrapper = css`
  width: 100%;
  height: 40px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
`

export function applySliderRoad(): SerializedStyles {
  return css`
    width: 100%;
    height: 2px;
    background-color: ${getColor("gray", "08")};
    border-radius: 2px;
    display: flex;
    align-items: center;
    position: relative;
  `
}
export function applySliderBar(
  disabled: boolean,
  draggableBar: boolean,
  width: number,
  colorScheme?: SliderColorScheme,
): SerializedStyles {
  return css`
    height: 2px;
    position: absolute;
    width: ${width}px;
    background: ${applyBgColor(colorScheme, disabled)};
    border-radius: 2px;
    cursor: ${disabled || !draggableBar ? "auto" : "pointer"};
  `
}
export function applyMarkBar(
  disabled: boolean,
  colorScheme?: SliderColorScheme,
): SerializedStyles {
  return css`
    box-sizing: border-box;
    height: 12px;
    width: 12px;
    background-color: white;
    border: 2px solid ${applyBgColor(colorScheme, disabled)};
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    cursor: ${disabled ? "auto" : "pointer"};
    transition: width 150ms ease-in-out, height 150ms ease-in-out;
    &:hover {
      height: 16px;
      width: 16px;
    }
    &[data-location="right"]:focus-within {
      height: 16px;
      width: 16px;
    }
  `
}
export function applyBoundBar(
  disabled: boolean,
  isRightMark?: boolean,
  colorScheme?: SliderColorScheme,
): SerializedStyles {
  return css`
    box-sizing: border-box;
    position: absolute;
    left: ${isRightMark ? "auto" : 0}px;
    right: ${isRightMark ? 0 : "auto"}px;
    height: 8px;
    width: 8px;
    background-color: white;
    border: 2px solid ${applyBgColor(colorScheme, disabled)};
    border-radius: 50%;
    z-index: 1;
    transform: ${isRightMark ? "translateX(50%)" : "translateX(-50%)"};
    cursor: ${disabled ? "auto" : "pointer"};
  `
}

export const applyBarContainer = css`
  height: 100%;
  width: 100%;
`

export function applyTickContainer(
  left: number,
  disabled: boolean,
): SerializedStyles {
  return css`
    height: 5px;
    width: 8px;
    position: absolute;
    left: ${left}px;
    bottom: 100%;
    transform: translateX(-50%);
    cursor: ${disabled ? "auto" : "pointer"};
  `
}
export function applyTick(background: string): SerializedStyles {
  return css`
    height: 5px;
    width: 2px;
    background: ${background};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `
}
export function applyNumTick(
  left: number,
  disabled: boolean,
): SerializedStyles {
  return css`
    height: 22px;
    width: 15px;
    position: absolute;
    font-size: 14px;
    margin-top: 4px;
    line-height: 22px;
    text-align: center;
    color: ${getColor("gray", "02")};
    top: 100%;
    left: ${left}px;
    transform: translateX(-50%);
    cursor: ${disabled ? "auto" : "pointer"};
  `
}
