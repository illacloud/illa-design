import chroma from "chroma-js"
import { css, SerializedStyles } from "@emotion/react"
import { getColor, globalColor, illaPrefix } from "@illa-design/theme"
import { InputTagProps, InputTagStateValue } from "./interface"

export const inputOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
`
export const disableOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
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

function applySizeStyle(size?: string): SerializedStyles {
  let sizeCss: SerializedStyles
  switch (size) {
    default:
    case "large":
      sizeCss = css`
        padding: 8px 16px;
      `
      break
    case "medium":
      sizeCss = css`
        padding: 4px 16px;
      `
      break
    case "small":
      sizeCss = css`
        padding: 4px 12px;
      `
      break
  }
  return sizeCss
}

export function applyInputInnerCss(
  size?: InputTagProps["size"],
): SerializedStyles {
  let paddingCss: SerializedStyles
  switch (size) {
    default:
    case "large":
      paddingCss = css`
        gap: 8px;
      `
      break
    case "medium":
      paddingCss = css`
        gap: 4px;
      `
      break
    case "small":
      paddingCss = css`
        gap: 4px;
      `
      break
  }
  return css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;
    ${paddingCss}
  `
}

export function applyFilterInput(
  stateValue: InputTagStateValue,
): SerializedStyles {
  if (!stateValue?.focus) {
    return css`
      &:not(:first-child) {
        width: 0 !important;
        position: absolute;
        bottom: 0;
      }
    `
  }
  return css``
}

function applyStatus(stateValue: InputTagStateValue): SerializedStyles {
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
    const boxShadowColor = getColor(stateValue.borderColor, "01")
    mainStyle = css`
      border-color: ${getColor(stateValue.borderColor, "03")};
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

export function applyInputContainer(
  stateValue: InputTagStateValue,
): SerializedStyles {
  return css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    line-height: 1.57;
    cursor: text;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    border-radius: 8px;
    transition: all 200ms ease-in-out;
    ${applySizeStyle(stateValue?.size)};
    ${applyStatus(stateValue)}
  `
}

function baseFixCls(size: InputTagProps["size"]): SerializedStyles {
  let sizeCss: SerializedStyles
  switch (size) {
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

export function applySuffixCls(size: InputTagProps["size"]): SerializedStyles {
  return css`
    ${baseFixCls(size)}
    margin-left: 12px;
  `
}

export const pointerStyle = css`
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-grayBlue-06`)};

  &:hover {
    color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  }
`

// renderTag style
export const tagStyle = css`
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
