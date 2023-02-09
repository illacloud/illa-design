import { css } from "@emotion/react"
import { getColor } from "@illa-design/theme"
import { CellStatus } from "../utils/uiHelpers"
import { ModeType } from "../interface"

export const weekListHeaderStyle = css`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 16px 0;
`

export const bodySectionStyle = css`
  padding: 16px;
`

export const bodyRowSectionStyle = css`
  display: flex;
`

export const weekListItemStyle = css`
  height: 32px;
  line-height: 32px;
  flex: 1;
  padding: 0;
  text-align: center;
  font-weight: 400;
  color: ${getColor("grayBlue", "03")};
  font-size: 14px;
`

export const cellStyle = css`
  position: relative;
  flex: 1;
  cursor: pointer;
  :hover .date-value-cell {
    background-color: ${getColor("grayBlue", "09")};
  }
`
export const dateValueCellDisabledStyle = css`
  color: ${getColor("gray", "05")};
  background-color: transparent;
`

export const cellDisabledStyle = css`
  :hover .date-value-cell {
    ${dateValueCellDisabledStyle};
  }
`

export const dateValueCellSelectedStyle = css`
  color: ${getColor("white", "01")};
  background-color: ${getColor("blue", "03")};
  transition: background-color 0.1s cubic-bezier(0, 0, 1, 1);
`
export const cellSelectedStyle = css`
  :hover .date-value-cell {
    ${dateValueCellSelectedStyle}
  }
`

export const cellRangeStyle = css`
  :hover .date-value-cell {
    background-color: unset;
  }
`

export const dateCellStyle = css`
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 0px;
  justify-content: center;
`

export const dateCellDisabledDateStyle = css`
  background-color: ${getColor("gray", "09")};
  cursor: not-allowed;
`

export const dateCellHiddenStyle = css`
  display: none;
`

export const dateCellInRangeStyle = css`
  background-color: ${getColor("blue", "07")};
`

export const dateCellHoverInRangeStyle = css`
  background-color: ${getColor("blue", "06")};
`

export const dateCellRangeStartStyle = css`
  border-top-left-radius: 22px;
  border-bottom-left-radius: 22px;
`

export const dateCellRangEndStyle = css`
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
`

export const dateCellRangeEdgeInHoverRangeStyle = css`
  border-radius: 0;
`

export const dateCellHoverRangeEdgeInRangeStyle = css`
  border-radius: 0;
`

export const dateValueCellStyle = css`
  color: ${getColor("gray", "06")};
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  min-width: 24px;
  font-weight: 500;
  border-radius: 24px;
  text-align: center;
`

export const dateValueCellInViewStyle = css`
  color: ${getColor("gray", "02")};
  font-weight: 500;
`

export const todayCellStyle = css`
  position: relative;
  ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 50%;
    margin-left: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${getColor("blue", "03")};
  }
`

export const applyCellStyle = ({
  isDisabled,
  isSelected,
  isRangeStart,
  isHoverRangeStart,
  isRangeEnd,
  isHoverRangeEnd,
  isToday,
}: CellStatus) => {
  return css`
    ${cellStyle};
    ${isDisabled ? cellDisabledStyle : ""};
    ${isToday ? todayCellStyle : ""};
    ${isSelected ? cellSelectedStyle : ""};
    ${isRangeStart || isRangeEnd ? cellRangeStyle : ""};
  `
}

export const applyDateCellStyle = ({
  isDisabled,
  isHidden,
  isRangeStart,
  isHoverRangeStart,
  isRangeEnd,
  isHoverRangeEnd,
  isInRange,
  isRangeEdgeInHoverRange,
  isHoverRangeEdgeInRange,
}: CellStatus) => {
  return css`
    ${dateCellStyle};
    ${isDisabled ? dateCellDisabledDateStyle : ""};
    ${isHidden ? dateCellHiddenStyle : ""};
    ${isRangeStart || isHoverRangeStart ? dateCellRangeStartStyle : ""}
    ${isRangeEnd || isHoverRangeEnd ? dateCellRangEndStyle : ""}
    ${isInRange ? dateCellInRangeStyle : ""}
    ${isRangeEdgeInHoverRange ? dateCellRangeEdgeInHoverRangeStyle : ""}
    ${isHoverRangeEdgeInRange ? dateCellHoverRangeEdgeInRangeStyle : ""}
  `
}

export type DateValueCellSelectedArg = CellStatus & {
  mode: ModeType
}
export const applyDateValueCellStyle = ({
  isDisabled,
  isInView,
  isSelected,
  isRangeStart,
  isHoverRangeStart,
  isRangeEnd,
  isHoverRangeEnd,
  mode,
}: DateValueCellSelectedArg) => {
  return css`
    ${dateValueCellStyle};
    ${isDisabled ? dateValueCellDisabledStyle : ""};
    ${isInView ? dateValueCellInViewStyle : ""};
    ${isSelected ? dateValueCellSelectedStyle : ""};
    ${(isHoverRangeStart || isHoverRangeEnd) && !isRangeStart && !isRangeEnd
      ? dateCellHoverInRangeStyle
      : ""}
    ${(mode === "year" || mode === "month" || mode === "quarter") &&
    `width: 100%;`}
  `
}

export const placeLeftStyle = css`
  flex: 1;
`

export const basicHeaderStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 24px;
  border-bottom: 1px solid ${getColor("gray", "08")};
`

export const iconGroupStyle = css`
  display: flex;
  align-items: center;
`

export const operationIconStyle = css`
  width: 32px;
  height: 32px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  cursor: pointer;
`

export const headerWrapperStyle = css`
  line-height: 22px;
  font-size: 14px;
  font-weight: 500;
  color: ${getColor("gray", "02")};
  flex: 1;
  text-align: center;
  box-sizing: border-box;
`

export const headerLabelStyle = css`
  cursor: pointer;
  :hover {
    background-color: ${getColor("gray", "09")};
  }
`

export const footerStyle = css`
  width: 100%;
`

export const footerExtraWrapperStyle = css`
  width: 100%;
  border-top: 1px solid ${getColor("gray", "08")};
  box-sizing: border-box;
`

export const footerNowWrapperStyle = css`
  border-top: 1px solid ${getColor("gray", "08")};
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  text-align: center;
`

export const footerBtnWrapperStyle = css`
  border-top: 1px solid ${getColor("gray", "08")};
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`
