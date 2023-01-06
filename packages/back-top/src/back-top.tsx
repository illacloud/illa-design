import { forwardRef, useCallback, useEffect, useRef, useState } from "react"
import { UpIcon } from "@illa-design/icon"
import { Button } from "@illa-design/button"
import {
  throttleByRaf,
  isFunction,
  raf,
  caf,
  easingMethod,
} from "@illa-design/system"
import { BackTopProps } from "./interface"
import {
  applyFixedStyle,
  applyOpacity,
  opacityTransition,
  pointerStyle,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const BackTop = forwardRef<HTMLDivElement, BackTopProps>(
  (props, ref) => {
    const {
      visibleHeight = 400,
      target = () => window,
      easing = "quartOut",
      duration = 400,
      onClick,
      children,
      ...rest
    } = props

    function getScrollTarget(target: HTMLElement | Window): HTMLElement {
      return target === window
        ? document.documentElement
        : (target as HTMLElement)
    }

    const [visible, setVisible] = useState(false)

    const targetRef = useRef<HTMLElement | Window>()
    const scrollTargetRef = useRef<HTMLElement>()

    const scrollToTop = useCallback(() => {
      const { scrollTop } = scrollTargetRef.current as HTMLElement
      const startTime = Date.now()
      let id: number

      function updateScrollTopPerFrame() {
        const nowTime = Date.now()
        const durationFromStart = nowTime - startTime
        const scrollTarget = scrollTargetRef.current

        if (scrollTarget) {
          scrollTarget.scrollTop =
            scrollTop -
            scrollTop *
              easingMethod[easing](
                durationFromStart > duration ? 1 : durationFromStart / duration,
              )
        }

        durationFromStart < duration
          ? (id = raf(updateScrollTopPerFrame))
          : caf(id)
      }

      raf(updateScrollTopPerFrame)

      isFunction(onClick) && onClick()
    }, [duration])

    useEffect(() => {
      targetRef.current = target()
      scrollTargetRef.current = getScrollTarget(targetRef.current)

      const onScroll = throttleByRaf(() => {
        const { scrollTop } = scrollTargetRef.current as HTMLElement
        setVisible(scrollTop > visibleHeight)
      })

      targetRef.current.addEventListener("scroll", onScroll)

      return () => {
        targetRef?.current?.removeEventListener("scroll", onScroll)
        onScroll.cancel()
      }
    })

    const defaultChildren = (
      <Button>
        <UpIcon />
      </Button>
    )

    return (
      <div
        css={[
          applyFixedStyle(),
          pointerStyle,
          applyOpacity(visible),
          opacityTransition,
          applyBoxStyle(props),
        ]}
        ref={ref}
        onClick={scrollToTop}
        {...deleteCssProps(rest)}
      >
        {children || defaultChildren}
      </div>
    )
  },
)

BackTop.displayName = "BackTop"
