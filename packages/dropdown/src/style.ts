import { css, SerializedStyles } from "@emotion/react"
import {
  getColor,
  getSpecialThemeColor,
  globalColor,
  hasNineStepColor,
  illaPrefix,
} from "@illa-design/theme"
import { TriggerColorScheme } from "@illa-design/trigger"

export function applyListCss(): SerializedStyles {
  return css`
    position: relative;
    border-radius: 8px;
    overflow: auto;
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    padding: 8px 0;
  `
}

export function applyItemCss(
  colorScheme: TriggerColorScheme,
  hoverColorScheme: TriggerColorScheme,
  isDisabled?: boolean,
  selected?: boolean,
  deleted?: boolean,
): SerializedStyles {
  const hoverCss = css`
    color: ${deleted ? getColor("red", "03") : getColor("grayBlue", "02")};

    &:hover {
      cursor: pointer;
      background-color: ${deleted
        ? getColor("red", "07")
        : getColor(
            hoverColorScheme,
            hasNineStepColor(hoverColorScheme) ? "09" : "08",
          )};
    }
  `

  const disabledCss = css`
    cursor: not-allowed;
    color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  `

  const selectedStyle = css`
    color: ${getSpecialThemeColor(colorScheme)};
    background: ${getColor(colorScheme, "08")};
  `

  let finalStyle

  if (selected) {
    finalStyle = selectedStyle
  } else {
    if (isDisabled) {
      finalStyle = disabledCss
    } else {
      finalStyle = hoverCss
    }
  }

  return css`
    font-size: 14px;
    line-height: 32px;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    padding: 0 16px;
    ${finalStyle};
  `
}
