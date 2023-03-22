import { FC } from "react"
import { SliderTick } from "./interface"
import { applyTick } from "./style"
export const Tick: FC<SliderTick> = (props) => {
  const {
    left,
    leftValue,
    rightValue,
    currentWidth,
    reverse,
    isRange,
    disabled,
    tickClick,
    value,
  } = props
  const rightBound =
    reverse && !isRange
      ? currentWidth - rightValue <= left
      : currentWidth - rightValue >= left
  const background =
    leftValue <= left && rightBound && !disabled
      ? "--illa-blue-03"
      : "--illa-gray-08"

  const onClick = () => {
    if (disabled) return
    tickClick(value)
  }
  return (
    <div css={applyTick(left, background, disabled)} onClick={onClick}></div>
  )
}
