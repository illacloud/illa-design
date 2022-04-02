import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useContext,
  ReactElement,
  useEffect,
} from "react"
import { AnchorLinkProps } from "./interface"
import { applyLinkStyle, linkOffsetStyle } from "./style"
import { isString } from "@illa-design/system"
import { AnchorContext } from "./context"

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

    const { currentLink, addLink, removeLink, onClickLink, lineless } =
      useContext(AnchorContext)

    const isActive = currentLink === href;

    const linkRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => linkRef?.current as HTMLDivElement, [])

    useEffect(() => {
      addLink && href && addLink(href, (linkRef.current as HTMLElement));

      return () => {
        removeLink && href && removeLink(href);
      }
    }, [href])

    function renderNestedAnchorLink() {
      return React.Children.toArray(children).filter(
        (child) =>
          child &&
          (child as ReactElement).type &&
          ((child as ReactElement).type as { displayName?: string })
            .displayName === "AnchorLink",
      )
    }

    return (
      <div ref={linkRef} css={[linkOffsetStyle]}>
        <a
          css={applyLinkStyle(isActive, lineless)}
          href={href}
          title={isString(title) ? title : ""}
          onClick={(e) => onClickLink && onClickLink(href, e)}
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
