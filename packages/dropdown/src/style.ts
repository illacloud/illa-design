import { css, SerializedStyles } from "@emotion/react"
import { getColor, globalColor, illaPrefix } from "@illa-design/theme"
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
  isDisabled?: boolean,
  selected?: boolean,
  deleted?: boolean,
): SerializedStyles {
  const hoverCss = css`
    color: ${deleted ? getColor("red", "01") : getColor("grayBlue", "02")};

    &:hover {
      cursor: pointer;
      background-color: ${deleted
        ? getColor("red", "07")
        : getColor("grayBlue", "09")};
    }
  `

  const disabledCss = css`
    cursor: not-allowed;
    color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  `

  const selectedStyle = css`
    color: ${getColor(colorScheme, "01")};
    background: ${getColor(colorScheme, "07")};
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
    position: relative;
    padding: 0 16px;
    ${finalStyle};
  `
}
