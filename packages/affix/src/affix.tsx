import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { isFunction, throttleByRaf } from "@illa-design/system"
import useMeasure from "react-use/lib/useMeasure"
import useIsomorphicLayoutEffect from "react-use/lib/useIsomorphicLayoutEffect"
import { applyAffixFixedStyle, applySize } from "./style"
import { AffixProps } from "./interface"

enum AffixStatus {
  START,
  DONE,
}

function getTargetRect(target: HTMLElement | Window): DOMRect {
  return target !== window
    ? (target as HTMLElement).getBoundingClientRect()
    : ({ top: 0, bottom: window.innerHeight } as DOMRect)
}

export const Affix = forwardRef<HTMLDivElement, AffixProps>((props, ref) => {
  const {
    offsetTop = 0,
    offsetBottom,
    target = () => window,
    targetContainer,
    onChange,
    children,
    ...rest
  } = props

  const [status, setStatus] = useState(AffixStatus.DONE)
  const [position, setPosition] = useState<{
    type: "top" | "bottom"
    offset: number
  }>({
    type: "top",
    offset: 0,
  })
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  const mounted = useRef(true)
  const targetRef = useRef<HTMLElement | Window | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const lastIsFixed = useRef(false)

  const [measureWrapperRef, measureWrapperInfo] = useMeasure<HTMLDivElement>()
  const [measureAffixRef, measureAffixInfo] = useMeasure<HTMLDivElement>()

  const setWrapperRefs = (el: HTMLDivElement) => {
    // for size measure
    measureWrapperRef(el)
    // for position compute
    wrapperRef.current = el
  }

  const updatePosition = useCallback(
    throttleByRaf(() => {
      /*
       * check is mounted to avoid:
       * Warning: Can't perform a React state update on an unmounted component.
       */
      mounted.current && setStatus(AffixStatus.START)
    }),
    [],
  )

  useImperativeHandle(ref, () => wrapperRef?.current as HTMLDivElement, [])

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  useEffect(() => {
    updatePosition()
  }, [
    offsetTop,
    offsetBottom,
    target,
    targetContainer,
    updatePosition,
    measureWrapperInfo,
    measureAffixInfo,
  ])

  useEffect(() => {
    const events = ["scroll", "resize"]

    targetRef.current = target && isFunction(target) ? target() : null

    if (targetRef.current) {
      events.forEach(event => {
        targetRef.current?.addEventListener(event, updatePosition)
      })

      return () => {
        events.forEach(event => {
          targetRef.current?.removeEventListener(event, updatePosition)
        })
      }
    }
  }, [target, updatePosition])

  useEffect(() => {
    const container =
      targetContainer && isFunction(targetContainer) ? targetContainer() : null

    if (targetRef.current !== window && container) {
      container.addEventListener("scroll", updatePosition)

      return () => {
        container.removeEventListener("scroll", updatePosition)
      }
    }
  }, [targetContainer, updatePosition])

  useIsomorphicLayoutEffect(() => {
    if (
      status !== AffixStatus.START ||
      !targetRef.current ||
      !wrapperRef.current
    ) {
      return
    }

    const type = offsetBottom === undefined ? "top" : "bottom"
    const wrapperRect = getTargetRect(wrapperRef.current)
    const targetRect = getTargetRect(targetRef.current)

    let newIsFixed
    let offset

    if (type === "top") {
      newIsFixed = wrapperRect.top - targetRect.top < (offsetTop || 0)
      offset = targetRect.top + (offsetTop || 0)
    } else {
      newIsFixed = targetRect.bottom - wrapperRect.bottom < (offsetBottom || 0)
      offset = window.innerHeight - targetRect.bottom + (offsetBottom || 0)
    }

    if (newIsFixed !== lastIsFixed.current) {
      lastIsFixed.current = newIsFixed
      onChange && isFunction(onChange) && onChange(newIsFixed)
    }

    setStatus(AffixStatus.DONE)
    setPosition({
      type,
      offset,
    })
    setSize({
      width: wrapperRef.current.clientWidth,
      height: wrapperRef.current.clientHeight,
    })
  })

  return (
    <div ref={setWrapperRefs} {...rest}>
      {lastIsFixed.current && <div css={applySize(size)}></div>}
      <div
        css={applyAffixFixedStyle({
          isFixed: lastIsFixed.current,
          position,
          size,
        })}
        ref={measureAffixRef}
      >
        {children}
      </div>
    </div>
  )
})

Affix.displayName = "Affix"
