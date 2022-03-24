import { css, SerializedStyles } from "@storybook/theming"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const uploadContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  min-width: 503px;
  color: ${globalColor(`--${illaPrefix}-gray-02`)}; ;
`

export const uploadChildrenCss = css`
  display: inline-flex;
  flex-direction: column;
  padding-right: 24px;
`

export const uploadButtonCss = css`
  width: 100px;
`

export const inputCss = css`
  display: none;
`

export function applyBackgroundCss(disabled?: boolean) {
  if (disabled) {
    return css`
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    `
  } else {
    return css`
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
        cursor: pointer;
      }

      &:active {
        background-color: ${globalColor(`--${illaPrefix}-blue-07`)};
      }
    `
  }
}

export function applyImageUploadContainerCss(disabled?: boolean) {
  return css`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    ${applyBackgroundCss(disabled)};
    ${applyTextColorCss(disabled)};
    transition: background-color 200ms;
  `
}

export function applyDragUploadContainerCss(disabled?: boolean) {
  return css`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 194px;
    ${applyBackgroundCss(disabled)};
    transition: background-color 200ms;
  `
}

export const imageUploadTextCss = css`
  font-size: 14px;
  margin-top: 8px;
`

export const dragUploadTitleCss = css`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 500;
`

export const dragUploadTipCss = css`
  margin-top: 4px;
  color: ${globalColor(`--${illaPrefix}-gray-04`)};
  width: 239px;
  max-lines: 2;
  font-size: 14px;
  text-align: center;
`

export function applyTextColorCss(disable?: boolean): SerializedStyles {
  if (disable) {
    return css`
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  }
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
    &:active {
      color: ${globalColor(`--${illaPrefix}-blue-03`)};
    }
  `
}

export function applyIconCss(disable?: boolean): SerializedStyles {
  if (disable) {
    return css`
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  }
  return css`
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
    &:active {
      color: ${globalColor(`--${illaPrefix}-blue-03`)};
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

export const imageSizeCss = css`
  display: inline-flex;
  justify-content: center;
  width: 40px;
  height: 40px;
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

export const rightIconCss = css`
  width: 12px;
  height: 12px;
  margin-right: 12px;
  color: ${globalColor(`--${illaPrefix}-green-03`)};
`

export const tryTextCss = css`
  font-size: 14px;
  margin-right: 12px;
  color: ${globalColor(`--${illaPrefix}-blue-01`)};
  &:hover {
    cursor: pointer;
  }
`

export const deleteIconCss = css`
  margin-left: 12px;
  font-size: 12px;
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
  &:hover {
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    cursor: pointer;
  }
  transition: color 200ms;
`

export const noAutoUploadButtonCss = css`
  margin-right: 24px;
`

export const picUploaded = css`
  display: inline-flex;
  width: 100px;
  height: 100px;
  position: relative;
`

export const picUploadedEditMask = css`
  width: 100%;
  height: 100%;
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${globalColor(`--${illaPrefix}-white-01`)};
  background-color: ${globalColor(`--${illaPrefix}-blackAlpha-03`)};
`

export const fileIconCss = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`
