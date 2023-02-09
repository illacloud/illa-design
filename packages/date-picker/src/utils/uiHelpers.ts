import dayjs, { Dayjs } from "dayjs"
import { RowType } from "../panels/interface"
import { getSortedDayjsArray, isArray, isInRange } from "@illa-design/system"
import { getAvailableDayjsLength, getIsRangeStartOrEnd } from "./dateHelper"
import { ModeType } from "../interface"
import { CalendarValue } from "../interface"

function getDateValue(date?: CalendarValue[], index?: number) {
  if (!date) {
    return undefined
  }
  if (isArray(date) && index != undefined) {
    return date[index]
  }
}

export const getDependency = (
  rangeValues?: CalendarValue[],
  valueShowHover?: CalendarValue[],
) => {
  const selectedLength = getAvailableDayjsLength(rangeValues)
  const hoverLength = getAvailableDayjsLength(valueShowHover)

  const sortedRangeValues =
    selectedLength !== 2 && hoverLength === 2
      ? getSortedDayjsArray(valueShowHover as Dayjs[])
      : rangeValues
  const sortedHoverRangeValues =
    selectedLength === 2 ? getSortedDayjsArray(valueShowHover as Dayjs[]) : []

  return {
    sortedRangeValues,
    sortedHoverRangeValues,
  }
}

export interface CellStatus {
  isDisabled: boolean
  isHidden: boolean
  isInView: boolean
  isToday: boolean
  isSelected: boolean
  isRangeStart: boolean
  isRangeEnd: boolean
  isInRange: boolean
  isHoverRangeStart: boolean
  isHoverRangeEnd: boolean
  isHoverInRange: boolean
  isRangeEdgeInHoverRange: boolean
  isHoverRangeEdgeInRange: boolean
}

export const getCellStatus = (
  cellDateObj: RowType,
  disabled: boolean,
  mode: ModeType,
  isSameTime: (current: Dayjs, target: Dayjs) => boolean,
  hideNotInViewDates?: boolean,
  value?: CalendarValue,
  rangeValues?: CalendarValue[],
  valueShowHover?: CalendarValue[],
  utcOffset?: number,
  timezone?: string,
): CellStatus => {
  const { sortedRangeValues, sortedHoverRangeValues } = getDependency(
    rangeValues,
    valueShowHover,
  )
  console.log("value", value)
  const rangeStart = getDateValue(sortedRangeValues, 0) as Dayjs
  const rangeEnd = getDateValue(sortedRangeValues, 1) as Dayjs
  const hoverRangeStart = getDateValue(sortedHoverRangeValues, 0) as Dayjs
  const hoverRangeEnd = getDateValue(sortedHoverRangeValues, 1) as Dayjs
  const isInView = !cellDateObj.isPrev && !cellDateObj.isNext
  const selected =
    value && isSameTime(cellDateObj.time as Dayjs, value as Dayjs)
  let isToday = isSameTime(cellDateObj.time as Dayjs, dayjs())
  const checkIsInView = mode !== "week" ? isInView : true

  if (mode === "week") {
    isToday = dayjs().isSame(cellDateObj.time, "date")
  }

  if (mode === "quarter") {
    // @ts-ignore
    isToday = dayjs().isSame(cellDateObj.time, "quarter")
  }

  const isRangeStart = getIsRangeStartOrEnd(
    rangeStart,
    checkIsInView,
    disabled,
    cellDateObj.time as Dayjs,
    isSameTime,
  )
  const isRangeEnd = getIsRangeStartOrEnd(
    rangeEnd,
    checkIsInView,
    disabled,
    cellDateObj.time as Dayjs,
    isSameTime,
  )
  const isRangeStartSelected = getIsRangeStartOrEnd(
    getDateValue(rangeValues, 0),
    checkIsInView,
    disabled,
    cellDateObj.time as Dayjs,
    isSameTime,
  )
  const isRangeEndSelected = getIsRangeStartOrEnd(
    getDateValue(rangeValues, 1),
    checkIsInView,
    disabled,
    cellDateObj.time as Dayjs,
    isSameTime,
  )
  const isHoverRangeStart = getIsRangeStartOrEnd(
    hoverRangeStart,
    checkIsInView,
    disabled,
    cellDateObj.time as Dayjs,
    isSameTime,
  )
  const isHoverRangeEnd = getIsRangeStartOrEnd(
    hoverRangeEnd,
    checkIsInView,
    disabled,
    cellDateObj.time as Dayjs,
    isSameTime,
  )

  let isRangeEdgeInHoverRange = false
  if (isRangeStart) {
    isRangeEdgeInHoverRange =
      !!hoverRangeStart &&
      !!rangeStart &&
      (hoverRangeStart as Dayjs).isBefore(rangeStart) &&
      isInRange(rangeStart, isSameTime, hoverRangeStart, hoverRangeEnd)
  } else if (isRangeEnd) {
    isRangeEdgeInHoverRange =
      !!hoverRangeEnd &&
      !!rangeEnd &&
      (hoverRangeEnd as Dayjs).isAfter(rangeEnd) &&
      isInRange(rangeEnd, isSameTime, hoverRangeStart, hoverRangeEnd)
  }

  let isHoverRangeEdgeInRange = false
  if (isHoverRangeStart) {
    isHoverRangeEdgeInRange =
      !!hoverRangeStart &&
      !!rangeStart &&
      (rangeStart as Dayjs).isBefore(hoverRangeStart) &&
      isInRange(hoverRangeStart, isSameTime, rangeStart, rangeEnd)
  } else if (isHoverRangeEnd) {
    isHoverRangeEdgeInRange =
      !!hoverRangeEnd &&
      !!rangeEnd &&
      (rangeEnd as Dayjs).isAfter(hoverRangeEnd) &&
      isInRange(hoverRangeEnd, isSameTime, rangeStart, rangeEnd)
  }

  console.log("isRangeStartSelected", isRangeStartSelected)
  console.log("isRangeEndSelected", isRangeEndSelected)
  console.log("selected", selected)

  return {
    isDisabled: disabled,
    isHidden: !!hideNotInViewDates && !isInView,
    isInView: isInView,
    isToday: isToday && isInView,
    isSelected: !!selected || !!isRangeStartSelected || !!isRangeEndSelected,
    isRangeStart: !!isRangeStart,
    isRangeEnd: !!isRangeEnd,
    isInRange:
      checkIsInView &&
      !disabled &&
      isInRange(cellDateObj.time as Dayjs, isSameTime, rangeStart, rangeEnd),
    isHoverRangeStart: !!isHoverRangeStart,
    isHoverRangeEnd: !!isHoverRangeEnd,
    isHoverInRange:
      checkIsInView &&
      !disabled &&
      isInRange(
        cellDateObj.time as Dayjs,
        isSameTime,
        hoverRangeStart,
        hoverRangeEnd,
      ),
    isRangeEdgeInHoverRange: isRangeEdgeInHoverRange,
    isHoverRangeEdgeInRange: isHoverRangeEdgeInRange,
  }
}

export const getFormat = (
  mode: ModeType,
  format?: string | ((value: Dayjs) => string),
  showTime?: boolean,
) => {
  let valueFormat
  switch (mode) {
    case "date":
      valueFormat = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
      break
    case "month":
      valueFormat = "YYYY-MM"
      break
    case "year":
      valueFormat = "YYYY"
      break
    case "week":
      valueFormat = "gggg-wo"
      break
    case "quarter":
      valueFormat = "YYYY-[Q]Q"
      break
    default:
      valueFormat = "YYYY-MM-DD"
  }
  if (format) {
    valueFormat = format
  }
  return valueFormat
}
