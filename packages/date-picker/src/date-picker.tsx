import { forwardRef } from "react"
import { DatePickerProps } from "./interface"

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    return <div ref={ref}></div>
  },
)

DatePicker.displayName = "DatePicker"
