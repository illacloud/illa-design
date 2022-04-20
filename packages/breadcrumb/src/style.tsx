import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const itemCss = css`
  display: inline-block;
  color: ${globalColor(`--${illaPrefix}-gray-04`)};
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
`

export const itemCurrentCss = css`
  color: ${globalColor(`--${illaPrefix}-gray-02`)};
`

export const itemHoverCss = css`
  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    color: ${globalColor(`--${illaPrefix}-blue-03`)};
    cursor: pointer;
  }
`

export const separatorCss = css`
  margin: 0 12px;
  color: ${globalColor(`--${illaPrefix}-gray-06`)};
  position: relative;
  top: 1.5px;
  transform: scale(0.7);
  display: inline-block;
`

export const wrapCss = css`
  font-size: 14px;
`
