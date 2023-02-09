import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import {
  TimelineDirection,
  TimelineItemLineType,
  TimelineMode,
} from "./interface"
import { ReactNode } from "react"

export function applyWrapStyle(
  direction: TimelineDirection,
  mode: TimelineMode,
): SerializedStyles {
  return css`
    display: inline-flex;
    ${direction === "vertical" && "flex-direction: column"};
    ${direction === "horizontal" &&
    mode === "alternate" &&
    css`
      min-height: 100px;
      align-items: center;
    `};
  `
}

export function applyItemStyle(
  direction: TimelineDirection,
  mode: string,
  dot?: ReactNode,
): SerializedStyles {
  if (direction === "horizontal") {
    let itemStyle
    if (mode === "alternate-same") {
      itemStyle = css`
        margin-top: 16px;
        padding-bottom: 8px;
        transform: translateY(-50%);
      `
    } else if (mode === "alternate-relative") {
      itemStyle = css`
        margin-top: -16px;
        padding-top: 8px;
        transform: translateY(50%);
      `
    } else if (mode === "bottom") {
      itemStyle = css`
        padding-bottom: 8px;
      `
    } else {
      itemStyle = css`
        padding-top: 8px;
      `
    }
    return css`
      ${itemStyle};
      flex: ${dot ? "unset" : "1"};
      position: relative;
    `
  }
  const lastItemStyle = css`
    &:last-of-type {
      padding-bottom: ${dot ? "20px" : "0"};
    }
  `
  return css`
    position: relative;
    margin: 0;
    padding-bottom: 42px;
    ${lastItemStyle};
  `
}

export function baseLineStyle(lineColor?: string): SerializedStyles {
  let color = lineColor ? lineColor : globalColor(`--${illaPrefix}-grayBlue-08`)
  return css`
    border-color: ${color};
  `
}

export function dotCommonStyle(
  dotColor?: string,
  dotType?: string,
): SerializedStyles {
  let dotFillColor = dotColor
    ? dotColor
    : globalColor(`--${illaPrefix}-blue-03`)
  let dotFillStyle
  if (dotType === "hollow") {
    dotFillStyle = css`
      border: 1px solid ${dotFillColor};
    `
  } else {
    dotFillStyle = css`
      background-color: ${dotFillColor};
    `
  }
  return css`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    ${dotFillStyle};
  `
}

export function applyDotItemStyle(
  direction: TimelineDirection,
  mode: string,
): SerializedStyles {
  const commonDotStyle = css`
    position: absolute;
    text-align: center;
  `
  if (direction === "horizontal") {
    if (mode === "bottom" || mode === "alternate-same") {
      return css`
        ${commonDotStyle};
        width: 100%;
        bottom: 0;
      `
    } else {
      return css`
        ${commonDotStyle};
        width: 100%;
        top: 0;
      `
    }
  } else {
    if (mode === "alternate-same" || mode === "alternate-relative") {
      return css`
        ${commonDotStyle};
        height: 100%;
        left: 50%;
      `
    } else if (mode === "right") {
      return css`
        ${commonDotStyle};
        height: 100%;
        right: 0;
      `
    } else {
      return css`
        ${commonDotStyle};
        height: 100%;
        left: 0;
      `
    }
  }
}

export function applyLineStyle(
  direction: TimelineDirection,
  lineType: TimelineItemLineType,
  dotColor?: string,
): SerializedStyles {
  let dotFillColor = dotColor
    ? dotColor
    : globalColor(`--${illaPrefix}-grayBlue-08`)
  if (direction === "horizontal") {
    return css`
      box-sizing: border-box;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      bottom: -4px;
      left: 24px;
      right: 0;
      height: 1px;
      border-top: 1px ${lineType} ${dotFillColor};
    `
  }
  return css`
    box-sizing: border-box;
    position: absolute;
    transform: translateX(-50%);
    top: 24px;
    bottom: 0;
    left: 50%;
    width: 1px;
    border-left: 1px ${lineType} ${dotFillColor};
  `
}

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export function applyDotWrapperStyle(
  direction: TimelineDirection,
): SerializedStyles {
  if (direction === "horizontal") {
    return css`
      ${flexCenter};
      width: 24px;
      height: 16px;
      line-height: 6px;
      position: relative;
    `
  }
  return css`
    ${flexCenter};
    width: 6px;
    height: 24px;
    line-height: 24px;
    position: relative;
  `
}

export function applyVertItemContentStyle(mode: string): SerializedStyles {
  if (mode === "alternate-same") {
    return css`
      left: 50%;
      width: 50%;
      margin-left: 22px;
      padding-right: 22px;
    `
  } else if (mode === "alternate-relative") {
    return css`
      left: 0;
      margin-left: -16px;
      margin-right: 0;
      text-align: right;
      width: 50%;
      padding-right: 16px;
    `
  } else if (mode === "right") {
    return css`
      text-align: right;
      margin-left: 0;
      margin-right: 16px;
    `
  } else {
    return css`
      margin-left: 16px;
    `
  }
}

export function applyHortItemContentStyle(mode: string): SerializedStyles {
  if (mode === "alternate-same") {
    return css`
      margin-bottom: 16px;
      margin-right: 20px;
      padding-bottom: unset;
    `
  } else if (mode === "alternate-relative") {
    return css`
      margin-top: 16px;
      margin-right: 20px;
    `
  } else if (mode === "bottom") {
    return css`
      margin-bottom: 16px;
      margin-right: 20px;
      padding-bottom: unset;
    `
  } else {
    return css`
      margin-top: 16px;
      margin-right: 20px;
    `
  }
}

export function applyItemContentStyle(
  direction: TimelineDirection,
  mode: string,
  autoFixDotSize?: boolean,
): SerializedStyles {
  let directionStyle
  if (direction === "horizontal") {
    directionStyle = applyHortItemContentStyle(mode)
  } else {
    directionStyle = applyVertItemContentStyle(mode)
  }

  return css`
    position: relative;
    padding-bottom: 2px;
    ${autoFixDotSize &&
    css`
      font-size: 14px;
      line-height: 22px;
    `};
    ${directionStyle};
  `
}
