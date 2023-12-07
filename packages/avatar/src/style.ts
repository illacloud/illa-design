import {
  getSpecialThemeColor,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"
import {
  AvatarColorScheme,
  AvatarProps,
  AvatarShape,
  AvatarSize,
} from "./interface"
import { css, SerializedStyles } from "@emotion/react"

export const colors: AvatarColorScheme[] = [
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
  "techPink",
  "techPurple",
]

export function applyBgColor(colorScheme: AvatarColorScheme): SerializedStyles {
  let bgColor: SerializedStyles
  if (colors.includes(colorScheme)) {
    if (colorScheme == "gray" || colorScheme == "grayBlue") {
      bgColor = css`
        background-color: ${globalColor(`--${illaPrefix}-${colorScheme}-05`)};
      `
    } else {
      bgColor = css`
        background-color: ${getSpecialThemeColor(colorScheme)};
      `
    }
  } else {
    bgColor = css`
      background-color: ${colorScheme};
    `
  }
  return bgColor
}

export function applyAvatarShapeSquare(size: AvatarSize): SerializedStyles {
  const [width, height, textSize, lineHeight] = applyAvatarSize(size)
  return css`
    width: ${width};
    height: ${height};
    font-size: ${textSize};
    line-height: ${lineHeight};
    border-radius: 8px;
  `
}

export function applyAvatarShapeCircle(size: AvatarSize): SerializedStyles {
  const [width, height, textSize, lineHeight] = applyAvatarSize(size)
  return css`
    width: ${width};
    height: ${height};
    font-size: ${textSize};
    line-height: ${lineHeight};
    border-radius: 50%;
  `
}

export function applyAvatarContainer(colorScheme: AvatarColorScheme) {
  return css`
    ${applyBgColor(colorScheme)};
    display: inline-flex;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4px;
  `
}

export function applyAvatarSize(size: AvatarSize): string[] {
  let width: string
  let height: string
  let textSize: string
  let lineHeight: string
  switch (size) {
    case "large": {
      width = "64px"
      height = "64px"
      textSize = "24px"
      lineHeight = "32px"
      break
    }
    case "medium": {
      width = "40px"
      height = "40px"
      textSize = "14px"
      lineHeight = "22px"
      break
    }
    case "small": {
      width = "32px"
      height = "32px"
      textSize = "14px"
      lineHeight = "22px"
      break
    }
  }
  return [width, height, textSize, lineHeight]
}

export function applyMergeCss(props: AvatarProps): SerializedStyles {
  const currentColorScheme = props.colorScheme ?? "blue"
  const currentSize = props.size ?? "small"
  const currentShape = props.shape ?? "circle"

  const containerCss = applyAvatarContainer(currentColorScheme)
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
    ${shapeCss};
  `
}

export function applyShape(shape: AvatarShape): string {
  switch (shape) {
    case "circle": {
      return "50%"
    }
    case "square": {
      return "4px"
    }
  }
}

// icon avatar
export function applyIconSize(size: AvatarSize) {
  let width: number
  let height: number
  switch (size) {
    case "large": {
      width = 28
      height = 28
      break
    }
    case "medium": {
      width = 18
      height = 18
      break
    }
    case "small": {
      width = 14
      height = 14
      break
    }
  }
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${width}px;
    font-size: ${width}px;
    height: ${height}px;
  `
}
