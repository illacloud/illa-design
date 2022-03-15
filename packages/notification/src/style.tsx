import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { MessageType, NoticePosition } from "./interface"
import { AlertType, iconColorMap } from "@illa-design/alert"
import { Variants } from "framer-motion"

export const positionMap = {
  topLeft: "top:20px;left:20px",
  topRight: "top:20px;right:20px",
  bottomLeft: "bottom:20px;left:20px",
  bottomRight: "bottom:20px;right:20px",
}

export function applyNotificationWrapper(position: NoticePosition) {
  const align =
    position === "topRight" || position === "bottomRight"
      ? `align-items:end`
      : ``
  return css`
    display: flex;
    flex-direction: column;
    ${align};
    position: fixed;
    z-index: 999;
    ${positionMap[position]};
  `
}

export function applyNotification() {
  return css`
    margin-bottom: 20px;
    padding: 16px;
    overflow: hidden;
    width: 320px;
    display: flex;
    box-sizing: border-box;
    box-shadow: 0 4px 10px 0 ${globalColor(`--${illaPrefix}-blackAlpha-07`)};
    border-radius: 2px;
    border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
  `
}

export function applyNotificationIcon(type: AlertType) {
  return css`
    padding-right: 8px;
    font-size: 16px;
    color: ${iconColorMap[type]};
  `
}
export function applyNotificationContentWrapper() {
  return css`
    flex: 1;
    word-break: break-all;
  `
}

export function applyNotificationTitle() {
  return css`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}

export function applyNotificationContent(hasTitle: boolean) {
  const fontSize = hasTitle ? `14px` : `16px`
  return css`
    font-size: ${fontSize};
    line-height: 1.57;
    color: ${globalColor(`--${illaPrefix}-gray-04`)};
  `
}

export function applyNotificationCloseBtn() {
  return css`
    font-size: 8px;
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
    cursor: pointer;
  `
}

export function applyNotificationAction() {
  return css`
    text-align: right;
    margin-top: 16px;
  `
}

export function applyNotificationSlide(position: NoticePosition): Variants {
  const originX =
    position === "topLeft" || position === "bottomLeft" ? "-100%" : "100%"
  return {
    initial: {
      x: `${originX}`,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        opacity: { duration: 0.2, ease: "linear" },
      },
    },
  }
}

export function applyMessage(closable: boolean) {
  const padding = closable ? `padding-right:36px` : ""
  return css`
    margin-bottom: 24px;
    position: relative;
    padding: 9px 16px;
    ${padding};
    pointer-events: auto;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 4px 10px 0 ${globalColor(`--${illaPrefix}-blackAlpha-07`)};
    border-radius: 2px;
    border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
  `
}

export function applyMessageIcon(type: MessageType) {
  return css`
    margin-right: 8px;
    font-size: 16px;
    color: ${iconColorMap[type]};
    display: inline-block;
  `
}
export function applyMessageContent() {
  return css`
    font-family: SFProDisplay;
    font-size: 14px;
    line-height: 1.57;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}
export function applyMessageCloseBtn() {
  return css`
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 8px;
    display: inline-block;
    cursor: pointer;
    color: ${globalColor(`--${illaPrefix}-gray-03`)};
  `
}
