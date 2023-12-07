import { css, SerializedStyles } from "@emotion/react"
import { InputColorScheme, InputSize, InputVariant } from "./interface"
import {
  getColor,
  getColorShadow,
  getSpecialThemeColor,
  zIndex,
} from "@illa-design/theme"

function getPaddingStyle(size: InputSize): SerializedStyles {
  let pdStyle = css``
  switch (size) {
    case "small":
      pdStyle = css`
        padding: 1px 12px;
      `
      break
    case "medium":
      pdStyle = css`
        padding: 4px 16px;
      `
      break
    case "large":
      pdStyle = css`
        padding: 8px 16px;
      `
      break
    default:
      break
  }
  return pdStyle
}

export function applyInputContainerStyle(): SerializedStyles {
  return css`
    display: flex;
    width: 100%;
    overflow: auto;
    flex-direction: row;
    box-sizing: border-box;
    font-size: 14px;
  `
}

export function applyAddBeforeStyle(
  size: InputSize,
  variant: InputVariant,
  disabled: boolean,
  borderList: string[],
): SerializedStyles {
  let bdStyle = css``
  switch (variant) {
    case "outline":
      bdStyle = css`
        border: 1px solid ${getColor("grayBlue", "08")};
      `
      break
    case "fill":
    default:
      break
  }
  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: -1px;
    color: ${getColor("gray", "02")};
    background-color: ${variant === "fill"
      ? getColor("grayBlue", "09")
      : disabled
      ? getColor("grayBlue", "09")
      : "unset"};
    border-radius: ${borderList[0]} 0 0 ${borderList[3]};
    ${bdStyle};
    ${getPaddingStyle(size)};
  `
}

export function applyAddAfterStyle(
  size: InputSize,
  variant: InputVariant,
  disabled: boolean,
  borderList: string[],
): SerializedStyles {
  let bdStyle = css``
  switch (variant) {
    case "outline":
      bdStyle = css`
        border: 1px solid ${getColor("grayBlue", "08")};
      `
      break
    case "fill":
    default:
      break
  }

  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-left: -1px;
    color: ${getColor("gray", "02")};
    background-color: ${variant === "fill"
      ? getColor("grayBlue", "09")
      : disabled
      ? getColor("grayBlue", "09")
      : "unset"};
    border-radius: 0 ${borderList[1]} ${borderList[2]} 0;
    ${bdStyle};
    ${getPaddingStyle(size)};
  `
}

export function applyInputStyle(
  size: InputSize,
  variant: InputVariant,
  colorScheme: InputColorScheme,
  error: boolean,
  hasBefore: boolean,
  hasAfter: boolean,
  borderList: string[],
): SerializedStyles {
  let bdLeftStyle = css``
  let bdRightStyle = css``
  if (variant === "fill") {
    if (hasBefore) {
      bdLeftStyle = css`
        border-left: 1px solid ${getColor("grayBlue", "08")};
      `
    }
    if (hasAfter) {
      bdRightStyle = css`
        border-right: 1px solid ${getColor("grayBlue", "08")};
      `
    }
  }

  return css`
    transition: 0.2s ease-in-out;
    transition-property: border, background-color, box-shadow, background;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    box-sizing: border-box;
    border-radius: ${!hasBefore ? borderList[0] : "0"}
      ${!hasAfter ? borderList[1] : "0"} ${!hasAfter ? borderList[2] : "0"}
      ${!hasBefore ? borderList[3] : "0"};
    background-color: ${variant === "fill"
      ? error
        ? getColor("red", "07")
        : getColor("grayBlue", "09")
      : "unset"};

    border: 1px solid
      ${variant === "outline"
        ? error
          ? getColor("red", "03")
          : getColor("grayBlue", "08")
        : "transparent"};

    ${getPaddingStyle(size)};
    ${bdLeftStyle};
    ${bdRightStyle};

    &:hover {
      border-color: ${variant === "outline"
        ? error
          ? getColor("red", "02")
          : getColor(colorScheme, "07")
        : "transparent"};
      z-index: ${zIndex.inputFocus};
      background-color: ${variant === "fill"
        ? error
          ? getColor("red", "06")
          : getColor("grayBlue", "08")
        : "unset"};

      .clear {
        visibility: visible;
      }
    }

    &:focus-within {
      border-color: ${getSpecialThemeColor(error ? "red" : colorScheme)};
      box-shadow: 0 0 8px 0 ${getColorShadow(error ? "red" : colorScheme, "03")};
      z-index: ${zIndex.inputFocus};
      background-color: unset;
    }
  `
}

export function applyInputDisabledStyle(
  size: InputSize,
  variant: InputVariant,
  colorScheme: InputColorScheme,
  error: boolean,
  hasBefore: boolean,
  hasAfter: boolean,
  borderList: string[],
): SerializedStyles {
  let bdLeftStyle = css``
  let bdRightStyle = css``
  if (variant === "fill") {
    if (hasBefore) {
      bdLeftStyle = css`
        border-left: 1px solid ${getColor("grayBlue", "08")};
      `
    }
    if (hasAfter) {
      bdRightStyle = css`
        border-right: 1px solid ${getColor("grayBlue", "08")};
      `
    }
  }

  return css`
    transition: 0.2s ease-in-out;
    transition-property: border, background-color, box-shadow, background;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    cursor: not-allowed;
    border-radius: ${!hasBefore ? borderList[0] : "0"}
      ${!hasAfter ? borderList[1] : "0"} ${!hasAfter ? borderList[2] : "0"}
      ${!hasBefore ? borderList[3] : "0"};
    background-color: ${variant === "fill"
      ? error
        ? getColor("red", "07")
        : getColor("grayBlue", "09")
      : getColor("grayBlue", "09")};

    border: 1px solid
      ${variant === "outline"
        ? error
          ? getColor("red", "03")
          : getColor("grayBlue", "08")
        : "transparent"};
    ${getPaddingStyle(size)};
    ${bdLeftStyle};
    ${bdRightStyle};
  `
}

export function applyLabelDomElementStyle(size: InputSize): SerializedStyles {
  return css`
    flex-shrink: 1;
    width: 100%;
    flex-grow: 1;
    min-height: ${size === "small" ? "20px" : "22px"};
    line-height: ${size === "small" ? "20px" : "22px"};
    display: flex;
    align-items: center;
    color: ${getColor("grayBlue", "02")};
  `
}

export function applyInputElementStyle(size: InputSize): SerializedStyles {
  return css`
    font-size: inherit;
    color: ${getColor("grayBlue", "02")};
    outline: none;
    line-height: ${size === "small" ? "20px" : "22px"};
    border: none;
    flex-shrink: 1;
    width: 100%;
    flex-grow: 1;
    font-family: unset;
    background: none;
    padding: 0;

    ::placeholder {
      color: ${getColor("grayBlue", "04")};
    }

    &:focus-within {
      outline: none;
      border: none;
      background: none;
    }

    &:active {
      outline: none;
      border: none;
      background: none;
    }

    &:disabled {
      cursor: not-allowed;
      color: ${getColor("grayBlue", "05")};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  `
}

export function applyPrefixStyle(
  size: InputSize,
  disabled: boolean,
): SerializedStyles {
  return css`
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    color: ${disabled ? getColor("gray", "05") : getColor("gray", "02")};
    margin-right: ${size === "small" ? "8px" : "12px"};
    min-height: 22px;
  `
}

export function applySuffixStyle(
  size: InputSize,
  disabled: boolean,
): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${disabled ? getColor("gray", "05") : getColor("gray", "02")};
    margin-left: ${size === "small" ? "8px" : "12px"};
    align-self: center;
    min-height: 22px;
  `
}

export function applyWordLimitStyle(size: InputSize): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${getColor("grayBlue", "04")};
    margin-left: ${size === "small" ? "8px" : "12px"};
  `
}

export function applyMaxLengthBeforeStyle(error: Boolean): SerializedStyles {
  return error
    ? css`
        color: ${getColor("red", "03")};
      `
    : css``
}

export const searchIconContainer = css`
  color: ${getColor("grayBlue", "05")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const textareaStyle = css`
  resize: vertical;
  color: ${getColor("grayBlue", "02")};
  outline: none;
  font-family: unset;
  background: none;
  width: 100%;
  font-size: 14px;
  min-height: 32px;

  ::placeholder {
    color: ${getColor("grayBlue", "04")};
  }
`

export const textareaContainerStyle = css`
  position: relative;
  display: flex;
  align-items: end;
  flex-direction: column;
  font-size: 14px;

  &:hover {
    .clear {
      visibility: visible;
    }
  }
`

export const areaLimitStyle = css`
  margin-top: 4px;
`
