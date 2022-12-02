import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { StatisticMode } from "./interface"

export const statisticStyle = css`
  display: inline-block;
  line-height: 1.33;
`

export const statisticTitleStyle = css`
  margin-bottom: 4px;
  font-size: 12px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export const statisticExtraStyle = css`
  font-size: 12px;
  margin-top: 4px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export function applyStatisticContentStyle(
  mode?: StatisticMode,
): SerializedStyles {
  let modeCSS: SerializedStyles
  switch (mode) {
    case "builder":
      modeCSS = css`
        font-size: 14px;
        line-height: 22px;
        color: ${globalColor(`--${illaPrefix}-techPurple-01`)};
      `
      break
    default:
      modeCSS = css`
        font-size: 24px;
        font-weight: 500;
        color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
      `
  }
  return modeCSS
}

export function applyStatisticDecoratorStyle(
  isPrefix: boolean,
  isText: boolean,
): SerializedStyles {
  const spacing = isText ? 4 : 8
  const margin = isPrefix
    ? `margin-right:${spacing}px;`
    : `margin-left:${spacing}px;`
  const restStyle = isText
    ? `font-size: 14px;line-height: 1.57;`
    : `vertical-align: text-bottom;`
  return css`
    display: inline-block;
    ${margin + restStyle}
  `
}

export const statisticValueStyle = css`
  display: inline-block;
  direction: ltr;
`
