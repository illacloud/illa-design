import { css } from "@emotion/react"
import { TagColorScheme, TagVariant } from "./interface"
import { SerializedStyles } from "@emotion/serialize"
import { globalColor, illaPrefix } from "@illa-design/theme"

export const tagContainer = css`
  display: inline-flex;
  vertical-align: middle;
  white-space: nowrap;
  flex-direction: row;
  align-items: center;
`

export function applyTagSizeLarge(variant: TagVariant): SerializedStyles {
  return css`
    padding: ${variant == "outline" ? "4px 7px" : "5px 8px"};
  `
}

export function applyTagSizeMedium(variant: TagVariant): SerializedStyles {
  return css`
    padding: ${variant == "outline" ? "2px 7px" : "3px 8px"};
  `
}

export function applyTagSizeSmall(variant: TagVariant): SerializedStyles {
  return css`
    padding: ${variant == "outline" ? "0px 7px" : "1px 8px"};
  `
}

export const leftIcon = css`
  width: 12px;
  height: 12px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-right: 4px;
`

export const closeIcon = css`
  margin-left: 4px;
`

export const colors: TagColorScheme[] = [
  "white", "blackAlpha", "gray", "grayBlue", "red", "orange", "yellow", "green", "blue", "cyan", "purple", "techBlue",
]

export function tagOutlinePrepare(color: TagColorScheme): SerializedStyles {
  if (color == "gray") {
    return css`
      border-radius: 1px;
      border: solid 1px ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 1px;
      border: solid 1px ${globalColor(`--${illaPrefix}-${color}-01`)};
      color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    `
  }
}

export function tagFillPrepare(color: TagColorScheme): SerializedStyles {
  return css`
    background-color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    border-radius: 1px;
  `
}

export function tagLightPrepare(color: TagColorScheme): SerializedStyles {
  if (color == "gray") {
    return css`
      border-radius: 1px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-08`)};
      color: ${globalColor(`--${illaPrefix}-${color}-02`)};
    `
  } else {
    return css`
      border-radius: 1px;
      background-color: ${globalColor(`--${illaPrefix}-${color}-06`)};
      color: ${globalColor(`--${illaPrefix}-${color}-01`)};
    `
  }
}

export function tagFillNormal(color: Extract<TagColorScheme, string>): SerializedStyles {
  return css`
    border-radius: 1px;
    color: ${globalColor(`--${illaPrefix}-white-01`)};
    background-color: ${color};
  `
}

export function tagOutlineNormal(color: Extract<TagColorScheme, string>): SerializedStyles {
  return css`
    border-radius: 1px;
    color: ${color};
    border: solid 1px ${color};
  `
}