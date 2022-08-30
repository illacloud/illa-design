import { forwardRef } from "react"
import {
  DatePickerProps,
  MonthPickerProps,
  YearPickerProps,
} from "../interface"
import { Picker } from "../picker"

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    return <Picker {...props} ref={ref} type={"day"} />
  },
)

DatePicker.displayName = "DatePicker"

export const MonthPicker = forwardRef<HTMLDivElement, MonthPickerProps>(
  (props, ref) => {
    return <Picker {...props} ref={ref} type={"month"} />
  },
)

MonthPicker.displayName = "MonthPicker"

export const YearPicker = forwardRef<HTMLDivElement, YearPickerProps>(
  (props, ref) => {
    return <Picker {...props} ref={ref} type={"year"} />
  },
)

YearPicker.displayName = "YearPicker"
