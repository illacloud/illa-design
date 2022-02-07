import { globalColor, illaPrefix } from "@illa-design/theme"
import { CheckboxProps } from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"
import icon from "./check-icon.png"

// default radio
export function applyRadioSize() {
  return css`
    position: relative;
    appearance: none;
    border-radius: 2px;
    margin: auto 6px auto auto;
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

    &:checked {
      border: unset;

      &:before {
        width: 16px;
        height: 16px;
        border-radius: 2px;
        left: 0;
        top: 0;
        background: no-repeat center/ 8px url(${require("./check-icon.png")})
          ${globalColor(`--${illaPrefix}-blue-01`)};
        transition: 0.15s all linear;
        content: "";
        position: absolute;
      }

      &:hover {
        &:before {
          background-color: ${globalColor(`--${illaPrefix}-blue-02`)};
        }
      }

      &:disabled:before {
        background-color: ${globalColor(`--${illaPrefix}-blue-06`)};
      }
    }
  `
}

export function applyMergeCss(props: CheckboxProps): SerializedStyles {
  const currentDisabled = props.disabled ?? false

  return css`
    display: inline-flex;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 22px;
    color: ${globalColor(`--${illaPrefix}-gray-02`)};
    cursor: ${currentDisabled ? "not-allowed" : "pointer"};
  `
}

export function applyRadioContainerHorizontal(
  spacing: string | number,
): SerializedStyles {
  const currentSpacing = typeof spacing === "string" ? spacing : `${spacing}px`

  return css`
    display: inline-flex;
    vertical-align: middle;
    flex-direction: row;
    align-items: center;
    gap: ${currentSpacing};
  `
}

export function applyRadioContainerVertical(
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
