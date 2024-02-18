import { FC, useCallback, useContext, useMemo } from "react"
import { MonthPickerPanelProps } from "./interface"
import { DatePickerModeType } from "../../interface"
import {
  ConfigProviderContext,
  ConfigProviderProps,
  def,
} from "@illa-design/config-provider"
import { Dayjs } from "dayjs"
import { padStart } from "../../utils/pad"
import { BasicBodySection } from "../basic-body-section"
import { monthPanelStyle } from "./style"
import { BasicHeaderSection } from "../basic-header-section"
import { NextDoubleIcon, PreviousDoubleIcon } from "@illa-design/icon"
import { YearPickerPanel } from "../year"
import { dayjsPro } from "@illa-design/system"

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const MonthPickerPanel: FC<MonthPickerPanelProps> = (props) => {
  const {
    pageShowDate,
    dateRender,
    disabledDate,
    value,
    locale,
    isRangePicker,
    onSelect,
    rangeValues,
    onSuperPrev,
    onSuperNext,
    format,
    getHeaderOperations,
    setPageShowDate,
    panelMode = "month",
    originMode,
    setPanelMode,
    superNextIcon = <NextDoubleIcon />,
    superPrevIcon = <PreviousDoubleIcon />,
  } = props

  const configProviderProps = useContext<ConfigProviderProps>(
    ConfigProviderContext,
  )
  const DATE_PICKER_LOCALE =
    configProviderProps?.locale?.datePicker ?? def.datePicker

  const bodyProps = isRangePicker ? { rangeValues } : { value }
  const rows = useMemo(() => {
    const showYear = pageShowDate ? pageShowDate.year() : dayjsPro().year()
    const months = MONTHS.map((month, index) => ({
      name: DATE_PICKER_LOCALE?.[month],
      time: dayjsPro(
        `${showYear}-${padStart(index + 1, 2, "0")}`,
        "YYYY-MM",
      ).endOf("month"),
    }))

    const monthGroup = Array(4)
    for (let i = 0; i < 4; i++) {
      monthGroup[i] = months.slice(i * 3, 3 * (i + 1))
    }
    return monthGroup
  }, [DATE_PICKER_LOCALE, pageShowDate])

  const onChangePanel = useCallback(
    (mode: DatePickerModeType) => {
      setPanelMode?.(mode)
    },
    [setPanelMode],
  )

  const onSelectAtYearPanel = useCallback(
    (_: string | undefined, date: Dayjs | undefined) => {
      setPanelMode?.("month")
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
      />
    )
  }

  return (
    <div css={monthPanelStyle}>
      <BasicHeaderSection
        onSuperPrev={onSuperPrev}
        onSuperNext={onSuperNext}
        value={pageShowDate || dayjsPro()}
        mode={panelMode}
        onChangePanel={onChangePanel}
        superPrevIcon={superPrevIcon}
        superNextIcon={superNextIcon}
      />
      <BasicBodySection
        {...bodyProps}
        rows={rows}
        onSelectDate={onSelect}
        isSameTime={(current: Dayjs, target: Dayjs) =>
          current.isSame(target, "month")
        }
        dateRender={dateRender}
        disabledDate={disabledDate}
        mode="month"
        originMode={originMode}
        format={format}
      />
    </div>
  )
}
