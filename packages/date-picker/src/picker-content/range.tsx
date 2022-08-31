import { forwardRef } from "react"
import { DateRangePickerProps } from "../interface"
import { PickerRange } from "../picker-range"

export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (props, ref) => {

    return (
      <PickerRange
        ref={ref}
        {...props}
      />
    )
  },
)

DateRangePicker.displayName = "rangePicker"
