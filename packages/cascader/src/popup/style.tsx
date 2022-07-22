// panel
import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"

export const searchListWrapper = css`
  padding: 4px 0;
`
export const optionListWrapper = css`
  padding: 4px 0;

  &:not(:last-child) {
    border-right: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  }
`

export const optionListStyle = css`
  padding: 0;
  margin: 0;
  list-style: none;
  overflow-y: auto;
  min-width: 120px;
  height: 100%;
`
export const flexCenterStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export function applyOptionStyle(states: {
  active?: boolean
  disabled?: boolean
}): SerializedStyles {
  let stateStyle: SerializedStyles = css()
  if (states.active) {
    stateStyle = css`
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
      color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    `
  }
  if (states.disabled) {
    stateStyle = css`
      ${stateStyle};
      cursor: not-allowed;
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
    `
    if (!states.active) {
      stateStyle = css`
        ${stateStyle};

        &:hover {
          background-color: unset;
        }
      `
    }
  }

  return css`
    padding: 0 16px;
    display: flex;
    align-items: center;
    height: 36px;
    cursor: pointer;
    box-sizing: border-box;
    color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};

    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    }

    ${stateStyle}
  `
}

export const optionLabelStyle = css`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding-right: 20px;

  & > svg {
    font-size: 12px;
    position: absolute;
    right: 0;
  }
`

export const textMargin = css`
  margin-right: 8px;
`
