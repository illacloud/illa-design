import { css, SerializedStyles } from "@emotion/react"
import { InputColorScheme, InputSize, InputVariant } from "./interface"
import { getColor, getColorShadow, zIndex } from "@illa-design/theme"

function getPaddingStyle(size: InputSize): SerializedStyles {
  let pdStyle = css``
  switch (size) {
    case "small":
      pdStyle = css`
        padding: 2px 12px;
      `
      break
    case "medium":
      pdStyle = css`
        padding: 5px 16px;
      `
      break
    case "large":
      pdStyle = css`
        padding: 9px 16px;
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
    flex-direction: row;
    border-radius: 4px;
    box-sizing: border-box;
  `
}

export function applyAddBeforeStyle(
  size: InputSize,
  variant: InputVariant,
  disabled: boolean,
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
    font-size: 14px;
    color: ${getColor("gray", "02")};
    background-color: ${variant === "fill"
      ? getColor("grayBlue", "09")
      : disabled
      ? getColor("grayBlue", "09")
      : "unset"};
    border-radius: 4px 0 0 4px;
    ${bdStyle};
    ${getPaddingStyle(size)};
  `
}

export function applyAddAfterStyle(
  size: InputSize,
  variant: InputVariant,
  disabled: boolean,
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
    font-size: 14px;
    color: ${getColor("gray", "02")};
    background-color: ${variant === "fill"
      ? getColor("grayBlue", "09")
      : disabled
      ? getColor("grayBlue", "09")
      : "unset"};
    border-radius: 0 4px 4px 0;
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
    transition: all 0.2s ease-in-out;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    border-radius: ${!hasBefore ? "4px" : "0"} ${!hasAfter ? "4px" : "0"}
      ${!hasAfter ? "4px" : "0"} ${!hasBefore ? "4px" : "0"};
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
    z-index: ${zIndex.input};

    &:hover {
      border-color: ${variant === "outline"
        ? error
          ? getColor("red", "02")
          : getColor(colorScheme, "06")
        : "transparent"};
      z-index: ${zIndex.inputFocus};
      background-color: ${variant === "fill"
        ? error
          ? getColor("red", "06")
          : getColor("grayBlue", "08")
        : "unset"};
    }

    &:focus-within {
      border-color: ${getColor(error ? "red" : colorScheme, "03")};
      box-shadow: 0 0 8px 0 ${getColorShadow(error ? "red" : colorScheme, "01")};
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
    transition: all 0.2s ease-in-out;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    cursor: not-allowed;
    border-radius: ${!hasBefore ? "4px" : "0"} ${!hasAfter ? "4px" : "0"}
      ${!hasAfter ? "4px" : "0"} ${!hasBefore ? "4px" : "0"};
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
    z-index: ${zIndex.input};
    ${getPaddingStyle(size)};
    ${bdLeftStyle};
    ${bdRightStyle};
  `
}

export function applyInputElementStyle(): SerializedStyles {
  return css`
    font-size: 14px;
    color: ${getColor("grayBlue", "02")};
    outline: none;
    border: none;
    flex-shrink: 1;
    flex-grow: 1;
    background: none;
    padding: 0;

    ::placeholder {
      font-size: 14px;
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
    justify-content: center;
    font-size: 14px;
    color: ${disabled ? getColor("gray", "05") : getColor("gray", "02")};
    margin-right: ${size === "small" ? "8px" : "12px"};
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
    font-size: 14px;
    flex-shrink: 0;
    color: ${disabled ? getColor("gray", "05") : getColor("gray", "02")};
    margin-left: ${size === "small" ? "8px" : "12px"};
  `
}

export function applyWordLimitStyle(size: InputSize): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
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
