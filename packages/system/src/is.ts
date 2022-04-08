import { Dayjs } from "dayjs"
import * as _ from "lodash"
import { ReactNode } from "react"

// thx arco
export function isDayjs(time: any): time is Dayjs {
  // dayjs.isDayjs 在实际应用场景，比如多个版本的 dayjs 会失效
  return (
    _.isObject(time) &&
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

export function isFunction<T extends Function = Function>(
  value: any,
): value is T {
  return typeof value === "function"
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
