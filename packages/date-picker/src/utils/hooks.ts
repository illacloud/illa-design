import { useEffect, useRef } from "react"

export const useUpdate = (fn: Function, deps: unknown[] = []) => {
  const isDidMount = useRef(false)

  useEffect(() => {
    if (isDidMount.current) {
      fn()
    } else {
      isDidMount.current = true
    }
  }, [...deps])
}
