import { css, SerializedStyles, keyframes } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { colorSchemeType } from "./interface"

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export function applyLoadingStyle(
  colorScheme: colorSchemeType,
): SerializedStyles {
  let bgColor
  switch (colorScheme) {
    case "techPurple":
      bgColor = globalColor(`--${illaPrefix}-techPurple-01`)
      break
  }
  return css`
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
    margin: 0 auto;
  `
}
