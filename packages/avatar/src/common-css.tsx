import { globalColor, illaPrefix } from "@illa-design/theme"
import { AvatarProps, ColorScheme, Size } from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"

export const colors: ColorScheme[] = ["white", "blackAlpha", "gray", "grayBlue", "red", "orange", "yellow", "green", "blue", "cyan", "purple"]

export function applyBgColor(colorScheme: ColorScheme): SerializedStyles {
  let bgColor: SerializedStyles
  if (colors.includes(colorScheme)) {
    if (colorScheme == "gray") {
      bgColor = css`
        background-color: ${globalColor(`--${illaPrefix}-${colorScheme}-05`)}
      `
    } else {
      bgColor = css`
        background-color: ${globalColor(`--${illaPrefix}-${colorScheme}-01`)}
      `
    }
  } else {
    bgColor = css`
      background-color: ${colorScheme};
    `
  }
  return bgColor
}

export function applyAvatarShapeSquare(size: Size): SerializedStyles {
  let width: number
  let height: number
  let textSize: number
  [width, height, textSize] = applyAvatarSize(size)
  return css`
    width: ${width}px;
    height: ${height}px;
    font-size: ${textSize}px;
    border-radius: 4px;
  `
}

export function applyAvatarShapeCircle(size: Size): SerializedStyles {
  let width: number
  let height: number
  let textSize: number
  [width, height, textSize] = applyAvatarSize(size)
  return css`
    width: ${width}px;
    height: ${height}px;
    font-size: ${textSize}px;
    border-radius: 50%;
  `
}

export function applyAvatarContainer(colorScheme: ColorScheme) {
  return css`
    ${applyBgColor(colorScheme)};
    display: flex;
    overflow: hidden;
    word-wrap: break-word;
    white-space:nowrap;
    color: ${globalColor("--illa-white-01")};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px;
  `
}

export function applyAvatarSize(size: Size): number[] {
  let width: number
  let height: number
  let textSize: number
  switch (size) {
    case "large": {
      width = 64
      height = 64
      textSize = 24
      break
    }
    case "medium": {
      width = 40
      height = 40
      textSize = 14
      break
    }
    case "small": {
      width = 32
      height = 32
      textSize = 14
      break
    }
  }
  return [width, height, textSize]
}

export function applyMergeCss(props: AvatarProps): SerializedStyles {
  const currentColorScheme = props.colorScheme ?? "blue"
  const currentSize = props.size ?? "small"
  const currentShape = props.shape ?? "circle"

  const containerCss = applyAvatarContainer(currentColorScheme)
  const sizeCss = applyAvatarSize(currentSize)
  let shapeCss: SerializedStyles
  switch (currentShape) {
    case "circle": {
      shapeCss = applyAvatarShapeCircle(currentSize)
      break
    }
    case "square": {
      shapeCss = applyAvatarShapeSquare(currentSize)
      break
    }
  }

  return css`
    ${containerCss};
    ${sizeCss};
    ${shapeCss};
  `
}