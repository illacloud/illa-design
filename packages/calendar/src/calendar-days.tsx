import { forwardRef } from "react"
import { CalendarDaysProps } from "./interface"
import dayjs from "dayjs"
import {
  weekContainerCss,
  selectedDayStyle,
  applyContainerBlockCss,
  dayItemPanelCss,
  dayItemCss,
  disabledCss,
  applyCurrentColorCss,
} from "./styles"
import { css } from "@emotion/react"

export const CalendarDays = forwardRef<HTMLDivElement, CalendarDaysProps>(
  (props, ref) => {
    const {
      componentMode,
      componentYear,
      componentMonth,
      dayStartOfWeek,
      onChange,
      disabledDate,
      dateRender,
      dateInnerContent,
      selectDay,
      onClickDay,
      ...restProps
    } = props

    const currentYear = componentYear || dayjs().year()
    const currentMonth = Number.isInteger(componentMonth)
      ? componentMonth
      : dayjs().month()

    // each month data
    const thisMonthData = () => {
      // first day in the month
      let firstDayDate = new Date(
        currentYear as number,
        currentMonth as number,
        1,
      )
      // week of the first day in the month
      let firstDayWeek = firstDayDate.getDay()
      // calendar first day
      let calendarStart
      if (firstDayWeek === 0) {
        calendarStart = +firstDayDate - 6 * 24 * 60 * 60 * 1000
      } else {
        calendarStart =
          +firstDayDate -
          (firstDayWeek - (dayStartOfWeek || 0)) * 24 * 60 * 60 * 1000
      }

      let calendarArr: any = []
      for (let i = 0; i < 42; i++) {
        calendarArr.push({
          date: new Date(calendarStart + i * 24 * 60 * 60 * 1000),
        })
      }
      return calendarArr
    }

    // each day style
    const handleMonthTypeDayText = (
      item: Date,
      month?: number | null,
      disabled?: boolean,
    ) => {
      let showSelectedStyle = item.getTime() === selectDay
      if (Number.isInteger(month)) {
        showSelectedStyle = showSelectedStyle && isCurrentMonth(item, month)
      }
      return css`
        ${componentMode ? dayItemPanelCss : dayItemCss};
        ${applyCurrentColorCss(isCurrentMonth(item, month))};
        ${showSelectedStyle && selectedDayStyle};
        ${disabled && disabledCss};
      `
    }
    const isCurrentMonth = (item: Date, month?: number | null) => {
      let monthCount = Number.isInteger(month) ? month : currentMonth
      return (
        currentYear === item.getFullYear() && monthCount === item.getMonth()
      )
    }

    return (
      <div css={weekContainerCss} ref={ref} {...restProps}>
        {thisMonthData().map((item: any, index: number) => {
          let disabled =
            typeof disabledDate === "function" && disabledDate(item.date)
          return (
            <div
              css={applyContainerBlockCss(componentMode, disabled)}
              key={index}
              onClick={() => !disabled && onClickDay && onClickDay(item.date)}
            >
              {dateRender ? (
                dateRender
              ) : (
                <div
                  css={handleMonthTypeDayText(
                    item.date,
                    currentMonth,
                    disabled,
                  )}
                >
                  {item.date.getDate()}
                  {dateInnerContent}
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  },
)

CalendarDays.displayName = "CalendarDays"
