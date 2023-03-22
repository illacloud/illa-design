import { useEffect, useRef, useState, forwardRef, MouseEvent } from "react"
import { Bar } from "./bar"
import { MarkBar } from "./markBar"
import { Tick } from "./tick"
import { applySliderWrapper, applySliderRoad } from "./style"
import { applyBoxStyle } from "@illa-design/theme"
import { Trigger } from "@illa-design/trigger"
import { SliderProps } from "./interface"
import { DefaultWidth, BarLocation } from "./content"
export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    disabled = false,
    reverse = false,
    tooltipVisible = true,
    showTicks = true,
    max = 10,
    min = 0,
    step = 1,
    tooltipPosition = "top",
    defaultValue = 0,
    isRange = { draggableBar: false },
    value = defaultValue,
    startMarkShow = false,
    endMarkShow = false,
    formatTooltip = (v) => v,
    onAfterChange,
    onChange,
  } = props
  const [currentWidth, setCurrentWidth] = useState(DefaultWidth)
  const [partNumber, setPartNumber] = useState<number | undefined>(undefined)
  const [partLength, setPartLength] = useState(DefaultWidth / step)
  const [leftValue, setLeftValue] = useState(0)
  const [rightValue, setRightValue] = useState(0)
  const [barLength, setBarLength] = useState(0)
  const [currentValue, setCurrentValue] = useState<number | number[]>(value)
  const roadRef = useRef<HTMLDivElement | null>(null)
  const [rightTriggerShow, setRightTriggerShow] = useState(false)
  const [leftTriggerShow, setLeftTriggerShow] = useState(false)

  const setTriggerHidden = () => {
    setRightTriggerShow(false)
    setLeftTriggerShow(false)
  }

  const drag = (
    e: MouseEvent,
    origin: number,
    startValue: number | number[],
    barLocation: string,
    isEnd?: boolean,
  ) => {
    if (!e.clientX || !origin) return
    if (rightTriggerShow || leftTriggerShow) setTriggerHidden()
    let dragLength = e.clientX - origin,
      leftValue: number,
      rightValue: number,
      currentVal: number | number[]
    if (Array.isArray(startValue)) {
      ;[leftValue, rightValue] = currentValue as number[]
      switch (barLocation) {
        case BarLocation.LEFT: {
          let val = startValue[0] + Math.round(dragLength / partLength)
          if (val >= max) {
            currentVal = [rightValue, max]
          } else if (rightValue <= val) {
            currentVal = [rightValue, val]
          } else if (val <= min) {
            currentVal = [min, Math.max(leftValue, rightValue)]
          } else {
            currentVal = [val, rightValue]
          }
          setCurrentValue(currentVal)
          break
        }
        default:
        case BarLocation.RIGHT: {
          let val = startValue[1] + Math.round(dragLength / partLength)
          if (val >= max) {
            currentVal = [leftValue, max]
          } else if (val <= leftValue && val > min) {
            currentVal = [val, leftValue]
          } else if (val <= min) {
            currentVal = [min, leftValue]
          } else {
            currentVal = [leftValue, val]
          }
          setCurrentValue(currentVal)
          break
        }
      }
      isEnd && onAfterChange && onAfterChange(currentVal)
      return
    }
    let val = reverse
      ? startValue - Math.round(dragLength / partLength)
      : startValue + Math.round(dragLength / partLength)
    if (val >= max) {
      currentVal = max
      setCurrentValue(max)
    } else if (val <= min) {
      currentVal = min
      setCurrentValue(min)
    } else {
      currentVal = val
      setCurrentValue(val)
    }
    isEnd && onAfterChange && onAfterChange(currentVal)
  }

  const dragBar = (
    e: MouseEvent,
    origin: number,
    startValue: number[],
    isEnd?: boolean,
  ) => {
    const dragLength = e.clientX - origin
    const currentRangeVal = startValue.map((val) => {
      const offset = val + Math.round(dragLength / partLength)
      if (offset <= min) return min
      else if (offset >= max) return max
      return offset
    })
    setCurrentValue(currentRangeVal)
    isEnd && onAfterChange && onAfterChange(currentRangeVal)
  }

  const tickClick = (v: number) => {
    if (Array.isArray(currentValue)) {
      let mid = Math.floor((max - min) / 2)
      if (v > mid) setCurrentValue([currentValue[0], v])
      else setCurrentValue([v, currentValue[1]])
    } else {
      setCurrentValue(v)
    }
  }

  useEffect(() => {
    onChange && onChange(currentValue)
  }, [currentValue, onChange])

  useEffect(() => {
    if (roadRef.current) {
      const { width } = roadRef.current?.getBoundingClientRect()
      const partNum = Math.ceil((max - min) / step)
      const partLength = width / partNum
      let leftValue, rightValue, barLength
      if (Array.isArray(currentValue)) {
        leftValue = ((currentValue[0] - min) / step) * partLength
        rightValue = ((max - currentValue[1]) / step) * partLength
        barLength = ((currentValue[1] - currentValue[0]) / step) * partLength
      } else {
        leftValue = reverse ? ((max - currentValue) / step) * partLength : 0
        rightValue = reverse
          ? (currentValue / step) * partLength
          : ((max - currentValue) / step) * partLength
        barLength = reverse ? rightValue : width - rightValue
      }
      setPartLength(Math.floor(partLength))
      setPartNumber(partNum)
      setLeftValue(leftValue)
      setRightValue(rightValue)
      setCurrentWidth(width)
      setBarLength(barLength)
    }
  }, [isRange, reverse, currentValue, max, min, step])
  return (
    <div ref={ref} css={[applySliderWrapper, applyBoxStyle(props)]}>
      <div css={applySliderRoad()} ref={roadRef}>
        {partNumber &&
          showTicks &&
          [...new Array(partNumber - 1)].map((_, i) => (
            <Tick
              key={i}
              value={i + 1}
              left={(i + 1) * partLength}
              leftValue={leftValue}
              rightValue={rightValue}
              currentWidth={currentWidth}
              reverse={reverse}
              isRange={Boolean(isRange)}
              disabled={disabled}
              tickClick={tickClick}
            />
          ))}
        {startMarkShow && <MarkBar isBoundMark left={0} disabled={disabled} />}
        {isRange && (
          <Trigger
            content={
              Array.isArray(currentValue)
                ? formatTooltip(currentValue[0])
                : formatTooltip(currentValue)
            }
            position={tooltipPosition}
            popupVisible={leftTriggerShow && tooltipVisible}
          >
            <MarkBar
              left={leftValue}
              drag={drag}
              value={currentValue}
              location={BarLocation.LEFT}
              disabled={disabled}
              mouseEnter={() => setLeftTriggerShow(true)}
              mouseOut={() => setLeftTriggerShow(false)}
            />
          </Trigger>
        )}
        <Trigger
          content={
            Array.isArray(currentValue)
              ? formatTooltip(currentValue[1])
              : formatTooltip(currentValue)
          }
          position={tooltipPosition}
          popupVisible={rightTriggerShow && tooltipVisible}
        >
          <MarkBar
            right={rightValue}
            isRightMark
            drag={drag}
            value={currentValue}
            location={BarLocation.RIGHT}
            disabled={disabled}
            mouseEnter={() => setRightTriggerShow(true)}
            mouseOut={() => setRightTriggerShow(false)}
          />
        </Trigger>
        {Boolean(rightValue) && endMarkShow && (
          <MarkBar isBoundMark right={0} isRightMark disabled={disabled} />
        )}
        <Bar
          width={barLength}
          left={leftValue}
          isRange={isRange}
          value={currentValue as number[]}
          dragBar={dragBar}
          disabled={disabled}
        />
      </div>
    </div>
  )
})

Slider.displayName = "Slider"
