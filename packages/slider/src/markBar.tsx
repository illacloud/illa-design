import { forwardRef, useEffect, useRef, useState } from "react"
import { applyMarkBar, applyBarContainer } from "./style"
import { SliderMarkBar } from "./interface"
import { motion, PanInfo, useMotionValue } from "framer-motion"
import { BarLocation } from "./content"
import { modifyTarget, getMarkBound } from "./utils"
export const MarkBar = forwardRef<HTMLDivElement, SliderMarkBar>(
  (props, ref) => {
    const {
      isRange,
      left,
      right,
      dragEnd,
      value,
      location,
      disabled,
      currentWidth,
      step,
      max,
      partLength,
      drag,
      mouseEnter,
      mouseOut,
    } = props
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [containerWidth, setContainerWidth] = useState<number>(0)
    const startValue = useRef<number | number[]>(0)
    const rightVal = useMotionValue(0)

    const onDragStart = () => {
      if (disabled) return
      startValue.current = value
    }

    const onDrag = (_: any, info: PanInfo) => {
      if (disabled) return
      const {
        offset: { x },
      } = info
      drag(x - containerWidth, startValue.current, location)
    }

    const onDragEnd = (_: any, info: PanInfo) => {
      if (disabled) return
      const {
        offset: { x },
      } = info
      dragEnd(x - containerWidth, startValue.current, location)
    }

    useEffect(() => {
      if (isRange) {
        if (currentWidth && right !== -1 && location === BarLocation.RIGHT) {
          rightVal.set(currentWidth - right - containerWidth * 3)
        }
        if (currentWidth && left !== -1 && location === BarLocation.LEFT) {
          rightVal.set(left - containerWidth)
        }
      } else {
        rightVal.set(currentWidth - right - containerWidth)
      }
    }, [currentWidth, right, containerWidth, left, isRange, location, rightVal])

    useEffect(() => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect()
        setContainerWidth(width / 2)
      }
    }, [containerRef])

    return (
      <motion.div
        drag="x"
        ref={containerRef}
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        css={applyBarContainer}
        dragElastic={0}
        dragConstraints={getMarkBound(
          containerWidth,
          value,
          location,
          partLength,
          max,
          step,
        )}
        style={{ x: rightVal, zIndex: 2 }}
        dragMomentum={false}
        dragTransition={{
          timeConstant: 200,
          power: 0,
          modifyTarget: (target) =>
            modifyTarget(
              target,
              partLength,
              containerWidth,
              location,
              isRange,
              step,
            ),
        }}
      >
        <div
          ref={ref}
          css={applyMarkBar(disabled)}
          onMouseEnter={mouseEnter}
          onMouseOut={mouseOut}
        />
      </motion.div>
    )
  },
)
MarkBar.displayName = "MarkBar"
