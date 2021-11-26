import { forwardRef } from "react"
import { IconProps } from "./interface"
import { css, keyframes } from "@emotion/react"
import { omit } from "@illa-design/system"

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
    width = props.measure ?? "1em",
    height = props.measure ?? "1em",
    color = "currentColor",
    spin = false,
    ...rest
  } = props

  const otherProps = omit(rest, ["measure"])

  const finalCss = spin ? css`
    ${rotateAnimation};
    vertical-align: middle;
  ` : css`
    vertical-align: middle;
  `

  return <svg ref={ref} css={finalCss} width={width} height={height}
              color={color} {...otherProps}>{props.children}</svg>

})
