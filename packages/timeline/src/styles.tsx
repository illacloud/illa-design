import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import {
  TimelineDirection,
  TimelineItemLineType,
  TimelineMode,
} from "./interface"

export function applyWrapCss(direction: string): SerializedStyles {
  return css`
    display: inline-flex;
    ${direction === "vertical" && "flex-direction: column"};
  `
}

export function applyItemCss(direction: string): SerializedStyles {
  return css`
    ${direction === "horizontal" && "display: inline-block"};
    position: relative;
    margin: 0;
    ${direction === "vertical"
      ? "padding-bottom: 42px"
      : "padding-bottom: 20px"};
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
  mode: TimelineMode,
): SerializedStyles {
  const commonDotStyle = css`
    position: absolute;
    height: 100%;
    text-align: center;
  `
  if (direction === "horizontal") {
    if (mode === "bottom") {
      return css`
        ${commonDotStyle};
        bottom: 0;
      `
    } else {
      return css`
        ${commonDotStyle};
        top: 0;
      `
    }
  } else {
    if (mode === "alternate") {
      return css`
        ${commonDotStyle};
        left: 50%;
      `
    } else if (mode === "right") {
      return css`
        ${commonDotStyle};
        right: 0;
      `
    } else {
      return css`
        ${commonDotStyle};
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
      left: 12px;
      right: 4px;
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
      width: 6px;
      height: 6px;
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

export function applyVertItemContentCss(
  mode: string,
  autoFixDotSize?: boolean,
): SerializedStyles {
  let alignStyle
  if (mode === "right") {
    alignStyle = css`
      text-align: right;
      right: 20px;
    `
  } else if (mode === "alternate-same") {
    alignStyle = css`
      left: 50%;
      width: calc(50% - 15px);
    `
  } else if (mode === "alternate-relative") {
    alignStyle = css`
      width: calc(50% - 15px);
      text-align: right;
      right: 20px;
    `
  }
  return css`
    position: relative;
    ${alignStyle};
    margin-left: 16px;
    ${autoFixDotSize && "font-size: 14px"};
  `
}

export function applyHorItemContentCss(
  mode: string,
  autoFixDotSize?: boolean,
): SerializedStyles {
  return css`
    position: relative;
    margin: 20px 20px 0 0;
    left: -10px;
    ${mode === "alternate-relative" && "top: 50%;margin-top: 30px;"};
    ${mode === "alternate-same" && "top: -50%;"}
    ${autoFixDotSize && "font-size: 14px"};
  `
}
