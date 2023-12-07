import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyWrapStyle(paddingVertical: string) {
  return css`
    min-width: 450px;
    padding: ${paddingVertical} 0;
    display: inline-block;
    text-align: center;
  `
}

export const titleCss = css`
  margin-top: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
`

export const subTitleCss = css`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
`

export const extraContainerStyle = css`
  margin-top: 24px;
`

export function applyIconContainer(status?: string): SerializedStyles {
  let iconColor
  switch (status) {
    case "success":
      iconColor = css`
        background-color: ${globalColor(`--${illaPrefix}-green-08`)};
        color: ${globalColor(`--${illaPrefix}-green-03`)};
        font-size: 14px;
      `
      break
    case "error":
      iconColor = css`
        background-color: ${globalColor(`--${illaPrefix}-red-08`)};
        color: ${globalColor(`--${illaPrefix}-red-03`)};
        font-size: 10px;
      `
      break
    case "info":
      iconColor = css`
        background-color: ${globalColor(`--${illaPrefix}-blue-08`)};
        color: ${globalColor(`--${illaPrefix}-blue-03`)};
      `
      break
    case "warning":
      iconColor = css`
        background-color: ${globalColor(`--${illaPrefix}-orange-08`)};
        color: ${globalColor(`--${illaPrefix}-orange-03`)};
      `
      break
    case "403":
    case "404":
    case "500":
      iconColor = css`
        width: 96px;
        height: 100%;
        background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};

        & > svg {
          width: 96px;
          height: 100%;
        }
      `
      break
  }
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    ${iconColor};
  `
}
