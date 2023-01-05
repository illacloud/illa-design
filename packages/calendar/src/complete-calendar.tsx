import { forwardRef, useContext, useMemo, useState } from "react"
import { CalendarProps } from "./interface"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import {
  applyCalendarContainerStyle,
  applyCalendarHeaderStyle,
  headerPageIconStyle,
  headerPageStyle,
  headerSelectContainerStyle,
  headerSpaceStyle,
  headerTextStyle,
} from "./styles/complete-calendar-style"
import { useMergeValue } from "@illa-design/system"
import dayjs, { Dayjs } from "dayjs"
import { NextIcon, PreviousIcon } from "@illa-design/icon"
import { Button } from "@illa-design/button"
import { RadioGroup } from "@illa-design/radio"
import { MonthBigCalendar } from "./month-big-calendar"
import { YearBigCalendar } from "./year-big-calendar"
import { Select } from "@illa-design/select"

export const CompleteCalendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      colorScheme = "blue",
      headerType = "button",
      onChange,
    } = props

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )

    const locale = configProviderProps?.locale?.calendar ?? def.calendar

    const [selectedDate, setSelectedDate] = useMergeValue<Dayjs>(
      dayjs(new Date()),
      {
        defaultValue: defaultValue,
        value: value,
      },
    )

    const [currentDate, setCurrentDate] = useState(selectedDate)

    const [selectType, setSelectType] = useState<"month" | "year">("month")

    const headerDom = useMemo(() => {
      if (headerType === "button") {
        return (
          <>
            <div css={headerTextStyle}>{`${currentDate.year()} ${
              locale["year"]
            } ${
              selectType === "month"
                ? `${currentDate.month() + 1} ${locale["month"]}`
                : ""
            }`}</div>
            <div css={headerPageStyle}>
              <span
                css={headerPageIconStyle}
                onClick={() => {
                  if (selectType === "month") {
                    setCurrentDate(currentDate.subtract(1, "month"))
                  } else {
                    setCurrentDate(currentDate.subtract(1, "year"))
                  }
                }}
              >
                <PreviousIcon fs="12px" />
              </span>
              <span
                css={headerPageIconStyle}
                onClick={() => {
                  if (selectType === "month") {
                    setCurrentDate(currentDate.add(1, "month"))
                  } else {
                    setCurrentDate(currentDate.add(1, "year"))
                  }
                }}
              >
                <NextIcon fs="12px" />
              </span>
            </div>
          </>
        )
      } else {
        const yearOptions: number[] = []
        for (let i = -10; i < 21; i++) {
          yearOptions.push(currentDate.year() + i)
        }
        return (
          <div css={headerSelectContainerStyle}>
            <Select
              w="107px"
              value={currentDate.year()}
              options={yearOptions}
              onChange={(v) => {
                setCurrentDate(currentDate.set("year", v as number))
              }}
            />
            {selectType === "month" && (
              <Select
                w="91px"
                value={currentDate.month() + 1}
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                ml="8px"
                onChange={(v) => {
                  setCurrentDate(currentDate.set("month", (v as number) - 1))
                }}
              />
            )}
          </div>
        )
      }
    }, [currentDate, headerType, locale, selectType])

    return (
      <div css={applyCalendarContainerStyle()} ref={ref}>
        <div css={applyCalendarHeaderStyle()}>
          {headerDom}
          <Button
            ml="32px"
            colorScheme="gray"
            variant="fill"
            onClick={() => {
              const today = dayjs(new Date())
              if (value === undefined) {
                setCurrentDate(today)
                setSelectedDate(today)
              }
              onChange?.(today)
            }}
          >
            {locale["today"]}
          </Button>
          <div css={headerSpaceStyle} />
          <RadioGroup
            value={selectType}
            onChange={(v) => setSelectType(v)}
            colorScheme={colorScheme}
            type="button"
            options={[
              {
                label: locale["month"],
                value: "month",
              },
              {
                label: locale["year"],
                value: "year",
              },
            ]}
          />
        </div>
        {selectType === "month" ? (
          <MonthBigCalendar
            value={selectedDate}
            currentDate={currentDate}
            onChange={(v) => {
              if (value === undefined) {
                setSelectedDate(v)
              }
              setCurrentDate(v)
              onChange?.(v)
            }}
            colorScheme={colorScheme}
          />
        ) : (
          <YearBigCalendar
            value={selectedDate}
            currentDate={currentDate}
            onChange={(v) => {
              if (value === undefined) {
                setSelectedDate(v)
              }
              setCurrentDate(v)
              onChange?.(v)
            }}
            colorScheme={colorScheme}
          />
        )}
      </div>
    )
  },
)

CompleteCalendar.displayName = "CompleteCalendar"
