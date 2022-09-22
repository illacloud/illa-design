import { isDayjs, isArray } from "./is"
import dayjs, { Dayjs } from "dayjs"
import AdvancedFormat from "dayjs/plugin/advancedFormat"
import CustomParseFormat from "dayjs/plugin/customParseFormat"

dayjs.extend(AdvancedFormat)
dayjs.extend(CustomParseFormat)
const dayjsPro = dayjs
export { dayjsPro }

export function getDayjsValue(
  time: any,
  format: string,
): undefined | Dayjs | Dayjs[] {
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
    return time.map((t) => (t ? formatValue(t) : t))
  }

  return formatValue(time)
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
