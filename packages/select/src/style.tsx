import { css, SerializedStyles } from "@emotion/react"
import { SelectSize } from "./interface"

export function applySelectContainer(size: SelectSize): SerializedStyles {
  let pdStyle = css``
  switch (size) {
    case "small":
      pdStyle = css`
        padding: 1px 12px;
      `
      break
    case "medium":
      pdStyle = css`
        padding: 5px 16px;
      `
      break
    case "large":
      pdStyle = css`
        padding: 9px 16px;
      `
      break
  }
  return css`
    display: inline-flex;
    ${pdStyle};
  `
}

export const dropListItemStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`
