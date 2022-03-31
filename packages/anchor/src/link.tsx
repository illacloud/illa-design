import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { AnchorLinkProps } from "./interface"
import { applyLinkStyle, linkOffsetStyle } from "./style"
import { isString } from "@illa-design/system"
import { ReactElement } from "react"

export const Link = forwardRef<HTMLDivElement, AnchorLinkProps>(
  (props, ref) => {
    const {
      style,
      className,
      href = "#",
      title,
      children,
      ...restProps
    } = props

    function renderNestedAnchorLink() {
      return React.Children.toArray(children).filter(
        (child) =>
          child &&
          (child as ReactElement).type &&
          ((child as ReactElement).type as { displayName?: string })
            .displayName === "AnchorLink",
      )
    }

    const linkRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => linkRef?.current as HTMLDivElement, [])

    return (
      <div ref={linkRef} css={[linkOffsetStyle]}>
        <a
          css={applyLinkStyle()}
          href={href}
          title={isString(title) ? title : ""}
          style={style}
          className={className}
          {...restProps}
        >
          {title}
        </a>
        {renderNestedAnchorLink()}
      </div>
    )
  },
)

Link.displayName = "AnchorLink"
