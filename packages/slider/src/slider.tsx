import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useMemo,
  MouseEvent,
  useImperativeHandle,
  useCallback,
} from "react"
import { Bar } from "./bar"
import { MarkBar } from "./markBar"
import { Tick } from "./tick"
import { applySliderWrapper, applySliderRoad, applyBoundBar } from "./style"
import { applyBoxStyle } from "@illa-design/theme"
import { Trigger, TriggerRefHandler } from "@illa-design/trigger"
import { SliderProps, ICustomRef } from "./interface"
import { DefaultWidth, BarLocation } from "./content"
import { useOffset } from "./useOffset"
import { getSafeStep, processNumber, verifyValue } from "./utils"
import { NumTick } from "./NumTick"
import { useElementSize } from "./useElementSize"

export const Slider = forwardRef<ICustomRef, SliderProps>((props, ref) => {
  const {
    disabled = false,
    tooltipVisible = true,
    showTicks = false,
    hideValue = false,
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
  const currentRef = useRef<HTMLDivElement>(null)
  const markBarRef = useRef<HTMLDivElement>(null)

  const [partNumber, setPartNumber] = useState<number | undefined>(undefined)
  const roadRef = useRef<HTMLDivElement | null>(null)
  const rightTriggerRef = useRef<TriggerRefHandler | undefined>()
  const leftTriggerRef = useRef<TriggerRefHandler | undefined>()
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
    initOffsetFromState,
    onDragging,
    onDragEnd,
    onClickTick,
    onDragBar,
    onDragBarEnd,
  } = useOffset(min, max, getSafeStep(step), onChange)

  const width = useElementSize(currentRef)

  useImperativeHandle(ref, () => ({
    focus: () => {
      setRightTriggerShow(true)
      markBarRef.current?.focus()
    },
  }))

  const dragging = (
    x: number,
    startValue: number | number[],
    location: BarLocation,
  ) => {
    onDragging(x, startValue, location)
  }

  const dragEnd = (
    x: number,
    startValue: number | number[],
    location: BarLocation,
  ) => {
    markBarRef.current?.blur()
    onDragEnd(x, startValue, location, onAfterChange, onChange)
  }

  const dragBar = (x: number, startValue: number[]) => {
    onDragBar(x, startValue)
  }
  const dragBarEnd = (x: number, startValue: number[]) => {
    onDragBarEnd(x, startValue, onAfterChange)
  }

  const tickClick = (e: MouseEvent<HTMLElement>) => {
    const { target } = e
    if (target) {
      const { dataset } = target as HTMLElement
      if (dataset && dataset.value !== undefined) {
        onClickTick(parseFloat(dataset.value))
        return
      }
      const { parentElement } = target as HTMLElement
      const parentDataset = parentElement?.dataset
      if (parentElement && parentDataset && parentDataset.value !== undefined) {
        onClickTick(parseFloat(parentDataset.value))
      }
    }
  }

  const rightRerenderPosition = useCallback(() => {
    rightTriggerRef && rightTriggerRef.current?.rerenderPosition()
  }, [])

  const leftRerenderPosition = useCallback(() => {
    leftTriggerRef && leftTriggerRef.current?.rerenderPosition()
  }, [])

  useEffect(() => {
    if (roadRef.current) {
      const safeStep = getSafeStep(step)
      const partNum = Math.ceil((max - min) / safeStep)
      const partLength = width / ((max - min) / safeStep)
      setPartNumber(partNum)
      setCurrentWidth(width)
      initOffsetFromState(partLength, width, rightValue, leftValue)
    }
  }, [
    isRange,
    max,
    min,
    step,
    initOffsetFromState,
    leftValue,
    rightValue,
    width,
  ])
  return (
    <div ref={currentRef} css={[applySliderWrapper, applyBoxStyle(props)]}>
      <div css={applySliderRoad()} ref={roadRef} onClick={tickClick}>
        {showTicks &&
          partNumber &&
          partNumber > 0 &&
          [...new Array(partNumber - 1)].map((_, i) => (
            <Tick
              key={i}
              value={processNumber((i + 1) * step, step)}
              left={(i + 1) * partLength}
              leftValue={leftOffset}
              rightValue={rightOffset}
              currentWidth={currentWidth}
              colorScheme={colorScheme}
              disabled={disabled}
            />
          ))}
        {showTicks &&
          partNumber &&
          partNumber > 0 &&
          [...new Array(partNumber + 1)].map(
            (_, i) =>
              i <= Math.floor((max - min) / step) && (
                <NumTick
                  key={i}
                  value={processNumber(min + i * step, step)}
                  left={i * partLength}
                  disabled={disabled}
                />
              ),
          )}
        {startMarkShow && (
          <div
            css={applyBoundBar(disabled, false)}
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
            triggerRef={leftTriggerRef}
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
              rerenderPosition={leftRerenderPosition}
            />
          </Trigger>
        )}
        <Trigger
          content={
            Array.isArray(currentValue)
              ? formatTooltip(currentValue[1])
              : formatTooltip(currentValue)
          }
          triggerRef={rightTriggerRef}
          position={tooltipPosition}
          popupVisible={rightTriggerShow && tooltipVisible}
        >
          <MarkBar
            right={rightOffset}
            left={-1}
            isRange={isRange}
            drag={dragging}
            dragEnd={dragEnd}
            markBarRef={markBarRef}
            value={currentValue}
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
            rerenderPosition={rightRerenderPosition}
          />
        </Trigger>
        {endMarkShow && (
          <div
            css={applyBoundBar(disabled, true)}
            onClick={() => onClickTick(max)}
          />
        )}
        <Bar
          width={barLength}
          left={leftOffset}
          isRange={isRange}
          value={currentValue as number[]}
          dragBar={dragBar}
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
