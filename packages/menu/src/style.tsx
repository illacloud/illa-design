export * from "./styles"
import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { Theme } from "./interface"

export function applyPopButtonCss(theme: Theme): SerializedStyles {
  return css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 10px ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    padding: 0 12px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    background: ${theme === "dark"
      ? globalColor(`--${illaPrefix}-grayBlue-02`)
      : "none"};
  `
}
