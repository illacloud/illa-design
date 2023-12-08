import {
  DividerColorScheme,
  DividerDirection,
  DividerVariant,
} from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import {
  getSpecialThemeColor,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"

export function applyDividerContainerHorizontal(
  color: DividerColorScheme,
  variant: DividerVariant,
  basis?: string,
  grow?: number,
): SerializedStyles {
  let flexBasis = css``
  if (basis != undefined) {
    flexBasis = css`
      flex-basis: ${basis};
    `
  }

  let flexGrow = css``
  if (grow != undefined) {
    flexGrow = css`
      flex-grow: ${grow};
    `
  }

  const c =
    globalColor(`--${illaPrefix}-${color}-08`) === ""
      ? getSpecialThemeColor(color) === ""
        ? color
        : getSpecialThemeColor(color)
      : globalColor(`--${illaPrefix}-${color}-08`)
  return css`
    vertical-align: middle;
    border-style: ${variant};
    border-width: 0 0 ${variant == "double" ? "3px" : "1px"} 0;
    border-color: ${c};
    width: 100%;
    ${flexBasis};
    ${flexGrow};
  `
}

export function applyDividerContainerVertical(
  color: DividerColorScheme,
  variant: DividerVariant,
  basis?: string,
  grow?: number,
): SerializedStyles {
  let flexBasis = css``
  if (basis != undefined) {
    flexBasis = css`
      flex-basis: ${basis};
    `
  }

  let flexGrow = css``
  if (grow != undefined) {
    flexGrow = css`
      flex-grow: ${grow};
    `
  }

  const c =
    globalColor(`--${illaPrefix}-${color}-08`) === ""
      ? getSpecialThemeColor(color) === ""
        ? color
        : getSpecialThemeColor(color)
      : globalColor(`--${illaPrefix}-${color}-08`)
  return css`
    display: inline-flex;
    vertical-align: middle;
    border-width: 0 0 0 ${variant == "double" ? "3px" : "1px"};
    border-color: ${c};
    border-style: ${variant};
    height: 1em;
    flex-basis: ${basis};
    ${flexBasis};
    ${flexGrow};
  `
}

export function applyDividerWithTextContainerStyle(
  direction: DividerDirection,
): SerializedStyles {
  if (direction == "horizontal") {
    return css`
      align-items: center;
      display: flex;
      flex-direction: row;
    `
  } else {
    return css`
      align-items: center;
      display: flex;
      flex-direction: column;
    `
  }
}

export function applyTextStyle(
  color: DividerColorScheme,
  fs: string,
): SerializedStyles {
  const c =
    getSpecialThemeColor(color) === "" ? color : getSpecialThemeColor(color)
  return css`
    color: ${c};
    margin-left: 16px;
    margin-right: 16px;
    font-size: ${fs};
    white-space: nowrap;
  `
}
