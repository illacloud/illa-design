/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { ButtonColorScheme, ButtonProps, ButtonShape, ButtonSize, ButtonVariant } from "./interface"
import { css, SerializedStyles } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/theme"
import { LoadingIcon } from "@illa-design/icon"

const tagContainerCss = css`
  vertical-align: middle;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`

function applyBg(variant: ButtonVariant, colorScheme: ButtonColorScheme) {
  switch (variant) {
    case "text":
      return css``
    case "dashed":
      return css`
        border: dashed 1px ${globalColor(`--${illaPrefix}-${colorScheme}-01`)};

        &:hover {

        }
      `
    case "fill":
      return css`
        background-color: ${globalColor(`--${illaPrefix}-${colorScheme}-01`)};
      `
    case "outline":
      return css`
        border: solid 1px ${globalColor(`--${illaPrefix}-${colorScheme}-01`)};
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
        border-radius: 50%;
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
        color: ${globalColor(`--${illaPrefix}-white-01`)};
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
        color: ${globalColor(`--${illaPrefix}-white-01`)};
      `
  }
}

function applyLeftIconStyle(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        width: 12px;
        height: 12px;
        margin-right: 6px;
      `
    case "medium":
    case "large":
      return css`
        width: 12px;
        height: 12px;
        margin-right: 8px;
      `
  }
}

function applyRightIconStyle(size: ButtonSize): SerializedStyles {
  switch (size) {
    case "small":
      return css`
        width: 12px;
        height: 12px;
        margin-right: 6px;
      `
    case "medium":
    case "large":
      return css`
        width: 12px;
        height: 12px;
        margin-right: 8px;
      `
  }
}

export const Button = forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {

  const {
    colorScheme = "blue",
    size = "small",
    variant = "fill",
    shape = "square",
    isFullWidth = false,
    isLoading = false,
    loadingText = undefined,
    isDisabled = false,
    leftIcon = undefined,
    rightIcon = undefined,
    ...otherProps
  } = props

  const finalContainer = css`
    ${tagContainerCss};
    ${applyPaddingStyle(size)};
    ${applyShape(shape)}
    ${applyBg(variant, colorScheme)}
  `

  return <div ref={ref} css={finalContainer} {...otherProps}>
    <span css={applyLeftIconStyle(size)}>
      {isLoading ? <LoadingIcon spin={true} /> : leftIcon}
    </span>
    <span css={applyFontStyle(size)}>
      {isLoading ? loadingText : props.children}
    </span>
    <span css={applyRightIconStyle(size)}>
      {rightIcon}
    </span>
  </div>

})
