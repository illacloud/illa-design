import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const commentContainerCss = css`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`

export const singleCommentContainerCss = css`
  display: inline-flex;
  width: 100%;
`

export const contentCss = css`
  margin-top: 4px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  font-size: 14px;
  font-family: SFProDisplay;
  margin-bottom: 11px;
`
export const avatarCss = css`
  font-size: 14px;
  font-family: SFProDisplay;
`

export const contentContainerCss = css`
  margin-left: 16px;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
`

export function applyAuthorDatetimeContainer(dateTimeAligh: string) {
  let justifyContenCss
  if (dateTimeAligh == "right") {
    justifyContenCss = css`
      justify-content: space-between;
    `
  } else {
    justifyContenCss = css`
      justify-content: start;
    `
  }
  return css`
    display: inline-flex;
    ${justifyContenCss}
  `
}

export const authorTextCss = css`
  display: inline-flex;
  align-items: flex-end;
  font-size: 14px;
  margin-right: 8px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)}; ;
`

export const dateTimeTextCss = css`
  display: inline-flex;
  align-items: flex-end;
  font-size: 12px;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
`

export function applyActionCss(align: string) {
  let alignCss
  if (align == "right") {
    alignCss = css`
      align-self: flex-end;
    `
  }
  return css`
    ${alignCss};
    font-size: 14px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
  `
}

export const childrenCss = css`
  margin-left: 48px;
`
