import { forwardRef, ReactNode, useContext } from "react"
import { BigCalendarProps } from "./interface"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import {
  applyBlockDayStyle,
  applyLineStyle,
  applyMonthBigCalendarStyle,
  applyWeekStyle,
  applyWeekTitleHeaderContainerStyle,
  applyWeekTitleStyle,
  blockContainerStyle,
} from "./styles/month-big-calendar-style"
import dayjs from "dayjs"

export const MonthBigCalendar = forwardRef<HTMLDivElement, BigCalendarProps>(
  (props, ref) => {
    const { value, currentDate, onChange, colorScheme } = props

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )

    const locale = configProviderProps?.locale?.calendar ?? def.calendar

    const dayList: ReactNode[] = []
    const firstDay = currentDate.startOf("month").startOf("week")
    const today = dayjs(new Date())

    for (let i = 0; i < 42; i++) {
      const currentDay = firstDay.add(i, "day")
      dayList.push(
        <div
          className="container"
          key={`${currentDay.year()} ${currentDay.month()} ${currentDay.date()}`}
          css={blockContainerStyle}
          onClick={() => {
            onChange?.(currentDay)
          }}
        >
          <div
            css={applyBlockDayStyle(
              today.year() === currentDay.year() &&
                today.month() === currentDay.month() &&
                today.date() === currentDay.date(),
              currentDay.year() === currentDate.year() &&
                currentDay.month() === currentDate.month(),
              currentDay.year() === value.year() &&
                currentDay.month() === value.month() &&
                currentDay.date() === value.date(),
              colorScheme,
            )}
          >
            {currentDay.date()}
          </div>
        </div>,
      )
    }

    return (
      <div css={applyMonthBigCalendarStyle()} ref={ref}>
        <div css={applyWeekTitleHeaderContainerStyle()}>
          <span css={applyWeekTitleStyle()}>{locale["Sunday"]}</span>
          <span css={applyWeekTitleStyle()}>{locale["Monday"]}</span>
          <span css={applyWeekTitleStyle()}>{locale["Tuesday"]}</span>
          <span css={applyWeekTitleStyle()}>{locale["Wednesday"]}</span>
          <span css={applyWeekTitleStyle()}>{locale["Thursday"]}</span>
          <span css={applyWeekTitleStyle()}>{locale["Friday"]}</span>
          <span css={applyWeekTitleStyle()}>{locale["Saturday"]}</span>
        </div>
        <div css={applyLineStyle} />
        <div css={applyWeekStyle()}>{dayList}</div>
      </div>
    )
  },
)

MonthBigCalendar.displayName = "MonthBigCalendar"
