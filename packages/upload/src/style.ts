import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

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
  const basicStyle = css`
    display: flex;
    gap: 12px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `
  if (listType === "text") {
    return css`
      ${basicStyle};
      width: 100%;
      min-height: 36px;
    `
  }
  return css`
    ${basicStyle};
    min-height: 64px;
  `
}

export const getTextItemContentContainerStyle = (listType: string = "text") => {
  let paddingStyle =
    listType === "text"
      ? css`
          padding: 7px 10px 7px 10px;
        `
      : css`
          padding: 12px 24px 12px 12px;
        `
  return css`
    display: flex;
    ${paddingStyle};
    flex-wrap: nowrap;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    border-radius: 2px;
  `
}

export const textItemStyle = css`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  align-items: center;
  text-overflow: ellipsis;
`

export const textItemImageStyle = css`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  & img,
  & svg {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`

export const textItemMainContentStyle = css`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-wrap: nowrap;
  flex-shrink: 1;
  flex-grow: 1;
  align-items: center;
`

export const textItemIconStyle = css`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
`

export const getTextItemNameStyle = (status: string = "init") => {
  let errorStyle = css``
  if (status === "error") {
    errorStyle = css`
      color: ${globalColor(`--${illaPrefix}-red-03`)};
    `
  }
  return css`
    margin-left: 12px;
    text-decoration: none;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 22px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    ${errorStyle};
  `
}

export const textItemErrorIconStyle = css`
  margin-left: 2px;
  min-width: 12px;
  flex-grow: 0;
  height: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  color: ${globalColor(`--${illaPrefix}-red-03`)};
  & > img,
  & > svg {
    width: 100%;
    height: 12px;
    display: flex;
    margin: auto;
  }
`

export const textItemProgressStyle = css`
  margin-left: auto;
  width: auto;
`

export const textItemDeleteIconStyle = css`
  display: flex;
  align-self: center;
  color: ${globalColor(`--${illaPrefix}-gray-05`)};
  cursor: pointer;
  & > svg {
    width: 12px;
    height: 12px;
  }
`

export const getTriggerNodeContainerStyle = (drag?: boolean) => {
  const listWidthStyle = drag
    ? css`
        width: 100%;
      `
    : css`
        max-width: 100%;
      `
  return css`
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    ${listWidthStyle};
  `
}

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
  width: 100px;
  font-family: "SF Pro Text";
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
    padding: 32px 28px 22px 28px;
    box-sizing: border-box;
  `
  if (disabled) {
    return css`
      ${basicStyle};
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  }
  return css`
    ${basicStyle};
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    color: ${globalColor(`--${illaPrefix}-gray-04`)};
    & svg {
      color: ${globalColor(`--${illaPrefix}-gray-03`)};
    }
    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
    }
    &:active {
      background-color: ${globalColor(`--${illaPrefix}-blue-07`)};
      & svg {
        color: ${globalColor(`--${illaPrefix}-blue-01`)};
      }
    }
  `
}

export const pictureCardContentStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`

export const getDragContainerStyle = (disabled: boolean) => {
  const basicStyle = css`
    width: 100%;
    padding: 24px 16px 48px 16px;
    box-sizing: border-box;
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  if (disabled) {
    return css`
      ${basicStyle};
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    `
  }
  return css`
    ${basicStyle};
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
    }
    &:active {
      background-color: ${globalColor(`--${illaPrefix}-blue-07`)};
      & svg {
        color: ${globalColor(`--${illaPrefix}-blue-01`)};
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
  height: 24px;
  font-size: 16px;
  font-weight: 500;
`

export const dragTipsStyle = css`
  flex: 1;
  word-wrap: break-word;
  text-align: center;
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-gray-04`)};
`

export const successIconStyle = css`
  color: ${globalColor(`--${illaPrefix}-green-03`)};
  display: flex;
  align-items: center;
  & > svg {
    width: 12px;
    height: 12px;
  }
`

export const uploadProgressStatus = css`
  position: relative;
  cursor: pointer;
  //line-height: 16px;
  //height: 16px;
`

export const uploadProgressStyle = css`
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  font-size: 12px;
  color: ${globalColor(`--${illaPrefix}-white-03`)};
`

export const uploadProgressFailStyle = css`
  font-size: 14px;
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-blue-01`)};
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
  transition: opacity 0.1s linear;
  background: ${globalColor(`--${illaPrefix}-blackAlpha-02`)};
  &:hover {
    opacity: 1;
    display: block;
  }
`

export const pictureItemOperationsStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${globalColor(`--${illaPrefix}-white-02`)};
`

export const pictureItemErrorIconStyle = css`
  color: ${globalColor(`--${illaPrefix}-red-03`)};
`

export const pictureItemPreviewStyle = css`
  color: ${globalColor(`--${illaPrefix}-white-02`)};
  text-decoration: none;
`

export const errorImageContainerStyle = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 8px;
  color: ${globalColor(`--${illaPrefix}-red-03`)};
  border: 1px solid ${globalColor(`--${illaPrefix}-red-03`)};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const errorListItemStyle = css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: ${globalColor(`--${illaPrefix}-red-03`)};
  border: 1px solid ${globalColor(`--${illaPrefix}-red-03`)};
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
  text-overflow: ellipsis;
  overflow: hidden;
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
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
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
