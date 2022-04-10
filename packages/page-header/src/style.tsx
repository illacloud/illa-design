import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyPageHeader() {}

export const headerCss = css`
  display: flex;
  line-height: 28px;
  justify-content: space-between;
  margin-top: 10px;
`
export const headerLeftCss = css`
  display: flex;
  align-items: center;
`
export const backIconCss = css`
  font-size: 12px;
  margin-right: 14px;
  cursor: pointer;
`
export const titleCss = css`
  font-size: 20px;
  font-weight: 600;
  color: ${globalColor(`--${illaPrefix}-gray-02`)};
`
export const separateCss = css`
  width: 1px;
  margin: 0 12px;
  height: 16px;
  background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
`
export const subTitleCss = css`
  color: ${globalColor(`--${illaPrefix}-gray-04`)};
  font-size: 14px;
`
export const extraCss = css``
