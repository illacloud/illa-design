import { ProgressColorScheme } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { getColor, getSpecialThemeColor } from "@illa-design/theme"

export function applySvgContainer(width: string): SerializedStyles {
  return css`
    width: ${width};
    height: ${width};
  `
}

export function applyContainer(width: string): SerializedStyles {
  return css`
    position: relative;
    width: ${width};
    height: ${width};
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    display: inline-flex;
  `
}

export function applyProgressContainer(
  colorScheme: ProgressColorScheme,
  width: string,
  strokeWidth: string,
  percent: number,
): SerializedStyles {
  const perimeter = `calc(${Math.PI} * 2 * (${width} - ${strokeWidth}) / 2)`

  return css`
    transition: stroke-dashoffset 200ms;
    stroke: ${getSpecialThemeColor(colorScheme)};
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: ${perimeter};
    stroke-dashoffset: calc(${perimeter} - (${percent} / 100 * ${perimeter}));
  `
}

export function applyProgressContainerBg(
  trailColorScheme: ProgressColorScheme,
  width: string,
  strokeWidth: string,
): SerializedStyles {
  const perimeter = `calc(${Math.PI} * 2 * (${width} - ${strokeWidth}) / 2)`

  let color
  if (trailColorScheme == "gray" || trailColorScheme == "grayBlue") {
    color = getColor(trailColorScheme, "08")
  } else {
    color = getColor(trailColorScheme, "07")
  }

  return css`
    stroke: ${color};
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: ${perimeter};
  `
}
