import { css, SerializedStyles } from "@emotion/react"
import { getColor, getSpecialThemeColor } from "@illa-design/theme"
import { CalendarColorScheme } from "../interface"

export const monthCardContainerStyle = css`
  display: inline-flex;
  flex-direction: column;
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid ${getColor("grayBlue", "08")};
`

export const monthCardContentContainerStyle = css`
  display: grid;
  padding: 16px;
  row-gap: 16px;
  column-gap: 40px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
`

export function applyMonthBlockStyle(
  isSelected: boolean,
  colorScheme: CalendarColorScheme,
): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    color: ${isSelected ? getColor("white", "01") : getColor("grayBlue", "02")};
    justify-content: center;
    border-radius: 12px;
    width: 56px;
    height: 24px;
    background-color: ${isSelected
      ? getSpecialThemeColor(colorScheme)
      : "unset"};

    &:hover {
      background-color: ${isSelected
        ? getSpecialThemeColor(colorScheme)
        : getColor("grayBlue", "09")};
    }
  `
}
