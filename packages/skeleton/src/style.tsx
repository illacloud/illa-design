import { css, SerializedStyles, keyframes } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SkeletonImageProps, ImageShape, ImageSize } from "./interface"

const backgroundColor = globalColor(`--${illaPrefix}-gray-08`)

export function applySkeletonStyle(): SerializedStyles {
  return css([
    css`
      display: flex;
    `,
  ])
}

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
  const gray = globalColor(`--${illaPrefix}-gray-08`)
  const darkGray = globalColor(`--${illaPrefix}-gray-06`)

  return css({
    background: `linear-gradient(90deg, ${gray} 20%, ${darkGray} 35%, ${gray} 65%)`,
    backgroundSize: "400% 100%",
    animation: `${loading} 1.5s linear infinite`,
  })
}

export function applyLineStyle(width?: number | string): SerializedStyles {
  return css([
    css`
      &:not(last-child) {
        margin-bottom: 16px;
      }
    `,
    {
      width,
      height: 16,
      backgroundColor,
    },
  ])
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
    css({
      backgroundColor,
    }),
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

  return css({ width, height: width })
}

function applyImageShape(shape: ImageShape): SerializedStyles {
  return shape === "circle"
    ? css`
        border-radius: 50%;
      `
    : css``
}
