import { css, keyframes, SerializedStyles } from "@emotion/react"
import { getColor, globalColor, illaPrefix } from "@illa-design/theme"
import { SpinColorScheme, SpinSize } from "./interface"

export const containerCss = css`
  display: inline-flex;
  position: relative;
`

export const tipCss = css`
  size: 14px;
  line-height: 22px;
  color: ${globalColor(`--${illaPrefix}-blue-03`)};
`

export function applySizeCss(
  size: SpinSize,
  loading: boolean,
  colorScheme: SpinColorScheme,
): SerializedStyles {
  let sizeCss
  switch (size) {
    case "small":
      sizeCss = css`
        font-size: 12px;
      `
      break
    case "large":
      sizeCss = css`
        font-size: 24px;
      `
      break
    default:
      sizeCss = css`
        font-size: 16px;
      `
  }
  const animationCss = loading ? rotateAnimation : null

  return css`
    ${animationCss};
    ${sizeCss};
    color: ${getColor(colorScheme, "03")};
  `
}

export function applySpinContainerCss(
  loading: boolean,
): SerializedStyles | undefined {
  if (loading) {
    let background
    if (loading) {
      background = css`
        background-color: ${globalColor(`--${illaPrefix}-white-03`)};
      `
    }
    return css`
      ${background};
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    `
  }
}

export const rotateKeyframe = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`

export const rotateAnimation = css`
  animation: 1s linear infinite ${rotateKeyframe};
`
