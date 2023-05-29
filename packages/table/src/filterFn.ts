import { FilterOptionsMap } from "./utils"
import { CustomFilterFn, FilterOptions } from "./interface"
import { isObject, isString } from "@illa-design/system"

export function isTableFilterFn(value: string): value is CustomFilterFn {
  return value in FilterOptionsMap
}

export function isFilterOption(option: unknown): option is FilterOptions {
  return (
    isObject(option) &&
    "id" in option &&
    isString(option.id) &&
    "filterFn" in option &&
    isTableFilterFn(option.filterFn) &&
    "value" in option
  )
}
