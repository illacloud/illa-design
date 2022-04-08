import React, { memo } from "react"
import { formatPercent, getOffset, valueInRange } from "./util"
import { MarkProps } from "./interface"

export default memo(function Dots(props: MarkProps) {
  const {
    data = [],
    min,
    max,
    value = [],
    vertical,
    reverse,
    onMouseDown,
  } = props

  if (!data.length) return null

  return (
    <div>
      {data.map(({ key, content }) => {
        const offset = formatPercent(getOffset(key, [min, max]))
        return (
          <div
            key={key}
            style={{
              ...(vertical
                ? { [reverse ? "top" : "bottom"]: offset }
                : { [reverse ? "right" : "left"]: offset }),
              ...(+key === min || +key === max ? { visibility: "hidden" } : {}),
            }}
            onMouseDown={(e) => {
              e.stopPropagation()

              onMouseDown && onMouseDown(parseFloat(key as string))
            }}
          >
            <div />
          </div>
        )
      })}
    </div>
  )
})
