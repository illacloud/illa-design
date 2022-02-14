import { DividerVariant } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applyDividerContainerHorizontal(
  variant: DividerVariant,
): SerializedStyles {
  return css`
    display: inline-flex;
    vertical-align: middle;
    border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
    border-style: ${variant};
    border-width: 0 0 ${variant == "double" ? "3px" : "1px"} 0;
    width: 100%;
  `
}

export function applyDividerContainerVertical(
  variant: DividerVariant,
): SerializedStyles {
  return css`
    display: inline-flex;
    vertical-align: middle;
    border-width: 0 0 0 ${variant == "double" ? "3px" : "1px"};
    border-image: initial;
    border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
    border-style: ${variant};
    height: 1em;
  `
}
