import { useEffect, useState } from "react"

export const useElementSize = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver((entries) => {
        const { width } = entries[0].contentRect
        setWidth(width)
      })
      observer.observe(ref.current)
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }
  }, [ref])

  return width
}
