import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyListCss(w?: string): SerializedStyles {
  return css`
    position: relative;
    border-radius: 8px;
    width: ${w};
    overflow: hidden;
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    padding: 8px 0;
  `
}

export function applyItemCss(
  fontColor?: string,
  isDisabled?: boolean,
): SerializedStyles {
  const hoverCss = css`
    &:hover {
      cursor: pointer;
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    }
  `

  const disabledCss = css`
    cursor: not-allowed;
    color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  `

  return css`
    font-size: 14px;
    color: ${fontColor
      ? fontColor
      : globalColor(`--${illaPrefix}-grayBlue-02`)};
    line-height: 32px;
    position: relative;
    padding: 0 16px;

    ${isDisabled ? disabledCss : hoverCss};
  `
}
