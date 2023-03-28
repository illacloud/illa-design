import { useState, useCallback, useMemo, useEffect } from "react"
import { BarLocation } from "./content"
import { IUseOffsetReturn } from "./interface"
import { formatValue, verifyRightValue, verifyLeftValue } from "./utils"

export const useOffset = (
  min: number,
  max: number,
  step: number,
  isFocus: boolean,
): IUseOffsetReturn => {
  const [leftOffset, setLeftOffset] = useState<number>(0)
  const [rightOffset, setRightOffset] = useState<number>(-1)
  const [barLength, setBarLength] = useState<number>(0)
  const [currentValue, setCurrentValue] = useState<string | number>("")
  const [partLength, setPartLength] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const [focus, setFocus] = useState(false)
  const cacheValue = useMemo(() => {
    return formatValue(currentValue)
  }, [currentValue])

  const getOffsetValueFromState = useCallback(
    (rightVal: number, leftVal?: number) => {
      let rightVerify = verifyRightValue(max, min, step, rightVal, leftVal)
      let leftVerify = verifyLeftValue(max, min, step, rightVal, leftVal)
      let leftValue, rightValue, barLength
      if (leftVerify !== undefined) {
        leftValue = Math.round(((leftVerify - min) / step) * partLength)
        rightValue = Math.floor(((max - rightVerify) / step) * partLength)
        barLength = Math.round(((rightVerify - leftVerify) / step) * partLength)
      } else {
        leftValue = 0
        rightValue = Math.floor(((max - rightVerify) / step) * partLength)
        barLength = width - rightValue
      }
      return [leftValue, rightValue, barLength]
    },
    [max, min, partLength, step, width],
  )

  const initOffsetFromState = useCallback(
    (partLength: number, width: number, rightVal: number, leftVal?: number) => {
      const [leftValue, rightValue, barLength] = getOffsetValueFromState(
        rightVal,
        leftVal,
      )
      setLeftOffset(leftValue)
      setBarLength(barLength)
      setRightOffset(rightValue)
      setPartLength(partLength)
      setCurrentValue(
        leftVal !== undefined ? `${leftVal},${rightVal}` : rightVal,
      )
      setWidth(width)
    },
    [getOffsetValueFromState],
  )

  const onDragging = (
    x: number,
    startValue: number | number[],
    location: BarLocation,
  ) => {
    setFocus(false)
    if (Array.isArray(startValue)) {
      onRangeDragging(x, startValue, location)
    } else {
      onSingleDragging(x, startValue)
    }
  }

  const onSingleDragging = (x: number, startValue: number) => {
    let leftBound = Math.floor((min - startValue) / step) * partLength,
      rightBound = Math.floor((max - startValue) / step) * partLength,
      val: number,
      tempVal = Math.round(x / partLength) * partLength

    if (tempVal >= rightBound) {
      val = rightBound
    } else if (tempVal <= leftBound) {
      val = leftBound
    } else {
      val = tempVal
    }
    setRightOffset(rightBound - val)
    setBarLength(Math.floor(startValue / step) * partLength + val)
  }

  const onRangeDragging = (
    x: number,
    startValue: number[],
    location: string,
  ) => {
    let leftBound,
      rightBound,
      val: number,
      tempVal = Math.round(x / partLength) * partLength
    switch (location) {
      case BarLocation.LEFT: {
        leftBound = Math.floor((min - startValue[0]) / step) * partLength
        rightBound =
          Math.floor((startValue[1] - startValue[0] - step) / step) * partLength
        if (tempVal >= rightBound) {
          val = rightBound
        } else if (tempVal <= leftBound) {
          val = leftBound
        } else {
          val = tempVal
        }
        setLeftOffset(Math.floor(startValue[0] / step) * partLength + val)
        setBarLength(
          Math.round((startValue[1] - startValue[0]) / step) * partLength - val,
        )
        break
      }
      default:
      case BarLocation.RIGHT: {
        leftBound =
          Math.floor((startValue[0] - startValue[1] + step) / step) * partLength
        rightBound = Math.floor((max - startValue[1]) / step) * partLength
        if (tempVal >= rightBound) {
          val = rightBound
        } else if (tempVal <= leftBound) {
          val = leftBound
        } else val = tempVal
        setRightOffset(rightBound - val)
        setBarLength(
          Math.floor((startValue[1] - startValue[0]) / step) * partLength + val,
        )
        break
      }
    }
  }

  const onDragEnd = (
    x: number,
    startValue: number | number[],
    location: BarLocation,
    onAfterChange?: (v: number | number[]) => void,
  ) => {
    if (Array.isArray(startValue)) {
      onRangeEnd(x, startValue, location, onAfterChange)
    } else onSingleEnd(x, startValue, onAfterChange)
  }

  const onSingleEnd = (
    x: number,
    startValue: number,
    onAfterChange?: (v: number) => void,
  ) => {
    let val = startValue + Math.round(x / partLength) * step,
      currentVal,
      currentMaxBound = Math.floor(max / step) * step
    if (val >= currentMaxBound) {
      currentVal = currentMaxBound
    } else if (val <= min) {
      currentVal = min
    } else {
      currentVal = val
    }
    onAfterChange && onAfterChange(currentVal)
    setCurrentValue(currentVal)
    let [_, rightVal] = getOffsetValueFromState(currentVal)
    setRightOffset(rightVal)
  }

  const onRangeEnd = (
    x: number,
    startValue: number[],
    location: BarLocation,
    onAfterChange?: (v: number[]) => void,
  ) => {
    let currentVal,
      [leftValue, rightValue] = startValue
    switch (location) {
      case BarLocation.RIGHT:
      default: {
        let val = startValue[1] + Math.round(x / partLength) * step
        if (val >= Math.floor(max / step) * step) {
          currentVal = [leftValue, Math.floor(max / step) * step]
        } else if (val <= leftValue + step) {
          currentVal = [leftValue, leftValue + step]
        } else {
          currentVal = [leftValue, val]
        }
        break
      }
      case BarLocation.LEFT: {
        let val = startValue[0] + Math.round(x / partLength) * step
        if (rightValue - 1 <= val) {
          currentVal = [rightValue - step, rightValue]
        } else if (val <= min) {
          currentVal = [min, Math.max(leftValue, rightValue)]
        } else {
          currentVal = [val, rightValue]
        }
        break
      }
    }
    onAfterChange && onAfterChange(currentVal)
    setCurrentValue(currentVal.join(","))
    let [leftVal, rightVal] = getOffsetValueFromState(
      currentVal[1],
      currentVal[0],
    )
    setLeftOffset(leftVal)
    setRightOffset(rightVal)
  }

  const onDragBar = (x: number, startValue: number[]) => {
    setFocus(false)
    let leftBound = Math.round((min - startValue[0]) / step) * partLength,
      rightBound = Math.floor((max - startValue[1]) / step) * partLength,
      val: number,
      tempVal = Math.round(x / partLength) * partLength
    if (tempVal >= rightBound) {
      val = rightBound
    } else if (tempVal <= leftBound) {
      val = leftBound
    } else {
      val = tempVal
    }
    setRightOffset(rightBound - val)
    setLeftOffset(Math.round(startValue[0] / step) * partLength + val)
  }

  const onDragBarEnd = (
    x: number,
    startValue: number[],
    onAfterChange?: (v: number[]) => void,
  ) => {
    const currentRangeVal = startValue.map((val, index) => {
      const offset = val + Math.round(x / partLength) * step
      if (index === 0) {
        let bound = max - (startValue[1] - startValue[0])
        if (offset <= min) return min
        else if (offset >= bound) return bound
        return offset
      } else {
        let bound = min + (startValue[1] - startValue[0])
        if (offset <= bound) return bound
        else if (offset >= max) return max
        return offset
      }
    })
    onAfterChange && onAfterChange(currentRangeVal)
    setCurrentValue(currentRangeVal.join(","))
  }

  const onClickTick = (v: number) => {
    if (Array.isArray(cacheValue)) {
      let mid = Math.floor((cacheValue[1] - cacheValue[0]) / 2)
      if (v > mid) {
        const [_, rightValue, barLength] = getOffsetValueFromState(
          v,
          cacheValue[0],
        )
        setCurrentValue(`${cacheValue[0]},${v}`)
        setRightOffset(rightValue)
        setBarLength(barLength)
      } else {
        const [leftValue, _, barLength] = getOffsetValueFromState(
          cacheValue[1],
          v,
        )
        setCurrentValue(`${v},${cacheValue[1]}`)
        setLeftOffset(leftValue)
        setBarLength(barLength)
      }
    } else {
      const [leftValue, rightValue, barLength] = getOffsetValueFromState(v)
      setCurrentValue(v)
      setLeftOffset(leftValue)
      setBarLength(barLength)
      setRightOffset(rightValue)
    }
  }
  useEffect(() => {
    setFocus(isFocus)
  }, [isFocus])

  return {
    currentValue: cacheValue,
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
  }
}
