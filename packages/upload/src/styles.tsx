import { css, SerializedStyles } from "@storybook/theming"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const uploadContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  width: 503px;
  color: ${globalColor(`--${illaPrefix}-gray-02`)}; ;
`

export const uploadChildrenCss = css`
  display: inline-flex;
  flex-direction: column;
  width: fit-content;
`

export const inputCss = css`
  display: none;
`

export const backgroundCss: SerializedStyles = css`
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};

  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  }

  &:active {
    background-color: ${globalColor(`--${illaPrefix}-blue-07`)};
  }
`

export const imageUploadContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  ${backgroundCss}
`

export const dragUploadContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 479px;
  height: 194px;
  ${backgroundCss}
`

export function applyImageUploadTextCss(disable?: boolean): SerializedStyles {
  return css`
    ${applyTextColorCss(disable)};
    font-size: 14px;
  `
}

export function applyDragUploadTitleCss(disable?: boolean): SerializedStyles {
  return css`
    ${applyTextColorCss(disable)};
    margin-top: 24px;
    font-size: 16px;
    font-weight: 600;
  `
}

export const dragUploadTipCss = css`
  margin-top: 4px;
  color: ${globalColor(`--${illaPrefix}-gray-04`)};
  width: 239px;
  max-lines: 2;
  font-size: 14px;
  text-align: center;
`

export function applyTextCss(
  disable?: boolean,
  isTip?: boolean,
): SerializedStyles {
  return css`
    ${applyTextColorCss(disable, isTip)}
    font-size: 14px;
  `
}

export function applyTextColorCss(
  disable?: boolean,
  isTip?: boolean,
): SerializedStyles {
  if (disable) {
    return css`
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  }
  if (isTip) {
    return css`
      color: ${globalColor(`--${illaPrefix}-gray-04`)};
    `
  }
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
  `
}

export function applyIconCss(disable?: boolean): SerializedStyles {
  if (disable) {
    return css`
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  }
  return css`
    &:active {
      color: ${globalColor(`--${illaPrefix}-blue-01`)};
    }
  `
}

export const fileTextItemCss = css`
  width: 100%;
  padding-left: 12px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  flex-grow: 1;
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
`

export const filePicItemCss = css`
  width: 100%;
  padding-left: 12px;
  height: 64px;
  display: inline-flex;
  align-items: center;
  background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
`
export const fileListContainerCss = css`
  width: 100%;
`

export const fileItemContainerCss = css`
  display: inline-flex;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`

export function applyFileItemTitleCss(isFail?: boolean) {
  let textColorCss
  if (isFail === true) {
    textColorCss = css`
      color: ${globalColor(`--${illaPrefix}-red-03`)};
    `
  }
  return css`
    ${textColorCss};
    font-size: 14px;
    padding-left: 12px;
    flex-grow: 1;
  `
}

export const progressCss = css`
  margin-right: 12px;
`

export const deleteIconCss = css`
  margin-left: 12px;
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
  &:hover {
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  }
`
