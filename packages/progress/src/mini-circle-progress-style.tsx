import { css } from "@emotion/react"
import { ProgressColorScheme } from "./interface"
import { SerializedStyles } from "@storybook/theming"
import { globalColor, illaPrefix } from "@illa-design/theme"

const colorSchemes: ProgressColorScheme[] = [
  "white",
  "blackAlpha",
  "gray",
  "grayBlue",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "cyan",
  "purple",
]

export const applyCircleStatus = css`
  display: inline-flex;
  font-size: 16px;
`

export function applyCircleSvgContainer(
  width: string,
  trailColorScheme: ProgressColorScheme,
): SerializedStyles {
  let color
  if (trailColorScheme == "gray") {
    color = globalColor(`--${illaPrefix}-${trailColorScheme}-08`)
  } else {
    color = colorSchemes.includes(trailColorScheme)
      ? globalColor(`--${illaPrefix}-${trailColorScheme}-06`)
      : trailColorScheme
  }
  return css`
    width: ${width};
    height: ${width};
    border-radius: 50%;
    background-color: ${color};
  `
}

export function applyCircleProgressContainer(
  colorScheme: ProgressColorScheme,
  width: string,
  percent: number,
): SerializedStyles {
  const perimeter = `calc(${Math.PI} * 2 * ${width} / 2)`

  let color
  if (colorScheme == "gray") {
    color = globalColor(`--${illaPrefix}-${colorScheme}-02`)
  } else {
    color = colorSchemes.includes(colorScheme)
      ? globalColor(`--${illaPrefix}-${colorScheme}-03`)
      : colorScheme
  }

  return css`
    transition: all 200ms;
    stroke: ${color};
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: ${perimeter};
    stroke-dashoffset: calc(${perimeter} - (${percent} / 100 * ${perimeter}));
  `
}
