import {
  forwardRef,
  useState,
  useRef,
  MouseEvent,
  useEffect,
  useCallback,
} from "react"
import { isFunction, isNumber, throttleByRaf } from "@illa-design/system"
import { Affix } from "@illa-design/affix"
import { Link } from "./link"
import { AnchorProps } from "./interface"
import { AnchorContext } from "./context"
import { findNode, getContainer, getContainerElement } from "./utils"
import { applyAnchorListCss } from "./style"

export const ForwardRefAnchor = forwardRef<HTMLDivElement, AnchorProps>(
  (props, ref) => {
    const {
      style,
      className,
      animation,
      scrollContainer: scrollContainerProp,
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

    let onScroll: () => void = () => { }
    const scrollContainer = useRef<HTMLElement | Window | null>(null)

    const [currentLink, setCurrentLink] = useState("")
    const [oldLink, setOldLink] = useState("")

    const linkMap = useRef<Map<string, HTMLElement>>(new Map())

    const getEleInViewport = useCallback(() => {
      let result
      const startTop = isNumber(boundary) ? boundary : 0
      const container = scrollContainer.current
      const containerElement = getContainerElement(
        container as HTMLElement | Window,
      )
      const containerRect = (
        containerElement as HTMLElement
      ).getBoundingClientRect()
      const documentHeight = document.documentElement.clientHeight

      for (const hash of linkMap.current.keys()) {
        const element = findNode(document, hash)
        let inView = false

        if (element) {
          const { top } = element.getBoundingClientRect()

          if (container === window) {
            inView = top >= startTop && top <= documentHeight / 2
          } else {
            const offsetTop = top - containerRect.top - startTop
            inView = offsetTop >= 0 && offsetTop <= containerRect.height / 2
          }
          if (inView) {
            result = element
            break
          }
        }
      }

      return result
    }, [boundary])

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

      setActiveLink(link)
      scrollIntoView(link)
      isFunction(onSelect) && onSelect(currentLink, oldLink)
    }

    function setActiveLink(link: string) {
      setOldLink(currentLink)
      setCurrentLink(link)
      isFunction(onChange) && onChange(currentLink, oldLink)
    }

    useEffect(() => {
      scrollContainer.current = getContainer(scrollContainerProp)
    }, [scrollContainerProp])

    const getAffixTarget = useCallback(
      () => getContainer(scrollContainerProp),
      [scrollContainerProp],
    )

    useEffect(() => {
      scrollContainer.current?.addEventListener("scroll", onScroll)

      return () => {
        scrollContainer.current?.removeEventListener("scroll", onScroll)
      }
    }, [scrollContainerProp, onScroll])

    onScroll = useCallback(
      throttleByRaf(() => {
        const element = getEleInViewport()

        element && element.id && setActiveLink(`#${element.id}`)
      }),
      [],
    )

    function scrollIntoView(hash: string) {
      if (!hash) return

      const element = findNode(document, hash)

      if (!element) return

      const block = isNumber(boundary) ? "start" : boundary
      element.scrollIntoView({
        behavior: "smooth",
        block,
      })
    }

    const anchorList = (
      <div
        ref={ref}
        css={applyAnchorListCss(lineless)}
        style={style}
        className={className}
        {...restProps}
      >
        <AnchorContext.Provider
          value={{
            currentLink,
            addLink,
            removeLink,
            onClickLink,
            lineless,
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
        target={getAffixTarget}
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
