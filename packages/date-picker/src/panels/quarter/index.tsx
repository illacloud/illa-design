import { FC, useCallback } from "react"
import { QuarterPickerPanelProps } from "./interface"
import { DatePickerModeType } from "../../interface"
import { BasicBodySection } from "../basic-body-section"
import { Dayjs } from "dayjs"
import { padStart } from "../../utils/pad"
import { quarterPanelStyle } from "./style"
import { BasicHeaderSection } from "../basic-header-section"
import { NextDoubleIcon, PreviousDoubleIcon } from "@illa-design/icon"
import { YearPickerPanel } from "../year"
import { dayjsPro } from "@illa-design/system"

const isSameTime = (current: Dayjs, target: Dayjs) =>
  current.isSame(target, "month")

const generateRows = (showYear: number) => {
  return [
    new Array(4).fill(0).map((_, index) => ({
      name: `Q${index + 1}`,
      time: dayjsPro(
        `${showYear}-${padStart(index * 3 + 1, 2, "0")}`,
        "YYYY-MM",
      ),
    })),
  ]
}
export const QuarterPickerPanel: FC<QuarterPickerPanelProps> = (props) => {
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
    panelMode = "quarter",
    setPanelMode,
    superNextIcon = <NextDoubleIcon />,
    superPrevIcon = <PreviousDoubleIcon />,
    ...rest
  } = props

  const bodyProps = isRangePicker ? { rangeValues } : { value }

  const rows = generateRows(
    pageShowDate ? pageShowDate.year() : dayjsPro().year(),
  )

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
    <div css={quarterPanelStyle}>
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
        {...rest}
        {...bodyProps}
        rows={rows}
        onSelectDate={onSelect}
        isSameTime={isSameTime}
        dateRender={dateRender}
        disabledDate={disabledDate}
        mode="quarter"
        format={format}
      />
    </div>
  )
}
