/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef, useEffect, useContext, useCallback } from "react"
import { useMergeValue } from "@illa-design/system"
import { CheckmarkIcon, ReduceIcon } from "@illa-design/icon"
import { TimePickerProps } from "./interface"

export const TimePicker = forwardRef<HTMLLabelElement, TimePickerProps>(
  (props, ref) => {
    const {
      children,
      disabled,
      value,
      onChange,
      ...otherProps
    } = props


    return (
      <div>
        111
      </div>
    )
  },
)

TimePicker.displayName = "TimePicker"
