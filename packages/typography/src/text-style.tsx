import { css, SerializedStyles } from "@storybook/theming"

export function applyTextContainer(fontSize: string): SerializedStyles {
  return css`
    font-size: ${fontSize};
  `
}
