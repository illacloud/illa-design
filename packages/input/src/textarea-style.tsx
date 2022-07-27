import chroma from "chroma-js"
import { css, SerializedStyles } from "@emotion/react"
import { getColor, globalColor, illaPrefix } from "@illa-design/theme"
import {
  disableFillStyle,
  disableOutlineStyle,
  errorFillStyle,
  errorFocusStyle,
  errorOutlineStyle,
  hoverFillStyle,
  inputFillStyle,
  inputOutlineStyle,
} from "./style"
import { StateValue } from "./interface"

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
      border-color: ${getColor(stateValue.borderColor, "03")};
      box-shadow: 0 0 8px 0
        ${chroma(getColor(stateValue.borderColor, "01")).alpha(0.15).hex()};
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
        border-color: ${getColor(stateValue.borderColor, "06")};
        ${hoverStyle}
      }
    `
  }
  return css`
    ${inputStyle};
    ${mainStyle};
  `
}

export function applyTextAreaContainer(stateValue: StateValue) {
  return css`
    width: 100%;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    line-height: 22px;
    border-radius: 4px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    ${applyStatus(stateValue)}
  `
}

export function applyTextAreaStyle() {
  return css`
    width: 100%;
    appearance: none;
    box-sizing: border-box;
    padding: 5px 17px 12px;
    font-size: 14px;
    line-height: 22px;
    min-height: 44px;
    height: 44px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    border-radius: 4px;
    border: 1px solid transparent;
    outline: unset;
    cursor: inherit;
    resize: vertical;
    background-color: inherit;
    overflow: auto;

    &::placeholder {
      color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
    }
  `
}

export function applyPrefixCls() {
  return css`
    margin-top: 4px;
    text-align: end;
    font-size: 14px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  `
}

export const clearStyle = css`
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
`
