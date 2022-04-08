import React, { memo } from "react"
import { formatPercent, getOffset } from "./util"
import { MarkProps } from "./interface"

export default memo(function Marks(props: MarkProps) {
  const { data = [], min, max, vertical, reverse, onMouseDown } = props

  if (!data.length) return null

  return (
    <div>
      {data.map(({ key, content }) => {
        const offset = formatPercent(getOffset(key, [min, max]))
        return (
          <div
            key={key}
            style={
              vertical
                ? { [reverse ? "top" : "bottom"]: offset }
                : { [reverse ? "right" : "left"]: offset }
            }
            onMouseDown={(e) => {
              e.stopPropagation()
              onMouseDown && onMouseDown(parseFloat(key as string))
            }}
          >
            {content}
          </div>
        )
      })}
    </div>
  )
})
