import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Theme } from "../interface"
import { applyPopButtonCss } from "../style"

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
