import { globalColor, illaPrefix } from "@illa-design/theme"
import { SerializedStyles } from "@emotion/serialize"
import { css } from "@emotion/react"

export function applyIconStyle(): SerializedStyles {
  return css`
    & > svg {
      font-size: 12px;
    }

    color: ${globalColor(`--${illaPrefix}-gray-02`)};
  `
}

export function iconPointerStyle(size: string) {
  let positionStyle: SerializedStyles = css()
  switch (size) {
    default:
    case "large":
      positionStyle = css`
        right: 16px;
      `
      break
    case "medium":
      positionStyle = css`
        right: 16px;
      `
      break
    case "small":
      positionStyle = css`
        right: 12px;
      `
      break
  }
  return css`
    // background-color: white;
    position: absolute;
    right: 12px;
    opacity: 0;
    cursor: pointer;
    color: ${globalColor(`--${illaPrefix}-gray-06`)};

    &:hover {
      color: ${globalColor(`--${illaPrefix}-gray-05`)};
    }

    & > svg {
      font-size: 12px;
    }

    ${positionStyle}
  `
}

// popup
export function applyPopupStyle(): SerializedStyles {
  return css`
    display: flex;
    list-style: none;
    white-space: nowrap;
    height: 216px;
    border: solid 1px ${globalColor(`--${illaPrefix}-gray-08`)};
    border-radius: 2px;
  `
}
