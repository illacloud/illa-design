import { FC } from "react"
import { SliderTick } from "./interface"
import { applyTick, applyTickContainer } from "./style"
export const Tick: FC<SliderTick> = (props) => {
  const {
    left,
    leftValue,
    rightValue,
    currentWidth,
    disabled,
    tickClick,
    value,
  } = props
  const rightBound = currentWidth - rightValue >= left
  const background =
    leftValue <= left && rightBound && !disabled
      ? "--illa-blue-03"
      : "--illa-gray-08"

  const onClick = () => {
    if (disabled) return
    tickClick(value)
  }
  return (
    <div css={applyTickContainer(left, disabled)} onClick={onClick}>
      <div css={applyTick(background)} />
    </div>
  )
}
