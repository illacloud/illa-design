import { css, SerializedStyles } from "@emotion/react"
import { Variants } from "framer-motion"
import { getColor } from "@illa-design/theme"

export function applyCollapseStyle(bordered?: boolean): SerializedStyles {
  const borderCSS = bordered
    ? css`
        border: solid 1px ${getColor("grayBlue", "08")};
      `
    : css``
  return css`
    display: flex;
    flex-direction: column;
    ${borderCSS}
  `
}

export const collapseItemExtraStyle: SerializedStyles = css`
  font-size: 8px;
`

export const CollapseItemAnimation: Variants = {
  enter: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
}
