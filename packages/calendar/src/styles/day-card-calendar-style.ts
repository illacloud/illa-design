import { css, SerializedStyles } from "@emotion/react"
import { getColor } from "@illa-design/theme"

export function applyDayCardCalendarStyle(): SerializedStyles {
  return css`
    display: inline-flex;
    flex-direction: column;
    border-radius: 2px;
    box-sizing: border-box;
    border: 1px solid ${getColor("grayBlue", "08")};
  `
}

export function applyDayCardTitleContainerStyle(): SerializedStyles {
  return css`
    display: inline-flex;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    padding: 4px 8px;
  `
}

export function applyDayCardBlockStyle(): SerializedStyles {
  return css`
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
    height: 100%;
  `
}

export const dayCardTodayStyle = css`
  padding: 9px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getColor("grayBlue", "02")};
  font-size: 14px;
`

export function applyMenuContainerStyle(): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: center;
  `
}

export const menuButtonStyle = css`
  height: 32px;
  width: 32px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${getColor("grayBlue", "09")};
  }
`

export function applyDayCardTitleStyle(): SerializedStyles {
  return css`
    font-size: 14px;
    flex-grow: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 32px;
    margin-right: 32px;
    color: ${getColor("grayBlue", "02")};
  `
}
