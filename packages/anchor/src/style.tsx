import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

const linkActiveColor = globalColor(`--${illaPrefix}-grayBlue-02`)

export function applyLinkStyle(
  isActive: boolean,
  lineless?: boolean,
): SerializedStyles {
  return css([linkCss, isActive && applyActiveLinkCss(lineless)])
}

export const linkCss = css`
  textdecoration: none;
  overflow: hidden;
  textoverflow: ellipsis;
  whitespace: "nowrap";
  display: block;
  color: ${globalColor(`--${illaPrefix}-grayBlue-04`)};
  &:hover {
    color: ${linkActiveColor};
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  }
`

function applyActiveLinkCss(lineless?: boolean): SerializedStyles {
  return css`
    font-weight: 500;
    color: ${linkActiveColor};
  `
}

export const linkOffsetStyle = css`
  & > & {
    margin-left: 16px;
  }
`

export function applyAnchorListCss(lineless?: boolean): SerializedStyles {
  const bgColor = globalColor(`--${illaPrefix}-grayBlue-06`)
  const lineCss = css`
    &:before {
      content: "";
      background-color: ${bgColor};
      height: 100%;
      width: 2px;
      position: absolute;
      left: -8px;
    }
  `

  return css`
    position: relative;
    ${!lineless && lineCss}
  `
}

export const activeLineIndicatorCss = css`
  width: 3px;
  height: 16px;
  background-color: ${globalColor(`--${illaPrefix}-blue-04`)};
  position: absolute;
  left: -8px;
  transition: all 0.5s fade;
`
