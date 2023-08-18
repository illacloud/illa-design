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
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <ButtonGroupContext.Consumer>
        {(value) => {
          const { attached, first, last } = value ?? {}
          const {
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
            onClick,
            ...otherProps
          } = props

          const hasLoadingText =
            loadingText != undefined && loadingText.length > 0
          const hasChild = Children.count(props.children) >= 1
          const hasPropContent = hasChild || (hasLoadingText && loading)
          const finalContainer = css`
            ${applyTagContainer(fullWidth, fullHeight)};
            ${applyCursor(loading ?? false)}
            ${hasPropContent
              ? applyPaddingStyle(size, variant)
              : applyWithoutTextSize(size, fullWidth, fullHeight)};
            ${applyShape(
              shape,
              attached ?? false,
              first ?? false,
              last ?? false,
            )};
            ${applyElementColor(variant, colorScheme)};
            ${applyBg(variant, colorScheme)};
          `

          return (
            <button
              ref={ref}
              css={[finalContainer, applyBoxStyle(otherProps)]}
              onClick={(e) => {
                if (disabled || loading) {
                  return
                }
                onClick?.(e)
              }}
              disabled={disabled || loading}
              {...deleteCssProps(otherProps)}
            >
              {(loading || leftIcon) && (
                <span
                  css={
                    hasPropContent
                      ? applyLeftIconStyle(size, hasChild)
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
                      ? applyRightIconStyle(size, hasChild)
                      : applyIconWithoutText(size)
                  }
                >
                  {rightIcon}
                </span>
              )}
            </button>
          )
        }}
      </ButtonGroupContext.Consumer>
    )
  },
)

Button.displayName = "Button"
