/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { InputNumberProps } from "./interface"

export const InputNumber = forwardRef<HTMLDivElement, InputNumberProps>(
  (props, ref) => {
    const {
      style,
      className,
      ...rest
    } = props


    return (
      <div
        style={style}
        className={className}
      >
        inputNumber
      </div>
    )
  },
)

InputNumber.displayName = "InputNumber"
