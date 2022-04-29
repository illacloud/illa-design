import { css } from "@emotion/react"
import { TagColorScheme, TagVariant, TagSize } from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const tagContainer = css`
  display: inline-flex;
  vertical-align: middle;
  white-space: nowrap;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 0 7px;
`

export function applyTagSizeLarge(variant: TagVariant): SerializedStyles {
  return css`
    font-size: 14px;
    line-height: 22px;
    height: 32px;
  `
}

export function applyTagSizeMedium(variant: TagVariant): SerializedStyles {
  return css`
    font-size: 14px;
    line-height: 22px;
    height: 24px;
  `
}

export function applyTagSizeSmall(variant: TagVariant): SerializedStyles {
  return css`
    font-size: 12px;
    line-height: 18px;
    height: 18px;
  `
}

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

export const closeIcon = css`
  font-size: 7px;
  margin-left: 4px;
  display: inline-flex;
  align-items: center;
  padding: 3px;
  border-radius: 50%;

  &:hover {
    background-color: ${globalColor(`--${illaPrefix}-grayBlue-07`)};
    cursor: pointer;
  }
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
    if (color === "gray") {
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
]

export function tagOutlinePrepare(color: TagColorScheme): SerializedStyles {
  if (color == "gray") {
    return css`
      border-radius: 2px;
      border: solid 1px ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 2px;
      border: solid 1px ${globalColor(`--${illaPrefix}-${color}-01`)};
      color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    `
  }
}

export function tagFillPrepare(color: TagColorScheme): SerializedStyles {
  return css`
    background-color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    border-radius: 2px;
  `
}

export function tagLightPrepare(color: TagColorScheme): SerializedStyles {
  if (color == "gray") {
    return css`
      border-radius: 2px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-09`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 2px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-07`)};
      color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    `
  }
}

export function tagFillNormal(
  color: Extract<TagColorScheme, string>,
): SerializedStyles {
  return css`
    border-radius: 2px;
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    background-color: ${color};
  `
}

export function tagOutlineNormal(
  color: Extract<TagColorScheme, string>,
): SerializedStyles {
  return css`
    border-radius: 2px;
    color: ${color};
    border: solid 1px ${color};
  `
}
