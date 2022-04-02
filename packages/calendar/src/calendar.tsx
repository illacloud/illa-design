import { forwardRef, useContext, useEffect, useMemo, useState } from "react"
import { CalendarHeader } from "./calendar-header"
import { CalendarBody } from "./calendar-body"
import { CalenderProps, defaultModeItem, selectTimeProps } from "./interface"
import { applyCalendarWrapCss } from "./styles"
import { css } from "@emotion/react"
import dayjs from "dayjs"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const Calendar = forwardRef<HTMLDivElement, CalenderProps>(
  (props, ref) => {
    const {
      _css,
      allowSelect = true,
      panel = false,
      panelWidth = 265,
      panelTodayBtn = true,
      panelOperations = ["left", "right", "double-left", "double-right"],
      dayStartOfWeek = 0,
      defaultMode = "month",
      mode = "",
      disabledDate,
      onChange,
      onPanelChange,
      dateRender,
      monthRender,
      dateInnerContent,
      headerRender,
      headerType = "button",

      datepickerDay,
      onChangeDatePickerDay,
      usedByDatepicker = false,
      rangeValueFirst,
      rangeValueSecond,
      rangeValueHover,
      handleRangeVal,
      selectDayFromProps,
      defaultPickerValue,
      ...restProps
    } = props

    const configProviderProps = useContext<ConfigProviderProps>(
      ConfigProviderContext,
    )
    const locale = configProviderProps?.locale?.calendar ?? def.calendar
    const monthListLocale = [
      locale?.January,
      locale?.February,
      locale?.March,
      locale?.April,
      locale?.May,
      locale?.June,
      locale?.July,
      locale?.August,
      locale?.September,
      locale?.October,
      locale?.November,
      locale?.December,
    ]

    const defaultDayValue =
      dayjs(defaultPickerValue) ||
      dayjs(
        `${dayjs().year()}-${dayjs().month() + 1}-${dayjs().date()} 12:00:00`,
      )
    const [defaultDay, setDefaultDay] = useState<dayjs.Dayjs>(defaultDayValue)

    const [selectDay, setSelectDay] = useState<number>(0)
    const [modeVal, setModeVal] = useState<defaultModeItem>(mode || defaultMode)
    const finAllowSelect = useMemo(() => {
      return panel === true ? true : allowSelect
    }, [panel])

    let currentDay: dayjs.Dayjs
    if (datepickerDay) {
      currentDay = datepickerDay
    } else {
      currentDay = defaultDay
    }

    const changeCurDate = (date: dayjs.Dayjs) => {
      if (datepickerDay) {
        onChangeDatePickerDay?.(date)
      } else {
        setDefaultDay?.(date)
      }
    }

    useEffect(() => {
      handleSelectDayFromProps()
    }, [selectDayFromProps])

    // click pre & next icon
    const changeTime = (type: string, modeProps?: defaultModeItem) => {
      let curYear = currentDay.year()
      let curMonth = currentDay.month()
      let curDay = currentDay.date()

      let base = 1
      let arithmetic = 1

      if (type === "pre") {
        arithmetic = -1
      } else if (type === "next") {
        arithmetic = 1
      }

      let finMode = modeProps || modeVal

      if (finMode === "month") {
        // days between this & next month
        if (type === "pre" && curMonth === 0) {
          base = currentDay.diff(dayjs(`${curYear - 1}-12-${curDay}`), "day")
        } else if (type === "next" && curMonth === 11) {
          base = currentDay.diff(dayjs(`${curYear + 1}-1-${curDay}`), "day")
        } else {
          base = currentDay.diff(
            dayjs(
              `${curYear}-${curMonth + arithmetic + 1}-${
                curDay > 28 ? 28 : curDay
              }`,
            ),
            "day",
          )
        }
      } else if (finMode === "year") {
        base =
          (curYear % 4 === 0 && curYear % 100 !== 0) || curYear % 400 === 0
            ? 366
            : 365
      }
      base = Math.abs(base)

      let result =
        currentDay.valueOf() + arithmetic * base * 24 * 60 * 60 * 1000
      changeCurDate(dayjs(result))

      onPanelChange?.(dayjs(result))
    }

    // select year or month
    const selectTime = (selectTimeProps: selectTimeProps) => {
      const { year, month } = selectTimeProps
      let curDay = defaultDayValue.date() > 28 ? 28 : defaultDayValue.date()
      changeCurDate(dayjs(`${year}-${month}-${curDay}`))
    }

    // select day
    const clickDay = (date: Date) => {
      if (usedByDatepicker) {
        clickRangeDay(date)
        return
      }
      if (selectDay === date.getTime()) {
        return
      }
      if (modeVal === "month" || modeVal === "day") {
        // if click pre or next month
        !usedByDatepicker && checkDifferentMonth(date)
      }
      setSelectDay(date.getTime())

      onChange?.(dayjs(date.getTime()))
    }
    const clickRangeDay = (date: Date) => {
      if (!handleRangeVal) {
        return
      }
      if (!rangeValueFirst && !rangeValueSecond) {
        handleRangeVal(dayjs(date).valueOf(), "first")
      } else if (rangeValueFirst && !rangeValueSecond) {
        handleRangeVal(dayjs(date).valueOf(), "second")
      } else if (rangeValueFirst && rangeValueSecond) {
        handleRangeVal(dayjs(date).valueOf(), "first")
        handleRangeVal(0, "second")
        handleRangeVal(0, "hover")
      }
    }

    const checkDifferentMonth = (date: Date) => {
      // compare year
      let sYear = dayjs(date).year()
      let cYear = currentDay.year()
      if (sYear < cYear) {
        changeTime("pre", "month")
      } else if (sYear > cYear) {
        changeTime("next", "month")
      } else if (sYear === cYear) {
        // compare month
        let sMonth = dayjs(date).month()
        let cMonth = currentDay.month()
        if (sMonth < cMonth) {
          changeTime("pre", "month")
        } else if (sMonth > cMonth) {
          changeTime("next", "month")
        }
      }
    }

    // jump to today
    const toToday = () => {
      changeCurDate(defaultDayValue)
      setSelectDay(new Date(new Date().toLocaleDateString()).getTime())

      onChange?.(dayjs(Date.now()))
    }

    const handleSelectDayFromProps = () => {
      if (!selectDayFromProps) return
      if (selectDayFromProps === "clear") {
        changeCurDate(defaultDayValue)
        setSelectDay(0)
      } else {
        if (!Array.isArray(selectDayFromProps)) {
          if (selectDayFromProps.isSame(dayjs(selectDay), "date")) {
            return
          }
          changeCurDate(selectDayFromProps)
          setSelectDay(selectDayFromProps.valueOf())
        }
      }
    }

    return (
      <div
        css={css(applyCalendarWrapCss(panel, panelWidth), _css)}
        ref={ref}
        {...restProps}
      >
        <CalendarHeader
          allowSelect={finAllowSelect}
          panel={panel}
          panelTodayBtn={panelTodayBtn}
          panelOperations={panelOperations}
          mode={modeVal}
          headerRender={headerRender}
          headerType={headerType}
          currentDay={currentDay}
          onChangeTime={(type: string, modeProps?: defaultModeItem) => {
            changeTime(type, modeProps)
          }}
          onSelectTime={(val: selectTimeProps) => {
            selectTime(val)
          }}
          onToToday={() => toToday()}
          onChangeMode={(mode: defaultModeItem) => setModeVal(mode)}
          locale={locale}
          monthListLocale={monthListLocale}
        />
        <CalendarBody
          allowSelect={finAllowSelect}
          panel={panel}
          panelTodayBtn={panelTodayBtn}
          dayStartOfWeek={dayStartOfWeek}
          mode={modeVal}
          disabledDate={disabledDate}
          onChange={onChange}
          dateRender={dateRender}
          monthRender={monthRender}
          dateInnerContent={dateInnerContent}
          currentDay={currentDay}
          selectDay={selectDay}
          onClickDay={(date: Date) => clickDay(date)}
          onToToday={() => toToday()}
          locale={locale}
          monthListLocale={monthListLocale}
          rangeValueFirst={rangeValueFirst}
          rangeValueSecond={rangeValueSecond}
          rangeValueHover={rangeValueHover}
          handleRangeVal={handleRangeVal}
        />
      </div>
    )
  },
)

Calendar.displayName = "Calendar"
