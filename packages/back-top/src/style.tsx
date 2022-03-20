import { css, SerializedStyles } from "@emotion/react"

export function applyFixedStyle(right: number = 40, bottom: number = 40) {
  return css`
    position: fixed;
    right: ${right}px;
    bottom: ${bottom}px;
  `
}

export const pointerStyle = css`
  cursor: pointer;
`

export function applyOpacity(visible: boolean): SerializedStyles {
  return css`
    opacity: ${visible ? 1 : 0};
  `
}

export const opacityTransition = css`
  transition: opacity 0.2s ease-in;
`
