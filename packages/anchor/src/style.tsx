import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

const linkActiveColor = globalColor(`--${illaPrefix}-gray-02`)

export function applyAnchor() { }

export function applyLinkStyle(
  isActive: boolean,
  lineless?: boolean,
): SerializedStyles {
  return css([linkCss, isActive && applyActiveLinkCss(lineless)])
}

export const linkCss = css([
  css({
    textDecoration: "none",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: globalColor(`--${illaPrefix}-gray-04`),
  }),
  css`
    &:hover {
      color: ${linkActiveColor};
    }
  `,
])

function applyActiveLinkCss(lineless?: boolean): SerializedStyles {
  const bgColor = globalColor(`--${illaPrefix}-blue-04`)
  const activeLineCss = css`
    position: relative;
    transition: all 1s ease-in-out;
    &:before {
      content: "";
      width: 3px;
      height: 100%;
      background-color: ${bgColor};
      position: absolute;
      left: -8px;
    }
  `
  return css`
    font-weight: 500;
    color: ${linkActiveColor};
    ${!lineless && activeLineCss}
  `
}

export const linkOffsetStyle = css`
  & > & {
    margin-left: 16px;
  }

  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
  }
`

export function applyAnchorListCss(lineless?: boolean): SerializedStyles {
  const bgColor = globalColor(`--${illaPrefix}-gray-06`)
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
