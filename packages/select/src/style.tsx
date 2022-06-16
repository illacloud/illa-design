import { globalColor, illaPrefix } from "@illa-design/theme"
import { ColorScheme, SelectProps, SelectStateValue } from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"
import chroma from "chroma-js"

const OPTION_LINE_HEIGHT = 36
const OPTION_PADDING = {
  small: [1, 12],
  medium: [5, 16],
  large: [9, 16],
}

const innerColor = [
  "gray",
  "blue",
  "purple",
  "red",
  "green",
  "yellow",
  "orange",
  "cyan",
  "white",
  "grayBlue",
  "techPink",
  "techPurple",
]

// default select
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

function applyStatus(stateValue: SelectStateValue) {
  let mainStyle: SerializedStyles
  let inputStyle = inputOutlineStyle
  const { colorScheme } = stateValue
  const isInnerColor = colorScheme && innerColor.indexOf(colorScheme) > -1
  if (stateValue?.disabled) {
    mainStyle = css`
      cursor: not-allowed;
      ${disableOutlineStyle}
    `
  } else if (stateValue?.readOnly) {
    mainStyle = css`
      cursor: not-allowed;
    `
  } else if (stateValue?.focus) {
    const boxShadowColor = isInnerColor
      ? globalColor(`--${illaPrefix}-${colorScheme}-01`)
      : globalColor(`--${illaPrefix}-blue-01`)
    const borderColor = isInnerColor
      ? globalColor(`--${illaPrefix}-${colorScheme}-03`)
      : globalColor(`--${illaPrefix}-blue-03`)
    mainStyle = css`
      border-color: ${borderColor};
      box-shadow: 0 0 8px 0
        ${boxShadowColor ? chroma(boxShadowColor).alpha(0.15).hex() : ""};
      ${stateValue?.error ? errorFocusStyle : ""}
      background-color: white;
    `
  } else if (stateValue?.error) {
    mainStyle = css`
      ${errorOutlineStyle}
    `
  } else {
    mainStyle = css`
      &:hover {
        border-color: ${isInnerColor
          ? globalColor(`--${illaPrefix}-${colorScheme}-06`)
          : chroma.mix(colorScheme ?? "blue", "white", 0.6).hex()};
      }
    `
  }
  return css`
    ${inputStyle};
    ${mainStyle};
  `
}

export function applySizeStyle(size: SelectProps["size"] = "medium") {
  const [vPadding, hPadding] = OPTION_PADDING[size]

  return css`
    padding: ${vPadding}px ${hPadding}px;
  `
}

// SelectView
export function applySelectView(
  stateValue: SelectStateValue,
): SerializedStyles {
  return css`
    transition: all 200ms ease-in-out;
    box-sizing: border-box;
    width: 100%;
    line-height: 30px;
    font-size: 14px;
    border-radius: 4px;
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    cursor: pointer;

    &:hover {
      [title="selectRemoveIcon"] {
        opacity: 1;
        // selectSuffixIcon hidden
        & ~ * {
          visibility: hidden;
        }
      }
    }

    ${applyStatus(stateValue)}
  `
}

export function applySelectContent(
  stateValue: SelectStateValue,
): SerializedStyles {
  return css`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${applySizeStyle(stateValue?.size)}
  `
}

export function applySelectViewText(
  showInput?:
    | boolean
    | { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean },
): SerializedStyles {
  return css`
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 4px;
    ${showInput ? "" : css({ display: "none !important" })};
  `
}

export function applyIconStyle(): SerializedStyles {
  return css`
    & > svg {
      font-size: 12px;
    }

    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  `
}

export function iconPointerStyle(size: string) {
  let positionStyle: SerializedStyles = css()
  switch (size) {
    default:
    case "large":
      positionStyle = css`
        right: 16px;
      `
      break
    case "medium":
      positionStyle = css`
        right: 16px;
      `
      break
    case "small":
      positionStyle = css`
        right: 12px;
      `
      break
  }
  return css`
    position: absolute;
    right: 12px;
    opacity: 0;
    cursor: pointer;
    color: ${globalColor(`--${illaPrefix}-grayBlue-06`)};

    &:hover {
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
    }

    & > svg {
      font-size: 12px;
    }

    ${positionStyle}
  `
}

// option
export function applyOptionStyle(
  size: SelectProps["size"],
  multiple?: boolean,
  checked?: boolean,
  colorScheme?: ColorScheme,
): SerializedStyles {
  const isInnerColor = colorScheme && innerColor.indexOf(colorScheme) > -1
  const bgColor = isInnerColor
    ? globalColor(`--${illaPrefix}-${colorScheme}-07`)
    : globalColor(`--${illaPrefix}-blue-07`)
  const color = isInnerColor
    ? globalColor(`--${illaPrefix}-${colorScheme}-01`)
    : globalColor(`--${illaPrefix}-blue-01`)
  let stateStyle: SerializedStyles = css()
  if (checked) {
    if (multiple) {
      stateStyle = css`
        color: ${color};
      `
    } else {
      stateStyle = css`
        background-color: ${bgColor};
        color: ${color};
        &:hover {
          background-color: ${bgColor};
        }
      `
    }
  }

  return css`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 0 12px;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    line-height: ${OPTION_LINE_HEIGHT}px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    list-style: none;
    display: flex;
    align-items: center;

    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    }

    ${stateStyle}
    ${applySizeStyle(size)}
  `
}
export function applyOptionListStyle(
  size: SelectProps["size"] = "medium",
): SerializedStyles {
  const MAX_VISIBLE_OPTION_COUNT = 6
  const optionHeight = OPTION_LINE_HEIGHT + OPTION_PADDING[size][0] * 2
  const maxHeight = MAX_VISIBLE_OPTION_COUNT * optionHeight
  return css`
    max-height: ${maxHeight}px;
    overflow: auto;
    background-color: white;
  `
}
