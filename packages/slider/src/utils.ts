import { BarLocation } from "./content"

export const formatValue = (val: string | number) => {
  if (typeof val === "number") return val
  return Array.from(val.split(","), (v) => parseInt(v))
}

export const modifyTarget = (
  target: number,
  partLength: number,
  containerWidth: number,
  location: BarLocation,
  isRange: boolean | { draggableBar: boolean },
  step: number,
) => {
  let value = Math.round(target / partLength) * partLength
  if (location === BarLocation.RIGHT && isRange) {
    return step === 1 ? value : value - 3 * containerWidth
  }
  return value - containerWidth
}

export const getMarkBound = (
  containerWidth: number,
  value: number | number[],
  location: BarLocation,
  partLength: number,
  max: number,
  step: number,
) => {
  if (Array.isArray(value)) {
    switch (location) {
      default:
      case BarLocation.RIGHT: {
        return {
          left:
            Math.round(value[0] / step + 1) * partLength - containerWidth * 3,
          right: Math.floor(max / step) * partLength - containerWidth * 3,
        }
      }
      case BarLocation.LEFT: {
        return {
          left: -containerWidth,
          right: Math.floor((value[1] - step) / step) * partLength,
        }
      }
    }
  }
  return {
    left: -containerWidth,
    right: Math.floor(max / step) * partLength - containerWidth,
  }
}
