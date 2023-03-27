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
    tickClick,
    value,
  } = props
  const rightBound = currentWidth - rightValue >= left
  const background = applyBgColor(
    colorScheme,
    !(leftValue <= left && rightBound && !disabled),
  )

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
