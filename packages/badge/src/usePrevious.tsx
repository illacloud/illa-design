// thx arco
import { ComponentState, PropsWithoutRef, useEffect, useRef } from "react"

export default function usePrevious<T>(
  value: PropsWithoutRef<T> | ComponentState,
) {
  const ref = useRef()
  useEffect(() => {
    console.log(ref.current, value, "ref")
    ref.current = value
    return () => {
      console.log("unmount")
    }
  })
  return ref.current
}
