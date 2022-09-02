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

    let firstDividerStyle: SerializedStyles = css``
    let lastDividerStyle: SerializedStyles = css``

    switch (direction) {
      case "vertical":
        switch (textAlign) {
          case "start":
            firstDividerStyle = applyDividerContainerVertical(
              colorScheme,
              variant,
              "20%",
            )
            lastDividerStyle = applyDividerContainerVertical(
              colorScheme,
              variant,
              undefined,
              1,
            )
            break
          case "center":
            firstDividerStyle = applyDividerContainerVertical(
              colorScheme,
              variant,
            )
            lastDividerStyle = applyDividerContainerVertical(
              colorScheme,
              variant,
            )
            break
          case "end":
            firstDividerStyle = applyDividerContainerVertical(
              colorScheme,
              variant,
              undefined,
              1,
            )
            lastDividerStyle = applyDividerContainerVertical(
              colorScheme,
              variant,
              "20%",
            )
            break
        }
        break
      case "horizontal":
        switch (textAlign) {
          case "start":
            firstDividerStyle = applyDividerContainerHorizontal(
              colorScheme,
              variant,
              "20%",
            )
            lastDividerStyle = applyDividerContainerHorizontal(
              colorScheme,
              variant,
              undefined,
              1,
            )
            break
          case "center":
            firstDividerStyle = applyDividerContainerHorizontal(
              colorScheme,
              variant,
            )
            lastDividerStyle = applyDividerContainerHorizontal(
              colorScheme,
              variant,
            )
            break
          case "end":
            firstDividerStyle = applyDividerContainerHorizontal(
              colorScheme,
              variant,
              undefined,
              1,
            )
            lastDividerStyle = applyDividerContainerHorizontal(
              colorScheme,
              variant,
              "20%",
            )
            break
        }
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
        <div css={firstDividerStyle} />
        <span css={applyTextStyle(colorScheme, fs)}>{text}</span>
        <div css={lastDividerStyle} />
      </div>
    )
  },
)

DividerWithText.displayName = "DividerWithText"
