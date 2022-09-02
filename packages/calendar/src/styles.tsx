import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const bodyContentCss = css`
  position: relative;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const bodyCoverCss = css`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const headerLeftPartCss = css`
  flex: 1;
`

export const modeRadioStyle = css`
  width: 140px;
`
export const headerTextCss = css`
  vertical-align: middle;
  font-weight: 500;
  font-size: 20px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
`

export const headerSmallTextCss = css`
  font-weight: 500;
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
`

export const preNextIconsCss = css`
  display: inline-block;
  margin-right: 40px;
`

export const selectCommonCss = css`
  display: inline-block;

  &:first-of-type {
    margin-right: 8px;
  }
`

export const weekTitleItemCommonCss = css`
  flex: 1;
  font-weight: 400;
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
`

export const blockPaddingCss = css`
  ${weekTitleItemCommonCss};
  padding: 0 0 9px 25px;
`

export const panelPaddingCss = css`
  ${weekTitleItemCommonCss};
  text-align: center;
  line-height: 32px;
`

export const selectedDayStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-blue-03`)};
  color: ${globalColor(`--${illaPrefix}-white-01`)};

  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-blue-03`)};
  }
`

export const twelveMonthsContainer = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

export const weekContainerCss = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`

export const panelMonthContainerCss = css`
  padding: 10px 8px;
  border-top: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  border-right: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};

  &:nth-of-type(4n) {
    border-right: none;
  }
`
export const weekTitleCss = css`
  display: flex;
  margin-bottom: 4px;
`

export const panelMonthTextCss = css`
  padding: 5px 10px 15px;
  font-weight: 500;
  font-size: 16px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
`

export const dayBodyCss = css`
  padding: 16px;
`

export const dayModeTodayButton = css`
  border-top: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  color: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding: 10px 0;

  &:hover {
    cursor: pointer;
  }
`

export const panelGridCss = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`

export const monthBlockCss = css`
  padding: 0 5px;
`

export const buttonHiddenCss = css`
  visibility: hidden;
`

export const headerLeftBtnsCss = css`
  padding-left: 11px;

  button {
    padding: 5px;
  }
`

export const headerRightBtnsCss = css`
  padding-right: 11px;

  button {
    padding: 5px;
  }
`

export function applyPanelGridItemCss(selected?: boolean): SerializedStyles {
  return css`
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    margin: 15px auto;
    text-align: center;
    border-radius: 12px;
    padding: 0 5px;

    &:hover {
      cursor: pointer;
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    }

    ${selected &&
    css`
      color: ${globalColor(`--${illaPrefix}-white-01`)};
      background-color: ${globalColor(`--${illaPrefix}-blue-03`)};

      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-blue-03`)};
      }
    `}
  `
}

export function applyCalendarWrapCss(
  panel: boolean,
  panelWidth: number | string,
): SerializedStyles {
  return css`
    border-radius: 8px;
    border: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    ${panel &&
    css`
      display: inline-block;
      width: ${panelWidth}px;
    `};
  `
}

export function applyHeaderWrapCss(smallHeader: boolean): SerializedStyles {
  let style
  if (smallHeader) {
    style = css`
      padding: 9px 8px;
      border-bottom: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    `
  } else {
    style = css`
      padding: 25px;
    `
  }
  return css`
    ${style};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
}

export function applyModeButtonCss(click?: boolean): SerializedStyles {
  let colors
  if (click) {
    colors = css`
      background-color: ${globalColor(`--${illaPrefix}-white-01`)};
      color: ${globalColor(`--${illaPrefix}-blue-03`)};

      &:hover {
        color: ${globalColor(`--${illaPrefix}-blue-03`)};
      }
    `
  } else {
    colors = css`
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
      color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};

      &:hover {
        color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
      }
    `
  }

  return css`
    display: inline-block;
    font-size: 14px;
    padding: 2px 20px;
    border-radius: 8px;
    border: none;
    ${colors};

    &:hover {
      cursor: pointer;
    }

    &:first-of-type {
      margin-right: 5px;
    }
  `
}

export function applyCurrentColorCss(
  isCurrentMonth: boolean,
): SerializedStyles {
  let color
  if (isCurrentMonth) {
    color = css`
      color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    `
  } else {
    color = css`
      color: ${globalColor(`--${illaPrefix}-grayBlue-06`)};
    `
  }
  return css`
    ${color};
  `
}

export const dayItemPanelCss = css`
  width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 500;
  margin: 0 auto;

  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    cursor: pointer;
  }
`

export const dayItemCss = css`
  display: inline-block;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 600;
`

export function applyContainerBlockCss(
  panel: boolean,
  disabled?: boolean,
  hover?: boolean,
): SerializedStyles {
  let padStyle
  if (panel) {
    padStyle = css`
      margin: 2px 0;
      text-align: center;
      padding: 5px 0;
    `
  } else {
    padStyle = css`
      padding: 15px 15px 40% 15px;
      border-top: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      border-right: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    `
  }
  let bgColor
  if (hover) {
    bgColor = css`
      background-color: ${globalColor(`--${illaPrefix}-blue-07`)};
    `
  }
  return css`
    ${padStyle};
    ${bgColor};

    &:nth-of-type(7n) {
      border-right: none;
    }
  `
}

export function applyRangeSelectCss(type: string): SerializedStyles {
  return css`
    ${type === "right" && "border-radius: 0 50% 50% 0"};
    ${type === "left" && "border-radius: 50% 0 0 50%"};
    ${type === "mid" && "border-radius: 50%"};
  `
}

export const disabledCss = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  background: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  border-radius: 0px;
  width: 100%;

  &:hover {
    cursor: not-allowed;
    background: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  }
`

export const isTodayStyle = css`
  &::after {
    content: "";
    display: block;
    margin-left: 12px;
    margin-top: 5px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${globalColor(`--${illaPrefix}-blue-03`)};
  }
`
