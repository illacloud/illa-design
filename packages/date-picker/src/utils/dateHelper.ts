import { Dayjs } from "dayjs"
import {
  isDayjs,
  isArray,
  getDayjsValue,
  dayjsPro,
  getNow,
} from "@illa-design/system"
import { DatePickerValue, DatePickerModeType } from "../interface"
import { ONE_PAGE_WITH_DAYS } from "../panels/date"

function getFormat(time: unknown) {
  return isDayjs(time) && (time as Dayjs).format("HH:mm:ss")
}

export function isTimeArrayChange(prevTime: Dayjs[], nextTime: Dayjs[]) {
  return (
    getFormat(prevTime[0]) !== getFormat(nextTime[0]) ||
    getFormat(prevTime[1]) !== getFormat(nextTime[1])
  )
}

export function getAvailableDayjsLength(value?: DatePickerValue[]) {
  if (!value) {
    return 0
  }
  if (isArray(value)) {
    if (isDayjs(value[0]) && isDayjs(value[1])) {
      return 2
    }
    if (!isDayjs(value[0]) && !isDayjs(value[1])) {
      return 0
    }
    return 1
  }
  return 0
}

export function isDisabledDate(
  date: Dayjs,
  mode: DatePickerModeType,
  disabledDate?: (current: Dayjs) => boolean,
  originMode?: DatePickerModeType,
): boolean {
  if (typeof disabledDate !== "function") {
    return false
  }
  if (!originMode || originMode === mode) {
    return disabledDate(date)
  }
  // @ts-ignore
  return disabledDate(date.startOf(mode)) && disabledDate(date.endOf(mode))
}

type WeekStartType = 0 | 1 | 2 | 3 | 4 | 5 | 6

export const DEFAULT_WEEK_START = 0
export function getDefaultWeekStart(dayjsLocale: string): WeekStartType {
  return (dayjsPro.Ls?.[dayjsLocale]?.weekStart as WeekStartType) || 0
}

export function getLocaleDayjsValue(
  date: Dayjs | undefined,
  dayjsLocale: string,
): Dayjs | undefined {
  return date ? date.locale(dayjsLocale) : date
}

export function getIsRangeStartOrEnd(
  v: DatePickerValue | undefined,
  checkIsInView: boolean,
  disabled: boolean,
  currentTime: Dayjs,
  isSameTime: (current: Dayjs, target: Dayjs) => boolean,
) {
  return checkIsInView && !disabled && v && isSameTime(currentTime, v as Dayjs)
}

const getReturn = (time: Dayjs) => {
  return {
    year: time.year(),
    month: time.month() + 1,
    day: time.day(),
    name: time.date(),
    time,
  }
}

const getTimeObj = (time: Dayjs) => {
  return {
    ...getReturn(time.startOf("month")),
    days: time.daysInMonth(),
  }
}

export function getAllDaysByTime(
  dayStartOfWeek: number,
  isWeek: boolean,
  time: Dayjs,
) {
  const current = getTimeObj(time)

  const flatRows = new Array(ONE_PAGE_WITH_DAYS).fill("")
  const startIndex =
    current.day - dayStartOfWeek < 0
      ? 7 + (current.day - dayStartOfWeek)
      : current.day - dayStartOfWeek
  flatRows[startIndex] = {
    ...current,
  }
  // pre
  for (let i = 0; i < startIndex; i++) {
    flatRows[startIndex - i - 1] = {
      ...getReturn(current.time.subtract(i + 1, "day")),
      isPrev: true,
    }
  }
  // next
  for (let i = 0; i < ONE_PAGE_WITH_DAYS - startIndex - 1; i++) {
    flatRows[startIndex + i + 1] = {
      ...getReturn(current.time.add(i + 1, "day")),
      isNext: i >= current.days - 1,
    }
  }
  const rows = new Array(6).fill("")
  for (let i = 0; i < 6; i++) {
    rows[i] = flatRows.slice(i * 7, 7 * (i + 1))
    if (isWeek) {
      const weekTime = rows[i][0].time
      const weekRows = [...rows[i]]
      rows[i].unshift({
        weekRows,
        weekOfYear: weekTime.week(),
      })
    }
  }
  return rows
}

export const getDefaultValue = (
  format: string,
  value?: DatePickerValue | DatePickerValue[],
  defaultValue?: DatePickerValue | DatePickerValue[],
  utcOffset?: number,
  timezone?: string,
) => {
  return !!value
    ? getDayjsValue(value as Dayjs, format, utcOffset, timezone)
    : getDayjsValue(defaultValue as Dayjs, format, utcOffset, timezone)
}

export function getTimeFormat(format: string) {
  const units = ["H", "h", "m", "s", "A", "a"]
  let timeFormat = ""
  units.some((unit) => {
    if (format.indexOf(unit) !== -1) {
      timeFormat = `${unit}${format.split(` ${unit}`)[1]}`
      return true
    }
    return false
  })
  return timeFormat || "HH:mm:ss"
}

export function getRangeDefaultValue(
  isHalfAvailable: boolean,
  nextFocusedInputIndex: number,
  format: string,
  value?: Dayjs[],
  defaultValue?: Dayjs[],
  utcOffset?: number,
  timezone?: string,
) {
  let rangeValue

  if (value) {
    rangeValue = getDayjsValue(value, format, utcOffset, timezone)
  } else {
    rangeValue = getDayjsValue(defaultValue, format, utcOffset, timezone)
  }

  if (
    isHalfAvailable &&
    (!rangeValue ||
      (rangeValue && !(rangeValue as Dayjs[])[nextFocusedInputIndex]))
  ) {
    const nv = []
    nv[nextFocusedInputIndex] = getNow(utcOffset, timezone)
    return nv
  }

  return value
}
