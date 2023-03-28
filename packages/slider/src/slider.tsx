import { useEffect, useRef, useState, forwardRef, useMemo } from "react"
import { Bar } from "./bar"
import { MarkBar } from "./markBar"
import { Tick } from "./tick"
import { applySliderWrapper, applySliderRoad, applyBoundBar } from "./style"
import { applyBoxStyle } from "@illa-design/theme"
import { Trigger } from "@illa-design/trigger"
import { SliderProps } from "./interface"
import { DefaultWidth, BarLocation } from "./content"
import { useOffset } from "./useOffset"
import { getSafeStep, verifyValue } from "./utils"
import { NumTick } from "./NumTick"
export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    disabled = false,
    tooltipVisible = true,
    showTicks = true,
    isFocus = false,
    max = 10,
    min = 0,
    step = 1,
    tooltipPosition = "top",
    defaultValue = 0,
    value = defaultValue,
    isRange = Array.isArray(value),
    startMarkShow = false,
    endMarkShow = false,
    colorScheme,
    formatTooltip = (v) => v,
    onAfterChange,
    onChange,
  } = props
  const [currentWidth, setCurrentWidth] = useState(DefaultWidth)
  const [partNumber, setPartNumber] = useState<number | undefined>(undefined)
  const roadRef = useRef<HTMLDivElement | null>(null)
  const [rightTriggerShow, setRightTriggerShow] = useState(false)
  const [leftTriggerShow, setLeftTriggerShow] = useState(false)
  const leftValue = useMemo(() => {
    return Array.isArray(value) ? value[0] : undefined
  }, [value])
  const rightValue = useMemo(() => {
    return Array.isArray(value) ? value[1] : value
  }, [value])
  const {
    currentValue,
    leftOffset,
    rightOffset,
    barLength,
    partLength,
    focus,
    initOffsetFromState,
    onDragging,
    onDragEnd,
    onClickTick,
    onDragBar,
    onDragBarEnd,
  } = useOffset(min, max, getSafeStep(step), isFocus)

  const dragging = (
    x: number,
    startValue: number | number[],
    location: BarLocation,
  ) => {
    setTriggerHidden()
    onDragging(x, startValue, location)
  }

  const dragEnd = (
    x: number,
    startValue: number | number[],
    location: BarLocation,
  ) => {
    if (location === BarLocation.RIGHT) setRightTriggerShow(true)
    else setLeftTriggerShow(true)
    onDragEnd(x, startValue, location, onAfterChange)
  }

  const setTriggerHidden = () => {
    setRightTriggerShow(false)
    setLeftTriggerShow(false)
  }

  const dragBarEnd = (x: number, startValue: number[]) => {
    onDragBarEnd(x, startValue, onAfterChange)
  }

  useEffect(() => {
    verifyValue(currentValue) && onChange && onChange(currentValue)
  }, [currentValue, onChange])

  useEffect(() => {
    if (roadRef.current) {
      const { width } = roadRef.current?.getBoundingClientRect()
      const safeStep = getSafeStep(step)
      const partNum = Math.ceil((max - min) / safeStep)
      const partLength = width / ((max - min) / safeStep)
      setPartNumber(partNum)
      setCurrentWidth(width)
      initOffsetFromState(Math.floor(partLength), width, rightValue, leftValue)
    }
  }, [isRange, max, min, step, initOffsetFromState, leftValue, rightValue])
  return (
    <div ref={ref} css={[applySliderWrapper, applyBoxStyle(props)]}>
      <div css={applySliderRoad()} ref={roadRef}>
        {partNumber &&
          partNumber > 0 &&
          showTicks &&
          [...new Array(partNumber - 1)].map((_, i) => (
            <Tick
              key={i}
              value={(i + 1) * step}
              left={(i + 1) * partLength}
              leftValue={leftOffset}
              rightValue={rightOffset}
              currentWidth={currentWidth}
              colorScheme={colorScheme}
              disabled={disabled}
              tickClick={onClickTick}
            />
          ))}
        {partNumber &&
          partNumber > 0 &&
          showTicks &&
          [...new Array(partNumber + 1)].map(
            (_, i) =>
              i <= Math.floor((max - min) / step) && (
                <NumTick
                  key={i}
                  value={min + i * step}
                  left={i * partLength}
                  disabled={disabled}
                  tickClick={onClickTick}
                />
              ),
          )}
        {startMarkShow && (
          <div
            css={applyBoundBar(false, disabled)}
            onClick={() => onClickTick(min)}
          />
        )}
        {Boolean(isRange) && (
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
              isRange={isRange}
              left={leftOffset}
              right={-1}
              drag={dragging}
              dragEnd={dragEnd}
              value={currentValue}
              location={BarLocation.LEFT}
              disabled={disabled}
              max={max}
              min={min}
              step={step}
              currentWidth={currentWidth}
              partLength={partLength}
              colorScheme={colorScheme}
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
          popupVisible={
            (rightTriggerShow && tooltipVisible) || (focus && tooltipVisible)
          }
        >
          <MarkBar
            right={rightOffset}
            left={-1}
            isRange={isRange}
            drag={dragging}
            dragEnd={dragEnd}
            value={currentValue}
            focus={focus}
            max={max}
            min={min}
            step={step}
            location={BarLocation.RIGHT}
            disabled={disabled}
            currentWidth={currentWidth}
            partLength={partLength}
            colorScheme={colorScheme}
            mouseEnter={() => setRightTriggerShow(true)}
            mouseOut={() => setRightTriggerShow(false)}
          />
        </Trigger>
        {endMarkShow && (
          <div
            css={applyBoundBar(true, disabled)}
            onClick={() => onClickTick(max)}
          />
        )}
        <Bar
          width={barLength}
          left={leftOffset}
          isRange={isRange}
          value={currentValue as number[]}
          dragBar={onDragBar}
          disabled={disabled}
          colorScheme={colorScheme}
          containerWidth={currentWidth}
          partLength={partLength}
          onDragBarEnd={dragBarEnd}
        />
      </div>
    </div>
  )
})

Slider.displayName = "Slider"
