import { css } from "@emotion/react"
import { getColor } from "@illa-design/theme"

export const listStyle = css`
  width: 66px;
  height: 268px;
  overflow: hidden;
  box-sizing: border-box;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0;
  }
  :not(:last-child) {
    border-right: 1px solid ${getColor("gray", "08")};
  }
  :hover {
    overflow-y: auto;
  }
`

export const ulContainerStyle = css`
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  ::after {
    content: "";
    display: block;
    width: 100%;
    height: ${268 - 24 - 8}px;
  }
`

export const baseCellStyle = css`
  padding: 4px 0;
  text-align: center;
  color: ${getColor("gray", "02")};
  font-weight: 400;
  cursor: pointer;
`

export const selectedStyle = (colorScheme: string = "grayBlue") => css`
  color: red;
`

export const cellDisabledStyle = css`
  color: ${getColor("gray", "08")};
  cursor: not-allowed;
`

export const cellInnerHoverStyle = css`
  :hover .cell-inner {
    background-color: ${getColor("gray", "09")};
  }
`

export const applyCellStyle = (disabled?: boolean, selected?: boolean) => css`
  ${baseCellStyle};
  ${disabled ? cellDisabledStyle : ""};
  ${!disabled && !selected ? cellInnerHoverStyle : ""};
`
export const baseCellInnerStyle = css`
  height: 24px;
  line-height: 24px;
  font-size: 14px;
`

export const cellInnerSelectedStyle = (colorScheme: string) => css`
  background-color: ${getColor("gray", "09")};
  color: ${getColor(colorScheme, "03")};
`

export const applyCellInnerStyle = (
  colorScheme: string = "blue",
  selected?: boolean,
) => {
  return css`
    ${baseCellInnerStyle}
    ${selected ? cellInnerSelectedStyle(colorScheme) : ""}
  `
}

export const timepickerPopupStyle = css`
  position: relative;
  display: flex;
  padding: 0;
  box-sizing: border-box;
`

export const footerExtraWrapperStyle = css`
  border-top: 1px solid ${getColor("grayBlue", "08")};
  padding: 8px;
`

export const footerBtnWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-top: 1px solid ${getColor("grayBlue", "08")};
`
