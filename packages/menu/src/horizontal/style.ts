import { css, SerializedStyles } from "@emotion/react"
import { MenuColorScheme, MenuHorizontalAlign } from "../interface"
import { getColor } from "@illa-design/theme"

export const horizontalMenuContainerStyle = css`
  height: 48px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  border-bottom: 1px solid ${getColor("grayBlue", "08")};
`

export function applyHorizontalMenuListContainerStyle(
  horizontalAlign: MenuHorizontalAlign,
  isScroll: boolean,
): SerializedStyles {
  return css`
    display: flex;
    flex-direction: row;
    justify-content: ${isScroll ? "flex-start" : horizontalAlign};
    overflow-x: auto;
    height: 100%;
    width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }
  `
}

export function applyActionContainerStyle(
  action: "left" | "right",
): SerializedStyles {
  const positionStyle =
    action === "left"
      ? css`
          left: 0;
          top: 0;
          bottom: 0;
        `
      : css`
          right: 0;
          top: 0;
          bottom: 0;
        `
  const bgStyle =
    action === "left"
      ? css`
          mask-image: linear-gradient(90deg, #000 0, transparent);
        `
      : css`
          mask-image: linear-gradient(-90deg, #000 0, transparent);
        `
  return css`
    background: transparent;
    color: ${getColor("grayBlue", "02")};
    position: absolute;
    width: 28px;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${bgStyle};
    ${positionStyle};
  `
}

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
  flex-shrink: 0;
  justify-content: center;
  margin-right: 8px;
`

export const horizontalSubMenuLabel = css`
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
`
