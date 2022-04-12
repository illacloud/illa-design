import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"

export function applySubMenuIconCss(
  isOpen?: boolean,
  isHorizontal?: boolean,
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
    ${!isHorizontal && fixedToRightCss};
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
): SerializedStyles {
  const selectedCss = css`
    color: ${globalColor(`--${illaPrefix}-blue-01`)};
  `

  const hoverCss = css`
    &:hover {
      cursor: pointer;
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    }
  `

  const popButtonCss = css`
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 50%;
    box-shadow: 0 4px 10px ${globalColor(`--${illaPrefix}-gray-09`)};
    padding: 0 12px;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  `
  const padding = isCollapse ? 16 : 24

  return css`
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    padding: 0 ${padding}px;
    line-height: 40px;
    ${isSelected && selectedCss};
    ${isPopButton && popButtonCss}
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

export function applyPopSubMenuCollapseIconCss(isCollapse?: boolean) {
  const collapseCss = css`
    visibility: hidden;
    opacity: 0;
  `
  return css`
    ${isCollapse && collapseCss};
    transition: all 0.2s ease-in-out;
  `
}
