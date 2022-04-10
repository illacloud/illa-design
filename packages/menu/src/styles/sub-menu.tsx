import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"

export function applySubMenuCss(): SerializedStyles {
  return css``
}

export function applySubMenuIconCss(
  isOpen?: boolean,
  isCollapse?: boolean,
): SerializedStyles {
  const rotate = css`
    transform: rotate(-180deg);
  `
  const collapseCss = css`
    display: none;
  `

  const expandIconCss = css`
    position: absolute;
    right: 24px;
  `
  return css`
       & > svg {
         transition: all 0.2s ease-in-out;
      ${isOpen && rotate};
    }
    ${expandIconCss}
    ${isCollapse && collapseCss};
  `
}

export function applySubMenuListCss(isOpen: boolean): SerializedStyles {
  return css`
    overflow: hidden;
    height: ${isOpen ? "auto" : 0};
  `
}

export function applySubMenuHeaderCss(isSelected: boolean): SerializedStyles {
  const selectedCss = css`
    color: ${globalColor(`--${illaPrefix}-blue-01`)};
  `

  const hoverCss = css`
    &:hover {
      cursor: pointer;
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    }
  `

  return css`
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    padding: 0 24px;
    line-height: 40px;
    ${isSelected && selectedCss};
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
