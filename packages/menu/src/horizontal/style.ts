import { css, SerializedStyles } from "@emotion/react"
import { MenuColorScheme } from "../interface"
import { getColor } from "@illa-design/theme"

export const horizontalMenuContainerStyle = css`
  height: 48px;
  display: flex;
  overflow-x: auto;
  width: 100%;
  flex-direction: row;
  border-bottom: 1px solid ${getColor("grayBlue", "08")};
`

export function applyHorizontalSubMenuItemContainer(
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

export function applyHorizontalSubMenuContainer(
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
          .horizontalLine {
            opacity: 1;
          }
        }
      `
    : css`
        color: ${getColor("grayBlue", "02")};

        &:hover {
          .horizontalLine {
            opacity: 1;
          }
        }
      `

  return css`
    cursor: ${disabled ? "not-allowed" : "pointer"};
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    flex-direction: row;
    ${colorStyle};
  `
}

export function applyHorizontalLine(
  colorScheme: MenuColorScheme,
  selected?: boolean,
  disabled?: boolean,
): SerializedStyles {
  const hiddenStyle =
    selected && !disabled
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `

  return css`
    position: absolute;
    transition: opacity 0.2s ease-in-out;
    bottom: 0;
    height: 2px;
    left: 16px;
    right: 16px;
    background-color: ${getColor(colorScheme, "03")};
    ${hiddenStyle};
  `
}

export const horizontalSubMenuIcon = css`
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`

export const horizontalSubMenuLabel = css`
  font-size: 14px;
`
