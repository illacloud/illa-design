import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { Theme } from "../interface"
import { applyPopButtonCss, themeColor } from "../style"

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

export const subMenuCss = css`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`

export function applySubMenuHeaderCss(
  isSelected?: boolean,
  isPopButton?: boolean,
  isHorizontal?: boolean,
  isCollapse?: boolean,
  theme: Theme = "light",
): SerializedStyles {
  const selectedCss = css`
    color: ${themeColor[theme].selectedColor};
  `

  const hoverCss = css`
    &:hover {
      cursor: pointer;
      background-color: ${themeColor[theme].hoverBg};
    }
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

  // add more padding to padding-right to avoid title overlap with icon
  const ellipsisTextCss = isCollapse
    ? css``
    : css`
        text-overflow: ellipsis;
      `

  return css`
    font-size: 14px;
    color: ${themeColor[theme].color};
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    padding: ${isHorizontal ? `0 16px` : `0 24px`};
    line-height: ${isHorizontal ? `48px` : `40px`};
    transition-duration: 0.2s;
    transition-easing-function: ease-in-out;
    transition-properties: background;
    ${ellipsisTextCss}
    ${isSelected && selectedCss};
    ${isSelected && isHorizontal && horizontalSelectedCss};
    ${isPopButton && applyPopButtonCss(theme)}
    ${hoverCss};
  `
}

export function applyPopSubMenuCss(isHorizontal?: boolean): SerializedStyles {
  if (isHorizontal) {
    return css`
      display: inline-flex;
      vertical-align: middle;
      align-items: center;
      gap: 8px;
    `
  }

  return css`
    display: flex;
    gap: 8px;
  `
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
