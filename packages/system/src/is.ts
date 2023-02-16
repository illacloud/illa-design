import { Dayjs } from "dayjs"
import { ReactNode } from "react"

// thx arco
export function isDayjs(time: any): time is Dayjs {
  // dayjs.isDayjs in practical application scenarios, such as multiple versions of dayjs may fail
  return (
    isObject(time) &&
    "$y" in time &&
    "$M" in time &&
    "$D" in time &&
    "$d" in time &&
    "$H" in time &&
    "$m" in time &&
    "$s" in time
  )
}

export function isArray(obj: any): obj is any[] {
  return Object.prototype.toString.call(obj) === "[object Array]"
}

export function isObject(obj: any): obj is { [key: string]: any } {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0
}

export function isPromise(obj: any): obj is { [key: string]: any } {
  return Object.prototype.toString.call(obj) === "[object Promise]"
}

export function isString(obj: any): obj is string {
  return Object.prototype.toString.call(obj) === "[object String]"
}

export function isNumber(obj: any): obj is number {
  return (
    Object.prototype.toString.call(obj) === "[object Number]" && obj === obj
  )
}

export function isFile(obj: any): obj is File {
  return Object.prototype.toString.call(obj) === "[object File]"
}

export function isFunction<T extends Function = Function>(
  value: any,
): value is T {
  return typeof value === "function"
}

export function isUndefined(obj: any): obj is undefined {
  return obj === undefined
}

export function isNull(obj: any): obj is null {
  return obj === null
}

export function isNullOrUndefined(obj: any): boolean {
  return obj === null || obj === undefined
}

// thx arco
export const isServerRendering = (function () {
  try {
    return !(typeof window !== "undefined" && document !== undefined)
  } catch (e) {
    return true
  }
})()

/** merge multiple children to a string node */
export const isSingleNode = (child: ReactNode) => {
  return isString(child) || isNumber(child)
}
