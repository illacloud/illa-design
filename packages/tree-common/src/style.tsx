import { css } from "@emotion/react"
import { TreeSize } from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const treeContainer = css`
  display: inline-flex;
  vertical-align: middle;
  white-space: nowrap;
  flex-direction: row;
  align-items: center;
  height: 100%;
`
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

export function applyNodeTextColor(disabled?: boolean, selected?: boolean) {
  if (disabled) {
    return css`
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  } else if (selected) {
    return css`
      color: ${globalColor(`--${illaPrefix}-blue-03`)};
    `
  }
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}

export function applyNodeContainerCss(size: TreeSize) {
  const height = applyNodeHeight(size)
  return css`
    display: flex;
    justify-content: start;
    align-items: center;
    height: ${height}px;
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

export const nodeFoldSwitchCss = css`
  display: flex;
  width: 16px;
  height: 16px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`

export function applyNodeFoldSwitchIconCss(folding?: boolean) {
  const rotate = folding ? 0 : -90
  return css`
    display: flex;
    height: 8px;
    font-size: 8px;
    width: 8px;
    transform-origin: center;
    transform: rotate(${rotate}deg);
    transition: transform 200ms;
  `
}

export function applyLeafIconCss(visible?: boolean) {
  return css`
    display: inline-flex;
    align-items: center;
    padding: 2px;
    font-size: 12px;
    visibility: ${visible === true ? "visible" : "hidden"};
    margin-left: 8px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)}; ;
  `
}
export const switchIconCss = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
`

export function applyNodeTextContainerCss(
  size: TreeSize,
  disabled?: boolean,
  selected?: boolean,
  blockNode?: boolean,
) {
  const hoverCss = !disabled
    ? css`
        &:hover {
          background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
          cursor: pointer;
        }
      `
    : css`
        &:hover {
          background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
          cursor: not-allowed;
        }
      `
  return css`
    size: 14px;
    flex-grow: ${blockNode ? 1 : 0};
    height: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    ${applyNodeTextColor(disabled, selected)};
    position: relative;
    ${hoverCss}
  `
}

export const indentContainerCss = css`
  display: inline-flex;
  height: 100%;
`

export const checkboxCss = css`
  margin-left: 8px;
`

export function applyIndentBlockCss(requireDivider?: boolean) {
  return css`
    height: 100%;
    width: 16.5px;
    border-left: solid 1px
      ${requireDivider ? globalColor(`--${illaPrefix}-gray-08`) : "white"};
    box-sizing: border-box;
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
