import { forwardRef, ReactNode, useContext } from "react"
import { BigCalendarProps } from "./interface"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import {
  applyDividerStyle,
  applyMonthBlockDayStyle,
  applyMonthBlockHeaderContainerStyle,
  applyMonthBlockHeaderStyle,
  applyMonthBlockStyle,
  applyMonthBlockTitleStyle,
  applyMonthContainerStyle,
  applyMonthDayContainerStyle,
  applyYearBigCalendarContainerStyle,
} from "./styles/year-big-calendar-style"

export const YearBigCalendar = forwardRef<HTMLDivElement, BigCalendarProps>(
  (props, ref) => {
    const { value, currentDate, onChange, colorScheme } = props

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )

    const locale = configProviderProps?.locale?.calendar ?? def.calendar

    const dayList: ReactNode[] = []

    for (let m = 0; m < 12; m++) {
      const monthDay: ReactNode[] = []
      const firstDay = currentDate
        .set("month", m)
        .startOf("month")
        .startOf("week")
      for (let i = 0; i < 42; i++) {
        const currentDay = firstDay.add(i, "day")
        monthDay.push(
          <div
            key={`${m} ${currentDay.year()} ${currentDay.month()} ${currentDay.date()}`}
            css={applyMonthBlockDayStyle(
              currentDay.year() === currentDate.year() &&
                currentDay.month() === m,
              currentDay.year() === value.year() &&
                currentDay.month() === value.month() &&
                currentDay.date() === value.date(),
              colorScheme,
            )}
            onClick={() => {
              onChange?.(currentDay)
            }}
          >
            {currentDay.date()}
          </div>,
        )
      }
      let monthDom = (
        <div
          className="container"
          key={`${m} ${currentDate.year()} ${currentDate.month()}`}
          css={applyMonthBlockStyle()}
        >
          <div css={applyMonthBlockTitleStyle()}>{`${m + 1} ${
            locale["month"]
          }`}</div>
          <div css={applyMonthBlockHeaderContainerStyle()}>
            <span css={applyMonthBlockHeaderStyle()}>{locale["Sunday"]}</span>
            <span css={applyMonthBlockHeaderStyle()}>{locale["Monday"]}</span>
            <span css={applyMonthBlockHeaderStyle()}>{locale["Tuesday"]}</span>
            <span css={applyMonthBlockHeaderStyle()}>
              {locale["Wednesday"]}
            </span>
            <span css={applyMonthBlockHeaderStyle()}>{locale["Thursday"]}</span>
            <span css={applyMonthBlockHeaderStyle()}>{locale["Friday"]}</span>
            <span css={applyMonthBlockHeaderStyle()}>{locale["Saturday"]}</span>
          </div>
          <div css={applyMonthDayContainerStyle()}>{monthDay}</div>
        </div>
      )
      dayList.push(monthDom)
    }

    return (
      <div ref={ref} css={applyYearBigCalendarContainerStyle()}>
        <div css={applyDividerStyle()} />
        <div css={applyMonthContainerStyle()}>{dayList}</div>
      </div>
    )
  },
)

YearBigCalendar.displayName = "YearBigCalendar"
