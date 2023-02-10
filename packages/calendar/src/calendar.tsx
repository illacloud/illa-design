import { forwardRef, useEffect } from "react"
import { CalendarProps } from "./interface"
import * as dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import { CardCalendar } from "./card-calendar"
import { CompleteCalendar } from "./complete-calendar"

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const { panel } = props

    useEffect(() => {
      dayjs.extend(utc)
      dayjs.extend(timezone)
      // eslint-disable-next-line import/namespace
      dayjs.tz.guess()
    }, [])

    if (panel) {
      return <CardCalendar {...props} />
    } else {
      return <CompleteCalendar {...props} />
    }
  },
)

Calendar.displayName = "Calendar"
