import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { Theme } from "../interface"
import { applyPopButtonCss, themeColor } from "../style"

export const itemTitleCss = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export function applyItemCss(
  isHorizontal?: boolean,
  isDisabled?: boolean,
  isSelected?: boolean,
  isPopButton?: boolean,
  isCollapse?: boolean,
  theme: Theme = "light",
): SerializedStyles {
  const horizontalCss = css`
    display: inline-block;
    vertical-align: middle;
    line-height: 48px;
    position: relative;
    padding: 0 16px;
  `

  const hoverCss = css`
    &:hover {
      cursor: pointer;
      background-color: ${themeColor[theme].hoverBg};
    }
  `

  const disabledCss = css`
    cursor: not-allowed;
    color: ${themeColor[theme].disabledColor};
  `

  const selectedCss = css`
    color: ${themeColor[theme].selectedColor};
    background-color: ${themeColor[theme].selectedBg};
  `

  const horizontalSelectedCss = css`
    background: none;
    &:after {
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: ${themeColor[theme].horizontalSelectedBg};
      position: absolute;
    }
  `

  return css`
    display: flex;
    padding: 0 24px;
    font-size: 14px;
    color: ${themeColor[theme].color};
    line-height: 40px;
    transition-duration: 0.2s;
    transition-easing-function: ease-in-out;
    transition-properties: background;
    /* margin between vertical item */
    ${isHorizontal
      ? horizontalCss
      : css`
          margin-top: 8px;
        `};
    ${isDisabled ? disabledCss : hoverCss};
    ${isSelected && selectedCss};
    ${isSelected && isHorizontal && horizontalSelectedCss};
    ${isPopButton && applyPopButtonCss(theme)};
  `
}
