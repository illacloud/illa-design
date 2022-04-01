import { forwardRef, useState, useRef, MouseEvent } from "react"
import { isFunction } from "@illa-design/system"
import { Affix } from "@illa-design/affix"
import { Link } from "./link"
import { AnchorProps } from "./interface"
import { AnchorContext } from "./context"

export const ForwardRefAnchor = forwardRef<HTMLDivElement, AnchorProps>(
  (props, ref) => {
    const {
      style,
      className,
      animation,
      scrollContainer,
      boundary = "start",
      hash: willModifyHash = false,
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

    const [currentLink, setCurrentLink] = useState("")
    const [oldLink, setOldLink] = useState("")

    const linkMap = useRef<Map<string, HTMLElement>>(new Map())

    function addLink(link: string, element: HTMLElement) {
      link && linkMap.current.set(link, element)
    }

    function removeLink(link: string) {
      link && linkMap.current.delete(link)
    }

    function onClickLink(link: string, event: MouseEvent<HTMLAnchorElement>) {
      if (!willModifyHash) {
        event.preventDefault()
      }

      // set active link
      setOldLink(currentLink)
      setCurrentLink(link)

      // scroll content into view

      // callback
      isFunction(onSelect) && onSelect(link, oldLink)
    }

    const anchorList = (
      <div ref={ref} style={style} className={className} {...restProps}>
        <AnchorContext.Provider
          value={{
            currentLink,
            addLink,
            removeLink,
            onClickLink,
          }}
        >
          {children}
        </AnchorContext.Provider>
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
