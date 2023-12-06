import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const overflowEllipsisCommonStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const getUploadListContainerStyle = (type: string = "text") => {
  if (type === "picture-card") {
    return css`
      display: inline;
      vertical-align: top;
      width: 100%;
    `
  }
  return css`
    margin-top: 16px;
    width: 100%;
  `
}

export const uploadListItemStyle = css`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  border-radius: 2px;
`

export const getTextItemContainerStyle = (listType: string = "text") => {
  const paddingStyle =
    listType === "text"
      ? css`
          padding: 7px 12px;
        `
      : css`
          padding: 12px;
        `

  const basicStyle = css`
    display: flex;
    gap: 12px;
    box-sizing: border-box;
    ${paddingStyle};
    width: 100%;
    border-radius: 2px;
    align-items: center;
    justify-content: space-between;
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  `
  if (listType === "text") {
    return css`
      ${basicStyle};
      min-height: 36px;
    `
  }
  return css`
    ${basicStyle};
    min-height: 64px;
  `
}

export const textItemOperationIconStyle = css`
  display: flex;
  gap: 16px;
  flex-shrink: 1;
`

export const getTextItemContentContainerStyle = (listType: string = "text") => {
  return css`
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    gap: 12px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 2px;
  `
}

export const textItemStyle = css`
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  align-items: center;
  ${overflowEllipsisCommonStyle};
`

export const textItemImageStyle = css`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  border-radius: 4px;
  & span {
    display: flex;
    width: 100%;
    height: 100%;
  }
  & img,
  & svg {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`

export const textItemMainContentStyle = css`
  display: flex;
  ${overflowEllipsisCommonStyle};
  flex-wrap: nowrap;
  flex-shrink: 1;
  flex-grow: 1;
  align-items: center;
`

export const textItemIconStyle = css`
  width: 16px;
  height: 20px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-self: center;
  align-items: center;
  & > svg {
    width: 100%;
    height: 100%;
  }
`

export const getTextItemNameStyle = (status: string = "init") => {
  let errorStyle = css``
  if (status === "error") {
    errorStyle = css`
      color: ${globalColor(`--${illaPrefix}-red-03`)};
    `
  }
  return css`
    text-decoration: none;
    font-size: 14px;
    ${overflowEllipsisCommonStyle};
    line-height: 22px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    ${errorStyle};
  `
}

export const textItemProgressStyle = css`
  margin-left: auto;
  width: auto;
`

export const textItemDeleteIconStyle = css`
  display: flex;
  align-self: center;
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  cursor: pointer;
  width: 16px;
  height: 16px;
  transition: color 200ms ease-in-out;
  &:hover {
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  }
  & > svg {
    margin: auto;
    width: 12px;
    height: 12px;
  }
`

export const triggerNodeContainerStyle = css`
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  width: 100%;
`

export const inputStyle = css`
  visibility: hidden;
  display: inline-block;
  width: 100px;
  height: 100px;
`

export const inputContainerStyle = css`
  width: 100px;
  height: 100px;
  position: relative;
`

export const inputUploadStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border: 2px;
  background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
`

export const inputContentContainer = css`
  margin: 32px 28px 22px 29px;
`

export const listTypeButtonStyle = css`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 16px;
  align-items: center;
`

export const getPictureCardContainerStyle = (disabled: boolean) => {
  const basicStyle = css`
    width: 100px;
    height: 100px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  `
  if (disabled) {
    return css`
      ${basicStyle};
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
    `
  }
  return css`
    ${basicStyle};
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
    transition: background-color 200ms ease-in-out;
    & svg {
      color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
    }
    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    }
    &:active {
      background-color: ${globalColor(`--${illaPrefix}-blue-08`)};
      & svg {
        color: ${globalColor(`--${illaPrefix}-blue-03`)};
      }
    }
  `
}

export const pictureCardContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const pictureCardIconStyle = css`
  width: 16px;
  height: 16px;
  align-self: center;
`

export const pictureCardTextStyle = css`
  flex-grow: 1;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  line-height: 22px;
  ${overflowEllipsisCommonStyle};
`

export const getDragContainerStyle = (disabled: boolean) => {
  const basicStyle = css`
    width: 100%;
    padding: 24px 16px 48px 16px;
    box-sizing: border-box;
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  if (disabled) {
    return css`
      ${basicStyle};
      cursor: not-allowed;
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
      color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
    `
  }
  return css`
    ${basicStyle};
    color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
    transition: background-color 200ms ease-in-out;
    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    }
    &:active {
      background-color: ${globalColor(`--${illaPrefix}-blue-08`)};
      & svg {
        color: ${globalColor(`--${illaPrefix}-blue-03`)};
      }
    }
  `
}

export const dragIconStyle = css`
  width: 64px;
  height: 64px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`

export const dragContentContainerStyle = css`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

export const dragTextStyle = css`
  min-height: 24px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  word-wrap: break-word;
`

export const dragTipsStyle = css`
  flex: 1;
  word-wrap: break-word;
  text-align: center;
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export const successIconStyle = css`
  color: ${globalColor(`--${illaPrefix}-green-03`)};
  display: flex;
  width: 16px;
  height: 16px;
  & > svg {
    margin: auto;
    width: 12px;
    height: 12px;
  }
`

export const uploadProgressStatus = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 16px;
  height: 16px;
`

export const uploadProgressStyle = css`
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  font-size: 16px;
  color: ${globalColor(`--${illaPrefix}-white-03`)};
`

export const uploadProgressFailStyle = css`
  font-size: 14px;
  flex: 1;
  ${overflowEllipsisCommonStyle};
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-blue-03`)};
`

export const pictureItemUploading = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const pictureItemStyle = css`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  border-radius: 2px;
  vertical-align: middle;
  background-color: ${globalColor(`--${illaPrefix}-white-01`)};
  & > img {
    width: 100%;
    height: 100%;
  }
`

export const pictureItemMask = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  line-height: 100px;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  background: ${globalColor(`--${illaPrefix}-blackAlpha-04`)};
  &:hover {
    opacity: 1;
    display: block;
  }
`

export const pictureItemUploadingMask = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  line-height: 100px;
  transition: opacity 200ms ease-in-out;
  background: ${globalColor(`--${illaPrefix}-blackAlpha-04`)};
  opacity: 1;
  display: block;
  & svg {
    color: ${globalColor(`--${illaPrefix}-white-01`)};
  }
`

export const pictureItemOperationsStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${globalColor(`--${illaPrefix}-white-02`)};
`

export const pictureItemPreviewStyle = css`
  color: ${globalColor(`--${illaPrefix}-white-02`)};
  text-decoration: none;
`

export const errorImageContainerStyle = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: ${globalColor(`--${illaPrefix}-red-03`)};
  border: 1px solid ${globalColor(`--${illaPrefix}-red-03`)};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const pictureItemIconStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img,
  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

export const errorListItemStyle = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: ${globalColor(`--${illaPrefix}-red-03`)};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-items: center;
`

export const errorImageStyle = css`
  width: 50%;
  height: 50%;
  display: block;
  margin: auto;
`

export const errorImageNameStyle = css`
  font-size: 14px;
  ${overflowEllipsisCommonStyle};
`

export const listItemStyle = css`
  display: inline-block;
  vertical-align: center;
  margin-top: 0;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
  overflow: hidden;
`

export const getUploaderContinerStyle = (type: string) => {
  if (type === "picture-card") {
    return css`
      display: inline-block;
      max-width: 100%;
    `
  }
  return css`
    width: 100%;
  `
}
