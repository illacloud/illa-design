import { forwardRef, useMemo } from "react"
import { SerializedStyles } from "@emotion/react"
import { DividerProps } from "./interface"
import {
  applyDividerContainerHorizontal,
  applyDividerContainerVertical,
  applyDividerWithTextContainerStyle,
} from "./style"
import { DividerWithText } from "./dividerWithText"

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const {
      direction = "horizontal",
      variant = "solid",
      text,
      colorScheme,
      ...otherProps
    } = props

    let dividerCss: SerializedStyles
    switch (direction) {
      case "vertical":
        dividerCss = applyDividerContainerVertical(variant)
        break
      case "horizontal":
        dividerCss = applyDividerContainerHorizontal(variant)
        break
    }

    return (
      <div css={applyDividerWithTextContainerStyle(colorScheme)}>
        {text && text?.length > 0 ? (
          <DividerWithText {...props} />
        ) : (
          <div css={dividerCss} ref={ref} {...otherProps} />
        )}
      </div>
    )
  },
)

Divider.displayName = "Divider"
