import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

const linkActiveColor = globalColor(`--${illaPrefix}-gray-02`);

export function applyAnchor() { }

export function applyLinkStyle(isActive: boolean): SerializedStyles {
  return css([linkCss, isActive && activeLinkCss])
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

const activeLinkCss = css`
    font-weight: 500;
    color: ${linkActiveColor}
`

export const linkOffsetStyle = css`
  & > & {
    margin-left: 16px;
  }
`
