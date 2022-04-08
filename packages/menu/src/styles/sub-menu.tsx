import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"

export function applySubMenuCss(): SerializedStyles {
  return css``
}

export function applySubMenuIconCss(isOpen: boolean): SerializedStyles {
  const rotate = css`
    transform: rotate(-180deg);
  `

  return css`
    & > svg {
      transition: all 0.2s ease-in-out;
      ${isOpen && rotate}
    }
  `
}

export function applySubMenuListCss(isOpen: boolean): SerializedStyles {
  return css`
    overflow: hidden;
    height: ${isOpen ? "auto" : 0};
  `
}

export const expandIconCss = css`
  position: absolute;
  right: 12px;
`

export function applySubMenuHeaderCss(isSelected: boolean): SerializedStyles {
  const selectedCss = css`
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    color: ${globalColor(`--${illaPrefix}-blue-01`)};
  `

  return css`
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    padding: 0 24px;
    line-height: 40px ${isSelected && selectedCss};
  `
}
