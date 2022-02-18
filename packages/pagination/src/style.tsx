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
`

export function applyInputCss(size: PaginationSize, disable?: boolean) {
  return css`
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    //border-radius: 4px;
    ${applySizeCss(size)}
    border-width: 0;
    margin-bottom: 0;
    ${applyTextColor(disable)};
  `
}

export function applyJumperInputCss(size: PaginationSize, disable?: boolean) {
  return css`
    margin-left: 16px;
    ${applyTextColor(disable)};
    ${applyInputCss(size, disable)}
  `
}

export const simplePaginationSumCss = css`
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-gray-02`)}; ;
`

export function applyDefaultItemCss(size: PaginationSize, disable?: boolean) {
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
  size: PaginationSize,
  disable?: boolean,
) {
  return css`
    margin-right: 8px;
    ${applyDefaultItemCss(size, disable)}
  `
}

export function applyBackground(
  disable?: boolean,
  selected?: boolean,
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

export function applyCursor(disabled?: boolean): SerializedStyles {
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
  disabled?: boolean,
  selected?: boolean,
): SerializedStyles {
  if (!selected) {
    if (disabled) {
      return css`
        color: ${globalColor(`--${illaPrefix}-gray-05`)};
      `
    } else {
      return css`
        color: ${globalColor(`--${illaPrefix}-gray-02`)};
      `
    }
  } else {
    if (disabled) {
      return css`
        color: ${globalColor(`--${illaPrefix}-blue-05`)};
      `
    } else {
      return css`
        color: ${globalColor(`--${illaPrefix}-blue-01`)};
      `
    }
  }
}

export function applyPageNumItemSelectedCss(
  size: PaginationSize,
  disabled?: boolean,
): SerializedStyles {
  return css`
    ${applyDefaultItemCss(size, disabled)};
    margin-right: 8px;
    ${applyBackground(disabled, true)}
    ${applyTextColor(disabled, true)}
  `
}

export function applyPageSizeSelectorCss(
  size: PaginationSize,
  disabled?: boolean,
) {
  function applyBackgroundAndBorderColor(disabled?: boolean) {
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
        width: 22px;
        height: 22px;
      `
      break
    case "medium":
      sizeCss = css`
        width: 32px;
        height: 32px;
      `
      break
    case "large":
      sizeCss = css`
        width: 40px;
        height: 40px;
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
