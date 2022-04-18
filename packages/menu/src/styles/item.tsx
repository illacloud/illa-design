import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Theme } from "../interface"
import { applyPopButtonCss } from "../style"

export function applyItemTitleCss(): SerializedStyles {
  const titleEllipsis = css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `

  return titleEllipsis
}

export function applyItemCss(
  isHorizontal?: boolean,
  isDisabled?: boolean,
  isSelected?: boolean,
  isPopButton?: boolean,
  isCollapse?: boolean,
  theme: Theme = "light",
): SerializedStyles {
  const horizontalCss = css`
    display: inline-block;
    vertical-align: middle;
    line-height: 48px;
    position: relative;
    padding: 0 16px;
  `

  const themeColor = {
    light: {
      hoverBg: globalColor(`--${illaPrefix}-gray-09`),
      disabledColor: globalColor(`--${illaPrefix}-gray-05`),
      selectedColor: globalColor(`--${illaPrefix}-blue-01`),
      selectedBg: globalColor(`--${illaPrefix}-gray-09`),
      horizontalSelectedBg: globalColor(`--${illaPrefix}-blue-02`),
      color: globalColor(`--${illaPrefix}-gray-03`),
    },
    dark: {
      hoverBg: globalColor(`--${illaPrefix}-gray-03`),
      disabledColor: globalColor(`--${illaPrefix}-gray-04`),
      selectedColor: globalColor(`--${illaPrefix}-blue-04`),
      selectedBg: globalColor(`--${illaPrefix}-gray-03`),
      horizontalSelectedBg: globalColor(`--${illaPrefix}-blue-02`),
      color: globalColor(`--${illaPrefix}-gray-08`),
    },
  }

  const hoverCss = css`
    &:hover {
      cursor: pointer;
      background-color: ${themeColor[theme].hoverBg};
    }
  `

  const disabledCss = css`
    cursor: not-allowed;
    color: ${themeColor[theme].disabledColor};
  `

  const selectedCss = css`
    color: ${themeColor[theme].selectedColor};
    background-color: ${themeColor[theme].selectedBg};
  `

  const horizontalSelectedCss = css`
    background: none;
    &:after {
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: ${themeColor[theme].horizontalSelectedBg};
      position: absolute;
    }
  `

  const padding = isCollapse ? 16 : 24

  return css`
    display: flex;
    padding: 0 ${padding}px;
    font-size: 14px;
    color: ${themeColor[theme].color};
    line-height: 40px;
    ${isHorizontal && horizontalCss};
    ${isDisabled ? disabledCss : hoverCss};
    ${isSelected && selectedCss};
    ${isSelected && isHorizontal && horizontalSelectedCss};
    ${isPopButton && applyPopButtonCss(theme)};
  `
}
