import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Theme } from "../interface"

export function applyMenuCss(
  isCollapse?: boolean,
  isPopButton?: boolean,
  theme: Theme = "light",
): SerializedStyles {
  const collapseCss = css`
    width: 48px;
  `

  const bgColor = theme === "light" ? globalColor(`--${illaPrefix}-white-01`) : globalColor(`--${illaPrefix}-gray-02`);
  const mergedBgColor = isPopButton ? "none" : bgColor;

  let themeCss = css``
  if (theme === "dark") {
    themeCss = css`
      color: ${globalColor(`--${illaPrefix}-white-02`)};
      `
  }

  return css`
    position: relative;
    transition: width 0.2s ease-in-out;
    background-color: ${mergedBgColor};
    ${isCollapse && collapseCss};
    ${themeCss};
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

export function applyCollapseIconCss(
  isCollapse?: boolean,
  theme: Theme = "light",
): SerializedStyles {
  const themeColor = {
    light: {
      bg: globalColor(`--${illaPrefix}-gray-09`),
      hoverBg: globalColor(`--${illaPrefix}-gray-08`),
    },
    dark: {
      bg: globalColor(`--${illaPrefix}-gray-03`),
      hoverBg: globalColor(`--${illaPrefix}-gray-04`),
    },
  }

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 24px;
    height: 24px;
    background: ${themeColor[theme].bg};
    right: ${isCollapse ? 12 : 24}px;
    bottom: 24px;
    cursor: pointer;
    transition-duration: 0.2s;
    transition-easing-function: ease-in-out;
    transition-properties: background, right;

    border-radius: 2px;

    &:hover {
      background: ${themeColor[theme].hoverBg};
    }
  `
}
