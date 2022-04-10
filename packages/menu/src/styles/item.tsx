import { css } from "@emotion/react"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyItemTitleCss(isPopButton?: boolean): SerializedStyles {
  const titleEllipsis = css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `

  const popButtonCss = css`
    margin: 0 14px;
  `

  return css([titleEllipsis, isPopButton && popButtonCss])
}

export function applyItemCss(
  isHorizontal?: boolean,
  isDisabled?: boolean,
  isSelected?: boolean,
  isPopButton?: boolean,
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
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    }
  `

  const disabledCss = css`
    cursor: not-allowed;
    color: ${globalColor(`--${illaPrefix}-gray-05`)};
  `

  const selectedCss = css`
    color: ${globalColor(`--${illaPrefix}-blue-03`)};
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
  `

  const popButtonCss = css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 10px ${globalColor(`--${illaPrefix}-gray-09`)};
    padding: 0;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  `

  const horizontalSelectedCss = css`
    background: none;
    &:after {
    content: "";
    display: block;
    height: 2px;
    width: 100 %;
    bottom: 0;
    left: 0;
    background - color: ${globalColor(`--${illaPrefix}-blue-02`)};
    position: absolute;
  }
    `

  return css`
    display: flex;
    padding: 0 24px;
    font-size: 14px;
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
    line-height: 40px;
    ${isHorizontal && horizontalCss};
    ${isDisabled ? disabledCss : hoverCss};
    ${isSelected && selectedCss};
    ${isSelected && isHorizontal && horizontalSelectedCss};
    ${isPopButton && popButtonCss};
  `
}
