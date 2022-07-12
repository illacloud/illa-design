import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { Variants } from "framer-motion"
import { iconColorMap } from "@illa-design/alert"
import { AlignType } from "./interface"

export const applyModalMask = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: ${globalColor(`--${illaPrefix}-blackAlpha-02`)};
`

export function applyModalWrapper(
  isCenter?: boolean,
  visible?: boolean,
): SerializedStyles {
  const centerCss = isCenter
    ? css`
        text-align: center;
        white-space: nowrap;
        &::after {
          display: inline-block;
          vertical-align: middle;
          width: 0;
          height: 100%;
          content: "";
        }
      `
    : ""
  return css`
    ${centerCss};
    position: fixed;
    left: 0;
    top: 0;
    overflow: auto;
    width: 100%;
    height: 100%;
    z-index: ${visible ? 1000 : -1000};
  `
}

export function applyModal(
  isCenter?: boolean,
  isSimple?: boolean,
): SerializedStyles {
  const centerCss = isCenter
    ? css`
        top: 0;
        vertical-align: middle;
        display: inline-block;
      `
    : ""
  return css`
    position: relative;
    top: 100px;
    margin: 0 auto;
    width: ${isSimple ? "320px" : "520px"};
    text-align: left;
    overflow: auto;
    white-space: initial;
    box-sizing: border-box;
    line-height: 1.5;
    border-radius: 8px;
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    ${centerCss}
  `
}

export function applyModalHeader(
  isSimple?: boolean,
  closable?: boolean,
): SerializedStyles {
  const simpleCss = isSimple
    ? css`
        padding-top: 24px;
        padding-bottom: 16px;
        height: unset;
        border: none;
      `
    : ""
  return css`
    padding: 24px 16px;
    ${closable ? "padding-right:40px" : ""};
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    ${simpleCss}
  `
}

export function applyModalTitle(isSimple?: boolean): SerializedStyles {
  return css`
    text-align: center;
    flex: 1;
    font-size: 20px;
    font-weight: ${isSimple ? 500 : 600};
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  `
}

export function applyModalContent(
  isSimple?: boolean,
  withoutPadding?: boolean,
): SerializedStyles {
  const paddingCSS = withoutPadding
    ? css`
        padding: 0;
      `
    : ""
  const simpleCss = isSimple
    ? css`
        padding: 0 24px 8px;
      `
    : ""
  return css`
    position: relative;
    padding: 24px;
    font-size: 14px;
    overflow: auto;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    ${simpleCss};
    ${paddingCSS}
  `
}

export const modalCloseIconStyle = css`
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  top: 26px;
  right: 26px;
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
`

export function applyModalFooter(
  isSimple?: boolean,
  footerAlign?: AlignType,
): SerializedStyles {
  const simpleCss = isSimple
    ? css`
        text-align: center;
        border: none;
      `
    : ""
  const textAlignCss = footerAlign
    ? css`
        text-align: ${footerAlign};
      `
    : ""
  return css`
    text-align: right;
    width: 100%;
    box-sizing: border-box;
    padding: 16px 24px;
    border-top: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    ${simpleCss};
    ${textAlignCss};
  `
}

export const applyModalCancelBtn = css`
  margin-right: 8px;
`

export function applyModalConfirmTitle(
  type: keyof typeof iconColorMap,
): SerializedStyles {
  return css`
    position: relative;
    padding-left: 24px;
    display: inline-block;
    > svg {
      color: ${iconColorMap[type]};
      position: absolute;
      line-height: 0;
      top: 4px;
      left: 0;
    }
  `
}

export const maskAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export const modalAnimation: Variants = {
  initial: {
    opacity: 0,
    scaleX: 0.5,
    scaleY: 0.5,
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
  },
  exit: {
    opacity: 0,
    scaleX: 0.5,
    scaleY: 0.5,
  },
}
