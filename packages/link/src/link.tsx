import { forwardRef } from "react"
import { LinkProps } from "./interface"
import { applyDisable, applyLeftIcon, applyLinkContainer } from "./style"
import { LinkIcon } from "@illa-design/icon"
import { css } from "@emotion/react"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    disabled,
    icon,
    colorScheme = "blue",
    hoverable = true,
    ...otherProps
  } = props

  const leftIcon = typeof icon == "boolean" && icon ? <LinkIcon /> : icon

  const finalCss = css`
    ${applyLinkContainer(colorScheme, hoverable)};
    ${applyDisable(colorScheme, disabled)};
  `

  return (
    <a
      ref={ref}
      css={[finalCss, applyBoxStyle(props)]}
      {...deleteCssProps(otherProps)}
    >
      {leftIcon && <span css={applyLeftIcon}>{leftIcon}</span>}
      {props.children}
    </a>
  )
})

Link.displayName = "Link"
