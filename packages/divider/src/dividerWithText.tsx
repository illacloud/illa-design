import { forwardRef } from "react"
import { DividerProps } from "./interface"
import {
  applyDividerContainerHorizontal,
  applyDividerContainerVertical,
  applyDividerWithTextContainerStyle,
  applyTextStyle,
} from "./style"
import { applyBoxStyle, deleteCssProps } from "@illa-design/theme"
import { css, SerializedStyles } from "@emotion/react"

export const DividerWithText = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    const {
      variant = "solid",
      text,
      fs = "14px",
      direction = "horizontal",
      textAlign = "center",
      colorScheme = "grayBlue",
      ...otherProps
    } = props

    let dividerStyle: SerializedStyles = css``
    switch (direction) {
      case "vertical":
        dividerStyle = applyDividerContainerVertical(colorScheme, variant)
        break
      case "horizontal":
        dividerStyle = applyDividerContainerHorizontal(colorScheme, variant)
        break
    }

    return (
      <div
        css={[
          applyDividerWithTextContainerStyle(direction),
          applyBoxStyle(props),
        ]}
        ref={ref}
        {...deleteCssProps(otherProps)}
      >
        <div css={dividerStyle} />
        <span css={applyTextStyle(colorScheme, fs)}>{text}</span>
        <div css={dividerStyle} />
      </div>
    )
  },
)

DividerWithText.displayName = "DividerWithText"
