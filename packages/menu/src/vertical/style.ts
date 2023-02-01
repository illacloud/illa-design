import { css, SerializedStyles } from "@emotion/react"
import { MenuColorScheme } from "../interface"
import { getColor } from "@illa-design/theme"

export function applyVerticalListContainer(): SerializedStyles {
  return css`
    display: flex;
    width: 100%;
    overflow: hidden;
    flex-direction: column;
  `
}

export function applyVerticalSubMenuContentContainer(
  colorScheme: MenuColorScheme,
  selected?: boolean,
  disabled?: boolean,
): SerializedStyles {
  const colorStyle = disabled
    ? css`
        color: ${getColor("grayBlue", "05")};
      `
    : selected
    ? css`
        color: ${getColor(colorScheme, "03")};

        &:hover {
          background-color: ${getColor("grayBlue", "09")};
        }
      `
    : css`
        color: ${getColor("grayBlue", "02")};

        &:hover {
          background-color: ${getColor("grayBlue", "09")};
        }
      `

  return css`
    cursor: ${disabled ? "not-allowed" : "pointer"};
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 24px;
    flex-direction: row;
    ${colorStyle};
  `
}

export function applyVerticalMenuItemContainer(
  colorScheme: MenuColorScheme,
  selected?: boolean,
  disabled?: boolean,
  sub?: boolean,
): SerializedStyles {
  const colorStyle = disabled
    ? css`
        color: ${getColor("grayBlue", "05")};
      `
    : selected
    ? css`
        color: ${getColor(colorScheme, "03")};

        &:hover {
          background-color: ${getColor("grayBlue", "09")};
        }
      `
    : css`
        color: ${getColor("grayBlue", "02")};

        &:hover {
          background-color: ${getColor("grayBlue", "09")};
        }
      `

  const paddingStyle = sub
    ? css`
        padding: 0 24px 0 40px;
      `
    : css`
        padding: 0 24px 0 24px;
      `

  return css`
    cursor: ${disabled ? "not-allowed" : "pointer"};
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    padding: 0 24px 0 40px;
    height: 48px;
    flex-direction: row;
    ${colorStyle};
    ${paddingStyle};
  `
}

export const verticalDivider = css`
  flex-grow: 1;
`

export const verticalSubMenuIcon = css`
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`

export const verticalSubMenuLabel = css`
  overflow-wrap: break-word;
  word-break: break-all;
  text-overflow: ellipsis;
  font-size: 14px;
  flex-shrink: 1;
`

export const verticalMenuContainerStyle = css`
  display: flex;
  padding: 8px 0;
  overflow-y: auto;
  border-radius: 2px;
  width: 200px;
  flex-direction: column;
`

export function applyVerticalSubMenuItemContainer(
  colorScheme: MenuColorScheme,
  selected?: boolean,
  disabled?: boolean,
): SerializedStyles {
  const colorStyle = disabled
    ? css`
        color: ${getColor("grayBlue", "05")};
      `
    : selected
    ? css`
        color: ${getColor(colorScheme, "03")};
      `
    : css`
        color: ${getColor("grayBlue", "02")};
      `
  return css`
    cursor: ${disabled ? "not-allowed" : "pointer"};
    height: 48px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    ${colorStyle};
  `
}
