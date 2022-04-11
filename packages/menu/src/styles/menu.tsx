import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyMenuCss(
  isCollapse?: boolean,
  isPopButton?: boolean,
): SerializedStyles {
  const collapseCss = css`
    width: 48px;
  `
  return css`
    position: relative;
    transition: width 0.2s ease-in-out;
    ${isCollapse && collapseCss}
  `
}

export function applyMenuInnerCss(isHorizontal: boolean): SerializedStyles {
  const horizontalCss = css`
    display: flex;
    align-items: center;
  `

  return css`
    overflow: auto;
    width: 100%;
    height: 100%;
    ${isHorizontal && horizontalCss}
  `
}

export const collapseIconCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 24px;
  height: 24px;
  background: ${globalColor(`--${illaPrefix}-gray-09`)};
  right: 24px;
  bottom: 24px;
  cursor: pointer;
  transition: background .2s ease-in-out;
  border-radius: 2px;

  &:hover {
    background: ${globalColor(`--${illaPrefix}-gray-08`)};
  }
`
