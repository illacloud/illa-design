import { globalColor, illaPrefix } from "@illa-design/theme"
import { SelectProps } from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { css, ComponentSelector } from "@emotion/react"
import { StateValue } from "./select-view"
import chroma from "chroma-js"

// default select
export function applyRadioSize() {
  return css`
    appearance: none;
    border-radius: 50%;
    margin: auto 6px auto auto;
    width: 16px;
    height: 16px;
    border: solid 2px ${globalColor(`--${illaPrefix}-gray-08`)};
    cursor: pointer;
    transition: 0.15s all linear;

    &:hover {
      border-color: ${globalColor(`--${illaPrefix}-blue-06`)};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    }

    &:checked {
      border: 4px solid ${globalColor(`--${illaPrefix}-blue-01`)};

      &:hover {
        border-color: ${globalColor(`--${illaPrefix}-blue-02`)};
      }

      &:disabled {
        border-color: ${globalColor(`--${illaPrefix}-blue-05`)};
      }
    }
  `
}

export function applyMergeCss(props: SelectProps): SerializedStyles {
  const currentDisabled = props.disabled ?? false

  return css`
    display: inline-flex;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 22px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    cursor: ${currentDisabled ? "not-allowed" : "pointer"};
  `
}

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

function applyStatus(stateValue: StateValue) {
  let mainStyle: SerializedStyles
  let inputStyle = inputOutlineStyle

  if (stateValue?.disabled) {
    mainStyle = css`
      cursor: not-allowed;
      ${disableOutlineStyle}
    `
  } else if (stateValue?.focus) {
    const boxShadowColor = globalColor(`--${illaPrefix}-blue-01`)
    mainStyle = css`
      border-color: ${globalColor(`--${illaPrefix}-blue-03`)};
      box-shadow: 0 0 8px 0
        ${boxShadowColor ? chroma(boxShadowColor).alpha(0.15).hex() : ""};
      ${stateValue?.error ? errorFocusStyle : ""}
      background-color: white;
    `
  } else if (stateValue?.error) {
    mainStyle = css`
      ${errorOutlineStyle}
    `
  } else {
    mainStyle = css`
      &:hover {
        border-color: ${globalColor(`--${illaPrefix}-blue-06`)};
      }
    `
  }
  return css`
    ${inputStyle};
    ${mainStyle};
  `
}

export function applySelectView(stateValue: StateValue): SerializedStyles {
  return css`
    height: 32px;
    line-height: 30px;
    font-size: 14px;
    padding: 9px 16px;
    border-radius: 4px;
    border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    cursor: pointer;
    ${applyStatus(stateValue)}
  `
}
export function applySelectStyle(): SerializedStyles {
  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
  `
}

// option
export function applyOptionStyle(): SerializedStyles {
  return css`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 0 12px;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    line-height: 36px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    list-style: none;
  `
}
