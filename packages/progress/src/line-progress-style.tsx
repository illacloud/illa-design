import { css } from "@emotion/react"
import { SerializedStyles } from "@storybook/theming"
import { ProgressColorScheme } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"

const colorSchemes: ProgressColorScheme[] = ["white", "blackAlpha", "gray", "grayBlue", "red", "orange", "yellow", "green", "blue", "cyan", "purple"]

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

export function applyLineContainer(width: string, stokeWidth: string): SerializedStyles {
  return css`
    display: inline-block;
    height: ${stokeWidth};
    width: ${width};
    position: relative;
  `
}

export function applySpace(): SerializedStyles {
  return css`
    position: absolute;
  `
}

export function applyLineProgress(percent: number, stokeWidth: string, colorScheme: ProgressColorScheme): SerializedStyles {
  let color
  if (colorScheme == "gray") {
    color = globalColor(`--${illaPrefix}-${colorScheme}-02`)
  } else {
    color = colorSchemes.includes(colorScheme) ? globalColor(`--${illaPrefix}-${colorScheme}-03`) : colorScheme
  }
  return css`
    position: absolute;
    width: ${percent}%;
    border-radius: calc(${stokeWidth} / 2);
    background-color: ${color};
    height: ${stokeWidth};
  `
}

export function applyLineProgressBg(stokeWidth: string, trailColorScheme: ProgressColorScheme): SerializedStyles {
  let color
  if (trailColorScheme == "gray") {
    color = globalColor(`--${illaPrefix}-${trailColorScheme}-08`)
  } else {
    color = colorSchemes.includes(trailColorScheme) ? globalColor(`--${illaPrefix}-${trailColorScheme}-06`) : trailColorScheme
  }
  return css`
    position: absolute;
    background-color: ${color};
    width: 100%;
    border-radius: calc(${stokeWidth} / 2);
    height: ${stokeWidth};
  `
}