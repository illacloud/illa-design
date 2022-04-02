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
  throttleByRaf,
  raf,
  caf,
} from "@illa-design/system"
import { Affix } from "@illa-design/affix"
import { Link } from "./link"
import { AnchorProps } from "./interface"
import { AnchorContext } from "./context"
import {
  findNode,
  getContainer,
  getContainerElement,
  easingMethod,
} from "./utils/index"
import { applyAnchorListCss, activeLineIndicatorCss } from "./style"

export const ForwardRefAnchor = forwardRef<HTMLDivElement, AnchorProps>(
  (props, ref) => {
    const {
      style,
      className,
      animation = true,
      scrollContainer: scrollContainerProp,
      boundary = "start",
      hash: willModifyHash,
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
    const [oldLink, setOldLink] = useState("")
    const isScrolling = useRef<boolean>(false)
    const activeLineIndicator = useRef<HTMLDivElement>(null)
    const linkMap = useRef<Map<string, HTMLElement>>(new Map())

    const onScroll = useCallback(
      throttleByRaf(() => {
        if (isScrolling.current) return

        console.log("onScroll")
        const element = getEleInViewport()
        element && element.id && setActiveLink(`#${element.id}`)
      }),
      [],
    )

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

    function scrollIntoView(hash: string) {
      if (!hash) return

      const element = findNode(document, hash)

      if (!element) return

      const offset = isNumber(boundary) ? boundary : 0
      const block = isNumber(boundary) ? "start" : boundary
      const actions = computeScrollIntoView(element, {
        scrollMode: "if-needed",
        block,
      })

      isScrolling.current = true

      actions.forEach(({ el, top }) => {
        if (!animation) {
          el.scrollTop = top - offset
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
              (scrollTop - (top - offset)) *
              easingMethod["quadInOut"](
                durationFromStart > duration
                  ? 1
                  : durationFromStart / duration,
              )

            if (durationFromStart < duration) {
              id = raf(updateScrollTopPerFrame)
            } else {
              caf(id)
              isScrolling.current = false
              console.log("scroll finish")
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
      if (link === currentLink) {
        return
      }
      setOldLink((oldLink) => (oldLink = currentLink))
      setCurrentLink((currentLink) => (currentLink = link))
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
