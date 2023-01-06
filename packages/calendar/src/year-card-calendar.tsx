import { forwardRef, useContext } from "react"
import { CardCalendarProps } from "./interface"
import { applyBoxStyle, deleteCssProps, getColor } from "@illa-design/theme"
import {
  applyMonthBlockStyle,
  yearCardContainerStyle,
  yearCardContentContainerStyle,
} from "./styles/year-card-calendar-style"
import {
  applyMenuContainerStyle,
  applyMonthCardTitleContainerStyle,
  applyMonthCardTitleStyle,
  menuButtonStyle,
} from "./styles/month-card-calendar-style"
import { NextDoubleIcon, PreviousDoubleIcon } from "@illa-design/icon"
import { applyDividerStyle } from "./style"
import { getMonthString } from "./util"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const YearCardCalendar = forwardRef<HTMLDivElement, CardCalendarProps>(
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
        css={[yearCardContainerStyle, applyBoxStyle(otherProps)]}
        {...deleteCssProps(otherProps)}
      >
        <div css={applyMonthCardTitleContainerStyle()}>
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
          <div css={applyMonthCardTitleStyle()}>{currentDate.year()}</div>
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
        <div css={yearCardContentContainerStyle}>
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

YearCardCalendar.displayName = "YearCardCalendar"
