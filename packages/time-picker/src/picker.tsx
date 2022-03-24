/** @jsxImportSource @emotion/react */
import * as React from "react"
import { forwardRef } from "react"
import { Picker } from "./render-picker"
import {
  RangePickerProps,
  TimePickerProps,
  RenderPickerProps,
} from "./interface"
import { TimePickerPopup } from "./time-picker-popup"

export const TimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
  (props, ref) => {
    return (
      <Picker
        {...(props as RenderPickerProps)}
        ref={ref}
        picker={<TimePickerPopup />}
      />
    )
  },
)

TimePicker.displayName = "TimePicker"

export const RangePicker = forwardRef<HTMLDivElement, RangePickerProps>(
  (props, ref) => {
    return (
      <Picker
        {...(props as RenderPickerProps)}
        ref={ref}
        picker={<div>TimePickerPopup</div>}
      />
    )
  },
)

RangePicker.displayName = "RangePicker"
