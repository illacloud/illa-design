import { AnchorLinkProps } from "./interface"
import { applyLinkStyle } from "./style"

export function Link(props: AnchorLinkProps) {
  const { style, className, href = "#", title, ...restProps } = props

  return (
    <a
      css={applyLinkStyle()}
      href={href}
      style={style}
      className={className}
      {...restProps}
    >
      {title}
    </a>
  )
}
