import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyWrapCss(direction: string): SerializedStyles {
  return css`
    display: inline-flex;
    ${direction === "vertical" && "flex-direction: column"};
  `
}

export function applyItemCss(
  direction: string
): SerializedStyles {
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

export function applyVertItemLineCss(
  mode: string,
  lineColor?: string,
  lineType?: string,
): SerializedStyles {
  let leftPositionStyle = css`
    left: 2.5px;
  `
  if (mode === "right") {
    leftPositionStyle = css`
      left: calc(100% - 2.5px);
    `
  } else if (mode === "alternate") {
    leftPositionStyle = css`
      left: calc(50% + 2.5px);
    `
  }
  return css`
    position: absolute;
    ${leftPositionStyle};
    top: 13px;
    width: 1px;
    height: calc(100% - 22px);
    border-left: 1px ${lineType};
    ${baseLineStyle(lineColor)};
  `
}

export function applyHorItemLineCss(
  mode: string,
  lineColor?: string,
  lineType?: string,
): SerializedStyles {
  let otherModePosition
  if (mode === "top") {
    otherModePosition = css`
      top: 2.5px;
    `
  } else if (mode === "bottom") {
    otherModePosition = css`
      top: auto;
      bottom: calc(0px + 2.5px);
    `
  } else if (mode === "alternate") {
    otherModePosition = css`
      top: calc(50% + 2.5px);
    `
  }
  return css`
    position: absolute;
    top: 2.5px;
    left: 12px;
    width: calc(100% - 20px);
    height: 1px;
    border-top: 1px ${lineType};
    ${baseLineStyle(lineColor)};
    ${otherModePosition};
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

export function applyVertItemDotCss(
  mode: string,
  dotColor?: string,
  dotType?: string,
): SerializedStyles {
  let leftPositionStyle
  if (mode === "right") {
    leftPositionStyle = css`
      left: calc(100% - 5px);
    `
  } else if (mode === "alternate") {
    leftPositionStyle = css`
      left: 50%;
    `
  }

  return css`
    position: absolute;
    ${leftPositionStyle};
    ${dotCommonStyle(dotColor, dotType)};
  `
}

export function applyHorItemDotCss(
  mode: string,
  dotColor?: string,
  dotType?: string,
): SerializedStyles {
  let otherModePosition
  if (mode === "top") {
    otherModePosition = css`
      top: 0px;
    `
  } else if (mode === "bottom") {
    otherModePosition = css`
      bottom: 0px;
    `
  } else if (mode === "alternate") {
    otherModePosition = css`
      top: 50%;
    `
  }
  return css`
    position: absolute;
    ${otherModePosition};
    ${dotCommonStyle(dotColor, dotType)};
  `
}

export function applyVertPropDotCss(mode: string): SerializedStyles {
  let posStyle
  if (mode === "left") {
    posStyle = css`
      left: 2.5px;
    `
  } else if (mode === "right") {
    posStyle = css`
      right: 2.5px;
    `
  } else if (mode === "alternate") {
    posStyle = css`
      left: calc(50% + 2.5px);
    `
  }
  return css`
    position: absolute;
    ${posStyle};
    top: -40%;
  `
}

export function applyHorPropDotCss(mode: string): SerializedStyles {
  let posStyle
  if (mode === "top") {
    posStyle = css`
      top: 0%;
      transform: translate(3px, calc(-50% - 5px));
    `
  } else if (mode === "bottom") {
    posStyle = css`
      bottom: 0%;
      transform: translate(3px, calc(50% - 11px));
    `
  } else if (mode === "alternate") {
    posStyle = css`
      top: 50%;
      transform: translate(3px, calc(-50% - 5px));
    `
  }
  return css`
    position: absolute;
    ${posStyle};
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
    top: -7.5px;
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
