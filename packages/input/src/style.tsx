import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { StateValue } from "./input"

const inputFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
  border-color: ${globalColor(`--${illaPrefix}-gray-09`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`
const inputOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`
const disableOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`
const disableFillStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
`
const hoverFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
`

const errorFocusStyle = css`
  background-color: unset;
  border-color: ${globalColor(`--${illaPrefix}-red-03`)};
  box-shadow: 0 0 8px 0 rgba(224, 36, 36, 0.5);
`
const errorFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-red-07`)};
  border-color: ${globalColor(`--${illaPrefix}-red-07`)};
`
const errorOutlineStyle = css`
  background-color: unset;
  border-color: ${globalColor(`--${illaPrefix}-red-03`)};
`

function applyStatus(stateValue: StateValue) {
  let mainStyle: SerializedStyles
  let disableStyle, hoverStyle, inputStyle, errorStyle: SerializedStyles

  switch (stateValue?.variant) {
    case "fill":
      disableStyle = disableFillStyle
      hoverStyle = hoverFillStyle
      inputStyle = inputFillStyle
      errorStyle = errorFillStyle
      break
    default:
      disableStyle = disableOutlineStyle
      inputStyle = inputOutlineStyle
      errorStyle = errorOutlineStyle
      hoverStyle = css``
      break
  }

  if (stateValue?.disabled) {
    mainStyle = css`
      cursor: not-allowed;
      ${disableStyle}
      `
  } else if (stateValue?.focus) {
    mainStyle = css`
      border-color: ${globalColor(`--${illaPrefix}-blue-03`)};
      box-shadow: 0 0 8px 0 rgba(19, 83, 224, 0.5);
      background-color: unset;
      ${stateValue?.error ? errorFocusStyle : ''}
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

export function applyInputContainer(stateValue:StateValue) {
  return css`
    width: 280px;
    font-size: 14px;
    font-family: HelveticaNeue;
    line-height: 1.57;
    gap: 10px;
    padding: 9px 16px;
    border-radius: 4px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    border: solid 1px  ${globalColor(`--${illaPrefix}-gray-08`)};
    
    ${applyStatus(stateValue)}
  `
}

export function applyInputStyle() {
  return css`
    width: inherit;
    appearance: none;
    font-size: 14px;
    font-family: HelveticaNeue;
    line-height: 1.57;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    border-radius: 0;
    border: none;
    outline: unset;
    cursor: inherit;
    background-color: inherit;
    &::placeholder {
      color: ${globalColor(`--${illaPrefix}-gray-04`)};
    }
  `
}
