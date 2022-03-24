import { globalColor, illaPrefix } from "@illa-design/theme"
//import { CheckboxProps } from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"

export function applyCheckboxSize(checked?: boolean) {
  let checkedCss = css()
  if (checked) {
    checkedCss = css`
      border-color: transparent;
      background-color: ${globalColor(`--${illaPrefix}-blue-01`)};

      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-blue-02`)};
      }

      &:disabled {
        background-color: ${globalColor(`--${illaPrefix}-blue-06`)};
      }
    `
  }
  return css`
    position: relative;
    appearance: none;
    border-radius: 2px;
    margin: auto 8px auto auto;
    width: 16px;
    height: 16px;
    border: solid 2px ${globalColor(`--${illaPrefix}-gray-08`)};
    cursor: pointer;
    transition: 0.15s all linear;
    &:hover {
      border-color: ${globalColor(`--${illaPrefix}-blue-06`)};
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${globalColor(`--${illaPrefix}-gray-08`)};
      background-color: ${globalColor(`--${illaPrefix}-gray-09`)};
    }
    ${checkedCss}
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
    gap: ${currentSpacing};
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

export function applyTimepickerContent() {
  return css`
    display: flex;
    box-sizing: border-box;
  `
}

export function applyTimepickerList() {
  return css`
    width: 64px;
    height: 224px;
    overflow: hidden;
    box-sizing: border-box;
    &:hover {
      overflow-y: auto;
    }
  `
}

export function applyTimeColumn() {
  return css`
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 192px;
    }
  `
}
