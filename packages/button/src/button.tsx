/** @jsxImportSource @emotion/react */
import { Children, forwardRef } from "react"
import { ButtonColorScheme, ButtonProps, ButtonShape, ButtonSize, ButtonVariant } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { LoadingIcon } from "@illa-design/icon"

const tagContainerCss = css`
  vertical-align: middle;
  outline: none;
  margin: 0;
  border: 0;
  background-color: transparent;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

enum State {
  DEFAULT,
  HOVER,
  FOCUSED,
  DISABLE
}

function getDifferentStatusColor(colorScheme: ButtonColorScheme, variant: ButtonVariant, state: State): string[] {
  switch (state) {
    case State.DEFAULT:
      switch (variant) {
        case "fill":
          if (colorScheme != "gray") {
            return [globalColor(`--${illaPrefix}-${colorScheme}-01`), globalColor(`--${illaPrefix}-white-01`)]
          } else {
            return [globalColor(`--${illaPrefix}-${colorScheme}-09`), globalColor(`--${illaPrefix}-${colorScheme}-02`)]
          }
        case "dashed":
        case "outline":
          if (colorScheme != "gray") {
            return [globalColor(`--${illaPrefix}-${colorScheme}-01`), globalColor(`--${illaPrefix}-${colorScheme}-01`)]
          } else {
            return [globalColor(`--${illaPrefix}-${colorScheme}-08`), globalColor(`--${illaPrefix}-${colorScheme}-02`)]
          }
        case "text":
          return [globalColor("transparent"), globalColor(`--${illaPrefix}-${colorScheme}-01`)]
      }
    case State.HOVER:
      switch (variant) {
        case "fill":
          if (colorScheme != "gray") {
            return [globalColor(`--${illaPrefix}-${colorScheme}-02`), globalColor(`--${illaPrefix}-white-01`)]
          } else {
            return [globalColor(`--${illaPrefix}-${colorScheme}-08`), globalColor(`--${illaPrefix}-${colorScheme}-02`)]
          }
        case "dashed":
        case "outline":
          if (colorScheme != "gray") {
            return [globalColor(`--${illaPrefix}-${colorScheme}-02`), globalColor(`--${illaPrefix}-${colorScheme}-02`)]
          } else {
            return [globalColor(`--${illaPrefix}-${colorScheme}-07`), globalColor(`--${illaPrefix}-${colorScheme}-02`)]
          }
        case "text":
          return [globalColor("transparent"), globalColor(`--${illaPrefix}-${colorScheme}-02`)]
      }
    case State.FOCUSED:
      switch (variant) {
        case "fill":
          if (colorScheme != "gray") {
            return [globalColor(`--${illaPrefix}-${colorScheme}-n-01`), globalColor(`--${illaPrefix}-white-01`)]
          } else {
            return [globalColor(`--${illaPrefix}-${colorScheme}-06`), globalColor(`--${illaPrefix}-${colorScheme}-02`)]
          }
        case "dashed":
        case "outline":
          if (colorScheme != "gray") {
            return [globalColor(`--${illaPrefix}-${colorScheme}-n-01`), globalColor(`--${illaPrefix}-${colorScheme}-n-01`)]
          } else {
            return [globalColor(`--${illaPrefix}-${colorScheme}-05`), globalColor(`--${illaPrefix}-${colorScheme}-02`)]
          }
        case "text":
          return [globalColor("transparent"), globalColor(`--${illaPrefix}-${colorScheme}-n-01`)]
      }
    case State.DISABLE:
      switch (variant) {
        case "fill":
          if (colorScheme != "gray") {
            return [globalColor(`--${illaPrefix}-${colorScheme}-05`), globalColor(`--${illaPrefix}-white-01`)]
          } else {
            return [globalColor(`--${illaPrefix}-${colorScheme}-09`), globalColor(`--${illaPrefix}-${colorScheme}-05`)]
          }
        case "dashed":
        case "outline":
          if (colorScheme != "gray") {
            return [globalColor(`--${illaPrefix}-${colorScheme}-05`), globalColor(`--${illaPrefix}-${colorScheme}-05`)]
          } else {
            return [globalColor(`--${illaPrefix}-${colorScheme}-08`), globalColor(`--${illaPrefix}-${colorScheme}-05`)]
          }
        case "text":
          return [globalColor("transparent"), globalColor(`--${illaPrefix}-${colorScheme}-05`)]
      }
  }
}

function applyBg(variant: ButtonVariant, colorScheme: ButtonColorScheme): SerializedStyles {
  switch (variant) {
    case "text":
      return css``
    case "dashed":
      return css`
        border: dashed 1px ${getDifferentStatusColor(colorScheme, variant, State.DEFAULT)[0]};

        &:hover {
          border: dashed 1px ${getDifferentStatusColor(colorScheme, variant, State.HOVER)[0]};
        }

        &:active {
          border: dashed 1px ${getDifferentStatusColor(colorScheme, variant, State.FOCUSED)[0]};
        }

        &:disabled {
          border: dashed 1px ${getDifferentStatusColor(colorScheme, variant, State.DISABLE)[0]};
        }
      `
    case "fill":
      return css`
        background-color: ${getDifferentStatusColor(colorScheme, variant, State.DEFAULT)[0]};

        &:hover {
          background-color: ${getDifferentStatusColor(colorScheme, variant, State.HOVER)[0]};
        }

        &:active {
          background-color: ${getDifferentStatusColor(colorScheme, variant, State.FOCUSED)[0]};
        }

        &:disabled {
          background-color: ${getDifferentStatusColor(colorScheme, variant, State.DISABLE)[0]};
        }
      `
    case "outline":
      return css`
        border: solid 1px ${getDifferentStatusColor(colorScheme, variant, State.DEFAULT)[0]};

        &:hover {
          border: solid 1px ${getDifferentStatusColor(colorScheme, variant, State.HOVER)[0]};
        }

        &:active {
          border: solid 1px ${getDifferentStatusColor(colorScheme, variant, State.FOCUSED)[0]};
        }

        &:disabled {
          border: solid 1px ${getDifferentStatusColor(colorScheme, variant, State.DISABLE)[0]};
        }
      `
  }
}

function applyCursor(loading: boolean, disabled: boolean): SerializedStyles {
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

function applyElementColor(variant: ButtonVariant, colorScheme: ButtonColorScheme): SerializedStyles {
  switch (variant) {
    case "text":
    case "outline":
    case "dashed":
      return css`
        color: ${getDifferentStatusColor(colorScheme, variant, State.DEFAULT)[1]};

        &:hover {
          color: ${getDifferentStatusColor(colorScheme, variant, State.HOVER)[1]};
        }

        &:active {
          color: ${getDifferentStatusColor(colorScheme, variant, State.FOCUSED)[1]};
        }

        &:disabled {
          color: ${getDifferentStatusColor(colorScheme, variant, State.DISABLE)[1]};
        }
      `
    case "fill":
      return css`
        color: ${getDifferentStatusColor(colorScheme, variant, State.DEFAULT)[1]};

        &:hover {
          color: ${getDifferentStatusColor(colorScheme, variant, State.HOVER)[1]};
        }

        &:active {
          color: ${getDifferentStatusColor(colorScheme, variant, State.FOCUSED)[1]};
        }

        &:disabled {
          color: ${getDifferentStatusColor(colorScheme, variant, State.DISABLE)[1]};
        }
      `
  }
}

function applyShape(shape: ButtonShape): SerializedStyles {
  switch (shape) {
    case "square":
      return css`
        border-radius: 4px;
      `
    case "round":
      return css`
        border-radius: 999px;
      `
  }
}

function applyPaddingStyle(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        padding: 2px 12px;
      `
    case "medium":
      return css`
        padding: 5px 16px;
      `
    case "large":
      return css`
        padding: 9px 16px;
      `
  }
}

function applyWithoutTextSize(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        justify-content: center;
        width: 24px;
        height: 24px;
      `
    case "medium":
      return css`
        justify-content: center;
        width: 32px;
        height: 32px;
      `
    case "large":
      return css`
        justify-content: center;
        width: 40px;
        height: 40px;
      `
  }
}

function applyFontStyle(size: ButtonSize): SerializedStyles {
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

function applyLeftIconStyle(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: 12px;
        height: 12px;
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
        margin-right: 8px;
      `
  }
}

function applyIconWithoutText(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: 12px;
        height: 12px;
        justify-content: center;
      `
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

function applyRightIconStyle(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        width: 12px;
        height: 12px;
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
        margin-left: 8px;
      `
  }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {

  const {
    colorScheme = "blue",
    size = "small",
    variant = "fill",
    shape = "square",
    fullWidth = false,
    loading = false,
    loadingText = undefined,
    leftIcon = undefined,
    disabled = false,
    rightIcon = undefined,
    ...otherProps
  } = props

  const hasLoadingText = loadingText != undefined && loadingText.length > 0
  const hasChild = Children.count(props.children) >= 1

  if (hasChild || (hasLoadingText && loading)) {

    const finalContainer = css`
      ${tagContainerCss};
      ${applyCursor(loading, disabled)}
      ${applyPaddingStyle(size)};
      ${applyShape(shape)};
      ${applyElementColor(variant, colorScheme)};
      ${applyBg(variant, colorScheme)};
    `

    return <button ref={ref} css={finalContainer} {...otherProps} disabled={disabled || loading}>
      {(loading || leftIcon) && <span css={applyLeftIconStyle(size)}>
      {loading ? <LoadingIcon spin={true} /> : leftIcon}
    </span>}
      <span css={applyFontStyle(size)}>
      {loading && loadingText ? loadingText : props.children}
    </span>
      {rightIcon && <span css={applyRightIconStyle(size)}>
      {rightIcon}
    </span>}
    </button>
  } else {

    const finalContainer = css`
      ${tagContainerCss};
      ${applyCursor(loading, disabled)}
      ${applyWithoutTextSize(size)};
      ${applyShape(shape)};
      ${applyElementColor(variant, colorScheme)};
      ${applyBg(variant, colorScheme)};
    `

    return <button ref={ref} css={finalContainer} {...otherProps} disabled={disabled || loading}>
      {
        (loading || leftIcon) &&
        <span css={applyIconWithoutText(size)}>
          {
            loading ? <LoadingIcon spin={true} /> : leftIcon
          }
        </span>
      }
      {
        rightIcon &&
        <span css={applyIconWithoutText(size)}>
          {rightIcon}
        </span>
      }
    </button>
  }

})
