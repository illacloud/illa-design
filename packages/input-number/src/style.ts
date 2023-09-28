import { css, SerializedStyles } from "@emotion/react"
import { getColor } from "@illa-design/theme"
import { InputNumberSize } from "./interface"

export const controlContainerStyle = css`
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  visibility: hidden;
`

export function applyControlBlockStyle(
  direction: "up" | "bottom",
  size: InputNumberSize,
): SerializedStyles {
  return css`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 18px;
    height: ${size === "small" ? "9px" : "11px"};
    border-radius: ${direction === "up" ? "3px 3px 0 0" : "0 0 3px 3px"};
    background-color: ${getColor("grayBlue", "09")};
    font-size: 10px;
    color: ${getColor("grayBlue", "04")};

    &:hover {
      background-color: ${getColor("grayBlue", "07")};
    }
  `
}

export const hoverControlStyle = css`
  &:hover {
    .control {
      visibility: visible;
    }
  }
`

export function applyActionIconStyle(size: InputNumberSize): SerializedStyles {
  return css`
    font-size: 12px;
    margin-left: ${size === "large" ? "-2px" : "-6px"};
    margin-right: ${size === "large" ? "-2px" : "-6px"};
    color: ${getColor("grayBlue", "05")};
    &:active {
      color: ${getColor("grayBlue", "02")};
    }
  `
}
