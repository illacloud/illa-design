import {
  forwardRef,
  useState,
  useRef,
  MouseEvent,
  useEffect,
  useCallback,
} from "react"
import computeScrollIntoView from "compute-scroll-into-view"
import {
  isFunction,
  isNumber,
  raf,
  caf,
  easingMethod,
} from "@illa-design/system"
import { Affix } from "@illa-design/affix"
import { Link } from "./link"
import { AnchorProps } from "./interface"
import { AnchorContext } from "./context"
import { findNode, getContainer, getContainerElement } from "./utils/index"
import { applyAnchorListCss, activeLineIndicatorCss } from "./style"

export const ForwardRefAnchor = forwardRef<HTMLDivElement, AnchorProps>(
  (props, ref) => {
    const {
      style,
      className,
      animation = true,
      scrollContainer: scrollContainerProp,
      boundary = "start",
      hash: willModifyHash = true,
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

    const scrollContainer = useRef<HTMLElement | Window | null>(null)
    const [currentLink, setCurrentLink] = useState("")
    const isScrolling = useRef<boolean>(false)
    const isScrollingTimer = useRef<number | null>(null)
    const activeLineIndicator = useRef<HTMLDivElement>(null)
    const linkMap = useRef<Map<string, HTMLElement>>(new Map())

    // thx arco
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

    const onScroll = useCallback(() => {
      if (isScrolling.current) return

      const element = getEleInViewport()
      element && element.id && setActiveLink(`#${element.id}`)
    }, [getEleInViewport, setActiveLink])

    function scrollIntoView(hash: string) {
      if (!hash) return

      if (isScrollingTimer.current) {
        clearTimeout(isScrollingTimer.current)
        isScrollingTimer.current = null
      }

      const element = findNode(document, hash)

      if (!element) return

      const offset = isNumber(boundary) ? boundary : 0
      const block = isNumber(boundary) ? "start" : boundary
      const actions = computeScrollIntoView(element, { block })

      isScrolling.current = true

      actions.forEach(({ el, top }) => {
        const targetScrollTop = top - offset
        if (!animation) {
          el.scrollTop = targetScrollTop
          isScrolling.current = false
        } else {
          const { scrollTop } = el
          const duration = 200
          const startTime = Date.now()
          let id: number

          function updateScrollTopPerFrame() {
            const nowTime = Date.now()
            const durationFromStart = nowTime - startTime
            el.scrollTop =
              scrollTop -
              (scrollTop - targetScrollTop) *
                easingMethod["quadInOut"](
                  durationFromStart > duration
                    ? 1
                    : durationFromStart / duration,
                )

            if (durationFromStart < duration) {
              id = raf(updateScrollTopPerFrame)
            } else {
              caf(id)
              isScrollingTimer.current = setTimeout(() => {
                isScrolling.current = false
                clearTimeout(isScrollingTimer.current as number)
                isScrollingTimer.current = null
              }, 200) as unknown as number
            }
          }

          raf(updateScrollTopPerFrame)
        }
      })
    }

    function registerLink(link: string, element: HTMLElement) {
      link && linkMap.current.set(link, element)
    }

    function unregisterLink(link: string) {
      link && linkMap.current.delete(link)
    }

    function onClickLink(link: string, event: MouseEvent<HTMLAnchorElement>) {
      if (!willModifyHash) {
        event.preventDefault()
      }

      setActiveLink(link)
      scrollIntoView(link)
      isFunction(onSelect) && onSelect(link, currentLink)
    }

    function setActiveLink(link: string) {
      const node = linkMap.current.get(link)

      if (!node || link === currentLink) {
        return
      }

      setCurrentLink(() => link)
      isFunction(onChange) && onChange(link, currentLink)
    }

    const getAffixTarget = useCallback(
      () => getContainer(scrollContainerProp),
      [scrollContainerProp],
    )

    useEffect(() => {
      scrollContainer.current = getContainer(scrollContainerProp)
    }, [scrollContainerProp])

    useEffect(() => {
      onScroll()
    })

    // set line indicator
    useEffect(() => {
      const linkElement = linkMap.current.get(currentLink)

      if (linkElement && !lineless && activeLineIndicator.current) {
        activeLineIndicator.current.style.top = `${linkElement.offsetTop}px`
      }
    }, [currentLink, lineless])

    useEffect(() => {
      scrollContainer.current?.addEventListener("scroll", onScroll)

      return () => {
        scrollContainer.current?.removeEventListener("scroll", onScroll)
      }
    }, [scrollContainerProp, onScroll])

    useEffect(() => {
      const hash = decodeURIComponent(location.hash)
      if (hash) {
        setActiveLink(hash)
        scrollIntoView(hash)
      }
    }, [])

    const anchorList = (
      <div
        ref={ref}
        css={applyAnchorListCss(lineless)}
        style={style}
        className={className}
        {...restProps}
      >
        {!lineless && currentLink && (
          <div css={activeLineIndicatorCss} ref={activeLineIndicator} />
        )}
        <AnchorContext.Provider
          value={{
            currentLink,
            registerLink,
            unregisterLink,
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
