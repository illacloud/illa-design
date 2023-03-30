import { FC } from "react"
import { SliderNumTick } from "./interface"
import { applyNumTick } from "./style"
export const NumTick: FC<SliderNumTick> = (props) => {
  const { left, disabled, value } = props

  return (
    <div css={applyNumTick(left, disabled)} data-value={value}>
      {value}
    </div>
  )
}
