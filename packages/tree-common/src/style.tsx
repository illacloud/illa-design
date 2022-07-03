import { css, SerializedStyles } from "@emotion/react"
import { TreeMode, TreeSize } from "./interface"
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

export function applyNodeFoldSwitchStyle(_mode?: TreeMode): SerializedStyles {
  let modeStyle: SerializedStyles
  switch (_mode) {
    case "builder":
      modeStyle = css`
        width: 8px;
        height: 8px;
      `
      break
    default:
      modeStyle = css`
        width: 16px;
        height: 16px;
      `
  }
  return css`
    display: flex;
    margin-right: 4px;
    justify-content: center;
    align-items: center;
    ${modeStyle}
  `
}

export function applyNodeFoldSwitchIconCss(
  folding?: boolean,
): SerializedStyles {
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

export function applyLeafIconCss(
  visible?: boolean,
  _mode?: TreeMode,
): SerializedStyles {
  let modeStyle: SerializedStyles
  switch (_mode) {
    case "builder":
      modeStyle = css`
        display: ${visible ? "inline-flex" : "none"};
        font-size: 8px;
      `
      break
    default:
      modeStyle = css`
        display: inline-flex;
        padding: 2px;
        font-size: 12px;
      `
  }
  return css`
    display: inline-flex;
    align-items: center;
    padding: 2px;
    font-size: 12px;
    visibility: ${visible === true ? "visible" : "hidden"};
    margin-right: 4px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    ${modeStyle}
  `
}

export function applySwitchIconStyle(_mode?: TreeMode): SerializedStyles {
  let modeStyle: SerializedStyles
  switch (_mode) {
    case "builder":
      modeStyle = css`
        height: 8px;
        position: relative;
        width: 8px;
        ::before {
          content: "";
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 16px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: transparent;
          box-sizing: border-box;
          display: block;
        }
        &:hover {
          ::before {
            background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
          }
        }
      `
      break
    default:
      modeStyle = css`
        height: 16px;
        border-radius: 16px;
        width: 16px;
        &:hover {
          background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
        }
      `
  }
  return css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    ${modeStyle}
  `
}

export function applyNodeTextContainerCss(
  size: TreeSize,
  disabled?: boolean,
  selected?: boolean,
  blockNode?: boolean,
): SerializedStyles {
  const fontSize = size === "small" ? 12 : 14
  const hoverCss = !disabled
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
    padding: 0 4px;
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
  margin: 0 4px;
`

export function applyIndentBlockCss(
  requireDivider?: boolean,
  _mode?: TreeMode,
): SerializedStyles {
  let modeStyle: SerializedStyles
  switch (_mode) {
    case "builder":
      modeStyle = css`
        width: 3px;
      `
      break
    default:
      modeStyle = css`
        width: 16.5px;
      `
  }
  return css`
    height: 100%;
    margin-left: 8px;
    border-left: solid 1px
      ${requireDivider ? globalColor(`--${illaPrefix}-grayBlue-08`) : "white"};
    box-sizing: border-box;
    ${modeStyle}
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
