import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Theme } from "../interface"
import { applyPopButtonCss } from "../style"

export function applyItemGroupCss(theme: Theme = "light"): SerializedStyles {
  const color =
    theme === "dark"
      ? globalColor(`--${illaPrefix}-grayBlue-04`)
      : globalColor(`--${illaPrefix}-grayBlue-04`)
  return css`
    color: ${color};
    font-size: 14px;
  `
}

export function applyGroupTitleCss(
  isHorizontal?: boolean,
  isPopButton?: boolean,
  isCollapse?: boolean,
  theme: Theme = "light",
): SerializedStyles {
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
    isPopButton && applyPopButtonCss(theme),
  ])
}

export function applyCollapseGroupTitleCss(
  theme: Theme = "light",
): SerializedStyles {
  const bgColor =
    theme === "dark"
      ? globalColor(`--${illaPrefix}-white-08`)
      : globalColor(`--${illaPrefix}-grayBlue-08`)

  return css`
    height: 40px;
    width: auto;
    position: relative;

    &:after {
      content: "";
      background-color: ${bgColor};
      height: 1px;
      display: block;
      position: absolute;
      top: 20px;
      width: 14px;
    }
  `
}
