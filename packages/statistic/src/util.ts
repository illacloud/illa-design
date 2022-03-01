import { isDayjs } from "@illa-design/system"
import dayjs from "dayjs"

const units: [string, number][] = [
  ["Y", 1000 * 60 * 60 * 24 * 365], // years
  ["M", 1000 * 60 * 60 * 24 * 30], // months
  ["D", 1000 * 60 * 60 * 24], // days
  ["H", 1000 * 60 * 60], // hours
  ["m", 1000 * 60], // minutes
  ["s", 1000], // seconds
  ["S", 1], // million seconds
]

// thx ant
export function getDateString(millisecond: number, format: string) {
  let leftMillisecond: number = millisecond
  return units.reduce((current, [name, unit]) => {
    if (current.indexOf(name) !== -1) {
      const value = Math.floor(leftMillisecond / unit)
      leftMillisecond -= value * unit
      return current.replace(new RegExp(`${name}+`, "g"), (match: string) => {
        const len = match.length
        return value.toString().padStart(len, "0")
      })
    }
    return current
  }, format)
}

// thx arco
export function getDayjsValue(time: any, format: string) {
  if (!time) {
    return void 0
  }
  const formatValue = (value: any) => {
    if (isDayjs(value)) {
      return dayjs(value.valueOf())
    }
    if (typeof value === "string") {
      const dv = dayjs(value, format)

      return dv.isValid() ? dv : dayjs(value, "YYYY-MM-DD")
    }
    return dayjs(value, format)
  }

  if (Array.isArray(time)) {
    return time.map((t) => (t ? formatValue(t) : void 0))
  }

  return formatValue(time)
}
