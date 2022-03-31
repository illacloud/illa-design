import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { TableLayout, TableSize } from "./interface"

export function applySizeStyle(size: TableSize): SerializedStyles {
  let paddingStyle
  switch (size) {
    case "small":
      paddingStyle = css`
        padding: 5px 16px;
      `
      break
    case "medium":
      paddingStyle = css`
        padding: 7px 16px;
      `
      break
    case "large":
      paddingStyle = css`
        padding: 9px 16px;
      `
      break
  }
  return paddingStyle
}

export function applyContainerStyle(_css?: SerializedStyles): SerializedStyles {
  return css(
    css`
      overflow: scroll;
      display: inline-flex;
      vertical-align: center;
    `,
    _css,
  )
}

export function applyBorderStyle(
  borderCell?: boolean,
  striped?: boolean,
): SerializedStyles {
  let borderStyle: SerializedStyles = css()
  if (borderCell) {
    borderStyle = css`
      border-left: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
      border-right: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    `
  }
  let stripedStyle: SerializedStyles = css()
  if (striped) {
    stripedStyle = css`
      border-top: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
      border-bottom: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    `
  }
  return css(borderStyle, stripedStyle)
}

export const applyFixedHeaderStyle = css`
  top: 0;
  position: sticky;
`

export const applyFixedStyleLeft = css`
  left: 0;
  position: sticky;
`

export const applyFixedStyleRight = css`
  right: 0;
  position: sticky;
`

export function applyThStyle(fixedHeader?: boolean): SerializedStyles {
  const commonStyle = css`
    font-size: 14px;
    font-weight: bold;
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
  if (fixedHeader) {
    return css(commonStyle, applyFixedHeaderStyle)
  } else {
    return commonStyle
  }
}

export const applyNormalStyle: SerializedStyles = css`
  font-size: 14px;
  background-color: ${globalColor(`--${illaPrefix}-white-01`)};
  color: ${globalColor(`--${illaPrefix}-gray-02`)};
`

export const applyHeaderIconLeft = css`
  margin-left: 4px;
  width: 16px;
  height: 16px;
  font-size: 16px;
`

export const applyHeaderContainer = css`
  display: flex;
  flex-direction: row;
`

export const applyPreContainer = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
`

export function applyTableStyle(
  tableLayout: TableLayout,
  bordered?: boolean,
): SerializedStyles {
  const border = css`
    border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
  `

  const commonStyle = css`
    width: 100%;
    box-sizing: border-box;
    display: table;
    border-collapse: collapse;
    table-layout: ${tableLayout};
  `

  if (bordered) {
    return css`
      ${border};
      ${commonStyle};
    `
  } else {
    return css`
      ${commonStyle};
    `
  }
}
