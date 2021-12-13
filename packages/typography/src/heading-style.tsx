import * as React from "react"
import { TypographyColorScheme } from "./interface"
import { css, SerializedStyles } from "@storybook/theming"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyFontColor(colorScheme: TypographyColorScheme): SerializedStyles {
  return css`
    color: ${globalColor(`--${illaPrefix}-${colorScheme}-02`)};
  `
}

export function applyContainer(): SerializedStyles {
  return css`
    word-break: break-all;
  `
}

export function applyDisable(disabled: boolean): SerializedStyles {
  if (disabled) {
    return css`
      cursor: not-allowed;
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
      user-select: none;
    `
  } else {
    return css``
  }
}

export function applyFontContentStyle(bold: boolean, mark: boolean, underline: boolean, deleted: boolean, disabled: boolean, code: boolean): SerializedStyles {

  let finalCss = css``

  if (code) {
    finalCss = css`
      ${finalCss};
    `
  }

  if (bold) {
    finalCss = css`
      ${finalCss};
      font-weight: bold;
    `
  }

  if (mark) {
    finalCss = css`
      ${finalCss};
      background-color: ${globalColor(`--${illaPrefix}-yellow-06`)};
    `
  }

  finalCss = css`
    ${finalCss};
    text-decoration: ${underline && "underline"} ${deleted && "line-through"};
  `

  if (disabled) {
    finalCss = css`
      ${finalCss};
      cursor: not-allowed;
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
      user-select: none;
    `
  }

  return finalCss
}

export function applyExpandLabelCss(): SerializedStyles {
  return css`
    cursor: pointer;
    color: ${globalColor(`--${illaPrefix}--techBlue-03`)};
  `
}

export function applyCopyableContainerSize(): SerializedStyles {
  return css`
    cursor: pointer;
    color: ${globalColor(`--${illaPrefix}--gray-02`)};
    display: inline-block;
    margin-left: 8px;
    text-align: center;
  `
}