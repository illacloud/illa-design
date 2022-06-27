// thx arco.design
import React, { useState, useEffect, useRef } from "react"

export function useMergeValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T
    value?: T
  },
): [T, React.Dispatch<React.SetStateAction<T>>, T] {
  const { defaultValue, value } = props || {}
  const firstRenderRef = useRef<boolean>()

  const [stateValue, setStateValue] = useState<T>(
    value !== undefined
      ? value
      : defaultValue !== undefined
      ? defaultValue
      : defaultStateValue,
  )

  // fix：When StrictMode is enabled, React-18 intentionally double-invokes effects for newly mounted components
  // link：https://github.com/reactwg/react-18/discussions/19
  useEffect(() => {
    firstRenderRef.current = true
    return () => {
      firstRenderRef.current = undefined
    }
  }, [])

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    if (value === undefined) {
      setStateValue(value as T)
    }
  }, [value])

  const mergedValue = value === undefined ? stateValue : value

  return [mergedValue, setStateValue, stateValue]
}
