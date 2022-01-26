/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const badgeScale = keyframes`
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
`
export function applyBadge() {
  return css`
    display: inline-block;
    position: relative;
    line-height: 1;
  `
}

export function applyBadgeDot(
  color: string,
  hasChildren: boolean,
  hasStatus?: boolean,
) {
  let position: string = ``
  if (!hasStatus && hasChildren) {
    position += `
      position: absolute;
      z-index: 2;
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
      right: 0px;
    `
  }
  return css`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: solid 1px ${globalColor(`--${illaPrefix}-white-01`)};
    background-color: ${color};
    display: inline-block;
    ${position}
  `
}

export function applyBadgeNumberOrText(
  color: string,
  hasChildren: boolean,
  length: number,
) {
  const padding = length > 1 ? "padding: 0 6px;" : ""
  const position = hasChildren
    ? `
    position: absolute;
    z-index: 2;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    right: 0px;
  `
    : ""
  return css`
    min-width: 20px;
    height: 20px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.67;
    border-radius: 10px;
    box-sizing: border-box;
    transition: 0.15s all linear;
    border: solid 2px ${globalColor(`--${illaPrefix}-white-01`)};
    background-color: ${color};
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    text-align: center;
    ${position + padding}
  `
}

export function applyBadgeScale(isChanged: boolean = false) {
  console.log(isChanged, "ischanged")
  return isChanged
    ? css`
        animation-name: ${badgeScale};
        animation-timing-function: cubic-bezier(0.3, 1.3, 0.3, 1);
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-play-state: running;
      `
    : css``
}

export function applyBadgeStatusWrapper() {
  return css`
    display: inline-flex;
    align-items: center;
  `
}

export function applyBadgeStatusText() {
  return css`
    margin-left: 9px;
    font-size: 12px;
    line-height: 1.33;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}
