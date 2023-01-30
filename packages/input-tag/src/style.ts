import { css, SerializedStyles } from "@emotion/react"
import { InputTagColorScheme, InputTagSize } from "./interface"
import { getColor, getColorShadow, zIndex } from "@illa-design/theme"

export function applyInputTagInputStyle(
  size: InputTagSize,
  w: number,
): SerializedStyles {
  return css`
    width: ${w}px;
    font-size: 14px;
    background: none;
    outline: none;
    border: none;
    padding: 0;
    font-family: unset;
    line-height: ${size === "large"
      ? "32px"
      : size === "small"
      ? "22px"
      : "24px"};

    ::placeholder {
      font-size: 14px;
      color: ${getColor("grayBlue", "04")};
    }
  `
}

export function applyAddBeforeAfterStyle(
  size: InputTagSize,
  disabled: boolean,
  marginStyle: SerializedStyles,
): SerializedStyles {
  return css`
    transition: 0.2s ease-in-out;
    transition-property: border, background-color, box-shadow, background;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 14px;
    color: ${getColor("gray", "02")};
    background-color: ${disabled ? getColor("grayBlue", "09") : "unset"};
    border: 1px solid ${getColor("grayBlue", "08")};
    ${getPaddingStyle(size)};
    ${marginStyle};
  `
}

function getPaddingStyle(size: InputTagSize): SerializedStyles {
  let pdStyle = css``
  switch (size) {
    case "small":
      pdStyle = css`
        padding: 2px 12px;
      `
      break
    case "medium":
    case "large":
      pdStyle = css`
        padding: 4px 16px;
      `
      break
    default:
      break
  }
  return pdStyle
}

export function applyInputTagContainerStyle(
  size: InputTagSize,
  colorScheme: InputTagColorScheme,
  error: boolean,
  disabled: boolean,
  hasBefore: boolean,
  hasAfter: boolean,
): SerializedStyles {
  let otherStyle = css``
  if (!disabled) {
    otherStyle = css`
      &:hover {
        border-color: ${error
          ? getColor("red", "02")
          : getColor(colorScheme, "06")};
        z-index: ${zIndex.inputFocus};

        .clear {
          visibility: visible;
        }
      }

      &:focus-within {
        border-color: ${getColor(error ? "red" : colorScheme, "03")};
        box-shadow: 0 0 8px 0
          ${getColorShadow(error ? "red" : colorScheme, "01")};
        z-index: ${zIndex.inputFocus};
      }
    `
  }

  return css`
    transition: 0.2s ease-in-out;
    transition-property: border, background-color, box-shadow, background;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
    cursor: ${disabled ? "not-allowed" : "text"};
    border-radius: ${!hasBefore ? "8px" : "0"} ${!hasAfter ? "8px" : "0"}
      ${!hasAfter ? "8px" : "0"} ${!hasBefore ? "8px" : "0"};
    z-index: ${zIndex.input};
    border: 1px solid
      ${error ? getColor("red", "03") : getColor("grayBlue", "08")};
    flex-grow: 1;
    flex-shrink: 1;
    background-color: ${disabled ? getColor("grayBlue", "09") : "unset"};
    ${getPaddingStyle(size)};
    ${otherStyle};
  `
}

export const tagsListStyle = css`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  align-items: center;
  gap: 4px;
`

export const tagStyle = css`
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export function applyPrefixSuffixStyle(
  size: InputTagSize,
  disabled: boolean,
  marginStyle: SerializedStyles,
): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 14px;
    color: ${disabled ? getColor("gray", "05") : getColor("gray", "02")};
    ${marginStyle};
  `
}

export const calcSpanStyle = css`
  position: absolute;
  visibility: hidden;
  font-size: 14px;
`

export function applyInputContainerStyle(): SerializedStyles {
  return css`
    display: flex;
    width: 100%;
    flex-direction: row;
    border-radius: 8px;
    box-sizing: border-box;
  `
}
