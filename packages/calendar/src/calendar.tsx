import { forwardRef, useContext, useMemo, useState } from "react"
import { CalendarHeader } from "./calendar-header"
import { CalendarBody } from "./calendar-body"
import { CalenderProps, defaultModeItem, selectTimeProps } from "./interface"
import { applyCalendarWrapCss } from "./styles"
import dayjs from "dayjs"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const Calendar = forwardRef<HTMLDivElement, CalenderProps>(
  (props, ref) => {
    const {
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

    const [currentDay, setCurrentDay] = useState(Date.now())
    const [selectDay, setSelectDay] = useState<number>(0)
    const [modeVal, setModeVal] = useState<defaultModeItem>(mode || defaultMode)
    const finAllowSelect = useMemo(() => {
      return panel === true ? true : allowSelect
    }, [panel])

    // click pre & next icon
    const changeTime = (type: string, modeProps?: defaultModeItem) => {
      let base = 1
      let arithmetic = 1

      if (type === "pre") {
        arithmetic = -1
      } else if (type === "next") {
        arithmetic = 1
      }

      let finMode = modeProps || modeVal

      if (finMode === "month") {
        base = dayjs(currentDay).daysInMonth()
      } else if (finMode === "year") {
        let curYear = dayjs(currentDay).year()
        // leap year or not
        base =
          (curYear % 4 === 0 && curYear % 100 !== 0) || curYear % 400 === 0
            ? 366
            : 365
      }

      let result = currentDay + arithmetic * base * 24 * 60 * 60 * 1000
      setCurrentDay(result)

      changeListenerFun(dayjs(result))
    }
    // select year or month
    const selectTime = (selectTimeProps: selectTimeProps) => {
      const { year, month } = selectTimeProps

      let setDate = dayjs()
      if (Number.isInteger(year)) {
        setDate = setDate.year(year as number)
      }
      if (Number.isInteger(month)) {
        setDate = setDate.month((month as number) - 1)
      }
      setDate && setCurrentDay(setDate.valueOf())
    }

    // select day
    const clickDay = (date: Date) => {
      if (modeVal === "month" || modeVal === "day") {
        // if click pre or next month
        // compare year
        let sYear = dayjs(date).year()
        let cYear = dayjs(currentDay).year()
        if (sYear < cYear) {
          changeTime("pre", "month")
        } else if (sYear > cYear) {
          changeTime("next", "month")
        } else if (sYear === cYear) {
          // compare month
          let sMonth = dayjs(date).month()
          let cMonth = dayjs(currentDay).month()
          if (sMonth < cMonth) {
            changeTime("pre", "month")
          } else if (sMonth > cMonth) {
            changeTime("next", "month")
          }
        }
      }

      setSelectDay(date.getTime())
    }

    // jump to today
    const toToday = () => {
      setCurrentDay(Date.now())
      setSelectDay(new Date(new Date().toLocaleDateString()).getTime())

      changeListenerFun(Date.now())
    }

    const changeListenerFun = (date: any) => {
      if (panel) {
        onPanelChange && onPanelChange(date)
      } else {
        onChange && onChange(dayjs(date))
      }
    }

    return (
      <div
        css={applyCalendarWrapCss(panel, panelWidth)}
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
          onPanelChange={onPanelChange}
          dateRender={dateRender}
          monthRender={monthRender}
          dateInnerContent={dateInnerContent}
          currentDay={currentDay}
          selectDay={selectDay}
          onClickDay={(date: Date) => clickDay(date)}
          onToToday={() => toToday()}
          locale={locale}
          monthListLocale={monthListLocale}
        />
      </div>
    )
  },
)

Calendar.displayName = "Calendar"
