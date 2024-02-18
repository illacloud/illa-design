import { css, SerializedStyles } from "@emotion/react"
import { MenuColorScheme, MenuHorizontalAlign } from "../interface"
import { getColor, getSpecialThemeColor } from "@illa-design/theme"

export const horizontalMenuContainerStyle = css`
  height: 48px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
`

export function applyHorizontalMenuListContainerStyle(
  horizontalAlign: MenuHorizontalAlign,
  isScroll: boolean,
): SerializedStyles {
  return css`
    display: flex;
    gap: 16px;
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
          background: linear-gradient(
            270deg,
            rgba(255, 255, 255, 0) 0%,
            #fff 100%
          );
          padding: 14px 12px 14px 4px;
        `
      : css`
          background: linear-gradient(
            270deg,
            #fff 0%,
            rgba(255, 255, 255, 0) 100%
          );
          padding: 14px 4px 14px 12px;
        `
  return css`
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
        color: ${getSpecialThemeColor(colorScheme)};
        font-weight: 500;

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
    left: 0;
    right: 0;
    background-color: ${getSpecialThemeColor(colorScheme)};
    ${hiddenStyle};
  `
}

export function applyHorizontalSubMenuIcon(
  onlyShowIcon?: boolean,
): SerializedStyles {
  return css`
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: center;
    margin-right: ${onlyShowIcon ? "0" : "8px"};
  `
}

export const horizontalSubMenuLabel = css`
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
`
