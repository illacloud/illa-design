import { forwardRef } from "react"
import { Affix } from "@illa-design/affix"
import { Link } from "./link"
import { AnchorProps } from "./interface"

export const ForwardRefAnchor = forwardRef<HTMLDivElement, AnchorProps>(
  (props, ref) => {
    const {
      style,
      className,
      animation,
      scrollContainer,
      boundary = "start",
      hash = true,
      affix = true,
      affixStyle,
      offsetTop,
      offsetBottom,
      onChange,
      onSelect,
      lineless,
      children,
      ...restProps
    } = props

    const anchorList = (
      <div ref={ref} style={style} className={className} {...restProps}>
        {children}
      </div>
    )

    return affix ? (
      <Affix
        style={affixStyle}
        offsetBottom={offsetBottom}
        offsetTop={offsetTop}
      >
        {anchorList}
      </Affix>
    ) : (
      anchorList
    )
  },
)
export const Anchor = ForwardRefAnchor as typeof ForwardRefAnchor & {
  Link: typeof Link
}

Anchor.displayName = "Anchor"
Anchor.Link = Link
