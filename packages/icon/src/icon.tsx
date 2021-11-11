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

  const w = props.width ?? props.size ?? "1em"
  const h = props.height ?? props.size ?? "1em"
  const c = props.color ?? "currentColor"
  const spin = props.spin ?? false

  return <svg ref={ref} css={spin ? rotateAnimation : null} width={w} height={h}
              color={c} {...props}>{props.children}</svg>

})
