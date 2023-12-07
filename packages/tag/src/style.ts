import { css, SerializedStyles } from "@emotion/react"
import { TagColorScheme, TagSize, TagVariant } from "./interface"
import {
  getSpecialThemeColor,
  globalColor,
  illaPrefix,
} from "@illa-design/theme"

export function applyTagContainerStyle(clickable?: boolean): SerializedStyles {
  return css`
    display: inline-flex;
    vertical-align: middle;
    white-space: nowrap;
    flex-direction: row;
    align-items: center;
    padding: 0 7px;
    cursor: ${clickable ? "pointer" : "default"};
  `
}

export const tagSizeLargeStyle = css`
  font-size: 14px;
  line-height: 22px;
  height: 32px;
  font-weight: 400;
`

export const tagSizeMediumStyle = css`
  font-size: 14px;
  line-height: 22px;
  height: 24px;
  font-weight: 400;
`

export const tagSizeSmallStyle = css`
  font-size: 12px;
  line-height: 18px;
  height: 18px;
  font-weight: 400;
`

export const tagContentStyle = css`
  font-size: inherit;
  line-height: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const leftIcon = css`
  width: 12px;
  font-size: 12px;
  height: 12px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 4px;
`

export function applyCloseIcon(
  color: TagColorScheme,
  size: TagSize,
  variant: TagVariant,
): SerializedStyles {
  let sizeCss: SerializedStyles
  let variantCss: SerializedStyles = css()
  if (size === "small") {
    sizeCss = css({ padding: "2px" })
  } else {
    sizeCss = css({ padding: "4px" })
  }
  if (variant === "fill") {
    variantCss = css`
      &:hover {
        background-color: ${globalColor(`--${illaPrefix}-white-07`)};
      }
    `
  } else if (variant === "outline") {
    if (color === "gray" || color === "grayBlue") {
      variantCss = css`
        &:hover {
          background-color: ${globalColor(`--${illaPrefix}-${color}-08`)};
        }
      `
    }
  }

  return css`
    margin-left: 4px;
    display: inline-flex;
    align-items: center;
    padding: 3px;
    border-radius: 50%;

    &:hover {
      background-color: ${globalColor(`--${illaPrefix}-${color}-06`)};
      cursor: pointer;
    }

    ${sizeCss}
    ${variantCss}
  `
}

export const colors: TagColorScheme[] = [
  "white",
  "blackAlpha",
  "gray",
  "grayBlue",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "cyan",
  "purple",
  "techPurple",
  "techPink",
]

export function tagOutlinePrepare(color: TagColorScheme): SerializedStyles {
  if (color == "gray" || color == "grayBlue") {
    return css`
      border-radius: 12px;
      border: solid 1px ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${getSpecialThemeColor(color)};
    `
  } else {
    return css`
      border-radius: 12px;
      border: solid 1px ${getSpecialThemeColor(color)};
      color: ${getSpecialThemeColor(color)};
    `
  }
}

export function tagFillPrepare(color: TagColorScheme): SerializedStyles {
  return css`
    background-color: ${getSpecialThemeColor(color)};
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    border-radius: 12px;
  `
}

export function tagLightPrepare(color: TagColorScheme): SerializedStyles {
  if (color == "grayBlue") {
    return css`
      border-radius: 12px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-09`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 12px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${getSpecialThemeColor(color)};
    `
  }
}

export function tagFillNormal(
  color: Extract<TagColorScheme, string>,
): SerializedStyles {
  return css`
    border-radius: 12px;
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    background-color: ${color};
  `
}

export function tagOutlineNormal(
  color: Extract<TagColorScheme, string>,
): SerializedStyles {
  return css`
    border-radius: 12px;
    color: ${color};
    border: solid 1px ${color};
  `
}
