import { forwardRef } from "react"
import { IconProps } from "./interface"
import { css, keyframes } from "@emotion/react"

const rotateKeyframe = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`

const rotateAnimation = css`
  animation: 2s linear infinite ${rotateKeyframe};
`

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {

  const {
    width = "1em",
    height = "1em",
    color = "currentColor",
    spin = false,
    ...rest
  } = props

  return <svg ref={ref} css={spin ? rotateAnimation : null} width={width} height={height}
              color={color} {...rest}>{props.children}</svg>

})
