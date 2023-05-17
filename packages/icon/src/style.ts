import { css, keyframes } from "@emotion/react"

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

export const iconContainerStyle = css`
  display: inline-flex;
  align-items: center;
  font-style: normal;
  line-height: 0;
  color: inherit;
  text-align: center;
  text-rendering: optimizeLegibility;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: -0.125em;
`
