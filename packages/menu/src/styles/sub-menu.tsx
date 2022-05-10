import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { Theme } from "../interface"
import { applyPopButtonCss } from "../style"

export function applySubMenuIconCss(
  isOpen?: boolean,
  isHorizontal?: boolean,
  inDropdown?: boolean,
): SerializedStyles {
  const rotate = css`
    transform: rotate(-180deg);
  `

  const fixedToRightCss = css`
    position: absolute;
    right: 24px;
  `

  return css`
    & > svg {
      transition: all 0.2s ease-in-out;
      ${isOpen && rotate};
    }
    transition: all 0.2s ease-in-out;
    ${!isHorizontal && !inDropdown && fixedToRightCss};
  `
}

export function applySubMenuListCss(isOpen: boolean): SerializedStyles {
  return css`
    overflow: hidden;
    height: ${isOpen ? "auto" : 0};
  `
}

export function applySubMenuHeaderCss(
  isSelected?: boolean,
  isPopButton?: boolean,
  isCollapse?: boolean,
  theme: Theme = "light",
): SerializedStyles {
  const themeColor = {
    light: {
      hoverBg: globalColor(`--${illaPrefix}-grayBlue-09`),
      color: globalColor(`--${illaPrefix}-grayBlue-03`),
      selectedColor: globalColor(`--${illaPrefix}-blue-01`),
    },
    dark: {
      hoverBg: globalColor(`--${illaPrefix}-grayBlue-03`),
      color: globalColor(`--${illaPrefix}-grayBlue-08`),
      selectedColor: globalColor(`--${illaPrefix}-blue-04`),
    },
  }

  const selectedCss = css`
    color: ${themeColor[theme].selectedColor};
  `

  const hoverCss = css`
    &:hover {
      cursor: pointer;
      background-color: ${themeColor[theme].hoverBg};
    }
  `

  // add more padding to padding-right to avoid title overlap with icon
  const padding = isCollapse ? `0 16px` : `0 54px 0 24px`

  return css`
    font-size: 14px;
    color: ${themeColor[theme].color};
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    padding: ${padding};
    line-height: 40px;
    ${isSelected && selectedCss};
    ${isPopButton && applyPopButtonCss(theme)}
    ${hoverCss};
  `
}

export function applyPopSubMenuCss(isHorizontal: boolean): SerializedStyles {
  if (isHorizontal) {
    return css`
      display: inline-block;
      vertical-align: middle;
    `
  }

  return css``
}

export function applyPopSubMenuCollapseIconCss(
  isCollapse?: boolean,
  inDropdown?: boolean,
): SerializedStyles {
  const collapseCss = css`
    visibility: hidden;
    opacity: 0;
  `
  return css`
    ${isCollapse && !inDropdown && collapseCss};
    transition: all 0.2s ease-in-out;
  `
}
