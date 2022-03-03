import chroma from "chroma-js"
import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { StateValue } from "./input-tag"

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

export function applyContainerCss(variant: string) {
  return css`
    width: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    line-height: 1.57;
    border-radius: 4px;
    vertical-align: middle;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}

function applySizeStyle(size?: string) {
  let sizeCss: SerializedStyles
  switch (size) {
    default:
    case "large":
      sizeCss = css`
        padding: 8px 16px;
        gap: 8px;
      `
      break
    case "medium":
      sizeCss = css`
        padding: 4px 16px;
        gap: 4px;
      `
      break
    case "small":
      sizeCss = css`
        padding: 4px 12px;
        gap: 4px;
      `
      break
  }
  return sizeCss
}

function applyStatus(stateValue: StateValue) {
  let mainStyle: SerializedStyles
  let disableStyle, hoverStyle, inputStyle, errorStyle: SerializedStyles

  disableStyle = disableOutlineStyle
  inputStyle = inputOutlineStyle
  errorStyle = errorOutlineStyle
  hoverStyle = css``

  if (stateValue?.disabled) {
    mainStyle = css`
      cursor: not-allowed;
      ${disableStyle}
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
      ${errorStyle}
    `
  } else {
    mainStyle = css`
      &:hover {
        border-color: ${globalColor(`--${illaPrefix}-blue-06`)};
        ${hoverStyle}
      }
    `
  }
  return css`
    ${inputStyle};
    ${mainStyle};
  `
}

export function applyInputContainer(
  stateValue: StateValue,
  requirePadding?: boolean,
) {
  return css`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;
    font-size: 14px;
    line-height: 1.57;
    cursor: text;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    transition: all 200ms ease-in-out;
    ${applySizeStyle(stateValue?.size)};

    ${applyStatus(stateValue)}
    &:first-of-type {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-of-type {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `
}

function baseFixCls(stateValue: StateValue) {
  let sizeCss: SerializedStyles
  switch (stateValue?.size) {
    default:
      sizeCss = css`
        & > svg {
          font-size: 16px;
        }
      `
      break
    case "small":
      sizeCss = css``
      break
  }
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    vertical-align: middle;
    font-size: inherit;
    ${sizeCss}
  `
}

export function applySuffixCls(stateValue: StateValue) {
  return css`
    ${baseFixCls(stateValue)}
    margin-left: 12px;
  `
}

export const applyCountLimitStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`

export const pointerStyle = css`
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-gray-06`)};

  &:hover {
    color: ${globalColor(`--${illaPrefix}-gray-05`)};
  }
`
