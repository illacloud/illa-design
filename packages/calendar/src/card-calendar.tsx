import { forwardRef, useContext } from "react"
import { CalendarProps } from "./interface"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const CardCalendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )

    const locale = configProviderProps?.locale?.calendar ?? def.calendar

    return <div ref={ref}></div>
  },
)

CardCalendar.displayName = "CardCalendar"
