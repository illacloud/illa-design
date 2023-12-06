import { css } from "@emotion/react"
import { getColor } from "@illa-design/theme"
import { InputColorScheme, InputSize } from "./interface"

export const applyInputSizeStyle = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return css`
        font-size: 12px;
        padding: 1px 12px;
      `
    case "large":
      return css`
        font-size: 14px;
        padding: 8px 16px;
      `
    case "medium":
    default:
      return css`
        font-size: 14px;
        padding: 4px 16px;
      `
  }
}

export const inputErrorStyle = css`
  background-color: ${getColor("red", "08")};
  border: 1px solid ${getColor("red", "03")};

  &:hover {
    border-color: ${getColor("red", "03")};
    background-color: ${getColor("red", "07")};
  }
`

const baseInputDisabledStyle = css`
  color: ${getColor("grayBlue", "05")};
  background-color: ${getColor("grayBlue", "09")};
  border: 1px solid ${getColor("grayBlue", "08")};
  cursor: not-allowed;
  input[disabled] {
    cursor: not-allowed;
    color: ${getColor("grayBlue", "05")};
    -webkit-text-fill-color: ${getColor("grayBlue", "05")};
    &::placeholder {
      color: ${getColor("grayBlue", "05")};
    }
  }
`

export const inputDisabledStyle = css`
  ${baseInputDisabledStyle};
  :hover {
    ${baseInputDisabledStyle};
  }
`

export const applyInputColorSchemeStyle = (colorScheme: InputColorScheme) => {
  return css`
    background-color: transparent;
    border: 1px solid ${getColor("grayBlue", "08")};
    :hover {
      border-color: ${getColor(colorScheme, "06")};
      background-color: transparent;
    }
  `
}

export const inputBaseWrapperStyle = css`
  width: 100%;
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  box-sizing: border-box;
  transition: 0.2s ease-in-out;
`

export const applyShowClearIconStyle = (showClearIcon?: boolean) => {
  const suffixIconStyle =
    showClearIcon &&
    css`
      :hover .suffix-icon {
        display: none;
      }
    `
  return css`
    :hover .clear-icon {
      display: inline-block;
    }
    ${suffixIconStyle}
  `
}

export const applyInputWrapperStyle = (
  size: InputSize,
  colorScheme: InputColorScheme,
  disabled?: boolean,
  error?: boolean,
  showClearIcon?: boolean,
) => {
  return css`
    ${inputBaseWrapperStyle};
    ${applyInputSizeStyle(size)};
    ${applyInputColorSchemeStyle(colorScheme)};
    ${disabled && inputDisabledStyle};
    ${!disabled && applyShowClearIconStyle(showClearIcon)}
    ${error && inputErrorStyle};
  `
}

const applyPrefixSizeStyle = (size: InputSize) => {
  switch (size) {
    case "small":
      return css`
        padding-right: 8px;
        font-size: 12px;
      `
    case "large":
      return css`
        padding-right: 12px;
        font-size: 14px;
      `
    case "medium":
    default:
      return css`
        padding-right: 12px;
        font-size: 14px;
      `
  }
}

export const applyPrefixStyle = (size: InputSize) => {
  return css`
    color: ${getColor("grayBlue", "02")};
    ${applyPrefixSizeStyle(size)};
  `
}

export const inputStyle = css`
  display: inline-flex;
  flex: 1;
`

const applyRealInputSizeStyle = (size: InputSize) => {
  switch (size) {
    case "small":
      return css`
        height: 20px;
        line-height: 20px;
      `
    case "large":
      return css`
        height: 22px;
        line-height: 22px;
      `
    case "medium":
    default:
      return css`
        height: 22px;
        line-height: 22px;
      `
  }
}

export const applyRealInputStyle = (size: InputSize) => {
  return css`
    text-align: left;
    padding: 0;
    border: none;
    width: 100%;
    color: ${getColor("grayBlue", "02")};
    background-color: transparent;
    outline: none;
    ${applyRealInputSizeStyle(size)}
  `
}

export const baseSuffixStyle = css`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const clearIconStyle = css`
  display: none;
  font-size: 12px;
  color: ${getColor("grayBlue", "05")};
  cursor: pointer;
`

export const suffixIconStyle = css`
  color: ${getColor("grayBlue", "01")};
  height: 100%;
  display: inline-flex;
  svg {
    vertical-align: unset;
  }
`

export const realInputActiveBGStyle = css`
  input {
    background-color: ${getColor("blue", "08")};
  }
`

export const applyRangeInputStyle = (isActive: boolean) => {
  return css`
    ${inputStyle};
    ${isActive && realInputActiveBGStyle};
  `
}

export const separatorStyle = css`
  min-width: 8px;
  padding: 0 12px;
  color: ${getColor("grayBlue", "06")};
`
