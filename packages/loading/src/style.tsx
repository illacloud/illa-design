import { css, SerializedStyles, keyframes } from "@emotion/react"
import { getColor, globalColor, illaPrefix } from "@illa-design/theme"
import { LoadingColorScheme, LoadingSize } from "./interface"

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export function applyLoadingStyle(
  colorScheme: LoadingColorScheme,
  size: LoadingSize,
): SerializedStyles {
  let bgColor
  bgColor = getColor(colorScheme, "01")
  let sizeCss
  switch (size) {
    case "small":
      sizeCss = css`
        width: 12px;
        height: 12px;
      `
      break
    case "large":
      sizeCss = css`
        width: 24px;
        height: 24px;
      `
      break
    default:
      sizeCss = css`
        width: 16px;
        height: 16px;
      `
  }
  return css`
    display: inline-block;
    ${sizeCss};
    border-radius: 50%;
    background: conic-gradient(
      rgba(101, 74, 236, 0) 45deg,
      rgba(101, 74, 236, 0) 80deg,
      ${bgColor} 30deg,
      rgba(101, 74, 236, 0)
    );
    mask-image: radial-gradient(closest-side, transparent 75%, black 76%);
    animation: ${spin} 1s linear infinite reverse;
  `
}
