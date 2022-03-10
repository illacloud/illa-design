/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { InputNumberProps } from "./interface"

export const InputNumber = forwardRef<HTMLDivElement, InputNumberProps>(
  (props, ref) => {
    const {
      style,
      className,
      defaultValue,
      value,
      disabled,
      error,
      placeholder,
      suffix,
      prefix,
      icons,
      precision,
      size,
      step = 1,
      mode = "embed",
      min = -Infinity,
      max = Infinity,
      parser = (input) => input.replace(/[^\w\.-]+/g, ""),
      formatter,
      onBlur,
      onFocus,
      onChange,
      onKeyDown,
      ...rest
    } = props

    return (
      <div style={style} className={className}>
        inputNumber
      </div>
    )
  },
)

InputNumber.displayName = "InputNumber"
