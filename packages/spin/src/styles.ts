import { css, keyframes, SerializedStyles } from "@emotion/react"
import { getColor, getSpecialThemeColor } from "@illa-design/theme"
import { SpinColorScheme, SpinSize } from "./interface"

export function applyContainerStyle(block?: boolean): SerializedStyles {
  return css`
    display: ${block ? "inline-flex" : "flex"};
    position: relative;
  `
}

export function applyTipsStyle(
  colorScheme: SpinColorScheme,
  size: SpinSize,
): SerializedStyles {
  return css`
    size: ${size === "small" ? "12px" : "14px"};
    margin-top: 8px;
    line-height: 22px;
    color: ${getSpecialThemeColor(colorScheme)};
  `
}

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
    color: ${getSpecialThemeColor(colorScheme)};
    ${animationCss};
    ${sizeCss};
  `
}

export function applySpinContainerCss(
  loading: boolean,
): SerializedStyles | undefined {
  if (loading) {
    let background
    if (loading) {
      background = css`
        background-color: ${getColor("white", "03")};
      `
    }
    return css`
      ${background};
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      transition: opacity 0.1s linear;
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
