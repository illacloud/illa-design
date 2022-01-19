import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { StateValue } from "./input"

export const inputFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
  border-color: ${globalColor(`--${illaPrefix}-gray-09`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`
export const inputOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`
export const disableOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
`
export const disableFillStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
`
export const hoverFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
`

export const errorFocusStyle = css`
  background-color: unset;
  border-color: ${globalColor(`--${illaPrefix}-red-03`)};
  box-shadow: 0 0 8px 0 rgba(224, 36, 36, 0.5);
`
export const errorFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-red-07`)};
  border-color: ${globalColor(`--${illaPrefix}-red-07`)};
  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-red-06`)};
    border-color: ${globalColor(`--${illaPrefix}-red-06`)};
  }
`
export const errorOutlineStyle = css`
  background-color: unset;
  border-color: ${globalColor(`--${illaPrefix}-red-03`)};
  &:hover {
    border-color: ${globalColor(`--${illaPrefix}-red-02`)};
  }
`
export function applyVariantStyle(variant?: string) {
  let inputStyle: SerializedStyles
  switch (variant) {
    default:
    case "fill":
      inputStyle = css`
        background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
        border-color: ${globalColor(`--${illaPrefix}-gray-09`)};
      `
      break
    case "outline":
      inputStyle = css`
        border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
      `
      break
  }
  return inputStyle
}

export function applyContainerCss(variant: string) {
  return css`
    width: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 1.57;
    border-radius: 4px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    ${applyVariantStyle(variant)}
  `
}

function applySizeStyle(size?: string) {
  let sizeCss: SerializedStyles
  switch (size) {
    default:
    case "large":
      sizeCss = css`
        height: 40px;
      `
      break
    case "medium":
      sizeCss = css`
        height: 32px;
      `
      break
    case "small":
      sizeCss = css`
        height: 24px;
      `
      break
  }
  return sizeCss
}

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

export function applyInputContainer(stateValue:StateValue) {
  let sizeCss: SerializedStyles

  switch (stateValue?.size) {
    default:
    case "large":
      sizeCss = css`
        height: 40px;
        padding: 0 16px;
      `
      break
    case "medium":
      sizeCss = css`
        height: 32px;
        padding: 0 16px;
      `
      break
    case "small":
      sizeCss = css`
        height: 24px;
        padding: 0 12px;
      `
      break
  }

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
    ${sizeCss}
    ${applyStatus(stateValue)}
  `
}

export function applyInputStyle() {
  return css`
    width: 100%;
    appearance: none;
    font-size: 14px;
    font-family: HelveticaNeue;
    line-height: 22px;
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

export function applyPrefixCls() {
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    &:first-child {
      margin-right: 12px;
    }
    &:last-child {
      margin-left: 12px;
    }
  `
}

export function applyAddonCss(stateValue:StateValue) {
  let inputStyle: SerializedStyles
  switch (stateValue?.variant) {
    default:
    case "fill":
      inputStyle = css`
        background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
        border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
        border-top: 0;
        border-bottom: 0;
        &:first-child {
          border-left: 0;
        }
        &:last-child {
          border-right: 0;
        }
      `
      break
    case "outline":
      inputStyle = css`
        border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
        &:first-child {
          border-right: 0;
        }
        &:last-child {
          border-left: 0;
        }
      `
      break
  }
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
    border-width: 1px;
    border-style: solid;
    padding: 0 12px;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    ${inputStyle}
    ${applySizeStyle(stateValue?.size)}
  `
}

export function applyCountLimitStyle() {

  return css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${globalColor(`--${illaPrefix}-gray-05`)};
  `
}

export function applyLengthErrorStyle(error?: boolean) {
  if (error) {
    return css`
      color: ${globalColor(`--${illaPrefix}-red-03`)};
    `
  }
  return  css`
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
}

export const pointerStyle = css`
  cursor: pointer;
`