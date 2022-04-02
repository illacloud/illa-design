import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { CollapsePosition } from "./interface"
import { Variants } from "framer-motion"

export function applyCollapse(bordered?: boolean) {
  const borderCSS = bordered
    ? `border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)}`
    : ""
  return css`
    overflow: hidden;
    border-radius: 2px;
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    line-height: 1.57;
    ${borderCSS}
  `
}

export const applyCollapseItem = css`
  box-sizing: border-box;
  border-bottom: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
`

export function applyCollapseItemHeader(
  isExpanded?: boolean,
  position?: CollapsePosition,
  disabled?: boolean,
): SerializedStyles {
  const paddingLeft =
    position === "left"
      ? ""
      : css`
          padding-left: 12px;
        `
  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 9px 32px;
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    overflow: hidden;
    box-sizing: border-box;
    cursor: ${disabled ? `not-allowed` : `pointer`};
    font-size: 14px;
    ${paddingLeft}
  `
}

export function applyCollapseItemHeaderIcon(
  isExpanded?: boolean,
  position?: CollapsePosition,
  disabled?: boolean,
): SerializedStyles {
  const deg = position === "left" ? 90 : -90
  const rotate = isExpanded
    ? css`
        transform: rotate(${deg}deg);
      `
    : ""
  return css`
    text-align: center;
    vertical-align: middle;
    position: absolute;
    top: 16px;
    ${position === "left" ? "left" : "right"}: 16px;
    font-size: 8px;
    line-height: 0;
    color: ${disabled
      ? globalColor(`--${illaPrefix}-gray-05`)
      : globalColor(`--${illaPrefix}-gray-03`)};
    transition: transform 200ms;
    ${rotate}
  `
}

export function applyCollapseItemHeaderTittle(
  isExpanded?: boolean,
  disabled?: boolean,
): SerializedStyles {
  const expandedCSS = isExpanded
    ? css`
        font-weight: 500;
      `
    : ""
  return css`
    color: ${disabled
      ? globalColor(`--${illaPrefix}-gray-05`)
      : globalColor(`--${illaPrefix}-gray-02`)};
    transition: font-weight 200ms;
    ${expandedCSS}
  `
}

export function applyCollapseItemContent(
  isExpanded?: boolean,
): SerializedStyles {
  return css`
    font-size: 14px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    position: relative;
    overflow: hidden;
  `
}

export const applyCollapseItemContentBox = css`
  padding: 9px 32px;
`

export const CollapseItemAnimation: Variants = {
  enter: { height: 0, opacity: 0 },
  exit: { height: "auto", opacity: 1 },
}
