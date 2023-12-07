import { css, SerializedStyles } from "@emotion/react"
import {
  ButtonColorScheme,
  ButtonShape,
  ButtonSize,
  ButtonVariant,
} from "./interface"
import {
  getColor,
  getSpecialThemeColor,
  hasGlobalColor,
  illaPrefix,
  zIndex,
} from "@illa-design/theme"

// button
export function applyTagContainer(
  fullWidth?: boolean,
  fullHeight?: boolean,
): SerializedStyles {
  return css`
    ${fullWidth
      ? css`
          width: 100%;
        `
      : null};
    ${fullHeight
      ? css`
          height: 100%;
        `
      : null};
    transition: color 200ms ease-in-out, background-color 200ms ease-in-out;
    vertical-align: middle;
    white-space: nowrap;
    outline: none;
    border: 0;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `
}

export enum State {
  DEFAULT,
  HOVER,
  ACTIVE,
  DISABLE,
}

export function getDifferentStatusColor(
  colorScheme: ButtonColorScheme,
  variant: ButtonVariant,
  state: State,
): string[] {
  switch (state) {
    case State.DEFAULT:
      switch (variant) {
        case "fill":
          if (colorScheme === "white") {
            return [getColor("white", "01"), getColor("gray", "02")]
          } else if (colorScheme != "gray" && colorScheme != "grayBlue") {
            return [getSpecialThemeColor(colorScheme), getColor("white", "01")]
          } else {
            return [getColor(colorScheme, "09"), getColor(colorScheme, "02")]
          }
        case "light": {
          if (colorScheme === "white") {
            return [getColor("white", "01"), getColor("gray", "02")]
          } else {
            return [
              getColor(colorScheme, "08"),
              getSpecialThemeColor(colorScheme),
            ]
          }
        }
        case "dashed":
        case "outline":
          if (colorScheme == "white") {
            return [getColor("white", "01"), getColor("white", "01")]
          } else if (colorScheme != "gray" && colorScheme != "grayBlue") {
            return [
              getSpecialThemeColor(colorScheme),
              getSpecialThemeColor(colorScheme),
            ]
          } else {
            return [getColor(colorScheme, "08"), getColor(colorScheme, "02")]
          }
        case "text":
          if (colorScheme == "white") {
            return [getColor("transparent", "01"), getColor("gray", "02")]
          } else {
            return [
              getColor("transparent", "01"),
              getSpecialThemeColor(colorScheme),
            ]
          }
      }
    case State.HOVER:
      switch (variant) {
        case "fill":
          if (colorScheme == "white") {
            return [getColor("white", "02"), getColor("gray", "02")]
          } else if (colorScheme != "gray" && colorScheme != "grayBlue") {
            return [getColor(colorScheme, "04"), getColor("white", "01")]
          } else {
            return [getColor(colorScheme, "08"), getColor(colorScheme, "02")]
          }
        case "light": {
          if (colorScheme == "white") {
            return [getColor("white", "02"), getColor("gray", "02")]
          } else {
            return [
              getColor(colorScheme, "07"),
              getSpecialThemeColor(colorScheme),
            ]
          }
        }
        case "dashed":
        case "outline":
          if (colorScheme == "white") {
            return [getColor("white", "02"), getColor("gray", "02")]
          } else if (colorScheme != "gray" && colorScheme != "grayBlue") {
            return [getColor(colorScheme, "04"), getColor(colorScheme, "04")]
          } else {
            return [getColor(colorScheme, "07"), getColor(colorScheme, "02")]
          }
        case "text":
          if (colorScheme == "white") {
            return [getColor("white", "02"), getColor("gray", "02")]
          } else {
            return [getColor("grayBlue", "09"), getColor(colorScheme, "04")]
          }
      }
    case State.ACTIVE:
      switch (variant) {
        case "fill":
          if (colorScheme == "white") {
            return [getColor("white", "03"), getColor("gray", "02")]
          } else if (colorScheme != "gray" && colorScheme != "grayBlue") {
            return [getColor(colorScheme, "02"), getColor("white", "01")]
          } else {
            return [getColor(colorScheme, "06"), getColor(colorScheme, "02")]
          }
        case "light": {
          if (colorScheme == "white") {
            return [getColor("white", "02"), getColor("gray", "02")]
          } else {
            return [
              getColor(colorScheme, "06"),
              getSpecialThemeColor(colorScheme),
            ]
          }
        }
        case "dashed":
        case "outline":
          if (colorScheme == "white") {
            return [getColor("white", "03"), getColor("gray", "02")]
          } else if (colorScheme != "gray" && colorScheme != "grayBlue") {
            return [getColor(colorScheme, "02"), getColor(colorScheme, "02")]
          } else {
            return [getColor(colorScheme, "05"), getColor(colorScheme, "02")]
          }
        case "text":
          if (colorScheme == "white") {
            return [getColor("white", "03"), getColor("gray", "02")]
          } else {
            return [
              getColor("grayBlue", "08"),
              getSpecialThemeColor(colorScheme),
            ]
          }
      }
    case State.DISABLE:
      switch (variant) {
        case "fill":
          if (colorScheme == "white") {
            return [getColor("white", "04"), getColor("gray", "02")]
          } else if (colorScheme != "gray" && colorScheme != "grayBlue") {
            return [
              getColor(
                colorScheme,
                hasGlobalColor(`--${illaPrefix}-${colorScheme}-07`)
                  ? "07"
                  : "05",
              ),
              getColor("white", "01"),
            ]
          } else {
            return [getColor(colorScheme, "09"), getColor(colorScheme, "05")]
          }
        case "light": {
          if (colorScheme == "white") {
            return [getColor("white", "04"), getColor("gray", "02")]
          } else {
            return [getColor(colorScheme, "08"), getColor(colorScheme, "05")]
          }
        }
        case "dashed":
        case "outline":
          if (colorScheme == "white") {
            return [getColor("white", "04"), getColor("gray", "02")]
          } else if (colorScheme != "gray" && colorScheme != "grayBlue") {
            return [getColor(colorScheme, "06"), getColor(colorScheme, "06")]
          } else {
            return [getColor(colorScheme, "08"), getColor(colorScheme, "05")]
          }
        case "text":
          if (colorScheme == "white") {
            return [getColor("white", "04"), getColor("gray", "02")]
          } else {
            return [getColor("transparent", "01"), getColor(colorScheme, "07")]
          }
      }
  }
  return []
}

export function applyBg(
  variant: ButtonVariant,
  colorScheme: ButtonColorScheme,
): SerializedStyles {
  switch (variant) {
    case "text":
      return css`
        &:hover {
          background-color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.HOVER,
          )[0]};
        }

        &:active {
          transition: none;
          background-color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.ACTIVE,
          )[0]};
        }
      `
    case "dashed":
      return css`
        border: dashed 1px
          ${getDifferentStatusColor(colorScheme, variant, State.DEFAULT)[0]};

        &:hover {
          border: dashed 1px
            ${getDifferentStatusColor(colorScheme, variant, State.HOVER)[0]};
        }

        &:active {
          transition: none;
          border: dashed 1px
            ${getDifferentStatusColor(colorScheme, variant, State.ACTIVE)[0]};
        }

        &:disabled {
          border: dashed 1px
            ${getDifferentStatusColor(colorScheme, variant, State.DISABLE)[0]};
        }
      `
    case "fill":
      return css`
        background-color: ${getDifferentStatusColor(
          colorScheme,
          variant,
          State.DEFAULT,
        )[0]};

        &:hover {
          background-color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.HOVER,
          )[0]};
        }

        &:active {
          transition: none;
          background-color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.ACTIVE,
          )[0]};
        }

        &:disabled {
          background-color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.DISABLE,
          )[0]};
        }
      `
    case "outline":
      return css`
        border: solid 1px
          ${getDifferentStatusColor(colorScheme, variant, State.DEFAULT)[0]};

        &:hover {
          border: solid 1px
            ${getDifferentStatusColor(colorScheme, variant, State.HOVER)[0]};
        }

        &:active {
          transition: none;
          border: solid 1px
            ${getDifferentStatusColor(colorScheme, variant, State.ACTIVE)[0]};
        }

        &:disabled {
          border: solid 1px
            ${getDifferentStatusColor(colorScheme, variant, State.DISABLE)[0]};
        }
      `
    case "light":
      return css`
        background-color: ${getDifferentStatusColor(
          colorScheme,
          variant,
          State.DEFAULT,
        )[0]};

        &:hover {
          background-color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.HOVER,
          )[0]};
        }

        &:active {
          transition: none;
          background-color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.ACTIVE,
          )[0]};
        }

        &:disabled {
          background-color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.DISABLE,
          )[0]};
        }
      `
  }
}

export function applyCursor(loading: boolean): SerializedStyles {
  if (loading) {
    return css`
      cursor: default;

      &:disabled {
        cursor: not-allowed;
      }
    `
  } else {
    return css`
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    `
  }
}

export function applyElementColor(
  variant: ButtonVariant,
  colorScheme: ButtonColorScheme,
): SerializedStyles {
  switch (variant) {
    case "text":
      return css`
        color: ${getDifferentStatusColor(
          colorScheme,
          variant,
          State.DEFAULT,
        )[1]};

        &:disabled {
          color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.DISABLE,
          )[1]};
        }
      `
    case "light":
      return css`
        color: ${getDifferentStatusColor(
          colorScheme,
          variant,
          State.DEFAULT,
        )[1]};

        &:hover {
          color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.HOVER,
          )[1]};
        }

        &:active {
          transition: none;
          color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.ACTIVE,
          )[1]};
        }

        &:disabled {
          color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.DISABLE,
          )[1]};
        }
      `
    case "outline":
    case "dashed":
      return css`
        color: ${getDifferentStatusColor(
          colorScheme,
          variant,
          State.DEFAULT,
        )[1]};

        &:hover {
          color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.HOVER,
          )[1]};
        }

        &:active {
          transition: none;
          color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.ACTIVE,
          )[1]};
        }

        &:disabled {
          color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.DISABLE,
          )[1]};
        }
      `
    case "fill":
      return css`
        color: ${getDifferentStatusColor(
          colorScheme,
          variant,
          State.DEFAULT,
        )[1]};

        &:hover {
          color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.HOVER,
          )[1]};
        }

        &:active {
          transition: none;
          color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.ACTIVE,
          )[1]};
        }

        &:disabled {
          color: ${getDifferentStatusColor(
            colorScheme,
            variant,
            State.DISABLE,
          )[1]};
        }
      `
  }
  return css``
}

export function applyShape(
  shape: ButtonShape,
  attached: boolean,
  first: boolean,
  last: boolean,
): SerializedStyles {
  switch (shape) {
    case "square":
      if (attached) {
        if (first) {
          return css`
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
          `
        } else if (last) {
          return css`
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          `
        } else {
          return css`
            border-radius: 0;
          `
        }
      }
      return css`
        border-radius: 8px;
      `
    case "round":
      if (attached) {
        if (first) {
          return css`
            border-top-left-radius: 999px;
            border-bottom-left-radius: 999px;
          `
        } else if (last) {
          return css`
            border-top-right-radius: 999px;
            border-bottom-right-radius: 999px;
          `
        } else {
          return css`
            border-radius: 0;
          `
        }
      } else {
        return css`
          border-radius: 999px;
        `
      }
  }
}

export function applyPaddingStyle(
  size: ButtonSize,
  variant: ButtonVariant,
): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        padding: ${variant == "outline" || variant == "dashed"
          ? "1px 7px"
          : "2px 8px"};
        min-height: 24px;
      `
    case "medium":
      return css`
        padding: ${variant == "outline" || variant == "dashed"
          ? "4px 15px"
          : "5px 16px"};
        min-height: 32px;
      `
    case "large":
      return css`
        padding: ${variant == "outline" || variant == "dashed"
          ? "8px 15px"
          : "9px 16px"};
        min-height: 40px;
      `
  }
}

export function applyWithoutTextSize(
  size: ButtonSize,
  fullWidth?: boolean,
  fullHeight?: boolean,
): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        justify-content: center;
        width: ${fullWidth ? "100%" : "24px"};
        height: ${fullHeight ? "100%" : "24px"};
        font-size: 16px;
      `
    case "medium":
      return css`
        justify-content: center;
        width: ${fullWidth ? "100%" : "32px"};
        height: ${fullHeight ? "100%" : "32px"};
        font-size: 16px;
      `
    case "large":
      return css`
        justify-content: center;
        width: ${fullWidth ? "100%" : "40px"};
        height: ${fullHeight ? "100%" : "40px"};
        font-size: 16px;
      `
  }
}

export function applyFontStyle(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 20px;
        letter-spacing: normal;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      `
    case "medium":
    case "large":
      return css`
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 22px;
        letter-spacing: normal;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      `
  }
}

export function applyLeftIconStyle(
  size: ButtonSize,
  hasChildren?: boolean,
): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-right: ${hasChildren ? "4px" : "0"};
      `
    case "medium":
    case "large":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-right: ${hasChildren ? "8px" : "0"};
      `
  }
}

export function applyIconWithoutText(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
    case "medium":
    case "large":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      `
  }
}

export function applyRightIconStyle(
  size: ButtonSize,
  hasChildren?: boolean,
): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-left: ${hasChildren ? "6px" : "0"};
      `
    case "medium":
    case "large":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 16px;
        margin-left: ${hasChildren ? "8px" : "0"};
      `
  }
}

// button group
export const avatarGroupContainer = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

export function applySpacing(
  spacing: string,
  index: number,
  attached: boolean,
): SerializedStyles {
  if (attached) {
    return css`
      display: inline-flex;
      margin-left: ${index != 0 ? "-1px" : "0px"};
    `
  } else {
    return css`
      display: inline-flex;
      margin-left: ${index == 0 ? "0px" : spacing};
    `
  }
}
