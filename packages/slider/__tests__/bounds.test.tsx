import React from "react"
import { createRoot } from "react-dom/client"
import { act } from "react-dom/test-utils"
import { useOffset } from "../src/useOffset"
import { BarLocation } from "../src/content"

describe("range release after bounds change", () => {
  it("clamps the inactive lower value to the current minimum", () => {
    let result!: ReturnType<typeof useOffset>
    const onAfterChange = jest.fn()
    const root = createRoot(document.createElement("div"))
    const Harness = ({ min }: { min: number }) => {
      result = useOffset(min, 100, 1)
      return null
    }
    try {
      act(() => root.render(<Harness min={0} />))
      act(() => result.initOffsetFromState(1, 100, 80, 20))
      act(() => root.render(<Harness min={40} />))
      act(() => {
        result.onDragEnd(0, [20, 80], BarLocation.RIGHT, onAfterChange)
      })
      expect(onAfterChange).toHaveBeenLastCalledWith([40, 80])
    } finally {
      act(() => root.unmount())
    }
  })
})
