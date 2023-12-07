import { css, SerializedStyles } from "@emotion/react"
import { getColor, getSpecialThemeColor } from "@illa-design/theme"
import { CalendarColorScheme } from "../interface"

export function applyYearBigCalendarContainerStyle(): SerializedStyles {
  return css``
}

export function applyMonthContainerStyle(): SerializedStyles {
  return css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    .container:nth-of-type(4n) {
      border-right: unset;
    }

    .container:nth-last-of-type(-n + 4) {
      border-bottom: unset;
    }
  `
}

export function applyMonthBlockStyle(): SerializedStyles {
  return css`
    box-sizing: border-box;
    padding: 8px;
    width: 100%;
    height: 100%;
    border-right: 1px solid ${getColor("grayBlue", "08")};
    border-bottom: 1px solid ${getColor("grayBlue", "08")};
  `
}

export function applyMonthBlockTitleStyle(): SerializedStyles {
  return css`
    display: flex;
    font-size: 16px;
    color: ${getColor("grayBlue", "02")};
    align-items: center;
    padding: 8px 12px;
  `
}

export function applyMonthDayContainerStyle(): SerializedStyles {
  return css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  `
}

export function applyMonthBlockHeaderContainerStyle(): SerializedStyles {
  return css`
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(7, 1fr);
  `
}

export function applyMonthBlockHeaderStyle(): SerializedStyles {
  return css`
    display: flex;
    font-size: 14px;
    color: ${getColor("grayBlue", "03")};
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
  `
}

export function applyMonthBlockDayStyle(
  today: boolean,
  isInThisMonth: boolean,
  isSelected: boolean,
  colorScheme: CalendarColorScheme,
): SerializedStyles {
  let hoverStyle = css``

  if (!isSelected && !today) {
    hoverStyle = css`
      &:hover {
        background-color: ${getColor("grayBlue", "09")};
      }
    `
  }

  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    box-sizing: border-box;
    border: ${today
      ? `1px solid ${getSpecialThemeColor(colorScheme)}`
      : "unset"};
    color: ${isInThisMonth
      ? isSelected
        ? getColor("white", "01")
        : getColor("grayBlue", "02")
      : getColor("grayBlue", "06")};
    background-color: ${isSelected && isInThisMonth
      ? getSpecialThemeColor(colorScheme)
      : "unset"};
    ${hoverStyle};
  `
}
