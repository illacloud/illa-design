import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"

export function applyMenuCss(isCollapse?: boolean): SerializedStyles {
  const collapseCss = css`
    width: 48px;
  `
  return css`
    position: relative;
    transition: width .2s ease-in-out;
    ${isCollapse && collapseCss}
  `
}

export function applyMenuInnerCss(isHorizontal: boolean): SerializedStyles {
  if (isHorizontal) {
    return css`
      display: flex;
      align-items: center;
    `
  }

  return css``
}

export const collapseIconCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 24px;
  bottom: 24px;
  cursor: pointer;
`
