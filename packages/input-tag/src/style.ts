import { css, SerializedStyles } from "@emotion/react"
import { InputTagColorScheme, InputTagSize } from "./interface"
import {
  getColor,
  getColorShadow,
  getSpecialThemeColor,
  zIndex,
} from "@illa-design/theme"

export function applyInputTagInputStyle(
  size: InputTagSize,
  w: number,
): SerializedStyles {
  return css`
    width: ${w}px;
    font-size: inherit;
    background: none;
    outline: none;
    border: none;
    padding: 0;
    font-family: unset;
    line-height: 22px;

    ::placeholder {
      color: ${getColor("grayBlue", "04")};
    }
  `
}

export function applyInputTagPlaceHolderStyle(
  size: InputTagSize,
): SerializedStyles {
  return css`
    color: ${getColor("grayBlue", "04")};
    width: unset;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: ${size === "large"
      ? "32px"
      : size === "small"
      ? "22px"
      : "22px"};
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
        padding: 0 12px;
        min-height: 24px;
      `
      break
    case "medium":
      pdStyle = css`
        padding: 3px 16px;
        min-height: 32px;
      `
      break
    case "large":
      pdStyle = css`
        padding: 7px 16px;
        min-height: 40px;
      `
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
  borderList: string[],
): SerializedStyles {
  let otherStyle = css``
  if (!disabled) {
    otherStyle = css`
      &:hover {
        border-color: ${error
          ? getColor("red", "02")
          : getColor(colorScheme, "07")};
        z-index: ${zIndex.inputFocus};

        .clear {
          visibility: visible;
        }
      }

      &:focus-within {
        border-color: ${getSpecialThemeColor(error ? "red" : colorScheme)};
        box-shadow: 0 0 8px 0
          ${getColorShadow(error ? "red" : colorScheme, "03")};
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
    border-radius: ${!hasBefore ? borderList[0] : "0"}
      ${!hasAfter ? borderList[1] : "0"} ${!hasAfter ? borderList[2] : "0"}
      ${!hasBefore ? borderList[3] : "0"};
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
  position: relative;
  flex-shrink: 1;
  overflow: hidden;
  align-items: center;
  gap: 8px;
`

export const tagStyle = css`
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export function applyPrefixSuffixStyle(
  disabled: boolean,
  marginStyle: SerializedStyles,
): SerializedStyles {
  return css`
    align-self: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${disabled ? getColor("gray", "05") : getColor("gray", "02")};
    min-height: 22px;
    ${marginStyle};
  `
}

export const calcSpanStyle = css`
  position: absolute;
  visibility: hidden;
`

export function applyInputContainerStyle(): SerializedStyles {
  return css`
    display: flex;
    width: 100%;
    flex-direction: row;
    box-sizing: border-box;
    font-size: 14px;
  `
}
