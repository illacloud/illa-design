import { css, SerializedStyles } from "@emotion/react"
import {
  ButtonColorScheme,
  ButtonShape,
  ButtonSize,
  ButtonVariant,
} from "./interface"
import { globalColor, illaPrefix } from "@illa-design/theme"

// button
export function applyTagContainer(fullWidth?: boolean) {
  return css`
    ${fullWidth
      ? css`
          width: 100%;
          justify-content: center;
        `
      : null};
    transition: all 200ms ease-in-out;
    vertical-align: middle;
    white-space: nowrap;
    outline: none;
    border: 0;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
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
  backgroundColor?: string,
  borderColor?: string,
): string[] {
  switch (state) {
    case State.DEFAULT:
      switch (variant) {
        case "fill":
          if (colorScheme != "gray") {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-01`),
              globalColor(`--${illaPrefix}-white-01`),
            ]
          } else {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-09`),
              globalColor(`--${illaPrefix}-${colorScheme}-02`),
            ]
          }
        case "dashed":
        case "outline":
          if (colorScheme != "gray") {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-01`),
              globalColor(`--${illaPrefix}-${colorScheme}-01`),
            ]
          } else {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-08`),
              globalColor(`--${illaPrefix}-${colorScheme}-02`),
            ]
          }
        case "text":
          return [
            globalColor("transparent"),
            globalColor(`--${illaPrefix}-${colorScheme}-01`),
          ]
      }
    case State.HOVER:
      switch (variant) {
        case "fill":
          if (colorScheme != "gray") {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-02`),
              globalColor(`--${illaPrefix}-white-01`),
            ]
          } else {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-08`),
              globalColor(`--${illaPrefix}-${colorScheme}-02`),
            ]
          }
        case "dashed":
        case "outline":
          if (colorScheme != "gray") {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-02`),
              globalColor(`--${illaPrefix}-${colorScheme}-02`),
            ]
          } else {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-07`),
              globalColor(`--${illaPrefix}-${colorScheme}-02`),
            ]
          }
        case "text":
          return [
            globalColor(`--${illaPrefix}-gray-09`),
            globalColor(`--${illaPrefix}-${colorScheme}-02`),
          ]
      }
    case State.ACTIVE:
      switch (variant) {
        case "fill":
          if (colorScheme != "gray") {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-n-01`),
              globalColor(`--${illaPrefix}-white-01`),
            ]
          } else {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-06`),
              globalColor(`--${illaPrefix}-${colorScheme}-02`),
            ]
          }
        case "dashed":
        case "outline":
          if (colorScheme != "gray") {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-n-01`),
              globalColor(`--${illaPrefix}-${colorScheme}-n-01`),
            ]
          } else {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-05`),
              globalColor(`--${illaPrefix}-${colorScheme}-02`),
            ]
          }
        case "text":
          return [
            globalColor(`--${illaPrefix}-gray-08`),
            globalColor(`--${illaPrefix}-${colorScheme}-n-01`),
          ]
      }
    case State.DISABLE:
      switch (variant) {
        case "fill":
          if (colorScheme != "gray") {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-05`),
              globalColor(`--${illaPrefix}-white-01`),
            ]
          } else {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-09`),
              globalColor(`--${illaPrefix}-${colorScheme}-05`),
            ]
          }
        case "dashed":
        case "outline":
          if (colorScheme != "gray") {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-05`),
              globalColor(`--${illaPrefix}-${colorScheme}-05`),
            ]
          } else {
            return [
              globalColor(`--${illaPrefix}-${colorScheme}-08`),
              globalColor(`--${illaPrefix}-${colorScheme}-05`),
            ]
          }
        case "text":
          return [
            globalColor("transparent"),
            globalColor(`--${illaPrefix}-${colorScheme}-05`),
          ]
      }
  }
}

export function applyBg(
  variant: ButtonVariant,
  colorScheme: ButtonColorScheme,
  backgroundColor?: string,
  borderColor?: string,
): SerializedStyles {
  const borderCss = borderColor
    ? css`
        border: solid 1px ${borderColor};
        &:hover {
          border: solid 1px ${borderColor};
        }
        &:active {
          border: solid 1px ${borderColor};
        }
      `
    : css``
  const backgroundCss = backgroundColor
    ? css`
        background-color: ${backgroundColor};
        &:hover {
          background-color: ${backgroundColor};
        }
        &:active {
          background-color: ${backgroundColor};
        }
      `
    : css``
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
        ${borderCss}
        ${backgroundCss}
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
        ${borderCss}
      `
  }
}

export function applyCursor(
  loading: boolean,
  disabled: boolean,
): SerializedStyles {
  if (loading) {
    return css`
      cursor: default;
    `
  } else if (disabled) {
    return css`
      cursor: not-allowed;
    `
  } else {
    return css`
      cursor: pointer;
    `
  }
}

export function applyElementColor(
  variant: ButtonVariant,
  colorScheme: ButtonColorScheme,
  textColor?: string,
): SerializedStyles {
  if (textColor) {
    return css`
      color: ${textColor};
    `
  }
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
        border-radius: 4px;
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
          ? "1px 11px"
          : "2px 12px"};
      `
    case "medium":
      return css`
        padding: ${variant == "outline" || variant == "dashed"
          ? "4px 15px"
          : "5px 16px"};
      `
    case "large":
      return css`
        padding: ${variant == "outline" || variant == "dashed"
          ? "8px 15px"
          : "9px 16px"};
      `
  }
}

export function applyWithoutTextSize(
  size: ButtonSize,
  fullWidth?: boolean,
): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        justify-content: center;
        width: ${fullWidth ? "100%" : "24px"};
        height: 24px;
        font-size: 12px;
      `
    case "medium":
      return css`
        justify-content: center;
        width: ${fullWidth ? "100%" : "32px"};
        height: 32px;
        font-size: 12px;
      `
    case "large":
      return css`
        justify-content: center;
        width: ${fullWidth ? "100%" : "40px"};
        height: 40px;
        font-size: 12px;
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
      `
  }
}

export function applyLeftIconStyle(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: 12px;
        height: 12px;
        font-size: 12px;
        margin-right: 6px;
      `
    case "medium":
    case "large":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: 12px;
        height: 12px;
        font-size: 12px;
        margin-right: 8px;
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
        width: 12px;
        height: 12px;
        justify-content: center;
      `
  }
}

export function applyRightIconStyle(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: 12px;
        height: 12px;
        font-size: 12px;
        margin-left: 6px;
      `
    case "medium":
    case "large":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: 12px;
        height: 12px;
        font-size: 12px;
        margin-left: 8px;
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

      &:hover {
        z-index: 2;
      }
    `
  } else {
    return css`
      display: inline-flex;
      margin-left: ${index == 0 ? "0px" : spacing};

      &:hover {
        z-index: 2;
      }
    `
  }
}
