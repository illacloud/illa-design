import { Children, forwardRef, useMemo } from "react"
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
import { getSizeCssByAutoFullProps } from "@illa-design/system"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { autoFullHorizontal, autoFullVertically } = props
    const sizeCss = useMemo(
      () => getSizeCssByAutoFullProps(autoFullHorizontal, autoFullVertically),
      [autoFullHorizontal, autoFullVertically],
    )

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
            loading,
            loadingText,
            leftIcon,
            disabled,
            rightIcon,
            buttonRadius,
            borderColor,
            backgroundColor,
            textColor,
            autoFullHorizontal,
            autoFullVertically,
            ...otherProps
          } = props

          const hasLoadingText =
            loadingText != undefined && loadingText.length > 0
          const hasChild = Children.count(props.children) >= 1
          const hasPropContent = hasChild || (hasLoadingText && loading)
          const finalContainer = css`
            ${applyTagContainer(fullWidth)};
            ${applyCursor(loading ?? false, disabled ?? false)}
            ${hasPropContent
              ? applyPaddingStyle(size, variant)
              : applyWithoutTextSize(size, fullWidth)};
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
            ${applyBg(
              variant,
              colorScheme,
              backgroundColor,
              borderColor,
              disabled || loading,
            )};
            ${buttonRadius ? `border-radius: ${buttonRadius};` : ""}
          `

          return (
            <button
              ref={ref}
              css={css(finalContainer, sizeCss, _css)}
              {...otherProps}
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
            </button>
          )
        }}
      </ButtonGroupContext.Consumer>
    )
  },
)

Button.displayName = "Button"
