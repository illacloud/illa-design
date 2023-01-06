import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const statisticStyle = css`
  display: inline-block;
  line-height: 1.33;
  font-size: 12px;
  font-weight: 400;
`

export const statisticTitleStyle = css`
  margin-bottom: 4px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export const statisticExtraStyle = css`
  font-size: 12px;
  margin-top: 4px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export const statisticContentStyle = css`
  font-size: 24px;
  font-weight: 500;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
`

export function applyStatisticDecoratorStyle(
  isPrefix: boolean,
  isText: boolean,
): SerializedStyles {
  const spacing = isText ? 4 : 8
  const margin = isPrefix
    ? `margin-right:${spacing}px;`
    : `margin-left:${spacing}px;`
  const restStyle = isText ? `font-size: 14px;` : `font-size: 18px;`
  return css`
    display: inline-block;
    ${margin + restStyle}
  `
}

export const statisticValueStyle = css`
  display: inline-block;
  direction: ltr;
`
