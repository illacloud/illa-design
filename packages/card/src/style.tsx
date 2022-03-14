import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { CardSize } from "./interface"
import React from "react"

export function applyCard(bordered: boolean, hoverable: boolean) {
  const border = bordered
    ? `border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)}`
    : ``

  const boxShadow = hoverable
    ? `box-shadow: 0 4px 10px 0 ${globalColor(`--${illaPrefix}-blackAlpha-07`)}`
    : ""
  return css`
    position: relative;
    font-size: 14px;
    line-height: 1.57;
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    border-radius: 2px;
    ${border};
    &:hover {
      ${boxShadow};
    }
  `
}

export function applyCardHeader(size: CardSize) {
  const paddingSize = size === "small" ? `8px` : `16px`
  return css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    padding: ${paddingSize};
  `
}

export function applyCardHeaderTitle() {
  return css`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
}

export function applyCardHeaderExtra() {
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
}

export function applyCardBody(
  size: CardSize,
  loading: boolean,
  isContainGrid: boolean,
) {
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
    color: ${globalColor(`--${illaPrefix}-gray-04`)};
    ${loadingStyle};
    ${gridCss}
  `
}

export function applyCardCover() {
  return css`
    border-radius: 2px;
    overflow: hidden;
  `
}

export function applyCardActions(isContainMeta: boolean) {
  const margin = isContainMeta ? `` : `margin-top: 20px`
  return css`
    ${margin};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
}

export function applyCardActionsRight() {
  return css`
    display: flex;
    align-items: center;
  `
}

export function applyCardActionItem() {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
    transition: color 0.2s ease-in-out;
    &:not(:last-child) {
      margin-right: 24px;
    }
    &:hover {
      color: ${globalColor(`--${illaPrefix}-blue-03`)};
    }
  `
}

export function applyCardGrid(hoverable: boolean) {
  return css`
    position: relative;
    box-sizing: border-box;
    width: 33.33%;
    /*    box-shadow: 1px 0 0 0 ${globalColor(`--${illaPrefix}-gray-08`)},
      0 1px 0 0 ${globalColor(`--${illaPrefix}-gray-08`)},
      1px 1px 0 0 ${globalColor(`--${illaPrefix}-gray-08`)},
      1px 0 0 0 ${globalColor(`--${illaPrefix}-gray-08`)} inset,
      0 1px 0 0 ${globalColor(`--${illaPrefix}-gray-08`)} inset;*/
    &:hover {
      z-index: ${hoverable ? 1 : ""};
    }
  `
}

export function applyCardMetaTitle() {
  return css`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
}

export function applyCardMetaDescription() {
  return css`
    &:not(:first-child) {
      margin-top: 4px;
    }
  `
}

export function applyCardMetaFooter() {
  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:last-child {
      margin-top: 16px;
    }
  `
}
