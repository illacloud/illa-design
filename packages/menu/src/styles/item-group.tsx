import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Theme } from "../interface"

export function applyItemGroupCss(theme: Theme = "light"): SerializedStyles {
  const color =
    theme === "dark"
      ? globalColor(`--${illaPrefix}-gray-04`)
      : globalColor(`--${illaPrefix}-gray-06`)
  return css`
    color: ${color};
  `
}

export function applyGroupTitleCss(
  isHorizontal?: boolean,
  isPopButton?: boolean,
  isCollapse?: boolean,
  theme: Theme = "light"
): SerializedStyles {
  const popButtonCss = css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 10px ${globalColor(`--${illaPrefix}-gray-09`)};
    padding: 0 13px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    background: ${theme === "dark"
      ? globalColor(`--${illaPrefix}-gray-02`)
      : "none"};
  `

  const padding = isCollapse ? 16 : 24

  const itemGroupTitleCss = css`
    line-height: 40px;
    padding: 0 ${padding}px;
  `

  const overflowCss = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  `

  return css([
    itemGroupTitleCss,
    !isHorizontal && overflowCss,
    isPopButton && popButtonCss,
  ])
}
