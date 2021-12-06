/** @jsxImportSource @emotion/react */
import * as React from "react"
import { Children, forwardRef } from "react"
import { ButtonProps } from "./interface"
import { css } from "@emotion/react"
import { LoadingIcon } from "@illa-design/icon"
import { ButtonGroupContext } from "./button-group"
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {

  return <ButtonGroupContext.Consumer>
    {value => {

      const {
        attached = false,
        first = false,
        last = false,
      } = value ?? {}

      const {
        colorScheme = value?.colorScheme ?? "blue",
        size = value?.size ?? "small",
        variant = value?.variant ?? "fill",
        shape = value?.shape ?? "square",
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
          ${applyTagContainer(fullWidth)};
          ${applyCursor(loading, disabled)}
          ${applyPaddingStyle(size, variant)};
          ${applyShape(shape, attached, first, last)};
          ${applyElementColor(variant, colorScheme)};
          ${applyBg(variant, colorScheme)};
        `

        return <button ref={ref} css={finalContainer} {...otherProps} disabled={disabled || loading}>
          {
            (loading || leftIcon) &&
            <span css={applyLeftIconStyle(size)}>{loading ? <LoadingIcon spin={true} /> : leftIcon}</span>
          }
          <span css={applyFontStyle(size)}>{loading && loadingText ? loadingText : props.children}</span>
          {rightIcon && <span css={applyRightIconStyle(size)}>{rightIcon}</span>}
        </button>
      } else {
        const finalContainer = css`
          ${applyTagContainer(fullWidth)};
          ${applyCursor(loading, disabled)}
          ${applyWithoutTextSize(size)};
          ${applyShape(shape, attached, first, last)};
          ${applyElementColor(variant, colorScheme)};
          ${applyBg(variant, colorScheme)};
        `

        return <button ref={ref} css={finalContainer} {...otherProps} disabled={disabled || loading}>
          {(loading || leftIcon) &&
            <span css={applyIconWithoutText(size)}>{loading ? <LoadingIcon spin={true} /> : leftIcon}</span>}
          {rightIcon && <span css={applyIconWithoutText(size)}>{rightIcon}</span>}
        </button>
      }
    }}
  </ButtonGroupContext.Consumer>
})
