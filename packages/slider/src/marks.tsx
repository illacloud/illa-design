import { memo } from "react"
import { formatPercent, getOffset } from "./util"
import { SliderMarkProps } from "./interface"
import { applySliderMarks, applySliderMarkText } from "./style"
import { applyBoxStyle } from "@illa-design/theme"

export default memo(function Marks(props: SliderMarkProps) {
  const { data = [], min, max, vertical, reverse, onMouseDown } = props

  if (!data.length) return null

  return (
    <div css={[applySliderMarks(vertical), applyBoxStyle(props)]}>
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
