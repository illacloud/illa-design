import { css, SerializedStyles } from "@emotion/react"
import { getColor, getSpecialThemeColor } from "@illa-design/theme"
import { CalendarColorScheme } from "../interface"

export function applyMonthBigCalendarStyle(): SerializedStyles {
  return css`
    display: flex;
    flex-direction: column;
  `
}

export function applyWeekTitleHeaderContainerStyle(): SerializedStyles {
  return css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 8px;
  `
}

export function applyWeekStyle(): SerializedStyles {
  return css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 120px);
    .container:nth-of-type(7n) {
      border-right: unset;
    }
    .container:nth-last-of-type(-n + 7) {
      border-bottom: unset;
    }
  `
}

export function applyWeekTitleStyle(): SerializedStyles {
  return css`
    display: flex;
    padding-left: 25px;
    align-items: center;
    font-size: 14px;
    color: ${getColor("grayBlue", "03")};
  `
}

export const applyLineStyle = css`
  width: 100%;
  border-top: 1px solid ${getColor("grayBlue", "08")};
`

export const blockContainerStyle = css`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-right: 1px solid ${getColor("grayBlue", "08")};
  border-bottom: 1px solid ${getColor("grayBlue", "08")};
`

export function applyBlockDayStyle(
  today: boolean,
  isInThisMonth: boolean,
  isSelected: boolean,
  colorScheme: CalendarColorScheme,
): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    height: 32px;
    width: 32px;
    border: ${today
      ? `1px solid ${getSpecialThemeColor(colorScheme)}`
      : "unset"};
    border-radius: 16px;
    color: ${isSelected
      ? getColor("white", "01")
      : isInThisMonth
      ? getColor("grayBlue", "02")
      : getColor("grayBlue", "06")};
    background-color: ${isSelected
      ? getSpecialThemeColor(colorScheme)
      : "unset"};
  `
}
