import { css } from "@emotion/react"
import { getColor } from "@illa-design/theme"
import { TabAlign, TabPosition, TabsSize, TabVariant } from "./interface"
import { isHorizontalLayout } from "./utils"

export const getPadding = (size: TabsSize, variant: TabVariant) => {
  let paddingX, paddingY, marginY
  switch (variant) {
    default:
    case "line":
      paddingX = "8px"
      break
    case "capsule":
      paddingX = "16px"
      break
    case "text":
      paddingX = "4px"
      break
  }
  switch (size) {
    case "small":
      if (variant === "line") {
        paddingY = "1px"
        marginY = "4px"
      } else if (variant === "capsule") {
        paddingY = "1px"
        marginY = "0"
      } else {
        paddingY = "1px"
        marginY = "0"
      }
      break
    case "large":
      if (variant === "line") {
        paddingY = "1px"
        marginY = "8px"
      } else if (variant === "capsule") {
        paddingY = "7px"
        marginY = "0"
      } else {
        paddingY = "1px"
        marginY = "0"
      }
      break
    case "medium":
    default:
      if (variant === "line") {
        paddingY = "1px"
        marginY = "6px"
      } else if (variant === "capsule") {
        paddingY = "5px"
        marginY = "0"
      } else {
        paddingY = "1px"
        marginY = "0"
      }
  }
  return css`
    padding: ${paddingY} ${paddingX};
    margin: ${marginY} 0;
  `
}

export const tabsContainerStyle = (
  tabPosition: TabPosition,
  align: TabAlign,
  variant: TabVariant,
) => {
  let flexCss
  if (isHorizontalLayout(tabPosition)) {
    flexCss = css`
      display: grid;
      justify-content: ${tabPosition === "left" ? "flex-start" : "flex-end"};
      grid-template-columns: max-content;
      grid-auto-rows: minmax(0, max-content);
    `
  } else {
    flexCss = css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: ${align};
    `
  }
  let borderCss
  if (variant === "line") {
    if (tabPosition === "top") {
      borderCss = css`
        border-bottom: 1px solid ${getColor("grayBlue", "08")};
      `
    } else if (tabPosition === "bottom") {
      borderCss = css`
        border-top: 1px solid ${getColor("grayBlue", "08")};
      `
    }
  }
  return css`
    width: 100%;
    gap: 4px;
    ${flexCss};
    overflow: hidden;
    position: relative;
    ${borderCss};
  `
}

export const tabsStyle = (
  tabPosition: TabPosition,
  tabBarSpacing: number | undefined,
  variant: TabVariant,
  translate: number,
) => {
  let variantCss
  switch (variant) {
    case "text":
      variantCss = `
        gap: ${tabBarSpacing ?? 8}px;
        background-color: ${getColor("white", "01")};
      `
      break
    case "capsule":
      variantCss = `
        gap: ${tabBarSpacing ?? 4}px;
        background-color: ${getColor("grayBlue", "09")};
        padding: 4px;
      `
      break
    default:
    case "line":
      variantCss = css`
        background-color: ${getColor("white", "01")};
        gap: ${tabBarSpacing ?? 0}px;
      `
      break
  }
  let layoutCss
  if (isHorizontalLayout(tabPosition)) {
    layoutCss = css`
      display: grid;
      justify-content: center;
      grid-template-columns: max-content;
      grid-auto-rows: minmax(0, max-content);
    `
  } else {
    layoutCss = css`
      display: flex;
      align-items: center;
    `
  }
  let borderCss
  if (variant === "line") {
    if (tabPosition === "left") {
      borderCss = css`
        border-right: 1px solid ${getColor("grayBlue", "08")};
      `
    } else if (tabPosition === "right") {
      borderCss = css`
        border-left: 1px solid ${getColor("grayBlue", "08")};
      `
    }
  }
  return css`
    border-radius: 4px;
    flex: none;
    ${variantCss};
    ${layoutCss};
    ${borderCss};
    transform: translateX(${translate}px);
    transition: all 0.3s ease-in-out;
  `
}

export const iconStyle = (location: "previous" | "next") => {
  let locationCss
  if (location === "previous") {
    locationCss = css`
      left: 0;
    `
  } else {
    locationCss = css`
      right: 0;
    `
  }
  return css`
    display: flex;
    flex: none;
    height: 100%;
    position: absolute;
    z-index: 1;
    ${locationCss};
    justify-content: center;
    background-color: ${getColor("white", "01")};
    cursor: pointer;
  `
}
export const nextIconStyle = css`
  transform: rotate(180deg);
`

export const panelContainerStyle = (
  variant: TabVariant,
  tabPosition: TabPosition,
) => {
  let padding
  switch (variant) {
    default:
    case "line":
      padding = "0 8px"
      break
    case "text":
    case "capsule":
      padding = "0"
      break
  }
  {
    return css`
      display: flex;
      flex-direction: ${tabPosition === "left" ? "row-reverse" : "row"};
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      padding: ${padding};
      cursor: pointer;
    `
  }
}

export const panelTitleStyle = (
  size: TabsSize,
  tabPosition: TabPosition,
  variant: TabVariant,
  disabled?: boolean,
  isSelectKey?: boolean,
) => {
  let flexDirection = "row"
  if (tabPosition === "left") {
    flexDirection = "row-reverse"
  }
  let selectCss
  if (isSelectKey) {
    selectCss = `
    background-color: ${getColor("white", "01")};
    `
  }
  let hoverCss
  if (disabled) {
    hoverCss = css`
      cursor: not-allowed;
    `
  } else if (isSelectKey) {
    hoverCss = css``
  } else if (variant === "line" || variant === "text") {
    hoverCss = css`
      background-color: ${getColor("grayBlue", "09")};
    `
  } else {
    hoverCss = css`
      background-color: ${getColor("white", "01")};
    `
  }
  return css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${getColor("grayBlue", "03")};
    ${getPadding(size, variant)};
    flex-direction: ${flexDirection};
    border-radius: 4px;
    ${selectCss};
    &:hover {
      ${hoverCss};
    }
  `
}

export const panelItemStyle = (tabPosition: TabPosition) => {
  return css`
    display: flex;
    width: ${isHorizontalLayout(tabPosition) ? "100%" : "auto"};
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    flex: none;
    position: relative;
  `
}

export const titleStyle = (
  disabled: boolean,
  isSelectKey: boolean,
  colorScheme: string,
  tabsItemColorScheme?: string,
  tabsItemActiveColorScheme?: string,
) => {
  let itemCss

  if (tabsItemColorScheme) {
    itemCss = css`
      background: ${tabsItemColorScheme};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: ${tabsItemColorScheme ?? getColor(colorScheme ?? "blue", "02")};
      font-weight: 500;
      color: transparent;
    `
  } else if (disabled) {
    itemCss = css`
      color: ${getColor("grayBlue", "05")};
      cursor: not-allowed;
    `
  } else if (isSelectKey) {
    if (tabsItemActiveColorScheme) {
      itemCss = css`
        background: ${tabsItemActiveColorScheme};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: ${tabsItemActiveColorScheme ??
        getColor(colorScheme ?? "blue", "02")};
        font-weight: 500;
        color: transparent;
      `
    } else {
      itemCss = css`
        color: ${getColor(colorScheme ?? "blue", "02")};
        font-weight: 500;
      `
    }
  }
  return css`
    ${itemCss};
    display: flex;
    align-items: center;
    & svg {
      width: 16px;
    }
  `
}

export const lineStyle = (
  colorScheme: string,
  tabPosition: TabPosition,
  disabled?: boolean,
  tabsItemColorScheme?: string,
) => {
  let location
  switch (tabPosition) {
    default:
    case "top":
      location = css`
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
      `
      break
    case "bottom":
      location = css`
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
      `
      break

    case "left":
      location = css`
        top: 0;
        bottom: 0;
        right: -8px;
        width: 2px;
      `
      break
    case "right":
      location = css`
        top: 0;
        bottom: 0;
        left: -8px;
        width: 2px;
      `
      break
  }
  return css`
    position: absolute;
    ${location};
    background: ${disabled
      ? getColor("grayBlue", "05")
      : tabsItemColorScheme ?? getColor(colorScheme ?? "blue", "02")};
  `
}

export const tabsItemAfterStyle = (tabPosition: TabPosition) => {
  if (!isHorizontalLayout(tabPosition)) {
    return css``
  }
  if (tabPosition === "left") {
    return css`
      transform: translateX(100%);
      padding-left: 8px;
    `
  } else {
    return css`
      transform: translateX(-100%);
      padding-right: 8px;
    `
  }
}
