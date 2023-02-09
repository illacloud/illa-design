import { isDayjs, isArray, isUndefined } from "./is"
import dayjs, { Dayjs } from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import isBetween from "dayjs/plugin/isBetween"
import weekOfYear from "dayjs/plugin/weekOfYear"
import advancedFormat from "dayjs/plugin/advancedFormat"
import weekYear from "dayjs/plugin/weekYear"
import QuarterOfYear from "dayjs/plugin/quarterOfYear"

dayjs.extend(isBetween)
dayjs.extend(weekOfYear)
dayjs.extend(advancedFormat)
dayjs.extend(weekYear)
dayjs.extend(QuarterOfYear)
dayjs.extend(customParseFormat)

export type DayjsPro = Dayjs
export const dayjsPro = dayjs

export function getDayjsValue(
  time: DayjsPro | DayjsPro[] | string | string[] | undefined,
  format: string,
  utcOffset?: number,
  timezone?: string,
) {
  if (!time) {
    return undefined
  }
  const formatValue = (value: DayjsPro | string) => {
    if (isDayjs(value)) {
      return dayjs(value.valueOf())
    }
    if (typeof value === "string") {
      const dv = dayjs(value, format)

      return dv.isValid() ? dv : dayjs(value, "YYYY-MM-DD")
    }
    return dayjs(value)
  }

  // if set a timezone, convert to timezone date
  const getRealTime = (t: DayjsPro | string) =>
    utcOffset !== undefined || timezone
      ? toTimezone(formatValue(t), utcOffset, timezone)
      : formatValue(t)

  if (isArray(time)) {
    return time.map((t) => (t ? getRealTime(t) : undefined))
  }

  return getRealTime(time)
}

export function getSortedDayjsArray(values?: Dayjs[]) {
  if (!values || !values[0] || !values[1]) {
    return values
  }
  const newValues = [...values]
  newValues.sort((a, b) => a.valueOf() - b.valueOf())
  return newValues
}

export function isDayjsChange(
  prevValue: Dayjs | undefined,
  currentValue: Dayjs | undefined,
) {
  if (currentValue === undefined && prevValue === undefined) {
    return false
  }
  return (
    (currentValue && !prevValue) ||
    (!currentValue && prevValue) ||
    dayjs(currentValue).valueOf() !== dayjs(prevValue).valueOf()
  )
}

export function isDayjsArrayChange(
  prevValue: Dayjs[] | undefined,
  currentValue: Dayjs[] | undefined,
) {
  if (currentValue === undefined && prevValue === undefined) {
    return false
  }
  return (
    (currentValue && !prevValue) ||
    (!currentValue && prevValue) ||
    (isArray(currentValue) &&
      isArray(prevValue) &&
      dayjs(currentValue[0]).valueOf() !== dayjs(prevValue[0]).valueOf()) ||
    dayjs(currentValue?.[1]).valueOf() !== dayjs(prevValue?.[1]).valueOf()
  )
}

export function getNow(utcOffset?: number, timezone?: string) {
  return isUndefined(utcOffset) && !timezone
    ? dayjs()
    : toTimezone(dayjs(), utcOffset, timezone)
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5,
}

const dtfCache: Record<string, any> = {}
const getDateTimeFormat = (timezone: string, timeZoneName?: string) => {
  const key = `${timezone}|${timeZoneName || "short"}`
  let dtf = dtfCache[key]
  if (!dtf) {
    dtf = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    dtfCache[key] = dtf
  }
  return dtf
}

const makeFormatParts = (timestamp: number, timezone: string) => {
  const date = new Date(timestamp)
  const dtf = getDateTimeFormat(timezone)
  return dtf.formatToParts(date)
}

const tzOffset = (timestamp: number, timezone: string) => {
  const formatResult = makeFormatParts(timestamp, timezone)
  const filled = []
  for (let i = 0; i < formatResult.length; i += 1) {
    const { type, value } = formatResult[i]
    // @ts-ignore
    const pos = typeToPos[type]

    if (pos >= 0) {
      filled[pos] = parseInt(value, 10)
    }
  }
  const hour = filled[3]
  // Workaround for the same behavior in different node version
  // https://github.com/nodejs/node/issues/33027
  /* istanbul ignore next */
  const fixedHour = hour === 24 ? 0 : hour
  const utcTs = Date.UTC(
    filled[0],
    filled[1] - 1,
    filled[2],
    fixedHour,
    filled[4],
    filled[5],
    0,
  )
  let asTS = +timestamp
  const over = asTS % 1000
  asTS -= over
  return (utcTs - asTS) / (60 * 1000)
}

const fixOffset = (localTS: number, o0: number, tz: string) => {
  // Our UTC time is just a guess because our offset is just a guess
  let utcGuess = localTS - o0 * 60 * 1000
  // Test whether the zone matches the offset for this ts
  const o2 = tzOffset(utcGuess, tz)
  // If so, offset didn't change and we're done
  if (o0 === o2) {
    return [utcGuess, o0]
  }
  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o0) * 60 * 1000
  // If that gives us the local time we want, we're done
  const o3 = tzOffset(utcGuess, tz)
  if (o2 === o3) {
    return [utcGuess, o2]
  }
  // If it's different, we're in a hole time.
  // The offset has changed, but they don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)]
}

export function toTimezone(
  time: Dayjs,
  utcOffset?: number,
  timezone?: string,
  local?: boolean,
): Dayjs {
  if (!time || (isUndefined(utcOffset) && !timezone)) {
    return time
  }
  const localOffset = -time.toDate().getTimezoneOffset()
  const uOffset = isUndefined(utcOffset)
    ? !timezone
      ? localOffset
      : timezoneToOffset(time.valueOf(), timezone)
    : utcOffset
  const timezoneOffset = Math.abs(uOffset) <= 16 ? uOffset * 60 : uOffset
  const diffOffset = local
    ? localOffset - timezoneOffset
    : timezoneOffset - localOffset
  return dayjs(dayjs(time).valueOf() + diffOffset * 60 * 1000)
}

export function timezoneToOffset(inputTs: number, timezone: string) {
  return fixOffset(
    inputTs,
    tzOffset(new Date().getTime(), timezone),
    timezone,
  )[1]
}

export function toLocal(
  time: Dayjs,
  utcOffset?: number,
  timezone?: string,
): Dayjs {
  return toTimezone(time, utcOffset, timezone, true)
}

export function isValidTimeString(str: string | undefined, format: string) {
  return typeof str === "string" && dayjs(str, format).format(format) === str
}

export const isInRange = (
  current: Dayjs,
  isSameTime: (current: Dayjs, target: Dayjs) => boolean,
  startDate?: Dayjs,
  endDate?: Dayjs,
): boolean => {
  if (startDate && endDate) {
    return (
      isSameTime(current, startDate) ||
      isSameTime(current, endDate) ||
      current.isBetween(startDate, endDate, null)
    )
  }
  return false
}

export function getValueWithTime(date: Dayjs, time?: Dayjs): Dayjs {
  const y = date.year()
  const m = date.month()
  const d = date.date()

  if (time) {
    let returnTime = time
    returnTime = returnTime.set("year", y)
    returnTime = returnTime.set("month", m)
    returnTime = returnTime.set("date", d)

    return returnTime
  }

  return date
}
