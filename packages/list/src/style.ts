import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { ListSize } from "./interface"

export function applyListContainer(bordered?: boolean): SerializedStyles {
  let containerCss = css`
    display: inline-flex;
    flex-direction: column;
  `
  if (bordered) {
    containerCss = css`
      ${containerCss};
      border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-09`)};
      border-radius: 2px;
    `
  }
  return containerCss
}

export function applyListItemOuter(hoverable?: boolean): SerializedStyles {
  let hoverableCss: SerializedStyles = css``
  if (hoverable) {
    hoverableCss = css`
      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
      }
    `
  }
  return css`
    ${hoverableCss};
  `
}

export function applyListItemContainer(size: ListSize): SerializedStyles {
  let sizeCss: SerializedStyles
  switch (size) {
    case "small":
      sizeCss = css`
        padding: 8px 16px;
      `
      break
    case "medium":
      sizeCss = css`
        padding: 12px 16px;
      `
      break
    case "large":
      sizeCss = css`
        padding: 16px 16px;
      `
      break
  }
  return css`
    display: flex;
    flex-direction: row;
    ${sizeCss};
  `
}

export const applyListItemInner = css`
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
`

export function applyItemMetaContainer(): SerializedStyles {
  return css`
    display: inline-flex;
    align-items: start;
    flex-direction: row;
  `
}

export const applyItemMetaAvatar = css`
  margin-right: 8px;
`

export const applyTypoStyle = css`
  align-self: center;
`

export const applyListItemActionsStyle = css`
  margin-top: 8px;
`

export const applyListItemExtraStyle = css`
  display: flex;
  align-items: center;
  margin-left: 32px;
`

export function applyBarStyle(size: ListSize) {
  let sizeCss: SerializedStyles
  switch (size) {
    case "small":
      sizeCss = css`
        padding: 8px 16px;
      `
      break
    case "medium":
      sizeCss = css`
        padding: 12px 16px;
      `
      break
    case "large":
      sizeCss = css`
        padding: 16px 16px;
      `
      break
  }
  return css`
    ${sizeCss};
  `
}

export const applyListItemMetaTitleStyle = css`
  display: inline-flex;
`
