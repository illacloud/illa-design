// thx arco.design
import React, { useState, useEffect, useRef } from "react"
import { isUndefined } from "./is"
import { usePrevious } from "./use-previous"

export function useMergeValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T
    value?: T
  },
): [T, React.Dispatch<React.SetStateAction<T>>, T] {
  const { defaultValue, value } = props || {}
  const firstRenderRef = useRef(true)
  const prevPropsValue = usePrevious(props?.value)

  const [stateValue, setStateValue] = useState<T>(
    !isUndefined(value)
      ? value
      : !isUndefined(defaultValue)
      ? defaultValue
      : defaultStateValue,
  )

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    if (value === undefined && prevPropsValue !== value) {
      setStateValue(value)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const mergedValue = isUndefined(value) ? stateValue : value

  return [mergedValue, setStateValue, stateValue]
}
