import React, { memo, useEffect, useState } from "react"
import { InputNumber } from "@illa-design/input-number"
import { InputProps } from "./interface"
import {
  applySliderInput,
  applySliderInputRange,
  applySliderInputRangeContent,
} from "./style"

export default memo(function Input(props: InputProps) {
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
      css={applySliderInput(vertical)}
      role={"input-number"}
    >
      {range && [
        <InputNumber
          style={{
            width: `58px`,
            height: `32px`,
            lineHeight: `normal`,
            overflow: `visible`,
          }}
          value={innerValue[0]}
          key={0}
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
        style={{
          width: `58px`,
          height: `32px`,
          lineHeight: `normal`,
          overflow: `visible`,
        }}
        key={2}
        value={innerValue[1]}
        {...inputProps}
        onChange={(val) => {
          handleChange([innerValue[0], val!])
        }}
      />
    </div>
  )
})
