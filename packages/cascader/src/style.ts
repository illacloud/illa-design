import { css, SerializedStyles } from "@emotion/react"
import { getColor } from "@illa-design/theme"

export const dropListItemStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const selectorContainerStyle = css`
  display: inline-flex;
  flex-direction: row;
`

export const listSelectorContainerStyle = css`
  display: inline-flex;
  padding: 8px 0;
  flex-direction: column;
`

export function applyListSelectorSingleItemStyle(
  selected: boolean,
): SerializedStyles {
  return css`
    padding: 9px 16px;
    display: flex;
    flex-direction: row;
    max-height: 216px;
    overflow-y: auto;
    align-items: center;
    background-color: ${selected ? getColor("grayBlue", "09") : "unset"};

    &:hover {
      background-color: ${getColor("grayBlue", "09")};
    }
  `
}

export function applyListSelectorItemTextStyle(
  checked: boolean,
): SerializedStyles {
  return css`
    color: ${getColor("grayBlue", checked ? "02" : "03")};
  `
}

export function applySelectorGroupStyle(
  showRightBorder: boolean,
): SerializedStyles {
  let borderStyle = css``
  if (showRightBorder) {
    borderStyle = css`
      border-right: 1px solid ${getColor("grayBlue", "08")};
    `
  }
  return css`
    padding: 8px 0;
    max-height: 216px;
    overflow-y: auto;
    ${borderStyle};
  `
}

export function applySelectorSingleItemStyle(selected?: boolean) {
  return css`
    display: flex;
    align-items: center;
    color: ${getColor("grayBlue", selected ? "02" : "03")};
    background-color: ${selected ? getColor("grayBlue", "09") : "unset"};
    padding: 9px 16px;

    &:hover {
      background-color: ${getColor("grayBlue", "09")};
    }
  `
}

export const selectorSingleItemTextStyle = css`
  flex-grow: 1;
`
