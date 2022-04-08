import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"

export function applySlider(vertical?: boolean): SerializedStyles {
  return vertical
    ? css`
        display: inline-block;
        width: 100%;
      `
    : css`
        display: inline-block;
        width: auto;
        height: auto;
        min-width: 22px;
      `
}

export function applySliderWrapper(vertical?: boolean): SerializedStyles {
  return css`
    display: flex;
    align-items: center;
    ${vertical ? "flex-direction:column" : ""}
  `
}

export function applySliderRoad(vertical?: boolean): SerializedStyles {
  const verticalStyle = vertical
    ? css`
        width: 12px;
        max-width: 12px;
        height: 100%;
        min-height: 200px;
        margin-bottom: 6px;
        margin-top: 6px;
        margin-right: 0;
        transform: translateY(0);
      `
    : ""
  const verticalBeforeStyle = vertical
    ? css`
        width: 2px;
        height: 100%;
        top: unset;
        left: 50%;
        transform: translateX(-50%);
      `
    : ""
  return css`
    width: 100%;
    height: 12px;
    cursor: pointer;
    flex: 1;
    position: relative;
    ${verticalStyle};
    &::before {
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      border-radius: 2px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${globalColor(`--${illaPrefix}-gray-08`)};
      ${verticalBeforeStyle}
    }
  `
}

export function applySliderBar(vertical?: boolean): SerializedStyles {
  const verticalStyle = vertical
    ? css`
        width: 2px;
        height: unset;
        top: unset;
        left: 50%;
        transform: translateX(-50%);
      `
    : ""
  return css`
    position: absolute;
    height: 2px;
    background-color: ${globalColor(`--${illaPrefix}-blue-03`)};
    border-radius: 2px;
    top: 50%;
    transform: translateY(-50%);
    ${verticalStyle}
  `
}

export function applySliderBtn(
  vertical?: boolean,
  reverse?: boolean,
): SerializedStyles {
  const verticalStyle = vertical
    ? css`
        top: unset;
        bottom: 0;
        transform: translateY(50%);
      `
    : ""
  const reverseStyle = reverse
    ? css`
        transform: ${vertical ? "translateY(-50%)" : "translateX(50%)"};
        left: unset;
        right: 0;
      `
    : ""
  return css`
    position: absolute;
    height: 12px;
    width: 12px;
    top: 0;
    left: 0;
    transform: translateX(-50%);
    ${verticalStyle};
    ${reverseStyle};
    &::after {
      content: "";
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: ${globalColor(`--${illaPrefix}-white-01`)};
      border: 2px solid ${globalColor(`--${illaPrefix}-blue-03`)};
      border-radius: 50%;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      transition: all 0.2s;
      top: 0;
    }
    &:hover {
      &::after {
        transform: scale(1.667);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
    }
  `
}
