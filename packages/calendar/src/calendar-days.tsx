import { forwardRef, useCallback } from "react"
import { throttleByRaf } from "@illa-design/system"
import isToday from "dayjs/plugin/isToday"
import dayjs, { Dayjs } from "dayjs"
import {
  weekContainerCss,
  selectedDayStyle,
  applyContainerBlockCss,
  applyRangeSelectCss,
  dayItemPanelCss,
  dayItemCss,
  disabledCss,
  applyCurrentColorCss,
  isTodayStyle,
} from "./styles"
import { css } from "@emotion/react"
import { CalendarDaysProps } from "./interface"

dayjs.extend(isToday)

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
      rangeValueFirst,
      rangeValueSecond,
      rangeValueHover,
      handleRangeVal,
      isTodayTarget,
      ...restProps
    } = props

    const currentYear = componentYear || dayjs().year()
    const currentMonth = Number.isInteger(componentMonth)
      ? componentMonth
      : dayjs().month()
    // init data
    const monthData = () => {
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
        calendarStart =
          +firstDayDate - (dayStartOfWeek === 0 ? 0 : 6) * 24 * 60 * 60 * 1000
      } else {
        calendarStart =
          +firstDayDate -
          (firstDayWeek - (dayStartOfWeek || 0)) * 24 * 60 * 60 * 1000
      }

      let calendarArr: any = []
      for (let i = 0; i < 42; i++) {
        calendarArr.push({
          date: dayjs(calendarStart + i * 24 * 60 * 60 * 1000),
        })
      }
      return calendarArr
    }

    // each day style
    const handleMonthTypeDayText = (
      item: Dayjs,
      month?: number | null,
      disabled?: boolean,
    ) => {
      let showSelectedStyle =
        (selectDay && selectDay.isSame(item, "date")) ||
        (rangeValueFirst && rangeValueFirst.isSame(item, "date")) ||
        (rangeValueSecond && rangeValueSecond.isSame(item, "date")) ||
        (rangeValueHover && rangeValueHover.isSame(item, "date"))
      if (Number.isInteger(month)) {
        showSelectedStyle = showSelectedStyle && isCurrentMonth(item, month)
      }
      return css`
        ${componentMode ? dayItemPanelCss : dayItemCss};
        ${applyCurrentColorCss(isCurrentMonth(item, month))};
        ${showSelectedStyle && selectedDayStyle};
        ${disabled && disabledCss};
        ${isTodayTarget &&
        isCurrentMonth(item, month) &&
        item.isToday() &&
        isTodayStyle}
      `
    }
    const isCurrentMonth = (item: Dayjs, month?: number | null) => {
      let monthCount = Number.isInteger(month) ? month : currentMonth
      return currentYear === item.year() && monthCount === item.month()
    }

    const handleDateHover = useCallback(
      throttleByRaf((item) => {
        if (!rangeValueFirst) return
        if (rangeValueFirst && rangeValueSecond) return
        handleRangeVal?.(item, "hover")
      }),
      [rangeValueFirst, rangeValueSecond],
    )

    const isHover = (date: Dayjs) => {
      if (!rangeValueFirst) return

      let compareBase = rangeValueSecond || rangeValueHover
      if (!compareBase) return
      if (
        (date.isSame(rangeValueFirst, "date") ||
          date.isBefore(rangeValueFirst, "date")) &&
        (date.isSame(compareBase, "date") ||
          date.isAfter(compareBase, "date")) &&
        isCurrentMonth(date)
      ) {
        return true
      }
      if (
        (date.isSame(rangeValueFirst, "date") ||
          date.isAfter(rangeValueFirst, "date")) &&
        (date.isSame(compareBase, "date") ||
          date.isBefore(compareBase, "date")) &&
        isCurrentMonth(date)
      ) {
        return true
      }
      return false
    }

    const rangeSelectStyle = (date: Dayjs) => {
      if (!rangeValueFirst) {
        return
      }
      let compareBase
      if (date.isSame(rangeValueFirst, "date")) {
        compareBase = rangeValueSecond || rangeValueHover
        if (!compareBase) return
        if (date.isBefore(compareBase, "date")) {
          return applyRangeSelectCss("left")
        } else if (date.isAfter(compareBase, "date")) {
          return applyRangeSelectCss("right")
        } else if (date.isSame(compareBase, "date")) {
          return applyRangeSelectCss("mid")
        }
      }
      if (date.isSame(rangeValueHover, "date")) {
        if (rangeValueHover?.isAfter(rangeValueFirst, "date")) {
          return applyRangeSelectCss("right")
        } else if (rangeValueHover?.isBefore(rangeValueFirst, "date")) {
          return applyRangeSelectCss("left")
        } else if ((rangeValueHover?.isSame(rangeValueFirst), "date")) {
          return applyRangeSelectCss("mid")
        }
      }
      if (date.isSame(rangeValueSecond, "date")) {
        if (rangeValueSecond?.isBefore("rangeValueFirst", "date")) {
          return applyRangeSelectCss("left")
        } else if (rangeValueSecond?.isAfter(rangeValueFirst, "date")) {
          return applyRangeSelectCss("right")
        } else if (rangeValueSecond?.isSame(rangeValueFirst, "date")) {
          return applyRangeSelectCss("mid")
        }
      }
    }

    return (
      <div css={weekContainerCss} ref={ref} {...restProps}>
        {monthData().map((item: any, index: number) => {
          let disabled =
            typeof disabledDate === "function" && disabledDate(item.date)
          return (
            <div
              css={css(
                applyContainerBlockCss(
                  componentMode,
                  disabled,
                  isHover(item.date),
                ),
                rangeSelectStyle(item.date),
              )}
              key={index}
              onClick={() => !disabled && onClickDay?.(item.date)}
              onMouseEnter={() => {
                handleDateHover(item.date)
              }}
            >
              <div
                css={handleMonthTypeDayText(item.date, currentMonth, disabled)}
              >
                {dateRender ? dateRender(item.date) : item.date.date()}
                {/* use dateInnerContent only "panel" is false and mode is "month" */}
                {!componentMode && dateInnerContent}
              </div>
            </div>
          )
        })}
      </div>
    )
  },
)

CalendarDays.displayName = "CalendarDays"
