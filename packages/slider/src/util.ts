// thx arco
import { isArray, isNumber, isObject, isEmptyObject } from "@illa-design/system"
import { minus, divide } from "number-precision"
import { ReactNode } from "react"

export function getPrecision(val: number) {
  const decimal = `${val}`.split(".")[1]
  return (decimal && decimal.length) || 0
}

export function formatPercent(val: number) {
  return `${val * 100}%`
}

export function getOffset(val: number | string, range?: number[]) {
  const value = Number(val)
  if (range && !isNaN(value)) {
    const [min, max] = range
    return divide(minus(value, min), minus(max, min))
  }
  return 0
}

export function isNotEmpty(val: any): boolean {
  return val || val === 0
}

export function isSameOrder(
  firstNums: [number, number],
  secondNums: [number, number],
) {
  const diff1 = firstNums[0] - firstNums[1]
  const diff2 = secondNums[0] - secondNums[1]
  return diff1 <= 0 === diff2 <= 0
}

export function valueInRange(val: number | string, range: number[]) {
  const value = Number(val)
  range.sort((a, b) => a - b)
  return value >= range[0] && value <= range[1]
}

export function getValueUtils(props: {
  isRange: boolean
  min: number
  max: number
  onlyMarkValue: boolean
  step: number
  marks: Record<number, ReactNode>
}) {
  const { isRange, min, max, onlyMarkValue, step, marks } = props
  const precision = getPrecision(step)

  function getMarkValue(val: number): number {
    if (!isObject(marks) || isEmptyObject(marks)) {
      console.warn("marks must be an object when onlyMarkValue is true")
      return min
    }
    if (marks[val]) {
      return val
    }
    const keys = Object.keys(marks)
    const diffs = keys.map((x) => Math.abs(val - parseFloat(x)))
    const minIndex = diffs.indexOf(Math.min.apply(null, diffs))
    return parseFloat(keys[minIndex])
  }

  function getLegalValue(val: number): number {
    if (val === void 0) return min
    if (val <= min) return min
    if (val >= max) return max
    if (onlyMarkValue) return getMarkValue(val)

    const steps = Math.round(val / step)
    return parseFloat(Number(steps * step).toFixed(precision))
  }

  function isLegalValue(val: number) {
    return getLegalValue(val) === val
  }

  function getLegalRangeValue(val: number | number[]): [number, number] {
    let [beginVal, endVal] = [min, min]
    if (isRange) {
      if (isArray(val)) {
        beginVal = getLegalValue(val[0])
        endVal = getLegalValue(val[1])
      } else {
        console.error("value must be an array when range is true")
      }
    } else if (isNumber(val)) {
      endVal = getLegalValue(val)
    } else {
      console.error("value must be a number when range is false")
    }
    return [beginVal, endVal]
  }

  return {
    getLegalRangeValue,
    getLegalValue,
    isLegalValue,
  }
}
