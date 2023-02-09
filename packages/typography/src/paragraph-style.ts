import { css, SerializedStyles } from "@emotion/react"

export function applyParagraphContainer(indent: boolean): SerializedStyles {
  if (indent) {
    return css`
      text-indent: 2em;
    `
  } else {
    return css``
  }
}
