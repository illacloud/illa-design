import { css, SerializedStyles, keyframes } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { LoadingColorScheme } from "./interface"

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export function applyLoadingStyle(
  colorScheme: LoadingColorScheme,
): SerializedStyles {
  let bgColor
  bgColor = globalColor(`--${illaPrefix}-${colorScheme}-01`)
  return css`
    display: inline-block;
    width: 32px;
    height: 32px;
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
