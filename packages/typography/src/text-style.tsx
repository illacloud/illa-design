import { css, SerializedStyles } from "@emotion/react"

export function applyTextContainer(fontSize: string): SerializedStyles {
  return css`
    font-size: ${fontSize};
  `
}
