import { CollapsePosition } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { getColor } from "@illa-design/theme"

export function applyCollapseStyle(bordered?: boolean): SerializedStyles {
  const borderCSS = bordered
    ? css`
        border: solid 1px ${getColor("grayBlue", "08")};
      `
    : css``
  return css`
    ${borderCSS}
  `
}

export const collapseStyle = css`
  display: flex;
  flex-direction: column;
`

export function applyChildrenContainerStyle(
  active?: boolean,
): SerializedStyles {
  return css`
    display: ${active ? "block" : "none"};
    overflow: hidden;
    transition: height 0.2s ease-in-out;
  `
}

export function applyChildrenContentStyle(): SerializedStyles {
  return css`
    background-color: ${getColor("grayBlue", "09")};
    padding: 8px 32px;
  `
}

export function applyCollapseTitleContainerStyle(
  disabled?: boolean,
): SerializedStyles {
  return css`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    flex-direction: row;
    cursor: ${disabled ? "not-allowed" : "auto"};
  `
}

export const expandIconStyle = css`
  display: flex;
  align-items: center;
  padding: 4px;
  font-size: 8px;
`

export function applyCollapseTitleStyle(
  showIcon: boolean,
  disabled?: boolean,
): SerializedStyles {
  return css`
    margin-left: ${showIcon ? "4px" : "0"};
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex-shrink: 1;
    color: ${disabled ? getColor("gray", "05") : getColor("gray", "02")};
  `
}

export function applyPositionIconAnimateStyle(
  active: boolean,
  position?: CollapsePosition,
): SerializedStyles {
  return css`
    transform: rotate(
      ${active ? (position === "left" ? "90deg" : "-90deg") : "0deg"}
    );
    transition: transform 200ms ease-in-out;
    transform-origin: center;
  `
}

export function applyCollapseExtraStyle(showIcon: boolean): SerializedStyles {
  return css`
    margin-right: ${showIcon ? "4px" : "0"}; ;
  `
}

export const dividerStyle = css`
  flex: 1;
`
