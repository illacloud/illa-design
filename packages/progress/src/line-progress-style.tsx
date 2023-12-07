import { css, SerializedStyles } from "@emotion/react"
import { ProgressColorScheme } from "./interface"
import {
  getColor,
  getSpecialThemeColor,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"

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
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
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
  return css`
    transition: width 200ms;
    position: absolute;
    width: ${percent}%;
    border-radius: calc(${stokeWidth} / 2);
    background-color: ${getSpecialThemeColor(colorScheme)};
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
  let finalWidth: string

  if ((100 / steps) * (index + 1) > percent) {
    finalWidth = "0px"
  } else {
    finalWidth = width
  }

  return css`
    width: ${finalWidth};
    border-radius: calc(${stokeWidth} / 2);
    background-color: ${getSpecialThemeColor(colorScheme)};
    height: ${stokeWidth};
  `
}

export function applyLineProgressBg(
  stokeWidth: string,
  trailColorScheme: ProgressColorScheme,
): SerializedStyles {
  let color
  if (trailColorScheme == "gray" || trailColorScheme == "grayBlue") {
    color = globalColor(`--${illaPrefix}-${trailColorScheme}-08`)
  } else {
    color = getColor(trailColorScheme, "07")
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

  if (trailColorScheme == "gray" || trailColorScheme == "grayBlue") {
    color = globalColor(`--${illaPrefix}-${trailColorScheme}-08`)
  } else {
    color = getColor(trailColorScheme, "07")
  }

  return css`
    background-color: ${color};
    width: ${width};
    border-radius: calc(${strokeWidth} / 2);
    height: ${strokeWidth};
  `
}
