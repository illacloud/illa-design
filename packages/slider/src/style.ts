import { globalColor } from "@illa-design/theme"
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
  width: number,
): SerializedStyles {
  return css`
    height: 2px;
    position: absolute;
    width: ${width}px;
    background: ${disabled
      ? globalColor("--illa-gray-08")
      : globalColor("--illa-blue-03")};
    border-radius: 2px;
    cursor: ${disabled || !draggableBar ? "auto" : "pointer"};
  `
}
export function applyMarkBar(disabled?: boolean): SerializedStyles {
  return css`
    height: 12px;
    width: 12px;
    background-color: white;
    border: 2px solid
      ${disabled
        ? globalColor("--illa-gray-08")
        : globalColor("--illa-blue-03")};
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    cursor: ${disabled ? "auto" : "pointer"};
  `
}
export function applyBoundBar(
  isRightMark?: boolean,
  disabled?: boolean,
): SerializedStyles {
  return css`
    position: absolute;
    left: ${isRightMark ? "auto" : 0}px;
    right: ${isRightMark ? 0 : "auto"}px;
    height: 8px;
    width: 8px;
    background-color: white;
    border: 2px solid
      ${disabled
        ? globalColor("--illa-gray-08")
        : globalColor("--illa-blue-03")};
    border-radius: 50%;
    z-index: 1;
    transform: ${isRightMark ? "translateX(50%)" : "translateX(-50%)"};
    cursor: ${disabled ? "auto" : "pointer"};
  `
}

export const applyBarContainer = css`
  height: 16px;
  width: 16px;
`

export function applyTickContainer(
  left: number,
  disabled: boolean,
): SerializedStyles {
  return css`
    height: 5px;
    width: 8px;
    position: absolute;
    left: ${left}px;
    bottom: 100%;
    transform: translateX(-50%);
    cursor: ${disabled ? "auto" : "pointer"};
  `
}
export function applyTick(background: string): SerializedStyles {
  return css`
    height: 5px;
    width: 2px;
    background: ${globalColor(background)};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `
}
