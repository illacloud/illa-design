import { memo, useEffect, useState } from "react"
import { InputNumber } from "@illa-design/input-number"
import { SliderInputProps } from "./interface"
import {
  applySliderInput,
  applySliderInputNumber,
  applySliderInputRange,
  applySliderInputRangeContent,
} from "./style"
import { applyBoxStyle } from "@illa-design/theme"

export default memo(function Input(props: SliderInputProps) {
  const { value, range, min, max, step, disabled, vertical, onChange } = props
  const inputProps = {
    min,
    max,
    step,
    disabled,
  }
  const [innerValue, setInnerValue] = useState(value)
  useEffect(() => {
    setInnerValue(value)
  }, [value])

  const handleChange = (val: [number, number]) => {
    onChange?.(val)
  }

  const handleBlur = () => {
    setInnerValue([...value].sort((a, b) => a - b))
  }

  return (
    <div
      onBlur={handleBlur}
      css={[applySliderInput(vertical), applyBoxStyle(props)]}
      role={"input-number"}
    >
      {range && [
        <InputNumber
          style={applySliderInputNumber}
          value={innerValue[0]}
          key={0}
          size={"small"}
          {...inputProps}
          onChange={(val) => {
            handleChange([val!, innerValue[1]])
          }}
        />,
        <div css={applySliderInputRange} key={1}>
          <span css={applySliderInputRangeContent} />
        </div>,
      ]}
      <InputNumber
        style={applySliderInputNumber}
        key={2}
        size={"small"}
        value={innerValue[1]}
        {...inputProps}
        onChange={(val) => {
          handleChange([innerValue[0], val!])
        }}
      />
    </div>
  )
})
