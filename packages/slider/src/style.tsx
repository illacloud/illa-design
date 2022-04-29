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
      background-color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
      ${verticalBeforeStyle}
    }
  `
}

export function applySliderBar(
  vertical?: boolean,
  disabled?: boolean,
): SerializedStyles {
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
    background-color: ${disabled
      ? globalColor(`--${illaPrefix}-grayBlue-08`)
      : globalColor(`--${illaPrefix}-blue-03`)};
    border-radius: 2px;
    top: 50%;
    transform: translateY(-50%);
    ${verticalStyle}
  `
}

export function applySliderBtn(
  vertical?: boolean,
  reverse?: boolean,
  disabled?: boolean,
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
    ${disabled ? "cursor:not-allowed" : ""};
    &::after {
      content: "";
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: ${globalColor(`--${illaPrefix}-white-01`)};
      border: 2px solid ${
        disabled
          ? globalColor(`--${illaPrefix}-grayBlue-08`)
          : globalColor(`--${illaPrefix}-blue-03`)
      };
      border-radius: 50%;
      box-sizing: border-box;
      position: absolute;
      left: 0;
      transition: all 0.15s ease-in-out;
      top: 0;
    }
    &:hover {
      &::after {
        transform: scale(1.5);
        box-shadow: 0 0 4px 0 ${globalColor(`--${illaPrefix}-blackAlpha-04`)};
    }
  `
}

export function applySliderTick(
  vertical?: boolean,
  reverse?: boolean,
  disabled?: boolean,
  active?: boolean,
): SerializedStyles {
  const verticalStyle = vertical
    ? css`
        width: 3px;
        height: 1px;
        top: unset;
        margin-top: unset;
        left: 50%;
      `
    : ""
  return css`
    position: absolute;
    width: 1px;
    height: 3px;
    background-color: ${disabled
      ? globalColor(`--${illaPrefix}-grayBlue-08`)
      : active
      ? globalColor(`--${illaPrefix}-blue-03`)
      : globalColor(`--${illaPrefix}-grayBlue-08`)};
    top: 50%;
    transform: ${vertical && reverse
      ? `translate(1px, -50%)`
      : reverse
      ? `translate(50%, -100%)`
      : vertical
      ? `translate(1px, 50%)`
      : `translate(-50%, -100%)`};
    margin-top: -1px;
    ${verticalStyle}
  `
}

export function applySliderDotWrapper(
  vertical?: boolean,
  reverse?: boolean,
): SerializedStyles {
  const verticalStyle = vertical
    ? css`
        top: unset;
        left: 50%;
      `
    : ""
  return css`
    position: absolute;
    top: 50%;
    transform: ${vertical && reverse
      ? `translate(-50%, -50%)`
      : reverse
      ? `translate(50%, -50%)`
      : vertical
      ? `translate(-50%, 50%)`
      : `translate(-50%, -50%)`};
    font-size: 12px;
    ${verticalStyle}
  `
}

export function applySliderDot(
  disabled?: boolean,
  active?: boolean,
): SerializedStyles {
  return css`
    width: 8px;
    height: 8px;
    background-color: ${globalColor(`--${illaPrefix}-white-01`)};
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid
      ${disabled
        ? globalColor(`--${illaPrefix}-grayBlue-08`)
        : active
        ? globalColor(`--${illaPrefix}-blue-03`)
        : globalColor(`--${illaPrefix}-grayBlue-08`)};
  `
}

export function applySliderMarks(vertical?: boolean): SerializedStyles {
  const verticalStyle = vertical
    ? css`
        height: 100%;
        left: 15px;
        top: 0;
      `
    : ""
  return css`
    position: absolute;
    top: 12px;
    width: 100%;
    ${verticalStyle}
  `
}

export function applySliderMarkText(
  vertical?: boolean,
  reverse?: boolean,
): SerializedStyles {
  return css`
    position: absolute;
    cursor: pointer;
    transform: ${vertical && reverse
      ? `translateY(-50%)`
      : reverse
      ? `translateX(50%)`
      : vertical
      ? `translateY(50%)`
      : `translateX(-50%)`};
    font-size: 14px;
    font-weight: 1.57;
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
  `
}

export function applySliderInput(vertical?: boolean): SerializedStyles {
  return css`
    display: flex;
    margin-left: ${vertical ? "0" : "20px"};
    & input {
      text-align: center;
    }
  `
}

export const applySliderInputNumber = {
  width: `58px`,
  height: `32px`,
  fontSize: `14px`,
  overflow: `visible`,
}

export const applySliderInputRange = css`
  width: 20px;
  line-height: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const applySliderInputRangeContent = css`
  display: inline-block;
  width: 8px;
  height: 2px;
  background-color: ${globalColor(`--${illaPrefix}-grayBlue-03`)};
`
