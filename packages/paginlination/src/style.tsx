import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { PaginationSize } from "./interface"

export const paginationContainer = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

export const totalTextCss = css`
  display: inline-flex;
  height: 100%;
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-gray-02`)};
  margin-right: 8px;
`

export function applyInputCss(
  size: PaginationSize,
  disable: boolean | undefined,
) {
  return css`
    display: inline-flex !important;
    align-items: center;
    font-size: 14px;
    border-radius: 4px !important;
    ${applySizeCss(size)}
    border-width: 0;
    margin-bottom: 0 !important;
    ${applyTextColor(disable)};
  `
}

export function applyJumperInputCss(
  disable: boolean | undefined,
  size: PaginationSize,
) {
  return css`
    margin-left: 14px;
    ${applyTextColor(disable)};
    ${applyInputCss(size, disable)}
  `
}

export const simplePaginationSumCss = css`
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-gray-02`)}; ;
`

export function applyDefaultItemCss(
  disable: boolean | undefined,
  size: PaginationSize,
) {
  return css`
    display: inline-flex;
    justify-content: center;
    border-radius: 4px;
    align-items: center;
    font-size: 14px;
    ${applySizeCss(size)}
    ${applyTextColor(disable)}
      ${applyCursor(disable)}
      ${applyBackground(disable, false)}
      ${applyTextColor(disable)}
  `
}

export function applyDefaultItemWithMarginCss(
  disable: boolean | undefined,
  size: PaginationSize,
) {
  return css`
    margin-right: 8px;
    ${applyDefaultItemCss(disable, size)}
  `
}

export function applyBackground(
  disable: boolean | undefined,
  selected: boolean | undefined,
): SerializedStyles | undefined {
  if (!disable && !selected) {
    return css`
      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
      }
    `
  }
  if (disable && selected) {
    return css`
      background-color: ${globalColor(`--${illaPrefix}-blue-07`)};
    `
  }
  if (!disable && selected) {
    return css`
      background-color: ${globalColor(`--${illaPrefix}-blue-07`)};
    `
  }
}

export function applyCursor(disabled: boolean | undefined): SerializedStyles {
  if (disabled) {
    return css`
      cursor: not-allowed;
    `
  } else {
    return css`
      cursor: pointer;
    `
  }
}

export function applyTextColor(
  disabled: boolean | undefined,
  selected?: boolean | undefined,
): SerializedStyles {
  if (!selected) {
    if (disabled) {
      return css`
        color: ${globalColor(`--${illaPrefix}-gray-05`)} !important;
      `
    } else {
      return css`
        color: ${globalColor(`--${illaPrefix}-gray-02`)} !important;
      `
    }
  } else {
    if (disabled) {
      return css`
        color: ${globalColor(`--${illaPrefix}-blue-05`)} !important;
      `
    } else {
      return css`
        color: ${globalColor(`--${illaPrefix}-blue-01`)} !important;
      `
    }
  }
}

export function applyPageNumItemSelectedCss(
  disabled: boolean | undefined,
  size: PaginationSize,
): SerializedStyles {
  return css`
    ${applyDefaultItemCss(disabled, size)};
    margin-right: 8px;
    ${applyBackground(disabled, true)}
    ${applyTextColor(disabled, true)}
  `
}

export function applyPageSizeSelectorCss(
  disabled: boolean | undefined,
  size: PaginationSize,
) {
  function applyBackgroundAndBorderColor(disabled: boolean | undefined) {
    if (!disabled) {
      return css`
        &:hover {
          background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
        }

        &:active {
          background-color: ${globalColor(`--${illaPrefix}-white-01`)};
          border-color: ${globalColor(`--${illaPrefix}-blue-03`)};
        }
      `
    }
  }

  return css`
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    border-radius: 4px;
    padding-left: 12px;
    ${applySelectorSizeCss(size)}
    margin-left: 16px;
    border-width: 0;
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    color: ${globalColor(`--${illaPrefix}-gray-02`)};

    ${applyTextColor(disabled)}
    ${applyCursor(disabled)}
      ${applyBackgroundAndBorderColor(disabled)}
  `
}

function applySizeCss(size: PaginationSize): SerializedStyles {
  let sizeCss: SerializedStyles
  switch (size) {
    default:
    case "small":
      sizeCss = css`
        width: 28px !important;
        height: 28px;
      `
      break
    case "medium":
      sizeCss = css`
        width: 32px !important;
        height: 32px;
      `
      break
    case "large":
      sizeCss = css`
        width: 36px !important;
        height: 36px;
      `
      break
  }
  return sizeCss
}

function applySelectorSizeCss(size: PaginationSize): SerializedStyles {
  let sizeCss: SerializedStyles
  switch (size) {
    default:
    case "small":
      sizeCss = css`
        width: 93px;
        height: 28px;
      `
      break
    case "medium":
      sizeCss = css`
        width: 93px;
        height: 32px;
      `
      break
    case "large":
      sizeCss = css`
        width: 93px;
        height: 36px;
      `
      break
  }
  return sizeCss
}
