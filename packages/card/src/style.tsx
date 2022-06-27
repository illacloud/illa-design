import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { CardSize } from "./interface"

export function applyCard(
  bordered: boolean,
  hoverable: boolean,
  isGridMode?: boolean,
): SerializedStyles {
  const border = bordered
    ? `border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)}`
    : ``

  const boxShadow = hoverable
    ? `box-shadow: 0 4px 10px 0 ${globalColor(`--${illaPrefix}-blackAlpha-07`)}`
    : ""
  return css`
    position: relative;
    font-size: 14px;
    line-height: 1.57;
    background-color: ${isGridMode
      ? ""
      : globalColor(`--${illaPrefix}-white-01`)};
    border-radius: 8px;
    transition: box-shadow 0.2s ease-in-out;
    ${border};
    &:hover {
      ${boxShadow};
    }
  `
}

export function applyCardHeader(size: CardSize): SerializedStyles {
  const paddingSize = size === "small" ? `8px` : `16px`
  return css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    padding: ${paddingSize};
  `
}

export const applyCardHeaderTitle = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const applyCardHeaderExtra = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export function applyCardBody(
  size: CardSize,
  loading: boolean,
  isContainGrid: boolean,
): SerializedStyles {
  const loadingStyle = loading
    ? css`
        text-align: center;
        overflow: hidden;
      `
    : ""
  const gridCss = isContainGrid
    ? `
        display: flex;
        flex-wrap: wrap;
        margin: 0 -1px;
        padding:0;
      `
    : ``
  const paddingSize = size === "small" ? `8px` : `16px`
  return css`
    box-sizing: border-box;
    padding: ${paddingSize};
    color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
    ${loadingStyle};
    ${gridCss}
  `
}

export const applyCardCover = css`
  border-radius: 8px;
  overflow: hidden;
`

export function applyCardActions(isContainMeta: boolean): SerializedStyles {
  const margin = isContainMeta ? `` : `margin-top: 20px`
  return css`
    ${margin};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
}

export const applyCardActionsRight = css`
  display: flex;
  align-items: center;
`

export const applyCardActionItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
  transition: color 0.2s ease-in-out;
  &:not(:last-child) {
    margin-right: 24px;
  }
  &:hover {
    color: ${globalColor(`--${illaPrefix}-blue-03`)};
  }
`

export function applyCardGrid(hoverable: boolean): SerializedStyles {
  const borderColor = globalColor(`--${illaPrefix}-grayBlue-08`)
  return css`
    position: relative;
    box-sizing: border-box;
    width: 33.33%;
    box-shadow: 1px 0 0 0 ${borderColor}, 0 1px 0 0 ${borderColor},
      1px 1px 0 0 ${borderColor}, 1px 0 0 0 ${borderColor} inset,
      0 1px 0 0 ${borderColor} inset;
    &:hover {
      z-index: ${hoverable ? 1 : ""};
    }
  `
}

export const applyCardMetaTitle = css`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const applyCardMetaDescription = css`
  &:not(:first-of-type) {
    margin-top: 4px;
  }
`

export const applyCardMetaFooter = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-of-type {
    margin-top: 16px;
  }
`
