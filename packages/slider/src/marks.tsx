import React, { memo } from "react"
import { formatPercent, getOffset } from "./util"
import { MarkProps } from "./interface"
import { applySliderMarks, applySliderMarkText } from "./style"

export default memo(function Marks(props: MarkProps) {
  const { data = [], min, max, vertical, reverse, onMouseDown } = props

  if (!data.length) return null

  return (
    <div css={applySliderMarks(vertical)}>
      {data.map(({ key, content }) => {
        const offset = formatPercent(getOffset(key, [min, max]))
        return (
          <div
            key={key}
            css={applySliderMarkText(vertical, reverse)}
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
