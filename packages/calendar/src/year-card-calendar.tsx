import { forwardRef } from "react"
import { BigCalendarProps, CardCalendarProps } from "./interface"

export const YearCardCalendar = forwardRef<HTMLDivElement, CardCalendarProps>(
  (props, ref) => {
    return <div></div>
  },
)

YearCardCalendar.displayName = "YearCardCalendar"
