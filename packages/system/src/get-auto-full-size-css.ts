import { css, SerializedStyles } from "@emotion/react"

export function getSizeCssByAutoFullProps(
  autoFullX?: boolean,
  autoFullY?: boolean,
): SerializedStyles {
  const widthCss = autoFullX
    ? css`
        justify-content: center;
      `
    : css``

  const heightCss = autoFullY
    ? css`
        align-items: center;
      `
    : css``

  return css(widthCss, heightCss)
}
