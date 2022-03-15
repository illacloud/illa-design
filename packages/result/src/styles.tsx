import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const wrapCss = css`
  min-width: 450px;
  padding: 40px 0;
  display: inline-block;
  text-align: center;
`

export const titleCss = css`
  margin-top: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: globalColor(\`--${illaPrefix}-gray-02\`);
`

export const subTitleCss = css`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: globalColor(\`--${illaPrefix}-gray-03\`);
`

export function applyIconContainer(status?: string): SerializedStyles {
  let iconColor
  switch (status) {
    case "success":
      iconColor = css`
        background-color: ${globalColor(`--${illaPrefix}-green-07`)};
        color: ${globalColor(`--${illaPrefix}-green-03`)};
        font-size: 14px;
      `
      break
    case "error":
      iconColor = css`
        background-color: ${globalColor(`--${illaPrefix}-red-07`)};
        color: ${globalColor(`--${illaPrefix}-red-03`)};
        font-size: 10px;
      `
      break
    case "info":
      iconColor = css`
        background-color: ${globalColor(`--${illaPrefix}-blue-07`)};
        color: ${globalColor(`--${illaPrefix}-blue-03`)};
      `
      break
    case "warning":
      iconColor = css`
        background-color: ${globalColor(`--${illaPrefix}-orange-07`)};
        color: ${globalColor(`--${illaPrefix}-orange-03`)};
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
