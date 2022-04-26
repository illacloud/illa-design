import { forwardRef } from "react"
import { Picker } from "./render-picker"
import {
  RangePickerProps,
  TimePickerProps,
  RenderPickerProps,
} from "./interface"
import { TimePickerPopup } from "./time-picker-popup"
import { RangePickerPopup } from "./range-picker-popup"

export const TPTimePicker = forwardRef<HTMLDivElement, TimePickerProps>(
  (props, ref) => {
    return (
      <Picker
        {...(props as RenderPickerProps)}
        ref={ref}
        popup={<TimePickerPopup />}
      />
    )
  },
)

export const TPRangePicker = forwardRef<HTMLDivElement, RangePickerProps>(
  (props, ref) => {
    return (
      <Picker
        {...(props as RenderPickerProps)}
        ref={ref}
        popup={<RangePickerPopup />}
        isRangePicker
      />
    )
  },
)

TPTimePicker.displayName = "TPTimePicker"
TPRangePicker.displayName = "TPRangePicker"
