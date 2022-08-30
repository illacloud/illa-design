import { Dayjs } from "dayjs"
import { isFunction } from "@illa-design/system"

export function initFormat(type: string, showTime: boolean, format?: string | ((value: Dayjs) => string)): string {
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
