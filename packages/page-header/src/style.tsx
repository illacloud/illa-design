import { css } from "@emotion/react"
import { getColor, globalColor, illaPrefix } from "@illa-design/theme"

export const headerCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`
export const headerLeftCss = css`
  display: flex;
  align-items: center;
`
export const backIconCss = css`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 12px;
  margin-right: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
  }
`

export const titleStyle = css`
  margin-left: 16px;
  height: 28px;
  flex-grow: 0;
  font-weight: 600;
  font-size: 20px;
  color: ${getColor("grayBlue", "02")};
`

export const separateCss = css`
  width: 1px;
  margin: 0 12px;
  height: 16px;
  background-color: ${getColor("grayBlue", "08")};
`

export const subTitleCss = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
  font-size: 14px;
`

export const divideStyle = css`
  flex-grow: 1;
`
