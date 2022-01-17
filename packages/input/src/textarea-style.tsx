import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { applyVariantStyle } from "./style"

export function applyContainerCss(variant: string) {
  return css`
    width: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 1.57;
    border-radius: 4px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    ${applyVariantStyle(variant)}
  `
}