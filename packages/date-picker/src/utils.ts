import dayjs, { Dayjs } from "dayjs"
import { dayjsPro, isFunction, isString } from "@illa-design/system"

export function initFormat(
  type: string,
  showTime: boolean,
  format?: string | ((value: Dayjs) => string),
): string {
  let result
  switch (type) {
    case "day":
      result = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
      break
    case "month":
      result = "YYYY-MM"
      break
    case "year":
      result = "YYYY"
      break
    default:
      result = "YYYY-MM-DD"
      break
  }
  if (format) {
    if (isFunction(format)) {
      result = showTime ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
    } else {
      result = format
    }
  }
  return result
}

export const getFinalValue = (
  calendar?: Dayjs | null,
  timePicker?: Dayjs | null,
) => {
  calendar = calendar || dayjs()
  timePicker = timePicker || dayjs()
  return dayjs(
    `${calendar.format("YYYY-MM-DD")} ${timePicker.format("HH:mm:ss")}`,
  )
}

export const isValidTime = (time?: string, format?: string): boolean => {
  return typeof isString(time) && dayjsPro(time, format).format(format) === time
}
