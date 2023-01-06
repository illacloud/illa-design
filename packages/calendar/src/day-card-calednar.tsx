import { forwardRef, ReactNode, useContext, useMemo } from "react"
import { CardCalendarProps } from "./interface"
import {
  applyMenuContainerStyle,
  applyDayCardBlockStyle,
  applyDayCardCalendarStyle,
  applyDayCardTitleContainerStyle,
  applyDayCardTitleStyle,
  menuButtonStyle,
  dayCardTodayStyle,
} from "./styles/day-card-calendar-style"
import {
  NextDoubleIcon,
  NextIcon,
  PreviousDoubleIcon,
  PreviousIcon,
} from "@illa-design/icon"
import { applyBoxStyle, deleteCssProps, getColor } from "@illa-design/theme"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
  koKR,
  zhCN,
} from "@illa-design/config-provider"
import { getMonthString } from "./util"
import { applyDividerStyle } from "./style"
import dayjs from "dayjs"
import {
  applyMonthBlockDayStyle,
  applyMonthBlockHeaderContainerStyle,
  applyMonthBlockHeaderStyle,
  applyMonthDayContainerStyle,
} from "./styles/year-big-calendar-style"

export const DayCardCalendar = forwardRef<HTMLDivElement, CardCalendarProps>(
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

    const today = dayjs(new Date())

    const monthDay: ReactNode[] = []
    const firstDay = currentDate.startOf("month").startOf("week")
    for (let i = 0; i < 42; i++) {
      const currentDay = firstDay.add(i, "day")
      monthDay.push(
        <div
          key={`${currentDay.year()} ${currentDay.month()} ${currentDay.date()}`}
          css={applyMonthBlockDayStyle(
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
          onClick={() => {
            onChange?.(currentDay)
          }}
        >
          {currentDay.date()}
        </div>,
      )
    }

    const title = useMemo(() => {
      if (
        configProviderProps?.locale === zhCN ||
        configProviderProps?.locale === koKR
      ) {
        return `${currentDate.year()}${locale["year"]}${
          currentDate.month() + 1
        }${locale["month"]}`
      } else {
        return `${getMonthString(
          currentDate.month(),
          locale,
        )} ${currentDate.year()}`
      }
    }, [configProviderProps?.locale, currentDate, locale])

    return (
      <div
        css={[applyDayCardCalendarStyle(), applyBoxStyle(otherProps)]}
        ref={ref}
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
            <span
              css={menuButtonStyle}
              onClick={() => {
                onCurrentDateChange?.(currentDate.subtract(1, "month"))
              }}
            >
              <PreviousIcon fs="12px" c={getColor("grayBlue", "02")} />
            </span>
          </div>
          <div css={applyDayCardTitleStyle()}>{title}</div>
          <div css={applyMenuContainerStyle()}>
            <span
              css={menuButtonStyle}
              onClick={() => {
                onCurrentDateChange?.(currentDate.add(1, "month"))
              }}
            >
              <NextIcon fs="12px" c={getColor("grayBlue", "02")} />
            </span>
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
        <div css={applyDayCardBlockStyle()}>
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
        {panelTodayBtn && (
          <>
            <div css={applyDividerStyle()} />
            <div
              css={dayCardTodayStyle}
              onClick={() => {
                const today = dayjs(new Date())
                onChange?.(today)
                if (
                  value.year() !== today.year() ||
                  value.month() !== today.month()
                ) {
                  onCurrentDateChange?.(today)
                }
              }}
            >
              {locale["today"]}
            </div>
          </>
        )}
      </div>
    )
  },
)

DayCardCalendar.displayName = "DayCardCalendar"
