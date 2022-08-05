import { Children, forwardRef } from "react"
import { ButtonProps } from "./interface"
import { css } from "@emotion/react"
import { LoadingIcon } from "@illa-design/icon"
import {
  applyBg,
  applyCursor,
  applyElementColor,
  applyFontStyle,
  applyIconWithoutText,
  applyLeftIconStyle,
  applyPaddingStyle,
  applyRightIconStyle,
  applyShape,
  applyTagContainer,
  applyWithoutTextSize,
} from "./style"
import { ButtonGroupContext } from "."
import { ButtonBox } from "@illa-design/theme"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <ButtonGroupContext.Consumer>
        {(value) => {
          const { attached, first, last } = value ?? {}

          const {
            _css,
            colorScheme = value?.colorScheme ?? "blue",
            size = value?.size ?? "medium",
            variant = value?.variant ?? "fill",
            shape = value?.shape ?? "square",
            fullWidth,
            fullHeight,
            loading,
            loadingText,
            leftIcon,
            disabled,
            rightIcon,
            buttonRadius,
            textColor,
            onClick,
            ...otherProps
          } = props

          const hasLoadingText =
            loadingText != undefined && loadingText.length > 0
          const hasChild = Children.count(props.children) >= 1
          const hasPropContent = hasChild || (hasLoadingText && loading)
          const finalContainer = css`
            ${applyTagContainer(fullWidth, fullHeight)};
            ${applyCursor(loading ?? false, disabled ?? false)}
            ${hasPropContent
              ? applyPaddingStyle(size, variant)
              : applyWithoutTextSize(size, fullWidth, fullHeight)};
            ${applyShape(
              shape,
              attached ?? false,
              first ?? false,
              last ?? false,
            )};
            ${applyElementColor(
              variant,
              colorScheme,
              textColor,
              disabled || loading,
            )};
            ${applyBg(variant, colorScheme, disabled || loading)};
            ${buttonRadius ? `border-radius: ${buttonRadius};` : ""}
          `

          return (
            <ButtonBox
              ref={ref}
              css={finalContainer}
              {...otherProps}
              onClick={(e) => {
                if (disabled || loading) {
                  return
                }
                onClick?.(e)
              }}
            >
              {(loading || leftIcon) && (
                <span
                  css={
                    hasPropContent
                      ? applyLeftIconStyle(size)
                      : applyIconWithoutText(size)
                  }
                >
                  {loading ? <LoadingIcon spin={true} /> : leftIcon}
                </span>
              )}
              {hasPropContent && (
                <span css={applyFontStyle(size)}>
                  {loading && loadingText ? loadingText : props.children}
                </span>
              )}
              {rightIcon && (
                <span
                  css={
                    hasPropContent
                      ? applyRightIconStyle(size)
                      : applyIconWithoutText(size)
                  }
                >
                  {rightIcon}
                </span>
              )}
            </ButtonBox>
          )
        }}
      </ButtonGroupContext.Consumer>
    )
  },
)

Button.displayName = "Button"
