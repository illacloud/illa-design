import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"
import { columState } from "./time-column"

export const triggerContentStyle: SerializedStyles = css`
  border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  border-radius: 2px;
`

export function applyTimepickerContent(): SerializedStyles {
  return css`
    display: flex;
    box-sizing: border-box;
  `
}

export function applyTimepickerList(): SerializedStyles {
  return css`
    width: 64px;
    height: 252px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;

    &:hover {
      overflow-y: auto;
    }

    &:not(:last-child) {
      border-right: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  `
}

// time-column style
export function applyTimeColumn(): SerializedStyles {
  return css`
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 500;
    outline: 0;

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 224px;
    }
  `
}

export function applyColumnItem(states: columState): SerializedStyles {
  let stateStyle: SerializedStyles = css()
  if (states?.disabled) {
    stateStyle = css`
      cursor: not-allowed;
    `
  } else {
    stateStyle = css`
      &:hover {
        cursor: pointer;
      }
    `
  }

  return css`
    padding: 4px 0 0;
    text-align: center;
    ${stateStyle}
  `
}

export function applyColumnItemText(states: columState): SerializedStyles {
  let stateStyle: SerializedStyles = css()
  if (states?.disabled) {
    stateStyle = css`
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
    `
  } else if (states?.selected) {
    stateStyle = css`
      color: ${globalColor(`--${illaPrefix}-blue-03`)};
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    `
  }
  return css`
    line-height: 24px;
    height: 24px;

    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    }

    ${stateStyle}
  `
}

export function applyContentButton(): SerializedStyles {
  return css`
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-top: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  `
}
