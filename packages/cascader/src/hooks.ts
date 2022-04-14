// thx arco.design

// Save ref list
import { DependencyList, useEffect, useReducer, useRef } from "react"

export default function useRefs<T>(
  defaultValue: T[] = [],
): [T[], (node: T, index?: number) => void] {
  const listRef = useRef<T[]>(defaultValue)

  const setListRef = (element: T, index?: number) => {
    if (index !== undefined) {
      listRef.current[index] = element
    } else {
      listRef.current.push(element)
    }
  }

  return [listRef.current, setListRef]
}

export function useForceUpdate() {
  const [, dispatch] = useReducer((v) => v + 1, 0)
  return dispatch
}

export function useUpdate(fn: () => void, deps: DependencyList) {
  const isDidMount = useRef(false)

  useEffect(() => {
    if (isDidMount.current) {
      fn()
    } else {
      isDidMount.current = true
    }
  }, [...deps])
}

export function useCurrentRef<T>(initFunc: () => T, deps: DependencyList): T {
  const ref = useRef<T>()
  const forceUdpate = useForceUpdate()

  if (!ref.current) {
    ref.current = initFunc()
  }

  useUpdate(() => {
    ref.current = initFunc()
    forceUdpate()
  }, [...deps])

  return ref.current
}
