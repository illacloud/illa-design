import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { CollapseMode, CollapsePosition } from "./interface"
import { Variants } from "framer-motion"

export function applyCollapseStyle(bordered?: boolean): SerializedStyles {
  const borderCSS = bordered
    ? `border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)}`
    : ""
  return css`
    overflow: hidden;
    border-radius: 2px;
    line-height: 1.57;
    ${borderCSS}
  `
}

export const collapseItemStyle: SerializedStyles = css`
  box-sizing: border-box;
  border-bottom: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  &:last-of-type {
    border-bottom: none;
  }
`

export function applyCollapseItemHeaderStyle(
  isExpanded?: boolean,
  position?: CollapsePosition,
  disabled?: boolean,
  mode?: CollapseMode,
): SerializedStyles {
  let modeCSS: SerializedStyles
  switch (mode) {
    case "builder":
      modeCSS = css`
        padding: 13px 32px;
        padding-left: ${position === "left" ? "32px" : "16px"};
        padding-right: ${position === "left" ? "16px" : "32px"};
        background-color: ${
          isExpanded
            ? globalColor(`--${illaPrefix}-techPurple-07`)
            : globalColor(`--${illaPrefix}-white-01`)
        };
        &:hover{
          background-color:${
            isExpanded
              ? globalColor(`--${illaPrefix}-techPurple-07`)
              : globalColor(`--${illaPrefix}-grayBlue-09`)
          };}
      }
      `
      break
    default:
      modeCSS = css`
        padding: 9px 32px;
        padding-left: ${position === "left" ? "28px" : "16px"};
        padding-right: ${position === "left" ? "16px" : "28px"};
        background-color: ${globalColor(`--${illaPrefix}-white-01`)};
      `
  }

  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    cursor: ${disabled ? `not-allowed` : `pointer`};
    font-size: 14px;
    ${modeCSS}
  `
}

export function applyCollapseItemHeaderIconStyle(
  isExpanded?: boolean,
  position?: CollapsePosition,
  disabled?: boolean,
  mode?: CollapseMode,
): SerializedStyles {
  let modeCSS: SerializedStyles
  switch (mode) {
    case "builder":
      modeCSS = css`
        font-size: 12px;
        top: 18px;
        color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
      `
      break
    default:
      modeCSS = css`
        font-size: 8px;
        top: 16px;
        color: ${disabled
          ? globalColor(`--${illaPrefix}-grayBlue-05`)
          : globalColor(`--${illaPrefix}-grayBlue-03`)};
      `
  }
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
    ${position === "left" ? "left" : "right"}: 16px;
    line-height: 0;
    transition: transform 200ms;
    ${rotate};
    ${modeCSS}
  `
}

export function applyCollapseItemHeaderTittleStyle(
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
      ? globalColor(`--${illaPrefix}-grayBlue-05`)
      : globalColor(`--${illaPrefix}-grayBlue-02`)};
    transition: font-weight 200ms;
    ${expandedCSS}
  `
}

export function applyCollapseItemContentStyle(
  mode?: CollapseMode,
  isExpanded?: boolean,
): SerializedStyles {
  let modeCSS: SerializedStyles
  switch (mode) {
    case "builder":
      modeCSS = css`
        font-size: 12px;
        line-height: 22px;
        padding-bottom: ${isExpanded ? "16px" : "0"};
        background-color: ${globalColor(`--${illaPrefix}-white-01`)};
      `
      break
    default:
      modeCSS = css`
        font-size: 14px;
        line-height: 22px;
        padding: 9px 32px;
        background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
      `
  }
  return css`
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    position: relative;
    overflow: hidden;
    ${modeCSS}
  `
}
export const collapseItemExtraStyle: SerializedStyles = css`
  font-size: 8px;
`

export const CollapseItemAnimation: Variants = {
  enter: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
}
