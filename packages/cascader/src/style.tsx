import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"
import chroma from "chroma-js"

// default select
export const inputOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
`
export const disableOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`
export const errorFocusStyle = css`
  background-color: unset;
  border-color: ${globalColor(`--${illaPrefix}-red-03`)};
  box-shadow: 0 0 8px 0
    ${chroma(globalColor(`--${illaPrefix}-red-01`))
      .alpha(0.15)
      .hex()};
`
export const errorOutlineStyle = css`
  background-color: unset;
  border-color: ${globalColor(`--${illaPrefix}-red-03`)};

  &:hover {
    border-color: ${globalColor(`--${illaPrefix}-red-02`)};
  }
`

export function applySelectViewText(
  showInput?:
    | boolean
    | { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean },
): SerializedStyles {
  return css`
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${showInput ? "" : css({ display: "none !important" })};
  `
}

export function applyIconStyle(): SerializedStyles {
  return css`
    & > svg {
      font-size: 12px;
    }

    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}

export function iconPointerStyle(size: string) {
  let positionStyle: SerializedStyles = css()
  switch (size) {
    default:
    case "large":
      positionStyle = css`
        right: 16px;
      `
      break
    case "medium":
      positionStyle = css`
        right: 16px;
      `
      break
    case "small":
      positionStyle = css`
        right: 12px;
      `
      break
  }
  return css`
    // background-color: white;
    position: absolute;
    right: 12px;
    opacity: 0;
    cursor: pointer;
    color: ${globalColor(`--${illaPrefix}-gray-06`)};

    &:hover {
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    }

    & > svg {
      font-size: 12px;
    }

    ${positionStyle}
  `
}

// popup
export function applyPopupStyle(): SerializedStyles {
  return css`
    display: flex;
    list-style: none;
    height: 216px;
    border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    border-radius: 2px;
  `
}

// panel
export const optionListWrapper = css`
  &:not(:last-child) {
    border-right: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
  }
`

export const optionListStyle = css`
  padding: 0;
  margin: 0;
  list-style: none;
  overflow-y: auto;
`

export function applyOptionStyle(states: {
  active?: boolean
  disabled?: boolean
}): SerializedStyles {
  let stateStyle: SerializedStyles = css()
  if (states.active) {
    stateStyle = css`
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    `
  }
  if (states.disabled) {
    stateStyle = css(stateStyle, css`
      cursor: not-allowed;
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
      &:hover {
        background-color: unset;
      }
    `)
  }
  return css`
    padding: 0 16px;
    display: flex;
    height: 36px;
    cursor: pointer;
    box-sizing: border-box;
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    }
    ${stateStyle}
  `
}

export function applyOptionLabelStyle(): SerializedStyles {
  return css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
}
