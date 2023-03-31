import { useEffect, useRef, forwardRef } from "react"
import { isObject } from "@illa-design/system"
import { applySliderBar } from "./style"
import { SliderBar } from "./interface"
import { motion, PanInfo, useMotionValue } from "framer-motion"
export const Bar = forwardRef<HTMLDivElement, SliderBar>((props, ref) => {
  const {
    isRange,
    dragBar,
    value,
    left,
    width,
    disabled,
    containerWidth,
    partLength,
    colorScheme,
    onDragBarEnd,
  } = props
  const startValue = useRef<number[]>([])
  const leftVal = useMotionValue(0)

  const onDragStart = () => {
    if (!isRange || (isObject(isRange) && !isRange.draggableBar)) return
    startValue.current = value
  }

  const onDrag = (_: any, info: PanInfo) => {
    if (!isRange || !(isObject(isRange) && isRange.draggableBar) || disabled)
      return
    const {
      offset: { x },
    } = info
    dragBar(x, startValue.current)
  }

  const onDragEnd = (_: any, info: PanInfo) => {
    if (!isRange || !(isObject(isRange) && isRange.draggableBar)) return
    const {
      offset: { x },
    } = info
    onDragBarEnd(x, startValue.current)
  }

  useEffect(() => {
    leftVal.set(left)
  }, [left, isRange, leftVal])
  return (
    <motion.div
      drag={
        !disabled && isObject(isRange) && isRange.draggableBar ? "x" : false
      }
      ref={ref}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      css={applySliderBar(
        disabled,
        isObject(isRange) && isRange.draggableBar,
        width,
        colorScheme,
      )}
      dragElastic={false}
      dragConstraints={{ left: 0, right: containerWidth - width }}
      style={{ x: leftVal }}
      dragMomentum={false}
      dragTransition={{
        timeConstant: 200,
        power: 0,
        modifyTarget: (target) => Math.round(target / partLength) * partLength,
      }}
    />
  )
})
Bar.displayName = "Bar"
