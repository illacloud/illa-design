import chroma from "chroma-js"
import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { TableAlign, TableLayout, TableSize } from "./interface"

export function applySizeStyle(size: TableSize): SerializedStyles {
  let paddingStyle
  switch (size) {
    case "small":
      paddingStyle = css`
        padding: 12px 16px;
      `
      break
    case "medium":
      paddingStyle = css`
        padding: 14px 16px;
      `
      break
    case "large":
      paddingStyle = css`
        padding: 16px 16px;
      `
      break
  }
  return paddingStyle
}

export function applyContainerStyle(): SerializedStyles {
  return css(
    css`
      display: flex;
      flex-direction: column;
    `,
  )
}

export function applyPinedStyle(pined?: boolean): SerializedStyles {
  return pined
    ? css`
        position: sticky;
        top: 0;
      `
    : css``
}

export function applyBorderStyle(
  borderCell?: boolean,
  striped?: boolean,
  colIndex?: number,
  rowIndex?: number,
  lastCol?: boolean,
  lastRow?: boolean,
): SerializedStyles {
  let borderStyle: SerializedStyles = css()
  if (borderCell) {
    if (lastCol) {
      borderStyle = css``
    } else {
      borderStyle = css`
        border-right: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      `
    }
  }
  let stripedStyle: SerializedStyles = css()
  if (striped) {
    stripedStyle = css`
      border-bottom: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    `
  }
  return css(borderStyle, stripedStyle)
}

export function applyThStyle(): SerializedStyles {
  return css`
    font-size: 14px;
    font-weight: bold;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  `
}

export function applyNormalStyle(): SerializedStyles {
  return css`
    font-size: 14px;
    min-height: 22px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  `
}

export function applyNormalBg(): SerializedStyles {
  return css`
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
  `
}

export function applyBgHoverStyle(hoverable?: boolean): SerializedStyles {
  const hoverableStyle = css`
    &:hover {
      background-color: ${chroma(globalColor(`--${illaPrefix}-grayBlue-09`))
        .alpha(0.5)
        .hex()};
    }
  `
  return css`
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    ${hoverable ? hoverableStyle : null}
  `
}

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
    width: 100%;
  `
}

export const headerStyle = css`
  flex: 0 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export function applyTableStyle(tableLayout: TableLayout): SerializedStyles {
  return css`
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    display: table;
    border-spacing: 0;
    border-collapse: separate;
    table-layout: ${tableLayout};
  `
}

export function applyBorderedStyle(bordered?: boolean): SerializedStyles {
  return bordered
    ? css`
        border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      `
    : css``
}

export const toolBarStyle = css`
  position: relative;
  text-align: center;
  padding: 8px 0;
  background-color: ${globalColor(`--${illaPrefix}-white-01`)};
`

export function applyActionButtonStyle(
  showPagination?: boolean,
): SerializedStyles {
  return css`
    right: 16px;
    ${showPagination ? "position: absolute;" : "float: right;"};
  `
}

export const spinStyle = css`
  width: 100%;
  overflow: auto;
  flex: 1;
`

export const filterStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const filterLabelStyle = css`
  width: 48px;
`

export const editorStyle = css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 16px;
`
export const editorButtonStyle = css`
  text-align: end;
  margin-right: 30px;
`
