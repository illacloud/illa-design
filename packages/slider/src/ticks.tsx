import React, { memo } from "react"
import { plus } from "number-precision"
import { formatPercent, getOffset, valueInRange } from "./util"
import { TicksProps } from "./interface"

export default memo(function Ticks(props: TicksProps) {
  const { step, min, max, value, vertical, reverse } = props

  const steps = []
  const stepsLength = Math.floor((max - min) / step)
  for (let i = 0; i <= stepsLength; i++) {
    const stepVal = plus(i * step, min)
    if (stepVal <= min || stepVal >= max) continue
    steps.push({
      offset: formatPercent(getOffset(stepVal, [min, max])),
      isActive: valueInRange(stepVal, value),
    })
  }
  return (
    <div>
      {steps.map((item, index) => (
        <div
          key={index}
          style={
            vertical
              ? { [reverse ? "top" : "bottom"]: item.offset }
              : { [reverse ? "right" : "left"]: item.offset }
          }
        />
      ))}
    </div>
  )
})
