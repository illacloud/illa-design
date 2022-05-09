import { css, SerializedStyles } from "@emotion/react"

export function getSizeCssByAutoFullProps(
  autoFullX?: boolean,
  autoFullY?: boolean,
): SerializedStyles {
  const widthCss = autoFullX
    ? css`
        width: 100%;
        justify-content: center;
      `
    : css`
        width: auto;
      `

  const heightCss = autoFullY
    ? css`
        height: 100%;
        align-items: center;
      `
    : css`
        height: auto;
      `

  return css(widthCss, heightCss)
}
