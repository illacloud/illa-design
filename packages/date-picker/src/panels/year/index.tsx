import { FC, useMemo } from "react"
import { YearPickerPanelProps } from "./interface"
import { Dayjs } from "dayjs"
import { BasicBodySection } from "../basic-body-section"
import { RowType } from "../interface"
import { yearPanelStyle } from "./style"
import { BasicHeaderSection } from "../basic-header-section"
import { NextDoubleIcon, PreviousDoubleIcon } from "@illa-design/icon"
import { dayjsPro } from "@illa-design/system"

const isSameYear = (current: Dayjs, target: Dayjs) =>
  current.isSame(target, "year")

export const YearPickerPanel: FC<YearPickerPanelProps> = (props) => {
  const {
    pageShowDate,
    dateRender,
    disabledDate,
    value,
    isRangePicker,
    onSelect,
    rangeValues,
    onSuperPrev,
    onSuperNext,
    format,
    originMode,
    superNextIcon = <NextDoubleIcon />,
    superPrevIcon = <PreviousDoubleIcon />,
  } = props

  const bodyProps = isRangePicker ? { rangeValues } : { value }

  const rows: RowType[][] = useMemo(() => {
    const showYear = pageShowDate ? pageShowDate.year() : dayjsPro().year()
    const startYear = Math.floor(showYear / 10) * 10 - 1
    return new Array(4).fill("").map((rows, i) =>
      new Array(3).fill("").map((row, j) => ({
        name: `${startYear + i * 3 + j}`,
        time: dayjsPro(`${startYear + i * 3 + j}`, "YYYY").endOf("year"),
        isPrev: i === 0 && j === 0,
        isNext: i === 3 && j === 2,
      })),
    )
  }, [pageShowDate])

  return (
    <div css={yearPanelStyle}>
      <BasicHeaderSection
        onSuperPrev={onSuperPrev}
        onSuperNext={onSuperNext}
        title={`${rows[0][1].name} - ${rows[3][2].name}`}
        superPrevIcon={superPrevIcon}
        superNextIcon={superNextIcon}
      />
      <BasicBodySection
        {...bodyProps}
        rows={rows}
        onSelectDate={onSelect}
        isSameTime={isSameYear}
        dateRender={dateRender}
        disabledDate={disabledDate}
        mode="year"
        originMode={originMode}
        format={format}
      />
    </div>
  )
}
