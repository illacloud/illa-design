import chroma from "chroma-js"
import { css, SerializedStyles } from "@emotion/react"
import { getColor, globalColor, illaPrefix } from "@illa-design/theme"
import { InputSize, StateValue } from "./interface"

export const inputFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  border-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
`
export const inputOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
`
export const disableOutlineStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
`
export const disableFillStyle = css`
  border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
`
export const hoverFillStyle = css`
  background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
`

export const errorFocusStyle = css`
  background-color: unset;
  border-color: ${globalColor(`--${illaPrefix}-red-03`)};
  box-shadow: 0 0 8px 0
    ${chroma(globalColor(`--${illaPrefix}-red-01`))
      .alpha(0.15)
      .hex()};
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
        background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
        border-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
      `
      break
    case "outline":
      inputStyle = css`
        border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      `
      break
  }
  return inputStyle
}

export function applyContainerCss(stateValue: StateValue) {
  return css`
    width: ${stateValue.width};
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    vertical-align: middle;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    ${applySizeStyle(stateValue?.size)};
  `
}

function applySizeStyle(size?: string) {
  let sizeCss: SerializedStyles
  switch (size) {
    default:
    case "large":
      sizeCss = css`
        height: 40px;
        line-height: 22px;
      `
      break
    case "medium":
      sizeCss = css`
        height: 32px;
        line-height: 22px;
      `
      break
    case "small":
      sizeCss = css`
        height: 24px;
        font-size: 12px;
        line-height: 18px;
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

  if (stateValue.withoutNormalBorder) {
    const _activeCss = stateValue.focus
      ? css``
      : css`
          &:hover {
            border-color: transparent;
          }
        `
    return css`
      ${inputStyle};
      border-color: transparent;
      ${mainStyle};
      ${_activeCss}
    `
  }
  return css`
    ${inputStyle};
    ${mainStyle};
  `
}

export function applySizeCss(
  requirePadding?: boolean,
  size?: InputSize,
): SerializedStyles {
  let paddingCss: SerializedStyles = css()
  if (requirePadding && size == "small") {
    paddingCss = css`
      padding: 0 12px;
    `
  } else if (requirePadding) {
    paddingCss = css`
      padding: 0 16px;
    `
  }
  return paddingCss
}

export function applyInputContainer(
  stateValue: StateValue,
  requirePadding?: boolean,
) {
  let borderRadius
  if (stateValue.borderRadius) {
    borderRadius = css`
      border-radius: ${stateValue.borderRadius};
    `
  } else {
    borderRadius = css`
      &:first-of-type {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      &:last-of-type {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    `
  }
  return css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    font-size: inherit;
    line-height: inherit;
    box-sizing: border-box;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    transition: all 200ms ease-in-out;
    ${applySizeCss(requirePadding, stateValue?.size)};

    ${applyStatus(stateValue)}
    ${borderRadius}
    &:hover {
      [title="InputClearIcon"] {
        opacity: 1;
        // input suffix hidden
        ${stateValue.iconAppearWithSuffix
          ? css`
              & ~ * {
                visibility: hidden;
              }
            `
          : ""}
      }
    }
  `
}

export function applyInputStyle(textCenterHorizontal?: boolean) {
  let textAlignCss: SerializedStyles
  if (textCenterHorizontal) {
    textAlignCss = css`
      text-align: center;
    `
  } else {
    textAlignCss = css`
      text-align: start;
    `
  }
  return css`
    width: 100%;
    appearance: none;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    border: none;
    outline: unset;
    cursor: inherit;
    background-color: inherit;
    padding: 0;

    ${textAlignCss}
    &::placeholder {
      color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
    }

    &:read-only {
      color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};

      &::placeholder {
        color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
      }
    }

    &:disabled {
      cursor: not-allowed;
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};

      &::placeholder {
        color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
      }
    }
  `
}

function baseFixCls(stateValue: StateValue) {
  let sizeCss: SerializedStyles
  switch (stateValue?.size) {
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

export function applyPrefixCls(stateValue: StateValue) {
  return css`
    ${baseFixCls(stateValue)}
    &:first-of-type {
      margin-right: 12px;
    }

    &:last-child {
      margin-left: 12px;
    }
  `
}

export function applySuffixCls(stateValue: StateValue) {
  return css`
    ${baseFixCls(stateValue)}
    margin-left: 12px;
  `
}

export function applyAddonCss(stateValue: StateValue) {
  let inputStyle: SerializedStyles
  switch (stateValue?.variant) {
    default:
    case "fill":
      inputStyle = css`
        background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
        border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
        border-top: 0;
        border-bottom: 0;

        &:first-of-type {
          border-left: 0;
        }

        &:last-of-type {
          border-right: 0;
        }
      `
      break
    case "outline":
      inputStyle = css`
        border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};

        &:first-of-type {
          border-right: 0;
        }

        &:last-of-type {
          border-left: 0;
        }
      `
      break
  }
  return css`
    ${baseFixCls(stateValue)}
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    border-width: 1px;
    border-style: solid;
    padding: 0 16px;
    height: 100%;
    box-sizing: border-box;

    &:first-of-type {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-of-type {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    ${inputStyle}
  `
}

export const applyCountLimitStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
`

export function applyLengthErrorStyle(error?: boolean) {
  if (error) {
    return css`
      color: ${globalColor(`--${illaPrefix}-red-03`)};
    `
  }
  return css`
    color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  `
}

export const pointerStyle = css`
  transition: color 200ms ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${globalColor(`--${illaPrefix}-grayBlue-06`)};

  &:hover {
    color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  }
`
export const clearStyle = css`
  opacity: 0;
  margin-left: 8px;
  display: flex;
`

/**
 * support when input hover, hide suffix
 *
 * @param size
 * @param AppearWithSuffix Does it Appear at the same time with suffix
 */
export function applyClearStyle(
  size?: InputSize,
  AppearWithSuffix?: boolean,
): SerializedStyles {
  let sizeCss: SerializedStyles
  if (size == "small") {
    sizeCss = css`
      position: absolute;
      right: 12px;
    `
  } else {
    sizeCss = css`
      position: absolute;
      right: 16px;
    `
  }

  return AppearWithSuffix
    ? css`
        opacity: 0;
        ${sizeCss}
      `
    : clearStyle
}

export const mirrorStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  width: unset;
`

// rangeInput style

export function applyRangeContainer(stateValue: StateValue): SerializedStyles {
  return css`
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    font-size: 14px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    transition: all 200ms ease-in-out;
    border-radius: ${stateValue.borderRadius};
    ${applyStatus(stateValue)}
    ${applySizeStyle(stateValue?.size)}
    ${applySizeCss(true, stateValue?.size)};

    &:hover {
      [title="InputClearIcon"] {
        opacity: 1;
        // input suffix hidden
        & ~ * {
          //margin-left: 2px;
          visibility: hidden;
        }
      }
    }
  `
}

export function applyRangeInput(focus?: boolean): SerializedStyles {
  return css`
    transition: all 200ms ease-in-out;
    ${focus
      ? css`
          border-radius: 2px;
          background-color: ${globalColor(`--${illaPrefix}-blue-07`)};
        `
      : null}
  `
}

export const SeparatorStyle = css`
  width: 8px;
  height: 2px;
  border-radius: 0.5px;
  background-color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
`
