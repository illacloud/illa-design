import { forwardRef } from "react"
import { CalendarProps } from "./interface"

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    return <div ref={ref}></div>
  },
)

Calendar.displayName = "Calendar"
