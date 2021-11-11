import { forwardRef } from "react"
import { IconProps } from "./interface"
import { css } from "@emotion/react"

const rotateAnimation = css`
  svg {
    animation: 2s linear infinite svg-animation;
    max-width: 100px;
  }

  // SVG 动画.
  @keyframes svg-animation {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg)
    }
  }
`

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {

  const w = props.width ?? props.size ?? "1em"
  const h = props.height ?? props.size ?? "1em"
  const c = props.color ?? "currentColor"
  const spin = props.spin ?? false

  return <svg ref={ref} css={spin ? rotateAnimation : null} width={w} height={h}
              color={c} {...props}>{props.children}</svg>

})
