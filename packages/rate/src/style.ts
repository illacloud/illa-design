import { globalColor, illaPrefix } from "@illa-design/theme"
import { css, keyframes, SerializedStyles } from "@emotion/react"

export const rateScale = keyframes`
  0% {
    transform: scale(1);
  }

  57%{
    transform: scale(1.33);
  }
  
  100% {
    transform: scale(1);
  }
`
export function applyRate(disabled: boolean): SerializedStyles {
  const cursor = disabled
    ? css`
        cursor: not-allowed;
      `
    : css``
  return css`
    display: inline-block;
    user-select: none;
    ${cursor}
  `
}

export const applyRateInner = css`
  display: flex;
  align-items: center;
  font-size: 24px;
  min-height: 32px;
  flex-wrap: wrap;
  gap: 7px;
`

export function applyRateCharacter(
  disabled: boolean,
  readonly: boolean,
  animate?: boolean,
): SerializedStyles {
  const cursor = disabled || readonly ? `` : `cursor: pointer`
  const animation = animate
    ? css`
        animation: ${rateScale} 0.35s ease-in-out;
      `
    : ""
  return css`
    position: relative;
    transition: transform 0.15s ease-in-out;
    color: ${globalColor(`--${illaPrefix}-grayBlue-08`)};
    ${cursor};
    ${animation};
    &:hover {
      transform: ${readonly ? "" : `scale(1.33)`};
    }
  `
}

export function applyRateCharacterLeft(
  isHalf?: boolean,
  isStar?: boolean,
): SerializedStyles {
  const color = isStar
    ? `${globalColor(`--${illaPrefix}-yellow-04`)}`
    : `${globalColor(`--${illaPrefix}-red-03`)}`
  return css`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    transition: inherit;
    color: ${isHalf ? `${color}` : ""};
    opacity: ${isHalf ? 1 : 0};
    > svg {
      float: left;
    }
  `
}

export function applyRateCharacterRight(
  isFull?: boolean,
  isStar?: boolean,
): SerializedStyles {
  const color = isStar
    ? `${globalColor(`--${illaPrefix}-yellow-04`)}`
    : `${globalColor(`--${illaPrefix}-red-03`)}`
  return css`
    transition: inherit;
    color: ${isFull ? `${color}` : ""};
    > svg {
      float: left;
    }
  `
}
