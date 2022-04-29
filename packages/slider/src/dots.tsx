import { memo } from "react"
import { formatPercent, getOffset, valueInRange } from "./util"
import { SliderMarkProps } from "./interface"
import { applySliderDot, applySliderDotWrapper } from "./style"

export default memo(function Dots(props: SliderMarkProps) {
  const {
    data = [],
    min,
    max,
    value = [],
    vertical,
    reverse,
    disabled,
    onMouseDown,
  } = props

  if (!data.length) return null

  return (
    <div>
      {data.map(({ key }) => {
        const offset = formatPercent(getOffset(key, [min, max]))
        return (
          <div
            key={key}
            css={applySliderDotWrapper(vertical, reverse)}
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
            <div css={applySliderDot(disabled, valueInRange(key, value))} />
          </div>
        )
      })}
    </div>
  )
})
