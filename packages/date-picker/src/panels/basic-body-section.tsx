import { FC } from "react"
import { BasicPanelBodyProps, BasicRowProps } from "./interface"
import { WeekListHeader } from "./week-list-header"
import {
  applyCellStyle,
  applyDateCellStyle,
  applyDateValueCellStyle,
  bodyRowSectionStyle,
  bodySectionStyle,
  cellStyle,
  dateCellStyle,
  dateValueCellStyle,
} from "./style"
import { isDisabledDate } from "../utils/dateHelper"
import { getCellStatus } from "../utils/uiHelpers"

export const BasicRowsSection: FC<BasicRowProps> = (props) => {
  const {
    rows,
    mode,
    originMode,
    hideNotInViewDates,
    value,
    rangeValues,
    valueShowHover,
    format,
    disabledDate,
    dateRender,
    isSameTime,
    onSelectDate,
  } = props

  return (
    <>
      {rows?.map((row, rowIndex) => (
        <div key={rowIndex} css={bodyRowSectionStyle}>
          {row.map((col, colIndex) => {
            if (col.time) {
              const disabled = isDisabledDate(
                col.time,
                mode,
                disabledDate,
                originMode,
              )
              const cellStatus = getCellStatus(
                col,
                disabled,
                mode,
                isSameTime,
                hideNotInViewDates,
                value,
                rangeValues,
                valueShowHover,
              )

              const onClickHandler = () =>
                !disabled &&
                onSelectDate?.(col.time!.format(format) as string, col.time!)
              return (
                <div
                  key={colIndex}
                  css={applyCellStyle(cellStatus)}
                  onClick={onClickHandler}
                >
                  {dateRender ? (
                    dateRender(col.time)
                  ) : (
                    <div
                      css={applyDateCellStyle(cellStatus)}
                      className="date-cell"
                    >
                      <div
                        css={applyDateValueCellStyle({
                          ...cellStatus,
                          mode,
                        })}
                        className="date-value-cell"
                      >
                        {col.name}
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            if ("weekOfYear" in col) {
              return (
                <div key={colIndex} css={cellStyle} className="cell cell-week">
                  <div css={dateCellStyle} className="date-cell">
                    <div css={dateValueCellStyle} className="date-value-cell">
                      {col.weekOfYear}
                    </div>
                  </div>
                </div>
              )
            }

            return null
          })}
        </div>
      ))}
    </>
  )
}

BasicRowsSection.displayName = "BasicRowSection"

export const BasicBodySection: FC<BasicPanelBodyProps> = (props) => {
  const {
    disabledDate,
    onSelectDate,
    dateRender,
    rows,
    showWeekList,
    isSameTime,
    format,
    mode = "date",
    originMode,
    hideNotInViewDates,
    value,
    rangeValues,
    valueShowHover,
    isWeek,
  } = props
  return (
    <>
      {showWeekList && <WeekListHeader isWeek={isWeek} />}
      <div css={bodySectionStyle}>
        <BasicRowsSection
          rows={rows}
          mode={mode}
          originMode={originMode}
          hideNotInViewDates={hideNotInViewDates}
          value={value}
          rangeValues={rangeValues}
          valueShowHover={valueShowHover}
          disabledDate={disabledDate}
          dateRender={dateRender}
          isSameTime={isSameTime}
          onSelectDate={onSelectDate}
          format={format}
        />
      </div>
    </>
  )
}

BasicBodySection.displayName = "BasicBodySection"
