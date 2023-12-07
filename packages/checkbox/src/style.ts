import {
  getColor,
  getSpecialThemeColor,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"
import { CheckboxColorScheme, CheckboxProps } from "./interface"
import { css, SerializedStyles } from "@emotion/react"

export function applyCheckboxSize(
  checked?: boolean,
  colorScheme: CheckboxColorScheme = "blue",
) {
  let checkedCss = css()
  if (checked) {
    checkedCss = css`
      border-color: transparent;
      background-color: ${getSpecialThemeColor(colorScheme)};

      &:hover {
        background-color: ${getColor(colorScheme, "04")};
      }

      &:disabled {
        background-color: ${getColor(colorScheme, "07")};
      }
    `
  }
  return css`
    position: relative;
    appearance: none;
    border-radius: 2px;
    margin: auto;
    width: 16px;
    height: 16px;
    border: solid 2px ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    cursor: pointer;
    transition: 0.15s all linear;

    &:hover {
      border-color: ${getColor(colorScheme, "07")};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-09`)};
    }

    ${checkedCss}
  `
}

export function applyCheckState(checked: boolean) {
  return css`
    position: absolute;
    left: 0;
    width: 16px;
    height: 8px;
    transform: ${checked ? "scale(1);" : "scale(0);"};
    color: white;
    transition: 0.15s all linear;
    pointer-events: none;
  `
}

export function applyMergeCss(props: CheckboxProps): SerializedStyles {
  const currentDisabled = props.disabled ?? false

  return css`
    position: relative;
    display: inline-flex;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 22px;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    cursor: ${currentDisabled ? "not-allowed" : "pointer"};
  `
}

export function applyCheckboxContainerHorizontal(
  spacing: string | number,
): SerializedStyles {
  const currentSpacing = typeof spacing === "string" ? spacing : `${spacing}px`

  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px ${currentSpacing};
    margin-right: ${currentSpacing};
  `
}

export function applyCheckboxContainerVertical(
  spacing: string | number,
): SerializedStyles {
  const currentSpacing = typeof spacing === "string" ? spacing : `${spacing}px`

  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: column;
    align-items: flex-start;
    gap: ${currentSpacing};
    margin-bottom: ${currentSpacing};
  `
}

export const childrenContainerCss = css`
  margin-left: 8px;
`
