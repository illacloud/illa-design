import { globalColor, illaPrefix } from "@illa-design/theme"
import { AvatarProps, ColorScheme, Shape, Size } from "./interface"
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
  let width: string
  let height: string
  let textSize: string
  [width, height, textSize] = applyAvatarSize(size)
  return css`
    width: ${width};
    height: ${height};
    font-size: ${textSize};
    border-radius: 4px;
  `
}

export function applyAvatarShapeCircle(size: Size): SerializedStyles {
  let width: string
  let height: string
  let textSize: string
  [width, height, textSize] = applyAvatarSize(size)
  return css`
    width: ${width};
    height: ${height};
    font-size: ${textSize};
    border-radius: 50%;
  `
}

export function applyAvatarContainer(colorScheme: ColorScheme) {
  return css`
    ${applyBgColor(colorScheme)};
    display: inline-flex;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    color: ${globalColor("--illa-white-01")};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px;
  `
}

export function applyAvatarSize(size: Size): string[] {
  let width: string
  let height: string
  let textSize: string
  switch (size) {
    case "large": {
      width = "64px"
      height = "64px"
      textSize = "24px"
      break
    }
    case "medium": {
      width = "40px"
      height = "40px"
      textSize = "14px"
      break
    }
    case "small": {
      width = "32px"
      height = "32px"
      textSize = "14px"
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

export function applyShape(shape: Shape): string {
  switch (shape) {
    case "circle": {
      return "50%"
    }
    case "square": {
      return "4px"
    }
  }
}