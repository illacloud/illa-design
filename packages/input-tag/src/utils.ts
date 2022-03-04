import { ReactNode } from "react"
import { isArray, isObject } from "@illa-design/system"
import { ObjectValueType } from "./interface"

export const formatValue = (value: (ObjectValueType | string)[]) => {
  if (!isArray(value)) {
    return []
  }
  return value.map((item) => {
    return isObject(item)
      ? {
          ...item,
          label: "label" in item ? item.label : item.value,
          value: item.value,
          closable: item.closable,
        }
      : {
          label: item,
          value: item,
        }
  })
}
