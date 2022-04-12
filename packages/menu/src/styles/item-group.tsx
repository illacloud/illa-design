import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyItemGroupCss(): SerializedStyles {
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-06`)};
  `
}

export function applyGroupTitleCss(
  isHorizontal?: boolean,
  isPopButton?: boolean,
  isCollapse?: boolean
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
  `

  const padding = isCollapse ? 16 : 24;

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
