export * from "./styles"
import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { Theme, MenuHorizontalAlign } from "./interface"

export const themeColor = {
  light: {
    hoverBg: globalColor(`--${illaPrefix}-grayBlue-09`),
    disabledColor: globalColor(`--${illaPrefix}-grayBlue-05`),
    selectedColor: globalColor(`--${illaPrefix}-blue-03`),
    selectedBg: globalColor(`--${illaPrefix}-grayBlue-09`),
    horizontalSelectedBg: globalColor(`--${illaPrefix}-blue-03`),
    color: globalColor(`--${illaPrefix}-grayBlue-03`),
  },
  dark: {
    hoverBg: globalColor(`--${illaPrefix}-grayBlue-03`),
    disabledColor: globalColor(`--${illaPrefix}-grayBlue-04`),
    selectedColor: globalColor(`--${illaPrefix}-blue-04`),
    selectedBg: globalColor(`--${illaPrefix}-grayBlue-03`),
    horizontalSelectedBg: globalColor(`--${illaPrefix}-blue-02`),
    color: globalColor(`--${illaPrefix}-grayBlue-08`),
  },
}

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

export function applyAlignStyle(
  horizontalAlign?: MenuHorizontalAlign,
): SerializedStyles {
  return css`
    justify-content: ${horizontalAlign};
  `
}
