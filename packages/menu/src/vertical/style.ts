import { css, SerializedStyles } from "@emotion/react"
import { MenuColorScheme } from "../interface"
import {
  getColor,
  getSpecialThemeColor,
  hasNineStepColor,
} from "@illa-design/theme"

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
  hoverColorScheme: MenuColorScheme,
  selected?: boolean,
  disabled?: boolean,
): SerializedStyles {
  const colorStyle = disabled
    ? css`
        color: ${getColor("grayBlue", "05")};
      `
    : selected
    ? css`
        color: ${getSpecialThemeColor(colorScheme)};
        font-weight: 500;

        &:hover {
          background-color: ${getColor(
            hoverColorScheme,
            hasNineStepColor(hoverColorScheme) ? "09" : "08",
          )};
        }
      `
    : css`
        color: ${getColor("grayBlue", "02")};

        &:hover {
          background-color: ${getColor(
            hoverColorScheme,
            hasNineStepColor(hoverColorScheme) ? "09" : "08",
          )};
        }
      `

  return css`
    cursor: ${disabled ? "not-allowed" : "pointer"};
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 16px;
    flex-direction: row;
    ${colorStyle};
  `
}

export function applyVerticalMenuItemContainer(
  colorScheme: MenuColorScheme,
  hoverColorScheme: MenuColorScheme,
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
        color: ${getSpecialThemeColor(colorScheme)};
        font-weight: 500;

        &:hover {
          background-color: ${getColor(
            hoverColorScheme,
            hasNineStepColor(hoverColorScheme) ? "09" : "08",
          )};
        }
      `
    : css`
        color: ${getColor("grayBlue", "02")};

        &:hover {
          background-color: ${getColor(
            hoverColorScheme,
            hasNineStepColor(hoverColorScheme) ? "09" : "08",
          )};
        }
      `

  const paddingStyle = sub
    ? css`
        padding: 0 16px 0 32px;
      `
    : css`
        padding: 0 16px;
      `

  return css`
    cursor: ${disabled ? "not-allowed" : "pointer"};
    display: inline-flex;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
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
  font-size: 16px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`

export const verticalSubMenuLabel = css`
  overflow-wrap: break-word;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  flex-shrink: 1;
`

export const verticalMenuContainerStyle = css`
  display: flex;
  padding: 8px 0;
  overflow-y: hidden;
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
        color: ${getSpecialThemeColor(colorScheme)};
        font-weight: 500;
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
