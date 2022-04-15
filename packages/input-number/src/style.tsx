import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { InputNumberStateValue } from "./interface"

function baseFixCls(stateValue: InputNumberStateValue) {
  let sizeCss: SerializedStyles
  switch (stateValue?.size) {
    default:
    case "small":
      sizeCss = css`
        & > svg {
          font-size: 8px;
        }
        padding: 0 7px;
      `
      break
    case "medium":
      sizeCss = css`
        & > svg {
          font-size: 12px;
        }
        padding: 0 9px;
      `
      break
    case "large":
      sizeCss = css`
        & > svg {
          font-size: 12px;
        }
        padding: 0 13px;
      `
      break
  }
  return css`
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    vertical-align: middle;
    font-size: inherit;
    ${sizeCss}
  `
}

export function applyAddonCss(stateValue: InputNumberStateValue) {
  return css`
    ${baseFixCls(stateValue)}
    color: ${globalColor(`--${illaPrefix}-gray-04`)};
    border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
    border-width: 1px;
    border-style: solid;
    line-height: initial;
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    &:hover {
      cursor: pointer;
      color: ${globalColor(`--${illaPrefix}-gray-02`)};
    }

    &:first-of-type {
      border-right: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-of-type {
      border-left: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `
}
export function applyInputNumber() {
  return css`
    position: relative;
    &:hover {
      [title="inputStepEmbed"] {
        visibility: visible;
        opacity: 1;
      }
    }
  `
}

export function applyStepEmbedContainer(stateValue: InputNumberStateValue) {
  let sizeCss: SerializedStyles
  switch (stateValue?.size) {
    default:
    case "small":
      sizeCss = css`
        right: 2px;
        font-size: 10px;
      `
      break
    case "medium":
      sizeCss = css`
        right: 4px;
        font-size: 12px;
      `
      break
    case "large":
      sizeCss = css`
        right: 8px;
        font-size: 12px;
      `
      break
  }
  return css`
    transition: 0.2s ease-in-out;
    opacity: 0;
    position: absolute;
    right: 2px;
    ${sizeCss}
  `
}
export function applyStepEmbed() {
  return css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 3px;
    color: ${globalColor(`--${illaPrefix}-gray-04`)};
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    transition: 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      background-color: ${globalColor(`--${illaPrefix}-gray-07`)};
    }
    &:first-of-type {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-of-type {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `
}
