import { forwardRef } from "react"
import { IconProps } from "./interface"
import { css } from "@emotion/react"
import { omit } from "@illa-design/system"
import { rotateAnimation } from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    width = props.size ?? "1em",
    height = props.size ?? "1em",
    color = "currentColor",
    spin,
    _css,
    ...rest
  } = props

  const otherProps = omit(rest, ["size"])

  const finalCss = spin
    ? css`
        ${rotateAnimation};
      `
    : css``

  return (
    <svg
      ref={ref}
      css={css(finalCss, _css, applyBoxStyle(props))}
      width={width}
      height={height}
      color={color}
      {...deleteCssProps(otherProps)}
    >
      {props.children}
    </svg>
  )
})

Icon.displayName = "Icon"
