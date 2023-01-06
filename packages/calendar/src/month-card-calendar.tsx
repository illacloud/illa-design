import { forwardRef, useContext } from "react"
import { CardCalendarProps } from "./interface"
import { applyBoxStyle, deleteCssProps, getColor } from "@illa-design/theme"
import {
  applyMonthBlockStyle,
  monthCardContainerStyle,
  monthCardContentContainerStyle,
} from "./styles/month-card-calendar-style"
import {
  applyMenuContainerStyle,
  applyDayCardTitleContainerStyle,
  applyDayCardTitleStyle,
  menuButtonStyle,
} from "./styles/day-card-calendar-style"
import { NextDoubleIcon, PreviousDoubleIcon } from "@illa-design/icon"
import { applyDividerStyle } from "./style"
import { getMonthString } from "./util"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const MonthCardCalendar = forwardRef<HTMLDivElement, CardCalendarProps>(
  (props, ref) => {
    const {
      colorScheme,
      value,
      currentDate,
      onChange,
      onCurrentDateChange,
      panelTodayBtn,
      ...otherProps
    } = props

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )

    const locale = configProviderProps?.locale?.calendar ?? def.calendar

    return (
      <div
        ref={ref}
        css={[monthCardContainerStyle, applyBoxStyle(otherProps)]}
        {...deleteCssProps(otherProps)}
      >
        <div css={applyDayCardTitleContainerStyle()}>
          <div css={applyMenuContainerStyle()}>
            <span
              css={menuButtonStyle}
              onClick={() => {
                onCurrentDateChange?.(currentDate.subtract(1, "year"))
              }}
            >
              <PreviousDoubleIcon fs="12px" c={getColor("grayBlue", "02")} />
            </span>
          </div>
          <div css={applyDayCardTitleStyle()}>{currentDate.year()}</div>
          <div css={applyMenuContainerStyle()}>
            <span
              css={menuButtonStyle}
              onClick={() => {
                onCurrentDateChange?.(currentDate.add(1, "year"))
              }}
            >
              <NextDoubleIcon fs="12px" c={getColor("grayBlue", "02")} />
            </span>
          </div>
        </div>
        <div css={applyDividerStyle()} />
        <div css={monthCardContentContainerStyle}>
          {Array.from({ length: 12 }).map((_, index) => {
            return (
              <div
                key={getMonthString(index, locale)}
                css={applyMonthBlockStyle(
                  value.year() === currentDate.year() &&
                    value.month() === index,
                  colorScheme,
                )}
                onClick={() => {
                  onChange?.(currentDate.set("month", index))
                }}
              >
                {getMonthString(index, locale)}
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)

MonthCardCalendar.displayName = "MonthCardCalendar"
