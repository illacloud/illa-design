import React, { memo, useEffect, useState } from "react"
import { InputNumber } from "@illa-design/input-number"
import { InputProps } from "./interface"

export default memo(function Input(props: InputProps) {
  const { value, range, min, max, step, disabled, onChange } = props
  const inputProps = {
    min,
    max,
    step,
    disabled,
    hideControl: true,
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
    <div onBlur={handleBlur}>
      {range && [
        <InputNumber
          value={innerValue[0]}
          key={0}
          {...inputProps}
          onChange={(val) => {
            handleChange([val!, innerValue[1]])
          }}
        />,
        <div key={1}>
          <span />
        </div>,
      ]}
      <InputNumber
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
