import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix, zIndex } from "@illa-design/theme"
import { MessageType, NoticePosition } from "./interface"
import { AlertType, iconColorMap } from "@illa-design/alert"
import { Variants } from "framer-motion"

export const positionMap = {
  topLeft: "top:20px;left:20px",
  topRight: "top:20px;right:20px",
  bottomLeft: "bottom:20px;left:20px",
  bottomRight: "bottom:20px;right:20px",
}

export function applyNotificationWrapper(
  position: NoticePosition,
): SerializedStyles {
  const align =
    position === "topRight" || position === "bottomRight"
      ? `align-items:end`
      : ``
  return css`
    display: flex;
    flex-direction: column;
    ${align};
    position: fixed;
    z-index: ${zIndex.notification};
    ${positionMap[position]};
  `
}

export function applyNotification(closable?: boolean): SerializedStyles {
  return css`
    position: relative;
    padding: 16px;
    padding-right: ${closable ? "40px" : "16px"};
    width: 320px;
    display: flex;
    box-sizing: border-box;
    box-shadow: 0 4px 10px 0 ${globalColor(`--${illaPrefix}-blackAlpha-07`)};
    border-radius: 8px;
    border: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    flex-direction: column;
  `
}

export function applyNotificationIcon(type: AlertType): SerializedStyles {
  return css`
    color: ${iconColorMap[type]};
    display: inline-flex;
    align-items: center;
    font-size: 22px;
  `
}

export const applyNotificationContentWrapper = css`
  flex: 1;
  word-break: break-all;
`

export const applyNotificationTitle = css`
  font-size: 16px;
  font-weight: 500;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  margin-bottom: 4px;
`

export const applyNotificationContentStyle = css`
  font-size: 14px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export const applyNotificationCloseBtn = css`
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: 8px;
  line-height: 0;
  color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const applyNotificationAction = css`
  text-align: right;
  margin-top: 16px;
`

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

export function applyMessage(
  closable?: boolean,
  showIcon?: boolean,
): SerializedStyles {
  const paddingRight = closable ? `padding-right:46px` : ""
  const paddingLeft = showIcon ? `padding-left:40px` : ""
  return css`
    margin-bottom: 24px;
    position: relative;
    padding: 9px 16px;
    ${paddingRight};
    ${paddingLeft};
    pointer-events: auto;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 4px 10px 0 ${globalColor(`--${illaPrefix}-blackAlpha-07`)};
    border-radius: 8px;
    border: solid 1px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
  `
}

export function applyMessageIcon(type: MessageType): SerializedStyles {
  return css`
    position: absolute;
    top: 12px;
    left: 16px;
    font-size: 16px;
    line-height: 0;
    color: ${iconColorMap[type]};
    display: inline-block;
  `
}
export const applyMessageContent = css`
  font-size: 14px;
  line-height: 22px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
`

export const applyMessageCloseBtn = css`
  position: absolute;
  top: 16px;
  line-height: 0;
  right: 23px;
  font-size: 8px;
  display: inline-block;
  cursor: pointer;
  color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
`

export const applyContentWrapperStyle = css`
  display: flex;
  flex-direction: row;
`

export const applyContentStyle = css`
  flex: 1;
  word-break: break-word;
`

export const applyNotificationLeftStyle = css`
  padding-right: 8px;
`
