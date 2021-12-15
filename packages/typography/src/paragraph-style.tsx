import { css, SerializedStyles } from "@storybook/theming"

export function applyParagraphContainer(indent: boolean): SerializedStyles {
  if (indent) {
    return css`
      text-indent: 2em;
    `
  } else {
    return css``
  }
}