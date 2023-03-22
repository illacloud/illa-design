import { globalColor, illaPrefix } from "@illa-design/theme"
import { css, SerializedStyles } from "@emotion/react"

export const applySliderWrapper = css`
  height: 12px;
  width: 240px;
  display: flex;
  align-items: center;
`

export function applySliderRoad(): SerializedStyles {
  return css`
    width: 100%;
    height: 2px;
    background-color: ${globalColor("--illa-gray-08")};
    border-radius: 2px;
    display: flex;
    align-items: center;
    position: relative;
  `
}

export function applySliderBar(
  disabled: boolean,
  draggableBar: boolean,
): SerializedStyles {
  return css`
    height: 2px;
    position: absolute;
    background: ${disabled
      ? globalColor("--illa-gray-08")
      : globalColor("--illa-blue-03")};
    border-radius: 2px;
    cursor: ${disabled || !draggableBar ? "auto" : "pointer"};
  `
}

export function applyMarkBar(
  left?: number,
  right?: number,
  isRightMark?: boolean,
  isBoundMark?: boolean,
  disabled?: boolean,
): SerializedStyles {
  return css`
    height: ${isBoundMark ? "8px" : "12px"};
    width: ${isBoundMark ? "8px" : "12px"};
    left: ${left}px;
    right: ${right}px;
    position: absolute;
    background-color: white;
    border: 2px solid
      ${disabled
        ? globalColor("--illa-gray-08")
        : globalColor("--illa-blue-03")};
    border-radius: 50%;
    transform: ${isRightMark ? "translateX(50%)" : "translateX(-50%)"};
    z-index: 1;
    cursor: ${disabled ? "auto" : "pointer"};
  `
}

export function applyTick(
  left: number,
  background: string,
  disabled: boolean,
): SerializedStyles {
  return css`
    height: 5px;
    width: 2px;
    background: ${globalColor(background)};
    position: absolute;
    left: ${left}px;
    bottom: 100%;
    transform: translateX(-50%);
    cursor: ${disabled ? "auto" : "pointer"};
  `
}
