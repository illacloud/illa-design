import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyStatistic() {
  return css`
    display: inline-block;
    line-height: 1.33;
  `
}

export function applyStatisticTitle() {
  return css`
    margin-bottom: 4px;
    font-family: SFProDisplay;
    font-size: 12px;
    color: ${globalColor(`--${illaPrefix}-gray-04`)};
  `
}

export function applyStatisticContent() {
  return css`
    font-family: HelveticaNeue;
    font-size: 24px;
    font-weight: 500;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}

export function applyStatisticPrefix() {
  return css`
    margin-right: 8px;
    display: inline-block;
  `
}

export function applyStatisticSuffix() {
  return css`
    margin-left: 8px;
    display: inline-block;
  `
}
