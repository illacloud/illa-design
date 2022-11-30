import { css, SerializedStyles } from "@emotion/react"
import { Variants } from "framer-motion"
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
export const CollapseItemAnimation: Variants = {
  enter: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
}

export function applyChildrenContainerStyle(
  hidden?: boolean,
): SerializedStyles {
  return css`
    padding: 8px 32px;
    display: ${hidden ? "none" : "block"};
    background-color: ${getColor("grayBlue", "09")};
  `
}

export const collapseTitleContainerStyle = css`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  flex-direction: row;
`

export const expandIconStyle = css`
  display: flex;
  align-items: center;
  padding: 4px;
  font-size: 8px;
`

export function applyCollapseTitleStyle(showIcon: boolean): SerializedStyles {
  return css`
    margin-left: ${showIcon ? "4px" : "0"};
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex-shrink: 1;
    color: ${getColor("gray", "02")};
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
