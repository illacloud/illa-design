import { css, SerializedStyles } from "@emotion/react"

export function applyParagraphContainer(indent: boolean): SerializedStyles {
  if (indent) {
    return css`
      text-indent: 2em;
      font-size: 14px;
      line-height: 24px;
    `
  } else {
    return css`
      font-size: 14px;
      line-height: 24px;
    `
  }
}
