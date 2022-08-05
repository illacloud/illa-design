import { getColor, globalColor, illaPrefix } from "@illa-design/theme"
import {
  SelectOptionStateValue,
  SelectProps,
  SelectStateValue,
} from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"
import chroma from "chroma-js"

const OPTION_LINE_HEIGHT = 36
const OPTION_PADDING = {
  small: [0, 12],
  medium: [0, 16],
  large: [0, 16],
}
const OPTION_HEIGHT = {
  small: 24,
  medium: 32,
  large: 40,
}

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
  const colorScheme = stateValue.colorScheme ?? "blue"
  if (stateValue?.disabled) {
    mainStyle = css`
      cursor: not-allowed;
      ${disableOutlineStyle}
    `
  } else if (stateValue?.readOnly) {
    mainStyle = css``
  } else if (stateValue?.focus) {
    const boxShadowColor = getColor(colorScheme, "01")
    const borderColor = getColor(colorScheme, "03")
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
        border-color: ${getColor(colorScheme, "06")};
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
  const optionHeight = OPTION_HEIGHT[stateValue.size]
  return css`
    transition: all 200ms ease-in-out;
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    cursor: pointer;
    display: flex;
    height: ${optionHeight}px;

    &:hover {
      [title="selectRemoveIcon"] {
        opacity: 1;
        // selectSuffixIcon hidden
        & ~ * {
          visibility: hidden;
        }
      }
    }

    border-radius: ${stateValue.borderRadius};

    &:not(:first-of-type) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &:not(:last-of-type) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
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
    ${showInput ? "" : css({ display: "none !important" })};
  `
}

export function applyIconStyle(): SerializedStyles {
  return css`
    & > svg {
      font-size: 12px;
    }

    display: flex;
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
  stateValue: SelectOptionStateValue,
): SerializedStyles {
  const { colorScheme, isChecked, multiple, disabled, size } = stateValue
  const bgColor = getColor(colorScheme, "07")
  const color = getColor(colorScheme, "01")
  let stateStyle: SerializedStyles = css()
  if (isChecked) {
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

  if (disabled) {
    stateStyle = css`
      ${stateStyle};
      cursor: not-allowed;
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
    `
    if (!isChecked) {
      stateStyle = css`
        ${stateStyle};

        &:hover {
          background-color: unset;
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
    display: inline-flex;

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
  const optionHeight = OPTION_HEIGHT[size]
  const maxHeight = MAX_VISIBLE_OPTION_COUNT * optionHeight
  return css`
    max-height: ${maxHeight}px;
    overflow: auto;
    background-color: white;
    border-radius: 8px;
  `
}

export const optionLabelStyle = css`
  margin-left: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
`

export function applySelectViewStyle(width?: string): SerializedStyles {
  return css`
    display: flex;
    width: ${width ? width : "100%"};
  `
}
