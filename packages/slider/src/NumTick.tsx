import { FC } from "react"
import { SliderNumTick } from "./interface"
import { applyNumTick } from "./style"
export const NumTick: FC<SliderNumTick> = (props) => {
  const { left, disabled, tickClick, value } = props

  const onClick = () => {
    if (disabled) return
    tickClick(value)
  }
  return (
    <div css={applyNumTick(left, disabled)} onClick={onClick}>
      {value}
    </div>
  )
}
