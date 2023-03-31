import { FC } from "react"
import { SliderTick } from "./interface"
import { applyTick, applyTickContainer, applyBgColor } from "./style"
export const Tick: FC<SliderTick> = (props) => {
  const {
    left,
    leftValue,
    rightValue,
    currentWidth,
    disabled,
    colorScheme,
    value,
  } = props
  const rightBound = currentWidth - rightValue >= left
  const background = applyBgColor(
    colorScheme,
    !(leftValue <= left && rightBound && !disabled),
  )
  return (
    <div css={applyTickContainer(left, disabled)} data-value={value}>
      <div css={applyTick(background)} />
    </div>
  )
}
