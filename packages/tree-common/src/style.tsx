import { css, SerializedStyles } from "@emotion/react"
import { TreeSize } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const listCss = css`
  width: 100%;
`
export function applyNodeHeight(size: TreeSize) {
  switch (size) {
    case "small":
      return 24
    case "large":
      return 40
    default:
      return 32
  }
}

export function applyNodeTextColor(
  disabled?: boolean,
  selected?: boolean,
): SerializedStyles {
  if (disabled) {
    return css`
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
    `
  } else if (selected) {
    return css`
      color: ${globalColor(`--${illaPrefix}-blue-03`)};
    `
  }
  return css`
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  `
}

export function applyNodeContainerCss(size: TreeSize): SerializedStyles {
  const height = applyNodeHeight(size)
  return css`
    display: flex;
    justify-content: start;
    align-items: center;
    min-height: ${height}px;
    width: 100%;
  `
}

export const dragContainerCss = css`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: start;
`

export const nodeFoldSwitchStyle: SerializedStyles = css`
  display: flex;
  margin-right: 4px;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
`

export function applyNodeFoldSwitchIconCss(
  folding?: boolean,
): SerializedStyles {
  const rotate = folding ? 0 : -90
  return css`
    display: flex;
    height: 8px;
    font-size: 8px;
    cursor: pointer;
    width: 8px;
    transform-origin: center;
    transform: rotate(${rotate}deg);
    transition: transform 200ms;
  `
}

export function applyLeafIconCss(visible?: boolean): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: center;
    padding: 2px;
    font-size: 12px;
    visibility: ${visible === true ? "visible" : "hidden"};
    margin-right: 4px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  `
}

export const switchIconStyle: SerializedStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  border-radius: 16px;
  width: 16px;
  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  }
`

export function applyNodeTextContainerCss(
  size: TreeSize,
  disabled?: boolean,
  selected?: boolean,
  blockNode?: boolean,
): SerializedStyles {
  const fontSize = size === "small" ? 12 : 14
  let hoverCss = !disabled
    ? css`
        &:hover {
          background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
          cursor: pointer;
        }
      `
    : css`
        &:hover {
          background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
          cursor: not-allowed;
        }
      `
  return css`
    font-size: ${fontSize}px;
    flex-grow: ${blockNode ? 1 : 0};
    height: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    ${applyNodeTextColor(disabled, selected)};
    position: relative;
    ${hoverCss};
    padding: 0 4px;
  `
}

export const indentContainerCss = css`
  display: inline-flex;
  height: 100%;
`

export const checkboxCss = css`
  margin: 0 4px;
`

export function applyIndentBlockCss(
  requireDivider?: boolean,
): SerializedStyles {
  return css`
    height: 100%;
    margin-left: 8px;
    border-left: solid 1px
      ${requireDivider ? globalColor(`--${illaPrefix}-grayBlue-08`) : "white"};
    box-sizing: border-box;
    width: 16.5px;
  `
}
export const loadingIconCss = css`
  color: ${globalColor(`--${illaPrefix}-blue-01`)};
  display: inline-flex;
  height: 8px;
  justify-content: center;
  align-items: center;
  width: 8px;
`

export const iconColorCss = css`
  margin-left: 8px;
  color: ${globalColor(`--${illaPrefix}-blue-01`)};
`
