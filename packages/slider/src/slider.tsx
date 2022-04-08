import React, {
  forwardRef,
  useRef,
  useEffect,
  useMemo,
  CSSProperties,
  MouseEventHandler,
  MouseEvent,
} from "react"
import { SliderProps } from "./interface"
import {
  applySlider,
  applySliderBar,
  applySliderRoad,
  applySliderWrapper,
} from "./style"
import { isObject, useMergeValue, isNumber } from "@illa-design/system"
import { getValueUtils, isSameOrder, getOffset, formatPercent } from "./util"
import { plus } from "number-precision"
import Ticks from "./ticks"
import Dots from "./dots"
import Marks from "./marks"
import SliderButton from "./button"
import SliderInput from "./input"

export const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const {
    tooltipVisible,
    tooltipPosition,
    disabled,
    min = 0,
    max = 100,
    range: propRange,
    step = 1,
    showTicks,
    marks = {},
    onlyMarkValue = false,
    vertical,
    showInput,
    reverse,
    defaultValue,
    value: propValue,
    formatTooltip,
    onChange: propOnChange,
    onAfterChange,
    ...otherProps
  } = props

  const range = !!propRange
  const rangeConfig = isObject(propRange)
    ? { ...propRange }
    : { draggableBar: false }

  const { getLegalValue, getLegalRangeValue, isLegalValue } = getValueUtils({
    isRange: range,
    min,
    max,
    onlyMarkValue,
    step,
    marks,
  })

  const [value, setValue] = useMergeValue<number | number[]>(
    range ? [min, min] : min,
    {
      defaultValue: defaultValue,
      value: propValue,
    },
  )

  const curVal = getLegalRangeValue(value)
  const lastVal = useRef<[number, number]>(curVal)
  let [beginVal, endVal] = curVal

  const isDidMount = useRef(false)

  useEffect(() => {
    if (isDidMount.current) {
      lastVal.current = getLegalRangeValue(value)
    } else {
      isDidMount.current = true
    }
  }, [value, getLegalRangeValue])

  if (!isSameOrder(curVal, lastVal.current)) {
    ;[beginVal, endVal] = [endVal, beginVal]
  }

  const beginOffset = getOffset(beginVal, [min, max])
  const endOffset = getOffset(endVal, [min, max])
  // 标签数组
  const markList = useMemo(
    () =>
      Object.keys(marks)
        .filter((key) => isNumber(+key))
        .sort((a, b) => (+a > +b ? 1 : -1))
        .map((key: string | number) => ({
          key,
          content: marks[key as number],
        })),
    [marks],
  )
  // 是否显示输入框
  const isShowInput = showInput && !onlyMarkValue

  const roadRef = useRef<HTMLDivElement>(null)
  const position = useRef({
    left: 0,
    height: 0,
    top: 0,
    width: 0,
  })
  const isDragging = useRef(false)
  const barStartDragVal = useRef(0)

  function getEmitParams([beginVal, endVal]: number[]): number | number[] {
    if (beginVal > endVal) {
      ;[beginVal, endVal] = [endVal, beginVal]
    }
    return range ? [beginVal, endVal] : endVal
  }

  function updateValue(val: [number, number]) {
    let [newBeginVal, newEndVal] = val
    newBeginVal = getLegalValue(newBeginVal)
    newEndVal = getLegalValue(newEndVal)

    lastVal.current = [newBeginVal, newEndVal]
    const emitParams = getEmitParams([newBeginVal, newEndVal])
    setValue(emitParams)
    return emitParams
  }

  function onChange(val: [number, number]) {
    const emitParams = updateValue(val)
    propOnChange && propOnChange(emitParams)
  }

  function onMouseUp() {
    if (onAfterChange) {
      const emitParams = getEmitParams(lastVal.current)
      onAfterChange(emitParams)
    }
  }

  function inRange(val: number) {
    let [range1, range2] = [beginVal, endVal]
    if (range1 > range2) {
      ;[range1, range2] = [range2, range1]
    }
    if (range) return val >= range1 && val <= range2
    return val <= range2
  }
  // 通过坐标获取值
  function getValueByCoords(x: number, y: number): number {
    const { left, top, width, height } = position.current
    let roadLength = width
    let diff = reverse ? left + width - x : x - left
    if (vertical) {
      roadLength = height
      diff = reverse ? y - top : top + height - y
    }
    diff = diff < 0 ? 0 : diff > roadLength ? roadLength : diff
    const stepLen = (roadLength * step) / (max - min)
    const steps = Math.round(diff / stepLen)

    return plus(min, steps * step)
  }

  function getBarStyle(offsets: number[]): CSSProperties {
    let [begin, end] = offsets
    if (begin > end) {
      ;[begin, end] = [end, begin]
    }
    const beginOffset = formatPercent(begin)
    const endOffset = formatPercent(1 - end)
    return vertical
      ? {
          [reverse ? "top" : "bottom"]: beginOffset,
          [reverse ? "bottom" : "top"]: endOffset,
        }
      : {
          [reverse ? "right" : "left"]: beginOffset,
          [reverse ? "left" : "right"]: endOffset,
        }
  }

  function getBtnStyle(offset: number): CSSProperties {
    return vertical
      ? { [reverse ? "top" : "bottom"]: formatPercent(offset) }
      : { [reverse ? "right" : "left"]: formatPercent(offset) }
  }

  function getPosition() {
    if (roadRef.current) {
      position.current = roadRef.current.getBoundingClientRect()
    }
  }

  function onRoadMouseDown(e: MouseEvent<HTMLDivElement>) {
    getPosition()
    const val = getValueByCoords(e.clientX, e.clientY)
    if (rangeConfig.draggableBar && inRange(val)) {
      barStartDragVal.current = getLegalValue(val)
      window.addEventListener("mousemove", onBarMouseMove)
      window.addEventListener("mouseup", onBarMouseUp)
    } else {
      handleJumpClick(val)
    }
  }

  // 点击某个位置，快速跳转
  function handleJumpClick(val: number) {
    if (disabled) return

    const value = getLegalValue(val)
    if (range && endVal - value > value - beginVal) {
      onChange([value, endVal])
    } else {
      onChange([beginVal, value])
    }
    onMouseUp()
  }

  function handleInputChange(val: [number, number]) {
    onChange(val)
    onMouseUp()
  }

  // 拖动开始节点
  function handleBeginMove(x: number, y: number) {
    isDragging.current = true
    onChange([getValueByCoords(x, y), endVal])
  }

  // 拖动结束节点
  function handleEndMove(x: number, y: number) {
    isDragging.current = true
    onChange([beginVal, getValueByCoords(x, y)])
  }

  function handleMoveEnd() {
    isDragging.current = false
    onMouseUp()
  }

  // bar 移动中
  function onBarMouseMove(e: any) {
    const newVal = getLegalValue(getValueByCoords(e.clientX, e.clientY))
    const offsetVal = newVal - barStartDragVal.current
    const newBeginVal = beginVal + offsetVal
    const newEndVal = endVal + offsetVal

    if (isLegalValue(newBeginVal) && isLegalValue(newEndVal)) {
      onChange([newBeginVal, newEndVal])
    }
  }

  // bar 停止移动
  function onBarMouseUp() {
    window.removeEventListener("mousemove", onBarMouseMove)
    window.removeEventListener("mouseup", onBarMouseUp)
    onMouseUp()
  }

  return (
    <div ref={ref} css={applySlider(vertical)} {...otherProps}>
      <div role={"wrapper"} css={applySliderWrapper(vertical)}>
        <div
          role={"road"}
          ref={roadRef}
          onMouseDown={onRoadMouseDown}
          css={applySliderRoad(vertical)}
        >
          <div
            role={"bar"}
            css={applySliderBar(vertical)}
            style={getBarStyle([beginOffset, endOffset])}
          />
          {showTicks && (
            <Ticks
              step={step}
              min={min}
              max={max}
              value={[beginVal, endVal]}
              vertical={vertical}
              reverse={reverse}
            />
          )}
          <Dots
            data={markList}
            min={min}
            max={max}
            value={[beginVal, endVal]}
            vertical={vertical}
            reverse={reverse}
            onMouseDown={handleJumpClick}
          />
          <Marks
            data={markList}
            min={min}
            max={max}
            vertical={vertical}
            reverse={reverse}
            onMouseDown={handleJumpClick}
          />
          {range && (
            <SliderButton
              style={getBtnStyle(beginOffset)}
              disabled={disabled}
              value={beginVal}
              vertical={vertical}
              reverse={reverse}
              tooltipPosition={tooltipPosition}
              tooltipVisible={tooltipVisible}
              formatTooltip={formatTooltip}
              onMoveBegin={getPosition}
              onMoving={handleBeginMove}
              onMoveEnd={handleMoveEnd}
            />
          )}
          <SliderButton
            style={getBtnStyle(endOffset)}
            disabled={disabled}
            value={endVal}
            vertical={vertical}
            reverse={reverse}
            tooltipPosition={tooltipPosition}
            tooltipVisible={tooltipVisible}
            formatTooltip={formatTooltip}
            onMoveBegin={getPosition}
            onMoving={handleEndMove}
            onMoveEnd={handleMoveEnd}
          />
        </div>
        {isShowInput && (
          <SliderInput
            min={min}
            max={max}
            step={step}
            value={[beginVal, endVal]}
            range={range}
            disabled={disabled}
            onChange={handleInputChange}
          />
        )}
      </div>
    </div>
  )
})

Slider.displayName = "Slider"
