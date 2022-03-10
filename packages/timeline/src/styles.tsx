import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const wrapLineCss = css`
  display: flex;
  flex-wrap: wrap;
`

export const lineColor = css`
  background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
`

export const dotCommonStyle = css`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${globalColor(`--${illaPrefix}-blue-03`)};
`

// export const mainInfoCss = css`
//   font-size: 14px;
//   color: ${globalColor(`--${illaPrefix}-gray-02`)};
//   line-height: 1.57;
//   margin-bottom: 4px;
// `

// export const timeTextCss = css`
//   font-size: 12px;
//   color: ${globalColor(`--${illaPrefix}-gray-04`)};
//   line-height: 1.67;
// `

export function applyItemCss(direction: string): SerializedStyles {
  return css`
    ${direction === "horizontal" && "display: inline-block"};
    position: relative;
    margin: 0;
    ${direction === "vertical" ? 'padding-bottom: 42px' : 'padding-bottom: 20px'};
    list-style: none;
  `
}

export function applyVertItemLineCss(
  mode: string
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
    ${leftPositionStyle}
    top: 10px;
    width: 1px;
    height: calc(100% - 20px);
    ${lineColor}
  `
}

export function applyHorItemLineCss(mode: string): SerializedStyles {
  let otherModePosition
  if (mode === "top") {
    otherModePosition = css`
      top: 2.5px;
    `
  } else if (mode === 'bottom') {
    otherModePosition = css`
      bottom: calc(0px + 2.5px);
    `
  } else if (mode === 'alternate') {
    otherModePosition = css`
      top: calc(50% + 2.5px);
    `
  }
  return css`
    position: absolute;
    ${otherModePosition}
    left: 10px;
    width: calc(100% - 20px);
    height: 1px;
    ${lineColor}
  `
}

export function applyVertItemDotCss(mode: string): SerializedStyles {
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
    ${leftPositionStyle}
    ${dotCommonStyle}
  `
}

export function applyHorItemDotCss(mode: string): SerializedStyles {
  let otherModePosition
  if (mode === "top") {
    otherModePosition = css`
      top: 0px;
    `
  } else if (mode === 'bottom') {
    otherModePosition = css`
      bottom: 0px;
    `
  } else if (mode === 'alternate') {
    otherModePosition = css`
      top: 50%;
    `
  }
  return css`
    position: absolute;
    ${otherModePosition}
    ${dotCommonStyle}
  `
}

export function applyVertPropDotCss(
  mode: string
): SerializedStyles {
  let posStyle
  if (mode === 'left') {
    posStyle = css`left: 2.5px`
  } else if (mode === 'right') {
    posStyle = css`right: 2.5px`
  } else if (mode === 'alternate') {
    posStyle = css`left: calc(50% + 2.5px)`
  }
  return css`
    position: absolute;
    ${posStyle};
    top: -50%;
  `
}

export function applyHorPropDotCss(
  mode: string
): SerializedStyles {
  let posStyle
  if (mode === 'top') {
    posStyle = css`top: calc(-50% + 5px)`
  } else if (mode === 'bottom') {
    posStyle = css`bottom: calc(-50% - 5px)`
  } else if (mode === 'alternate') {
    posStyle = css`top: calc(50% - 15px)`
  }
  return css`
    position: absolute;
    ${posStyle};
  `
}

export function applyVertItemContentCss(mode: string): SerializedStyles {
  let alignStyle
  if (mode === "right") {
    alignStyle = css`
      text-align: right;
      right: 20px;
    `
  } else if (mode === "alternate-left") {
    alignStyle = css`
      left: 50%;
      width: calc(50% - 15px);
    `
  } else if (mode === "alternate-right") {
    alignStyle = css`
      width: calc(50% - 15px);
      text-align: right;
      right: 20px;
    `
  }
  return css`
    position: relative;
    top: -10px;
    ${alignStyle}
    margin-left: 20px;
    word-break: break-word;
  `
}

export function applyHorItemContentCss(mode: string): SerializedStyles {
  return css`
    position: relative;
    margin: 20px 20px 0 0;
    left: -10px;
    ${mode === "alternate-right" && "margin-top: 50%"};
  `

}
