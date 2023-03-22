import { useEffect, useRef, forwardRef, MouseEvent } from "react"
import { throttleByRaf, isObject } from "@illa-design/system"
import { applySliderBar } from "./style"
import { SliderBar } from "./interface"
export const Bar = forwardRef<HTMLDivElement, SliderBar>((props, ref) => {
  const { isRange, dragBar, value, left, width, disabled } = props
  const clientX = useRef<number>()
  const startValue = useRef<number[]>([])
  const isDrag = useRef(false)
  const onDragStart = (e: MouseEvent) => {
    if (!isRange || (isObject(isRange) && !isRange.draggableBar)) return
    clientX.current = e.clientX
    isDrag.current = true
    startValue.current = value
    document.addEventListener("mousemove", throttleByRaf(onDrag), false)
    document.addEventListener("mouseup", onDragEnd, false)
  }
  const onDrag = (e: MouseEvent) => {
    if (
      !isRange ||
      !(isObject(isRange) && isRange.draggableBar) ||
      !isDrag.current
    )
      return
    clientX.current &&
      startValue.current &&
      dragBar(e, clientX.current, startValue.current)
  }
  const onDragEnd = (e: any) => {
    if (!isRange || !(isObject(isRange) && isRange.draggableBar)) return
    clientX.current && dragBar(e, clientX.current, startValue.current, true)
    isDrag.current = false
    document.removeEventListener("mousemove", throttleByRaf(onDrag))
    document.removeEventListener("mouseup", onDragEnd)
  }
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", throttleByRaf(onDrag))
      document.removeEventListener("mouseup", onDragEnd)
    }
  }, [])
  return (
    <div
      style={{ left, width }}
      css={applySliderBar(disabled, isObject(isRange) && isRange.draggableBar)}
      onMouseDown={onDragStart}
    ></div>
  )
})
Bar.displayName = "Bar"
