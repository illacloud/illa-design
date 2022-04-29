import { forwardRef, useContext, useEffect, useMemo, useState } from "react"
import { CalendarHeader } from "./calendar-header"
import { CalendarBody } from "./calendar-body"
import { CalenderProps, defaultModeItem, selectTimeProps } from "./interface"
import { applyCalendarWrapCss } from "./styles"
import { css } from "@emotion/react"
import dayjs, { Dayjs } from "dayjs"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const Calendar = forwardRef<HTMLDivElement, CalenderProps>(
  (props, ref) => {
    const {
      // base props
      _css,
      allowSelect = true,
      panel = false,
      panelWidth = 265,
      panelTodayBtn = true,
      panelOperations = ["left", "right", "doubleLeft", "doubleRight"],
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
      // extra props
      defaultDate,
      defaultSelectedDate,
      rangePicker = false,
      rangeValueFirst,
      rangeValueSecond,
      rangeValueHover,
      handleRangeVal,
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

    let defaultDayValue = defaultDate || dayjs()

    const [selectDay, setSelectDay] = useState<Dayjs | undefined>()
    const [modeVal, setModeVal] = useState<defaultModeItem>(mode || defaultMode)
    const [currentDay, setCurrentDay] = useState<Dayjs>(defaultDayValue)
    const finPanel = modeVal === "day" ? true : panel
    const finAllowSelect = finPanel === true ? true : allowSelect

    // change from other compt
    useEffect(() => {
      if (!defaultDate) return
      setCurrentDay(defaultDate)
    }, [defaultDate])
    useEffect(() => {
      if (!defaultSelectedDate) return
      if (defaultSelectedDate === "clear") {
        setCurrentDay(defaultDayValue)
        setSelectDay(undefined)
        return
      }
      if (Array.isArray(defaultSelectedDate)) {
      } else {
        setCurrentDay(defaultSelectedDate)
        setSelectDay(defaultSelectedDate)
      }
    }, [defaultSelectedDate])

    // click pre & next icon
    const changeTime = (type: string, modeProps?: defaultModeItem) => {
      let result
      let tempMode = modeProps || modeVal
      if (type === "pre") {
        result = currentDay.subtract(1, tempMode)
      } else if (type === "next") {
        result = currentDay.add(1, tempMode)
      }
      if (!result) return
      setCurrentDay(result)
      onPanelChange?.(result)
    }

    // select year or month
    const selectTime = (selectTimeProps: selectTimeProps) => {
      const { year, month } = selectTimeProps
      let curDay = defaultDayValue.date() > 28 ? 28 : defaultDayValue.date()
      setCurrentDay(dayjs(`${year}-${month}-${curDay}`))
    }

    // select day
    const clickDay = (date: Dayjs) => {
      if (rangePicker) {
        clickRangeDay(date)
        return
      }
      if (selectDay?.isSame(date, "date")) return
      if (modeVal === "month" || modeVal === "day") {
        // if click pre or next month
        !rangePicker && checkDifferentMonth(date)
      }
      setSelectDay(date)

      onChange?.(date)
    }
    const clickRangeDay = (date: Dayjs) => {
      if (!handleRangeVal) {
        return
      }
      if (!rangeValueFirst && !rangeValueSecond) {
        handleRangeVal(date, "first")
      } else if (rangeValueFirst && !rangeValueSecond) {
        handleRangeVal(date, "second")
      } else if (rangeValueFirst && rangeValueSecond) {
        handleRangeVal(date, "first")
        handleRangeVal(undefined, "second")
        handleRangeVal(undefined, "hover")
      }
    }

    const checkDifferentMonth = (date: Dayjs) => {
      // compare year
      let sYear = date.year()
      let cYear = currentDay.year()
      if (sYear < cYear) {
        changeTime("pre", "month")
      } else if (sYear > cYear) {
        changeTime("next", "month")
      } else if (sYear === cYear) {
        // compare month
        let sMonth = date.month()
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
      setCurrentDay(dayjs())
      setSelectDay(dayjs())

      onChange?.(dayjs())
    }

    return (
      <div
        css={css(applyCalendarWrapCss(finPanel, panelWidth), _css)}
        ref={ref}
        {...restProps}
      >
        <CalendarHeader
          allowSelect={finAllowSelect}
          panel={finPanel}
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
          onChange={onChange}
          onPanelChange={onPanelChange}
        />
        <CalendarBody
          allowSelect={finAllowSelect}
          panel={finPanel}
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
          onClickDay={(date: Dayjs) => clickDay(date)}
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
