import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { TableAlign, TableLayout, TableSize } from "./interface"

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

export function applyHeaderSizeStyle(size: TableSize): SerializedStyles {
  let paddingStyle
  switch (size) {
    case "small":
      paddingStyle = css`
        padding: 5px 0;
      `
      break
    case "medium":
      paddingStyle = css`
        padding: 7px 0;
      `
      break
    case "large":
      paddingStyle = css`
        padding: 9px 0;
      `
      break
  }
  return paddingStyle
}

export function applyContainerStyle(): SerializedStyles {
  return css(
    css`
      overflow: auto;
      display: inline-flex;
      vertical-align: center;
    `,
  )
}

export function applyResizing(canResize?: boolean): SerializedStyles {
  if (canResize) {
    return css`
      width: 10px;
      height: 100%;
      z-index: 10;
      position: absolute;
      right: 0;
      transform: translateX(50%);
    `
  }
  return css``
}

export function applyBorderStyle(
  borderCell?: boolean,
  striped?: boolean,
): SerializedStyles {
  let borderStyle: SerializedStyles = css()
  if (borderCell) {
    borderStyle = css`
      border-left: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      border-right: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    `
  }
  let stripedStyle: SerializedStyles = css()
  if (striped) {
    stripedStyle = css`
      border-top: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      border-bottom: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    `
  }
  return css(borderStyle, stripedStyle)
}

export function applyThStyle(): SerializedStyles {
  return css`
    font-size: 14px;
    font-weight: bold;
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  `
}

export const applyNormalStyle: SerializedStyles = css`
  font-size: 14px;
  min-height: 22px;
  background-color: ${globalColor(`--${illaPrefix}-white-01`)};
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
`

export const applyFilterContainer = css`
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const applyHeaderIconLeft = css`
  margin-left: 4px;
  width: 16px;
  height: 16px;
  flex-wrap: wrap;
`

export function applyContentContainer(align: TableAlign): SerializedStyles {
  return css`
    justify-content: ${align};
    display: flex;
    overflow: auto;
    min-height: 22px;
    align-items: center;
    flex-direction: row;
  `
}

export function applyPreContainer(align: TableAlign): SerializedStyles {
  return css`
    justify-content: ${align};
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    flex-direction: row;
    flex-grow: 1;
  `
}

export function applyTableStyle(
  tableLayout: TableLayout,
  bordered?: boolean,
): SerializedStyles {
  const border = css`
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
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
