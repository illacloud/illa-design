import { css, SerializedStyles } from "@emotion/react"
import { InputTagColorScheme, InputTagSize } from "./interface"
import { getColor, getColorShadow, zIndex } from "@illa-design/theme"

export function applyInputTagInputStyle(w: number): SerializedStyles {
  return css`
    width: ${w}px;
    font-size: 14px;
    background: none;
    outline: none;
    border: none;
    padding: 0;
    font-family: unset;
  `
}

function getPaddingStyle(size: InputTagSize): SerializedStyles {
  let pdStyle = css``
  switch (size) {
    case "small":
      pdStyle = css`
        padding: 2px 16px;
        min-height: 24px;
      `
      break
    case "medium":
      pdStyle = css`
        padding: 2px 16px;
        min-height: 32px;
      `
      break
    case "large":
      pdStyle = css`
        padding: 2px 16px;
        min-height: 40px;
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
): SerializedStyles {
  let otherStyle = css``
  if (!disabled) {
    otherStyle = css`
      &:hover {
        border-color: ${error
          ? getColor("red", "02")
          : getColor(colorScheme, "06")};
        z-index: ${zIndex.inputFocus};
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
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    cursor: ${disabled ? "not-allowed" : "text"};
    border-radius: 4px;
    z-index: ${zIndex.input};
    border: 1px solid
      ${error ? getColor("red", "03") : getColor("grayBlue", "08")};
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

export function applySuffixStyle(
  size: InputTagSize,
  disabled: boolean,
): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 14px;
    color: ${disabled ? getColor("gray", "05") : getColor("gray", "02")};
    margin-left: ${size === "small" ? "8px" : "12px"};
  `
}

export const calcSpanStyle = css`
  position: absolute;
  visibility: hidden;
  font-size: 14px;
`
