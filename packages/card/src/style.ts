import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { CardSize } from "./interface"
import { ReactNode } from "react"

export function applyCard(
  bordered?: boolean,
  hoverable?: boolean,
): SerializedStyles {
  const border = bordered
    ? `border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)}`
    : ``

  const boxShadow = hoverable
    ? `box-shadow: 0 4px 10px 0 ${globalColor(`--${illaPrefix}-blackAlpha-07`)}`
    : ""
  return css`
    font-size: 14px;
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    border-radius: 8px;
    transition: box-shadow 0.2s ease-in-out;
    ${border};
    &:hover {
      ${boxShadow};
    }
  `
}

export function applyMetaContainer(hoverable?: boolean): SerializedStyles {
  const boxShadow = hoverable
    ? `box-shadow: 0 4px 10px 0 ${globalColor(`--${illaPrefix}-blackAlpha-07`)}`
    : ""
  return css`
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    transition: box-shadow 0.2s ease-in-out;
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

export function applyCardBody(size: CardSize): SerializedStyles {
  const paddingSize = size === "small" ? `8px` : `16px`
  return css`
    box-sizing: border-box;
    padding: ${paddingSize};
    color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
  `
}

export function applyCardMetaBody(
  size: CardSize,
  bordered?: boolean,
  cover?: ReactNode,
): SerializedStyles {
  const paddingSize = size === "small" ? `8px` : `16px`

  const border = bordered
    ? `solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)}`
    : ``
  return css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: ${paddingSize};
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    border-radius: ${cover ? "0 0 8px 8px" : "8px"};
    color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
    border: ${border};
  `
}

export const avatarLayout: SerializedStyles = css`
  margin-right: 8px;
`

export const nicknameStyle: SerializedStyles = css`
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
`

export const actionContainer: SerializedStyles = css`
  display: flex;
  flex-grow: 1;
  justify-content: end;
  flex-direction: row;
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

export function applyCardGrid(): SerializedStyles {
  const borderColor = globalColor(`--${illaPrefix}-grayBlue-08`)
  return css`
    position: relative;
    box-sizing: border-box;
    width: 33.33%;
    box-shadow: 1px 0 0 0 ${borderColor}, 0 1px 0 0 ${borderColor},
      1px 1px 0 0 ${borderColor}, 1px 0 0 0 ${borderColor} inset,
      0 1px 0 0 ${borderColor} inset;
  `
}

export const applyCardMetaTitle = css`
  font-size: 16px;
  font-weight: 500;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const applyCardMetaDescription = css`
  margin-top: 4px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export const applyCardMetaFooter = css`
  display: flex;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const applyCardMetaUserContainer = css`
  display: flex;
  align-items: center;
  flex-direction: row;
`
