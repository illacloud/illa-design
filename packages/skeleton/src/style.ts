import { css, SerializedStyles, keyframes } from "@emotion/react"
import { SkeletonImageProps, ImageShape, ImageSize } from "./interface"

const lightBGColor = "#F9FAFC"
const darkBGColor = "#F2F3F5"

export const skeletonStyle = css`
  display: flex;
`

export const skeletonTextStyle = css`
  flex-grow: 1;
  overflow: hidden;
`
export const skeletonImageStyle = css`
  margin-right: 16px;
`

export function applyAnimation(animatin?: boolean): SerializedStyles {
  if (!animatin) {
    return css``
  }

  const loading = keyframes`
  0% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0 50%
  }
  `
  const gray = lightBGColor
  const darkGray = darkBGColor

  return css({
    background: `linear-gradient(90deg, ${gray} 20%, ${darkGray} 35%, ${gray} 65%)`,
    backgroundSize: "400% 100%",
    animation: `${loading} 1.5s linear infinite`,
  })
}

export function applyLineStyle(width?: number | string): SerializedStyles {
  return css`
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    width: ${width}px;
    height: 16px;
    background-color: ${lightBGColor}px;
  `
}

export const textContainerStyle = css({
  listStyle: "none",
  padding: 0,
  margin: 0,
})

export function applyImageStyle({
  shape = "circle",
  size = "medium",
}: SkeletonImageProps): SerializedStyles {
  return css([
    css`
      background-color: ${lightBGColor};
    `,
    applyImageSize(size),
    applyImageShape(shape),
  ])
}

function applyImageSize(size: ImageSize): SerializedStyles {
  let width

  if (typeof size === "number") {
    width = size
  } else {
    const sizeMap = {
      small: 36,
      medium: 48,
      large: 60,
    }

    width = sizeMap[size]
  }

  return css`
    width: ${width}px;
    height: ${width}px;
  `
}

function applyImageShape(shape: ImageShape): SerializedStyles {
  return shape === "circle"
    ? css`
        border-radius: 50%;
      `
    : css``
}
