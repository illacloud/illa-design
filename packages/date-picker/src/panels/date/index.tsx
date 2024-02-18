import { FC, useCallback, useContext, useMemo } from "react"
import { DatePickerPanelProps } from "./interface"
import { Dayjs } from "dayjs"
import { BasicBodySection } from "../basic-body-section"
import {
  DEFAULT_WEEK_START,
  getAllDaysByTime,
  getTimeFormat,
} from "../../utils/dateHelper"
import {
  datePanelStyle,
  timePickerBodyPanelStyle,
  timePickerHeaderPanelStyle,
} from "./style"
import { weekPanelStyle } from "../week/style"
import { BasicHeaderSection } from "../basic-header-section"
import {
  NextDoubleIcon,
  NextIcon,
  PreviousDoubleIcon,
  PreviousIcon,
} from "@illa-design/icon"
import { YearPickerPanel } from "../year"
import { MonthPickerPanel } from "../month"
import { dayjsPro, getDayjsValue, isObject } from "@illa-design/system"
import { GetHeaderOperationsFun, DatePickerModeType } from "../../interface"
import { TimePickerPopup } from "@illa-design/time-picker"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"

export const ONE_PAGE_WITH_DAYS = 6 * 7

const defaultIsSameTime = (current: Dayjs, target: Dayjs) =>
  current.isSame(target, "day")

export const DatePickerPanel: FC<DatePickerPanelProps> = (props) => {
  const {
    isWeek,
    popupVisible,
    format,
    pageShowDate,
    showTime,
    timepickerProps,
    dateRender,
    disabledDate,
    disabledTime,
    value,
    rangeValues,
    isRangePicker,
    onSelect,
    onTimePickerSelect,
    onPrev,
    onNext,
    onSuperPrev,
    onSuperNext,
    isSameTime,
    index,
    getHeaderOperations,
    setPageShowDate,
    timeValue,
    hideNotInViewDates,
    superNextIcon = <NextDoubleIcon />,
    superPrevIcon = <PreviousDoubleIcon />,
    nextIcon = <NextIcon />,
    prevIcon = <PreviousIcon />,
    panelMode = "date",
    setPanelMode,
    utcOffset,
    timezone,
    valueShowHover,
  } = props

  const bodyProps = isRangePicker ? { rangeValues } : { value }

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const DATE_PICKER_LOCALE =
    configProviderProps?.locale?.datePicker ?? def.datePicker

  const timeFormat =
    (isObject(showTime) && showTime.format) || getTimeFormat(format as string)

  const innerIsSameTime = useMemo(
    () => isSameTime || defaultIsSameTime,
    [isSameTime],
  )

  const onChangePanel = useCallback(
    (mode: DatePickerModeType) => {
      setPanelMode?.(mode)
    },
    [setPanelMode],
  )

  const rows = useMemo(() => {
    return getAllDaysByTime(
      DEFAULT_WEEK_START,
      !!isWeek,
      pageShowDate ? pageShowDate.locale("en-us") : dayjsPro().locale("en-us"),
    )
  }, [isWeek, pageShowDate])

  const disabledTimeProps = useMemo(() => {
    if (isRangePicker) {
      return typeof disabledTime === "function"
        ? disabledTime(rangeValues?.[index ?? 0] as Dayjs)
        : {}
    } else {
      return typeof disabledTime === "function"
        ? disabledTime?.(
            getDayjsValue(value as Dayjs, format as string) as Dayjs,
          )
        : {}
    }
  }, [disabledTime, format, index, isRangePicker, rangeValues, value])

  const onSelectAtYearPanel = useCallback(
    (_: string | undefined, date: Dayjs | undefined) => {
      setPanelMode?.("month")
      setPageShowDate?.(date)
    },
    [setPageShowDate, setPanelMode],
  )

  const onSelectAtMonthPanel = useCallback(
    (_: string | undefined, date: Dayjs | undefined) => {
      setPanelMode?.("date")
      setPageShowDate?.(date)
    },
    [setPageShowDate, setPanelMode],
  )

  if (panelMode === "year") {
    return (
      <YearPickerPanel
        {...getHeaderOperations?.(panelMode)}
        pageShowDate={pageShowDate}
        onSelect={onSelectAtYearPanel}
        disabledDate={disabledDate}
        originMode="date"
      />
    )
  }

  if (panelMode === "month") {
    return (
      <MonthPickerPanel
        {...getHeaderOperations?.(panelMode)}
        setPageShowDate={setPageShowDate}
        pageShowDate={pageShowDate}
        panelMode={panelMode}
        getHeaderOperations={getHeaderOperations as GetHeaderOperationsFun}
        onSelect={onSelectAtMonthPanel}
        disabledDate={disabledDate}
        originMode="date"
        setPanelMode={setPanelMode}
      />
    )
  }

  const timePickerProps = isObject(showTime) ? showTime : {}

  return (
    <div style={{ display: "flex" }}>
      <div css={isWeek ? weekPanelStyle : datePanelStyle}>
        <BasicHeaderSection
          onPrev={onPrev}
          onSuperPrev={onSuperPrev}
          onNext={onNext}
          onSuperNext={onSuperNext}
          value={pageShowDate || dayjsPro()}
          mode={panelMode}
          onChangePanel={onChangePanel}
          superPrevIcon={superPrevIcon}
          prevIcon={prevIcon}
          nextIcon={nextIcon}
          superNextIcon={superNextIcon}
        />
        <BasicBodySection
          {...bodyProps}
          showWeekList
          isWeek={isWeek}
          rows={rows}
          isSameTime={innerIsSameTime}
          onSelectDate={onSelect}
          dateRender={dateRender}
          disabledDate={disabledDate}
          mode={isWeek ? "week" : "date"}
          format={format}
          hideNotInViewDates={hideNotInViewDates}
          valueShowHover={valueShowHover}
        />
      </div>
      {showTime && (
        <div css={timePickerBodyPanelStyle}>
          <div css={timePickerHeaderPanelStyle}>
            {timeValue?.format("HH:mm:ss") ?? DATE_PICKER_LOCALE.timeText}
          </div>
          <TimePickerPopup
            {...timePickerProps}
            {...disabledTimeProps}
            hideFooter
            format={timeFormat}
            valueShow={timeValue?.format(timeFormat)}
            onSelect={onTimePickerSelect}
            popupVisible={popupVisible}
            utcOffset={utcOffset}
            timezone={timezone}
          />
        </div>
      )}
    </div>
  )
}
