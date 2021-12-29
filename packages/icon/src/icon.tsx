/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { IconProps } from "./interface"
import { css } from "@emotion/react"
import { omit } from "@illa-design/system"
import { rotateAnimation } from "./style"

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {

  const {
    width = props.size ?? "1em",
    height = props.size ?? "1em",
    color = "currentColor",
    spin,
    ...rest
  } = props

  const otherProps = omit(rest, ["size"])

  const finalCss = spin ? css`
    ${rotateAnimation};
    vertical-align: middle;
  ` : css`
    vertical-align: middle;
  `

  return <svg ref={ref} css={finalCss} width={width} height={height}
              color={color} {...otherProps}>{props.children}</svg>

})
