import { forwardRef, useState, useCallback } from "react"
import { throttleByRaf } from "@illa-design/system"
import { CalendarDaysProps } from "./interface"
import dayjs from "dayjs"
import {
  weekContainerCss,
  selectedDayStyle,
  applyContainerBlockCss,
  applyRangeSelectCss,
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
      rangeValueFirst,
      rangeValueSecond,
      rangeValueHover,
      handleRangeVal,
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
      let showSelectedStyle =
        (selectDay && dayjs(selectDay).isSame(dayjs(item), "date")) ||
        (rangeValueFirst &&
          dayjs(rangeValueFirst).isSame(dayjs(item), "date")) ||
        (rangeValueSecond &&
          dayjs(rangeValueSecond).isSame(dayjs(item), "date")) ||
        (rangeValueHover && dayjs(rangeValueHover).isSame(dayjs(item), "date"))
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

    const handleDateHover = useCallback(
      throttleByRaf((item) => {
        if (!rangeValueFirst) return
        if (rangeValueFirst && rangeValueSecond) return
        handleRangeVal?.(dayjs(item).valueOf(), "hover")
      }),
      [rangeValueFirst, rangeValueSecond],
    )

    const isHover = (date: Date) => {
      if (!rangeValueFirst || !rangeValueHover) return

      let curDate = dayjs(date).valueOf()
      let compareBase = rangeValueSecond || rangeValueHover
      return (
        (curDate <= rangeValueFirst &&
          curDate >= compareBase &&
          isCurrentMonth(date)) ||
        (curDate >= rangeValueFirst &&
          curDate <= compareBase &&
          isCurrentMonth(date))
      )
    }

    const rangeSelectStyle = (date: Date) => {
      if (!rangeValueFirst) {
        return
      }
      let curDate = dayjs(date).valueOf()
      let compareBase
      if (curDate === rangeValueFirst) {
        compareBase = rangeValueSecond || rangeValueHover
        if (!compareBase) return
        if (curDate < compareBase) {
          return applyRangeSelectCss("left")
        } else if (curDate > compareBase) {
          return applyRangeSelectCss("right")
        } else if (curDate === compareBase) {
          return applyRangeSelectCss("mid")
        }
      }
      if (curDate === rangeValueHover) {
        if (rangeValueHover > rangeValueFirst) {
          return applyRangeSelectCss("right")
        } else if (rangeValueHover < rangeValueFirst) {
          return applyRangeSelectCss("left")
        } else if (rangeValueHover === rangeValueFirst) {
          return applyRangeSelectCss("mid")
        }
      }
      if (curDate === rangeValueSecond) {
        if (curDate < rangeValueFirst) {
          return applyRangeSelectCss("left")
        } else if (curDate > rangeValueFirst) {
          return applyRangeSelectCss("right")
        } else if (curDate === rangeValueFirst) {
          return applyRangeSelectCss("mid")
        }
      }
    }

    return (
      <div css={weekContainerCss} ref={ref} {...restProps}>
        {thisMonthData().map((item: any, index: number) => {
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
