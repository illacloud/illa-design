import { css } from "@emotion/react"
import { SerializedStyles } from "@storybook/theming"
import { ProgressColorScheme } from "./interface"
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

export const applyProgressContainer = css`
  vertical-align: middle;
  align-items: center;
  display: inline-flex;
  flex-direction: row;
`

export const applyProgressText = css`
  margin-left: 8px;
  line-height: 14px;
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-gray-04`)};
`

export const applyStatusIcon = css`
  display: inline-flex;
  font-size: 12px;
  margin-left: 8px;
`

export function applyLineContainer(
  width: string,
  stokeWidth: string,
): SerializedStyles {
  return css`
    display: inline-block;
    height: ${stokeWidth};
    width: ${width};
    position: relative;
  `
}

export function applySpace(): SerializedStyles {
  return css`
    width: 100%;
    position: absolute;
  `
}

export function applyLineProgress(
  percent: number,
  stokeWidth: string,
  colorScheme: ProgressColorScheme,
): SerializedStyles {
  let color
  if (colorScheme == "gray") {
    color = globalColor(`--${illaPrefix}-${colorScheme}-02`)
  } else {
    color = colorSchemes.includes(colorScheme)
      ? globalColor(`--${illaPrefix}-${colorScheme}-03`)
      : colorScheme
  }
  return css`
    transition: width 200ms;
    position: absolute;
    width: ${percent}%;
    border-radius: calc(${stokeWidth} / 2);
    background-color: ${color};
    height: ${stokeWidth};
  `
}

export function applyLineProgressStep(
  percent: number,
  stokeWidth: string,
  width: string,
  colorScheme: ProgressColorScheme,
  steps: number,
  index: number,
): SerializedStyles {
  let color
  if (colorScheme == "gray") {
    color = globalColor(`--${illaPrefix}-${colorScheme}-02`)
  } else {
    color = colorSchemes.includes(colorScheme)
      ? globalColor(`--${illaPrefix}-${colorScheme}-03`)
      : colorScheme
  }

  let finalWidth: string

  if ((100 / steps) * (index + 1) > percent) {
    finalWidth = "0px"
  } else {
    finalWidth = width
  }

  return css`
    width: ${finalWidth};
    border-radius: calc(${stokeWidth} / 2);
    background-color: ${color};
    height: ${stokeWidth};
  `
}

export function applyLineProgressBg(
  stokeWidth: string,
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
    position: absolute;
    background-color: ${color};
    width: 100%;
    border-radius: calc(${stokeWidth} / 2);
    height: ${stokeWidth};
  `
}

export function applyLineProgressBgStep(
  strokeWidth: string,
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
    background-color: ${color};
    width: ${width};
    border-radius: calc(${strokeWidth} / 2);
    height: ${strokeWidth};
  `
}
