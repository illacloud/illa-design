import { TimePickerValue } from "./"
import type { Dayjs } from "dayjs"
import { dayjsPro, getDayjsValue, isDayjs } from "@illa-design/system"

export const getColumnsFromFormat = (format: string) => {
  const units = ["H", "h", "m", "s", "a", "A"]
  const list: string[] = []
  let use12Hours = false
  units.forEach((unit) => {
    if (format.indexOf(unit) !== -1) {
      list.push(unit)
      if (unit === "a" || unit === "A") {
        use12Hours = true
      }
    }
  })
  return {
    list,
    use12Hours,
  }
}

export function getFormat(format?: string) {
  return format || "HH:mm:ss"
}

export function getDefaultValue(
  format: string,
  value?: TimePickerValue | TimePickerValue[],
  defaultValue?: TimePickerValue | TimePickerValue[],
  utcOffset?: number,
  timezone?: string,
) {
  let _value
  if (value) {
    _value = getDayjsValue(value as Dayjs, format, utcOffset, timezone)
  } else if (defaultValue) {
    _value = getDayjsValue(defaultValue as Dayjs, format, utcOffset, timezone)
  }
  return _value
}

export function getFormatTime(time: Dayjs): Dayjs {
  const today = dayjsPro()
  const y = today.year()
  const m = today.month()
  const d = today.date()

  if (isDayjs(time)) {
    let returnTime = time
    returnTime = returnTime.set("year", y)
    returnTime = returnTime.set("month", m)
    returnTime = returnTime.set("date", d)

    return returnTime
  }

  return time
}
