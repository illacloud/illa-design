/** @jsxImportSource @emotion/react */
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { css } from "@emotion/react"
import BTween from "b-tween"
import { UpIcon } from "@illa-design/icon"
import { Button } from "@illa-design/button"
import { throttleByRaf, isFunction } from "@illa-design/system"
import { BackTopProps } from "./interface"
import {
  applyFixedStyle,
  applyOpacity,
  opacityTransition,
  pointerStyle,
} from "./style"

export const BackTop = forwardRef<HTMLDivElement, BackTopProps>(
  (props, ref) => {
    const {
      visibleHeight = 400,
      target = () => window,
      easing = "quartOut",
      duration = 400,
      onClick,
      children,
      style,
      className,
    } = props

    function getScrollTarget(target: HTMLElement | Window): HTMLElement {
      return target === window
        ? document.documentElement
        : (target as HTMLElement)
    }

    const [visible, setVisible] = useState(false)
    const targetRef = useRef<HTMLElement>()
    const scrollTargetRef = useRef<HTMLElement>()
    const scrollToTop = useCallback(() => {
      const { scrollTop } = scrollTargetRef.current as HTMLElement
      const tween = new BTween({
        from: { scrollTop },
        to: { scrollTop: 0 },
        easing,
        duration,
        onUpdate: (keys: HTMLElement) => {
          scrollTargetRef.current.scrollTop = keys.scrollTop
        },
      })
      tween.start()
      isFunction(onClick) && onClick()
    }, [])

    useEffect(() => {
      targetRef.current = target()
      scrollTargetRef.current = getScrollTarget(targetRef.current)

      const onScroll = throttleByRaf(() => {
        const { scrollTop } = scrollTargetRef.current as HTMLElement
        setVisible(scrollTop > visibleHeight)
      })

      targetRef.current.addEventListener("scroll", onScroll)

      return () => {
        targetRef?.current.removeEventListener("scroll", onScroll)
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
        css={[applyFixedStyle(), pointerStyle]}
        style={style}
        className={className}
        ref={ref}
        onClick={scrollToTop}
      >
        <div css={[opacityTransition, applyOpacity(visible)]}>
          {children || defaultChildren}
        </div>
      </div>
    )
  },
)

BackTop.displayName = "BackTop"
