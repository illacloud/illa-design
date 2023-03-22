import { forwardRef, MouseEventHandler, useEffect, useRef } from "react"
import { throttleByRaf } from "@illa-design/system"
import { applyMarkBar } from "./style"
import { SliderMarkBar } from "./interface"
export const MarkBar = forwardRef<HTMLDivElement, SliderMarkBar>(
  (props, ref) => {
    const {
      isBoundMark,
      isRightMark,
      left,
      right,
      drag,
      value,
      location,
      disabled,
      mouseOut,
      mouseEnter,
    } = props
    const clientX = useRef<number>()
    const startValue = useRef(value)
    const isDrag = useRef(false)
    const onDragStart = (e: MouseEvent) => {
      if (isBoundMark || disabled) return
      clientX.current = e.clientX
      isDrag.current = true
      startValue.current = value
      document.addEventListener("mousemove", throttleByRaf(onDrag), false)
      document.addEventListener("mouseup", onDragEnd, false)
    }
    const onDrag = (e: MouseEvent) => {
      if (isBoundMark || !isDrag.current || disabled) return
      location &&
        clientX.current &&
        startValue.current &&
        drag &&
        drag(e as any, clientX.current, startValue.current, location)
    }
    const onDragEnd = (e: MouseEvent) => {
      if (isBoundMark || !isDrag.current || disabled) return
      location &&
        startValue.current &&
        clientX.current &&
        drag &&
        drag(e as any, clientX.current, startValue.current, location, true)
      isDrag.current = false
      document.removeEventListener("mousemove", throttleByRaf(onDrag))
      document.removeEventListener("mouseup", onDragEnd)
    }
    const onMouseEnter = () => {
      if (disabled || isBoundMark) return
      mouseEnter && mouseEnter()
    }
    const onMouseOut = () => {
      if (disabled || isBoundMark) return
      mouseOut && mouseOut()
    }
    useEffect(() => {
      return () => {
        document.removeEventListener("mousemove", throttleByRaf(onDrag))
        document.removeEventListener("mouseup", onDragEnd)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
      <div
        ref={ref}
        css={applyMarkBar(left, right, isRightMark, isBoundMark, disabled)}
        data-location={location}
        onMouseDown={onDragStart as any}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
      ></div>
    )
  },
)
MarkBar.displayName = "MarkBar"
