import { isDayjs } from "./is"
const dayjs = require("dayjs")
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
