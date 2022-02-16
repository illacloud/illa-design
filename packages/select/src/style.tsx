import { globalColor, illaPrefix } from "@illa-design/theme"
import { SelectProps } from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"

// default select
export function applyRadioSize() {
  return css`
    appearance: none;
    border-radius: 50%;
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
      border: 4px solid ${globalColor(`--${illaPrefix}-blue-01`)};
      &:hover {
        border-color: ${globalColor(`--${illaPrefix}-blue-02`)};
      }
      &:disabled {
        border-color: ${globalColor(`--${illaPrefix}-blue-05`)};
      }
    }
  `
}

export function applyMergeCss(props: SelectProps): SerializedStyles {
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
