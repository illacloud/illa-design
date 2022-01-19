import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import {
  applyVariantStyle,
  disableFillStyle,
  disableOutlineStyle,
  errorFillStyle,
  errorFocusStyle,
  errorOutlineStyle,
  hoverFillStyle,
  inputFillStyle,
  inputOutlineStyle,
} from "./style"
import { StateValue } from "./input"

function applyStatus(stateValue: StateValue) {
  let mainStyle: SerializedStyles
  let disableStyle, hoverStyle, inputStyle, errorStyle: SerializedStyles

  switch (stateValue?.variant) {
    default:
    case "fill":
      disableStyle = disableFillStyle
      hoverStyle = hoverFillStyle
      inputStyle = inputFillStyle
      errorStyle = errorFillStyle
      break
    case "outline":
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
      ${stateValue?.error ? errorFocusStyle : ''}
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

export function applyContainerCss(variant: string) {
  return css`
    position: relative;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 1.57;
    border-radius: 4px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    ${applyVariantStyle(variant)}
  `
}

export function applyTextAreaContainer(stateValue:StateValue) {
  return css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    line-height: 1.57;
    border-radius: 4px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    border: solid 1px  ${globalColor(`--${illaPrefix}-gray-08`)};
    ${applyStatus(stateValue)}
  `
}

export function applyTextAreaStyle() {
  return css`
    width: 100%;
    appearance: none;
    padding: 12px 16px;
    font-size: 14px;
    font-family: HelveticaNeue;
    line-height: 1.57;
    min-height: 44px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    border-radius: 4px;
    border: none;
    outline: unset;
    cursor: inherit;
    resize: vertical;
    background-color: inherit;
    &::placeholder {
      color: ${globalColor(`--${illaPrefix}-gray-04`)};
    }
  `
}

export function applyPrefixCls() {
  return css`
    margin-top: 4px;
    text-align: end;
    font-size: 14px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}

export const clearStyle = css`
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 10px;
`