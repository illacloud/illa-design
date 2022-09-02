import { forwardRef } from "react"
import { DateRangePickerProps } from "../interface"
import { RangePicker } from "../range-picker"

export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (props, ref) => {
    return <RangePicker ref={ref} {...props} />
  },
)

DateRangePicker.displayName = "DateRangePicker"
