import { FC, useContext } from "react"
import { RangePickerPanelProps } from "./interface"
import { YearPickerPanel } from "../year"
import { getDayjsValue, getNow, isObject } from "@illa-design/system"
import { Dayjs } from "dayjs"
import { DisabledTimeProps } from "../../interface"
import { PickerContext } from "../../context"
import { QuarterPickerPanel } from "../quarter"
import { MonthPickerPanel } from "../month"
import { DatePickerPanel } from "../date"
import { TimePickerProps } from "@illa-design/time-picker"
import { WeekPickerPanel } from "../week"
import { rangePanelWrapperStyle } from "./style"

function range(start: number, end: number): number[] {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
}

export const RangePickerPanel: FC<RangePickerPanelProps> = (props) => {
  const {
    mode = "date",
    showTime,
    disabledDate,
    disabledTime,
    format,
    dateRender,
    value: propsValue,
    timeValues,
    locale,
    pageShowDates,
    onTimePickerSelect: onSelectTime,
    onSelectPanel,
    onPrev,
    onSuperPrev,
    onNext,
    onSuperNext,
    localeName,
    popupVisible,
    timepickerProps,
    getHeaderOperations,
    setRangePageShowDates,
    disabledTimePickerIndex,
    hideNotInViewDates,
    isTimePanel,
    valueShowHover,
    panelModes,
    setPanelModes,
  } = props

  const { utcOffset, timezone } = useContext(PickerContext)

  const startShowDate = pageShowDates?.[0] || getNow(utcOffset, timezone)
  const endShowDate = pageShowDates?.[1] || getNow(utcOffset, timezone)

  const value = getDayjsValue(
    propsValue as Dayjs[],
    format as string,
  ) as Dayjs[]

  function renderDate() {
    if (mode === "week") {
      return (
        <>
          <WeekPickerPanel
            setPageShowDate={(d) => setRangePageShowDates?.(d ? [d, d] : [], 0)}
            onPrev={onPrev}
            valueShowHover={valueShowHover}
            onSuperPrev={onSuperPrev}
            isRangePicker
            rangeValues={value}
            format={format}
            disabledDate={disabledDate}
            onSelect={onSelectPanel}
            dateRender={dateRender}
            locale={locale}
            popupVisible={popupVisible}
            hideNotInViewDates={hideNotInViewDates}
            pageShowDate={startShowDate}
            panelMode={panelModes?.[0]}
            setPanelMode={(mode) =>
              setPanelModes?.([mode, panelModes?.[1] ?? mode])
            }
          />
          <WeekPickerPanel
            setPageShowDate={(d) => setRangePageShowDates?.(d ? [d, d] : [], 1)}
            onNext={onNext}
            valueShowHover={valueShowHover}
            onSuperNext={onSuperNext}
            isRangePicker
            rangeValues={value}
            format={format}
            disabledDate={disabledDate}
            onSelect={onSelectPanel}
            dateRender={dateRender}
            locale={locale}
            popupVisible={popupVisible}
            hideNotInViewDates={hideNotInViewDates}
            pageShowDate={endShowDate}
            panelMode={panelModes?.[1]}
            setPanelMode={(mode) =>
              setPanelModes?.([panelModes?.[0] ?? mode, mode])
            }
          />
        </>
      )
    }

    const disabledTimePickerProps: {
      disabledTime?: (current?: Dayjs) => DisabledTimeProps
      showTime?: TimePickerProps
    } = {}

    if (typeof disabledTimePickerIndex === "number") {
      disabledTimePickerProps.disabledTime = () => ({
        disabledHours: () => range(0, 24),
        disabledMinutes: () => range(0, 60),
        disabledSeconds: () => range(0, 60),
      })
      if (isObject(showTime)) {
        // @ts-ignore
        disabledTimePickerProps.showTime = {
          ...showTime,
          defaultValue: undefined,
          hideDisabledOptions: false,
        }
      }
    }

    return (
      <>
        <DatePickerPanel
          valueShowHover={valueShowHover}
          onPrev={onPrev}
          onSuperPrev={onSuperPrev}
          isRangePicker
          rangeValues={value}
          format={format}
          disabledDate={disabledDate}
          onSelect={onSelectPanel}
          dateRender={dateRender}
          locale={locale}
          popupVisible={popupVisible}
          timepickerProps={timepickerProps}
          hideNotInViewDates={hideNotInViewDates}
          isTimePanel={isTimePanel}
          disabledTime={disabledTime}
          showTime={!!showTime}
          {...(disabledTimePickerIndex === 0 ? disabledTimePickerProps : {})}
          onTimePickerSelect={(timeString, time) => {
            onSelectTime?.(0, timeString, time)
          }}
          index={0}
          setPageShowDate={(d) => setRangePageShowDates?.(d ? [d, d] : [], 0)}
          timeValue={timeValues?.[0]}
          pageShowDate={startShowDate}
          panelMode={panelModes?.[0]}
          setPanelMode={(mode) =>
            setPanelModes?.([mode, panelModes?.[1] ?? mode])
          }
        />
        <DatePickerPanel
          valueShowHover={valueShowHover}
          onNext={onNext}
          onSuperNext={onSuperNext}
          isRangePicker
          rangeValues={value}
          format={format}
          disabledDate={disabledDate}
          onSelect={onSelectPanel}
          dateRender={dateRender}
          locale={locale}
          popupVisible={popupVisible}
          timepickerProps={timepickerProps}
          hideNotInViewDates={hideNotInViewDates}
          isTimePanel={isTimePanel}
          disabledTime={disabledTime}
          showTime={!!showTime}
          {...(disabledTimePickerIndex === 1 ? disabledTimePickerProps : {})}
          onTimePickerSelect={(timeString, time) => {
            onSelectTime?.(1, timeString, time)
          }}
          index={1}
          setPageShowDate={(d) => setRangePageShowDates?.(d ? [d, d] : [], 1)}
          timeValue={timeValues?.[1]}
          pageShowDate={endShowDate}
          panelMode={panelModes?.[1]}
          setPanelMode={(mode) =>
            setPanelModes?.([panelModes?.[0] ?? mode, mode])
          }
        />
      </>
    )
  }

  function renderMonth() {
    return (
      <>
        <MonthPickerPanel
          valueShowHover={valueShowHover}
          onSuperPrev={onSuperPrev}
          isRangePicker
          rangeValues={value}
          format={format}
          disabledDate={disabledDate}
          onSelect={onSelectPanel}
          dateRender={dateRender}
          getHeaderOperations={getHeaderOperations}
          setPageShowDate={(d) => setRangePageShowDates?.(d ? [d, d] : [], 0)}
          pageShowDate={startShowDate}
          panelMode={panelModes?.[0]}
          setPanelMode={(mode) =>
            setPanelModes?.([mode, panelModes?.[1] ?? mode])
          }
        />
        <MonthPickerPanel
          valueShowHover={valueShowHover}
          onSuperPrev={onSuperPrev}
          isRangePicker
          rangeValues={value}
          format={format}
          disabledDate={disabledDate}
          onSelect={onSelectPanel}
          dateRender={dateRender}
          getHeaderOperations={getHeaderOperations}
          setPageShowDate={(d) => setRangePageShowDates?.(d ? [d, d] : [], 0)}
          pageShowDate={endShowDate}
          panelMode={panelModes?.[0]}
          setPanelMode={(mode) =>
            setPanelModes?.([mode, panelModes?.[1] ?? mode])
          }
        />
      </>
    )
  }

  function renderYear() {
    return (
      <>
        <YearPickerPanel
          valueShowHover={valueShowHover}
          onSuperPrev={onSuperPrev}
          isRangePicker
          rangeValues={value}
          format={format}
          disabledDate={disabledDate}
          onSelect={onSelectPanel}
          dateRender={dateRender}
          pageShowDate={startShowDate}
        />
        <YearPickerPanel
          valueShowHover={valueShowHover}
          onSuperNext={onSuperNext}
          isRangePicker
          rangeValues={value}
          format={format}
          disabledDate={disabledDate}
          onSelect={onSelectPanel}
          dateRender={dateRender}
          pageShowDate={endShowDate}
        />
      </>
    )
  }

  function renderQuarter() {
    return (
      <>
        <QuarterPickerPanel
          valueShowHover={valueShowHover}
          onSuperPrev={onSuperPrev}
          isRangePicker
          rangeValues={value}
          format={format}
          disabledDate={disabledDate}
          onSelect={onSelectPanel}
          dateRender={dateRender}
          getHeaderOperations={getHeaderOperations}
          setPageShowDate={(d) => setRangePageShowDates?.(d ? [d, d] : [], 0)}
          pageShowDate={startShowDate}
          panelMode={panelModes?.[0]}
          setPanelMode={(mode) =>
            setPanelModes?.([mode, panelModes?.[1] ?? mode])
          }
        />
        <QuarterPickerPanel
          valueShowHover={valueShowHover}
          onSuperNext={onSuperNext}
          isRangePicker
          rangeValues={value}
          format={format}
          disabledDate={disabledDate}
          onSelect={onSelectPanel}
          dateRender={dateRender}
          getHeaderOperations={getHeaderOperations}
          setPageShowDate={(d) => setRangePageShowDates?.(d ? [d, d] : [], 1)}
          pageShowDate={endShowDate}
          panelMode={panelModes?.[1]}
          setPanelMode={(mode) =>
            setPanelModes?.([panelModes?.[0] ?? mode, mode])
          }
        />
      </>
    )
  }

  return (
    <div>
      <div css={rangePanelWrapperStyle}>
        {(mode === "date" || mode === "week") && renderDate()}
        {mode === "month" && renderMonth()}
        {mode === "year" && renderYear()}
        {mode === "quarter" && renderQuarter()}
      </div>
    </div>
  )
}
