import React, {
  forwardRef,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  CSSProperties,
} from "react"
import ResizeObserver from "rc-resize-observer"
import { isFunction, isUndefined, throttleByRaf } from "@illa-design/system"
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
  } = props

  const [state, setState] = useState<{
    status: AffixStatus
    isFixed: boolean
    fixedStyles: CSSProperties
    sizeStyles: CSSProperties
  }>({
    status: AffixStatus.DONE,
    isFixed: false,
    fixedStyles: {},
    sizeStyles: {},
  })

  const { isFixed, fixedStyles, sizeStyles } = state

  const targetRef = useRef<HTMLElement | Window | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const lastIsFixed = useRef(isFixed)

  const updatePosition = useCallback(
    throttleByRaf(() => {
      setState({
        status: AffixStatus.START,
        isFixed: false,
        fixedStyles: {},
        sizeStyles: {},
      })
    }),
    [],
  )

  useEffect(() => {
    updatePosition()
  }, [offsetTop, offsetBottom, target, targetContainer])

  useEffect(() => {
    const events = ["scroll", "resize"]

    targetRef.current = target && isFunction(target) ? target() : null

    if (targetRef.current) {
      events.forEach((event) => {
        targetRef.current?.addEventListener(event, updatePosition)
      })

      return () => {
        events.forEach((event) => {
          targetRef.current?.removeEventListener(event, updatePosition)
        })
      }
    }
  }, [target])

  useEffect(() => {
    const container =
      targetContainer && isFunction(targetContainer) ? targetContainer() : null

    if (targetRef.current !== window && container) {
      container.addEventListener("scroll", updatePosition)

      return () => {
        container.removeEventListener("scroll", updatePosition)
      }
    }
  }, [targetContainer])

  useLayoutEffect(() => {
    const { status } = state

    if (
      status !== AffixStatus.START ||
      !targetRef.current ||
      !wrapperRef.current
    ) {
      return
    }

    const offsetType = isUndefined(offsetBottom) ? "top" : "bottom"
    const wrapperRect = getTargetRect(wrapperRef.current)
    const targetRect = getTargetRect(targetRef.current)

    let newFixedStyles = {}
    let newSizeStyles = {}
    let newIsFixed = false

    if (offsetType === "top") {
      newIsFixed = wrapperRect.top - targetRect.top < (offsetTop || 0)
      newFixedStyles = newIsFixed
        ? {
            position: "fixed",
            top: targetRect.top + (offsetTop || 0),
          }
        : {}
    } else {
      newIsFixed = targetRect.bottom - wrapperRect.bottom < (offsetBottom || 0)
      newFixedStyles = newIsFixed
        ? {
            position: "fixed",
            bottom:
              window.innerHeight - targetRect.bottom + (offsetBottom || 0),
          }
        : {}
    }

    newSizeStyles = newIsFixed
      ? {
          width: wrapperRef.current.offsetWidth,
          height: wrapperRef.current.offsetHeight,
        }
      : {}

    if (newIsFixed !== lastIsFixed.current) {
      lastIsFixed.current = newIsFixed
      isFunction(onChange) && onChange(newIsFixed)
    }

    setState({
      status: AffixStatus.DONE,
      isFixed: newIsFixed,
      fixedStyles: newFixedStyles,
      sizeStyles: newSizeStyles,
    })
  })

  return (
    <ResizeObserver>
      <div ref={wrapperRef}>
        {isFixed && <div style={sizeStyles}></div>}
        <div style={{ ...fixedStyles, ...sizeStyles }} ref={ref}>
          <ResizeObserver
            onResize={() => {
              updatePosition()
            }}
          >
            {children}
          </ResizeObserver>
        </div>
      </div>
    </ResizeObserver>
  )
})

Affix.displayName = "Affix"
