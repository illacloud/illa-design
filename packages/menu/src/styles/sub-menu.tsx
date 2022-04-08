import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"

export function applySubMenuCss(): SerializedStyles { }

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
