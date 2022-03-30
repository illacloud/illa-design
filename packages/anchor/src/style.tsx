import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyAnchor() { }

export function applyLinkStyle(): SerializedStyles {
  return css([linkCss])
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
      color: ${globalColor(`--${illaPrefix}-gray-02`)}
    }
  `,
])
