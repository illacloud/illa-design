import { forwardRef, useEffect, useRef } from "react"
import { applyMarkBar, applyBarContainer } from "./style"
import { SliderMarkBar } from "./interface"
import { motion, PanInfo, useMotionValue } from "framer-motion"
import { BarLocation } from "./content"
import { modifyTarget, getMarkBound } from "./utils"
import useMeasure from "react-use-measure"

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
      min,
      partLength,
      colorScheme,
      drag,
      mouseEnter,
      mouseOut,
    } = props
    const startValue = useRef<number | number[]>(0)
    const rightVal = useMotionValue(0)
    const [containerRef, rect] = useMeasure()

    const onDragStart = () => {
      if (disabled) return
      startValue.current = value
    }

    const onDrag = (_: any, info: PanInfo) => {
      if (disabled) return
      const {
        offset: { x },
      } = info
      drag(x - rect.width / 2, startValue.current, location)
    }

    const onDragEnd = (_: any, info: PanInfo) => {
      if (disabled) return
      const {
        offset: { x },
      } = info
      dragEnd(x - rect.width / 2, startValue.current, location)
    }
    // The position needs to be verified after each update. Since the ball's motion boundary is controlled by itself, when the offset value remains unchanged, rightVal.set() will not be triggered.
    useEffect(() => {
      if (isRange) {
        if (currentWidth && right !== -1 && location === BarLocation.RIGHT) {
          if (rightVal.get() !== currentWidth - right - (rect.width / 2) * 3) {
            rightVal.set(currentWidth - right - (rect.width / 2) * 3)
            return
          }
        }
        if (currentWidth && left !== -1 && location === BarLocation.LEFT) {
          if (rightVal.get() !== left - rect.width / 2) {
            rightVal.set(left - rect.width / 2)
            return
          }
        }
      } else {
        if (rightVal.get() !== currentWidth - right - rect.width / 2) {
          rightVal.set(currentWidth - right - rect.width / 2)
          return
        }
      }
    })

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
          rect.width / 2,
          value,
          location,
          partLength,
          max,
          step,
        )}
        style={{ x: rightVal, zIndex: 2 }}
        dragMomentum={false}
        dragTransition={{
          timeConstant: 0,
          power: 0,
          modifyTarget: (target) =>
            modifyTarget(
              target,
              partLength,
              rect.width / 2,
              location,
              isRange,
              step,
              max,
              min,
            ),
        }}
      >
        <div
          ref={ref}
          css={applyMarkBar(disabled, colorScheme)}
          onMouseEnter={mouseEnter}
          onMouseOut={mouseOut}
        />
      </motion.div>
    )
  },
)
MarkBar.displayName = "MarkBar"
